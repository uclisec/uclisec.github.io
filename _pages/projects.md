---
title: "InfoSec Research Group Projects"
permalink: /projects/
author_profile: true
---

<p>Examples of projects currently being carried out in the UCL Information Security Group are listed below.
  Highlights of projects that have been completed can be found in the listing of <a href="/previous-projects">previous projects</a>.</p>

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
{% for post in site.projects %}
  {% if post.endDate %}
    {% capture posttime %}{{post.endDate | date: '%s'}}{% endcapture %}
    {% if posttime >= nowunix %}
      {% include archive-single-project.html %}
    {% endif %}
  {% else %}
    {% include archive-single-project.html %}
  {% endif %}
{% endfor %}

