---
title: "Online Safety"
excerpt: "This research areas relates to online safety"
authors:
- Mark Warner
---

This research theme relates to online safety. Current projects related to online safety are detailed below, but please also view past projects. 

## Current research projects

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
{% for post in site.projects %}
    {% if post.themes contains "safety" %}
        {% if post.endDate %}
         {% capture posttime %}{{post.endDate | date: '%s'}}{% endcapture %}
            {% if posttime >= nowunix %}
                {% include archive-single-project.html %}
            {% endif %}
     {% else %}
         {% include archive-single-project.html %}
        {% endif %}
    {% endif %}
{% endfor %}

## Completed research projects

{% capture nowunix %}{{'now' | date: '%s'}}{% endcapture %}
{% for post in site.projects %}
    {% if post.themes contains "safety" %}
        {% if post.endDate %}
            {% capture posttime %}{{post.endDate | date: '%s'}}{% endcapture %}
            {% if posttime < nowunix %}
                {% include archive-single-project.html %}
            {% endif %}
        {% else %}
            {% include archive-single-project.html %}
        {% endif %}
    {% endif %}
{% endfor %}