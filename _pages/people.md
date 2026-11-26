---
title: "People"
permalink: /people/
author_profile: true

# Filter buttons, in the order they appear.
# Groups marked "archive: true" get their own headed section below the main grid.
# The people themselves live in _data/people.yml — edit that file to add/remove people.
groups:
  - id: academic
    title: "Faculty"
  - id: affiliated
    title: "Affiliated Academics"
  - id: researcher
    title: "Researchers"
  - id: administrative
    title: "Administrative"
  - id: doctoral
    title: "Doctoral Researchers"
  - id: honorary
    title: "Honorary and Visiting"
  - id: past-faculty
    title: "Past Faculty"
    archive: true
  - id: alumni
    title: "Alumni"
    archive: true
---

<style>
  .people-filters { margin-bottom: 1.5em; }
  .people-filters .btn { margin: 0 0.25em 0.5em 0; }
  .people-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 1.5em;
    margin-bottom: 2em;
  }
  .person { text-align: center; }
  .person img {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }
  .person { line-height: 1.3; }
  .person strong { display: block; margin-top: 0.5em; font-size: 0.8em; }
  .person a strong { color: inherit; }
  .person a { text-decoration: none; }
  .person .talk-title { display: block; font-size: 0.7em; color: #6f777d; margin-top: 0.15em; }
  .person-photo { display: block; overflow: hidden; }
  .person-photo img { transition: opacity 0.2s ease; }
  .person-photo:hover img, .person-photo:focus img { opacity: 0.8; }
  .person a:hover strong, .person a:focus strong { text-decoration: underline; }
  .person-link { display: inline-block; margin-top: 0.3em; font-size: 0.65em; }
  .person-link:hover, .person-link:focus { text-decoration: underline; }
  @media (max-width: 480px) {
    .people-grid { grid-template-columns: repeat(auto-fill, minmax(110px, 1fr)); }
  }
</style>

<div class="people-filters">
  <button class="btn btn--primary filter-button" data-filter="all">All</button>
  {% for g in page.groups %}
  <button class="btn btn--inverse filter-button" data-filter="{{ g.id }}">{{ g.title }}</button>
  {% endfor %}
</div>

{% assign current = site.data.people %}
{% for g in page.groups %}{% if g.archive %}
{% assign current = current | where_exp: "p", "p.group != g.id" %}
{% endif %}{% endfor %}

<div class="people-grid" markdown="0">
{%- for p in current -%}
{%- include person-card.html p=p -%}
{%- endfor -%}
</div>

{% for g in page.groups %}{% if g.archive %}
{% assign members = site.data.people | where: "group", g.id %}
<div class="people-section" data-section="{{ g.id }}" markdown="0">
<h2>{{ g.title }}</h2>
<div class="people-grid">
{%- for p in members -%}
{%- include person-card.html p=p -%}
{%- endfor -%}
</div>
</div>
{% endif %}{% endfor %}

<script>
  (function () {
    var buttons = document.querySelectorAll('.filter-button');
    var people = document.querySelectorAll('.person');
    var sections = document.querySelectorAll('.people-section');

    function filterTeam(type) {
      people.forEach(function (el) {
        el.style.display = (type === 'all' || el.dataset.group === type) ? '' : 'none';
      });
      sections.forEach(function (sec) {
        sec.style.display = (type === 'all' || sec.dataset.section === type) ? '' : 'none';
      });
      buttons.forEach(function (b) {
        var on = b.dataset.filter === type;
        b.classList.toggle('btn--primary', on);
        b.classList.toggle('btn--inverse', !on);
      });
    }

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { filterTeam(b.dataset.filter); });
    });
  })();
</script>
