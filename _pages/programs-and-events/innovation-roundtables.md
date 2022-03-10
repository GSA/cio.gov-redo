---
title: Council Programs and Events
subtitle: Innovation Roundtables
description: The Innovation Roundtable is designed to connect subject matter experts to focus on the practical applications of innovative technologies in the Federal Government. All discussion will be informal and off-the-record, with the goal of fostering a deeper understanding of the challenges and opportunities facing agency CIOs.
layout: page
permalink: /programs-and-events/innovation-roundtables/
---
<p><a class="text-primary-dark text-bold margin-bottom-2" href="{{ site.baseurl }}/programs-and-events/" style="text-decoration:none;">❮ &nbsp; See all Events</a></p>

## The Vision ##

The Innovation Roundtable is designed to connect subject matter experts to focus on the practical applications of innovative technologies in the Federal Government. All discussion will be informal and off-the-record, with the goal of fostering a deeper understanding of the challenges and opportunities facing agency CIOs.

- Roundtable 1 - Thursday, October 10, 2019: Quantum Computing and Communications
- Roundtable 2 - Thursday, November 14, 2019: Data and Artificial Intelligence
- Roundtable 3 - Thursday, January 16, 2020: User/Customer Experience and Human Centered Design

## The Program ##

The Innovation Roundtable is a series of 2-hour forums. Attendance is limited to the first 20 attendees, and is targeted at CIOs, DCIOs, CTOs, CISOs, and CIO senior advisors. We request that no more than 2 representatives for a single agency RSVP. Roundtables are held at General Services Administration (GSA) headquarters at 1800 F Street NW, Washington, DC. Event schedule below.

## Event Dates ##

{% for events in site.events %}
{% if events.title contains 'Innovation Roundtable' %}

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
      {% if events.external_url %}
        <a class="usa-button usa-button--accent-cool margin-top-1" href="https://{{events.external_url}}">Register to Attend</a>
      {% endif %}


  </div>

{% endif %}
{% endfor %}
