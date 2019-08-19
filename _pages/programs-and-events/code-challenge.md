---
title: Council Programs and Events
subtitle: CIO Code Challenge
layout: page
description: The CIO Council partnered with technology hiring experts to pilot the first interagency code challenge.
summary: The federal government must attract top IT talent to modernize federal IT systems and deliver the most secure and effective services to the American people. To recruit the best qualified IT talent, in the most timely and cost-effective manner, we need to transform the federal IT hiring process. The CIO Council partnered with technology hiring experts to pilot the first interagency code challenge. Code challenges are used extensively in the private sector to source and pre-qualify IT talent, and they are viewed as an industry best practice.

permalink: /programs-and-events/codechallenge/
---

<p><a class="text-primary-dark text-bold margin-bottom-2" href="{{ site.baseurl }}/programs-and-events/" style="text-decoration:none;">❮ &nbsp; See all Events</a></p>

## The Vision
The federal government must attract top IT talent to modernize federal IT systems and deliver the most secure and effective services to the American people. To recruit the best qualified IT talent, in the most timely and cost-effective manner, we need to transform the federal IT hiring process.

The CIO Council partnered with technology hiring experts to pilot the first interagency code challenge. Code challenges are used extensively in the private sector to source and pre-qualify IT talent, and they are viewed as an industry best practice.

## The Program

The #CIOCode Challenge pilot program began May 6 and ended August 7th. It included three separate online skill assessments, which ran for one month each.

- **Challenge 1:** The **Front End challenge** tested HTML, CSS, JavaScript, and core UX/UI concepts.
- **Challenge 2:** The **Core CS challenge** tested problem-solving skills, coding knowledge, and fundamentals using a coding language of the participant's choice.
- **Challenge 3:** The **Dev/Ops challenge** tested technical experience (e.g., software development or network engineering) and software development operational best practices.

The results of the challenge may be shared to refer coding challenge participants, including current and former Federal employees, to Federal agencies as applicants. Participants are then considered for employment, transfer, reassignment, reinstatement, or promotion.

## Event Dates

{% for events in site.events %}
{% if events.title contains 'Code' %}

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
        {% if events.permalink %}<a href="{{ site.baseurl }}{{ events.permalink }}">Read more</a>
        {% endif %}
      </p>

  </div>

{% endif %}
{% endfor %}
