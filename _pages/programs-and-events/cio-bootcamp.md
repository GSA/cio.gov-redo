---
title: Council Programs and Events
subtitle: CIO Bootcamp & eXchange
layout: page
permalink: /programs-and-events/cio-bootcamp/
description: The CIO Bootcamp & eXchange event brings together new and seasoned CIOs, CISOs, and their Deputies. The goal is to help agency IT leadership learn more about the CIO Council and how to get involved in advancing Council priorities.
---
 <p><a class="text-primary-dark text-bold margin-bottom-2" href="{{ site.baseurl }}/programs-and-events/" style="text-decoration:none;">❮ &nbsp; See all Events</a></p>

## The Vision ##

The CIO Bootcamp & eXchange event brings together new and seasoned CIOs, CISOs, and their Deputies. The goal is to help agency IT leadership learn more about the CIO Council and how to get involved in advancing Council priorities.

## The Program ##

This full day event will be held on Tuesday, October 29th, at the U.S. Department of Education. The Bootcamp will be broken in two half-day agendas.
- During the first half of the day, *new* CIOs, DCIOs, CISOs, and DCISOs will discuss the CIO Council priorities, committee work, communities of practice, and current work groups.
- During the second half of the day, *all* CIOs, DCIOs, CISOs, and DCISOs will come together to discuss common hurdles, share best practices, and envision future priorities.

## Event Dates ##

{% for events in site.events %}
{% if events.title contains 'Bootcamp' %}

  <div class="padding-bottom-3 margin-top-1">

      <img class="tablet:float-left width-15 padding-right-2 padding-top-0 padding-bottom-2" style="width:150px;height:150px;object-fit:cover;" src="{{ site.baseurl }}/assets/images/events/{{ events.image }}" alt="{{ events.img-alt }}" />

      <p class="card-tag">
        {% if events.start-date %}
        {{ events.start-date | date: '%a, %b %d, %y'}} -
        {% endif %}
        {{ events.end-date | date: '%a, %b %d, %y' }}
      </p>

       <p class="text-primary-darker font-serif-lg text-bold">
        {% if events.permalink %}
        <a class="text-no-underline" href="{{ site.baseurl }}{{ events.permalink }}">{{ events.title }}</a>
        {% else %}
        {{ events.title }}
        {% endif %}
      </p>

      <p class="">{{ events.overview | truncate: 200 }}
        {% if events.permalink %}<a href="{{ site.baseurl }}{{ events.permalink }}">>Read more about {{ events.title}}</a>
        {% endif %}
      </p>

  </div>

{% endif %}
{% endfor %}
