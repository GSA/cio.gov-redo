---
title: Council Programs and Events
subtitle: CIO Bootcamp
layout: page
permalink: /programs-and-events/cio-bootcamp/
---
 <p><a class="text-primary-dark text-bold margin-bottom-2" href="{{ site.baseurl }}/programs-and-events/" style="text-decoration:none;">❮ &nbsp; See all Events</a></p>

# The Vision

Placeholder.

# The Program

Placeholder.

## Past and Upcoming Events

{% for events in site.events %}
{% if events.title contains 'Bootcamp' %}

  <div class="padding-bottom-3 margin-top-1">

      <img class="tablet:float-left width-15 padding-right-2 padding-top-0 padding-bottom-2" style="width:150px;height:150px;object-fit:cover;" src="{{ site.baseurl }}/assets/images/blog/{{ events.image }}" alt="{{ events.img-alt }}" />

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
