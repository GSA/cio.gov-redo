---
title: Meetings and Operations
subtitle: How We Work
layout: page
permalink: /about/operations/
description: The CIO Council hosts monthly meetings with CIOs, Chief Information Security Officers, or their designated representatives. Key topics of discussion include CIO Council priorities. 
---
## Operations
The CIO Council hosts monthly meetings with CIOs, Chief Information Security Officers (CISOs), or their designated representatives. Key topics of discussion include CIO Council priorities. Members also discuss best practices and how to overcome hurdles related to [IT policy and priorities]({{ site.baseurl }}/policies-and-priorities/).

## CIO Resources
### Committee Pages
There are four committees under the CIO Council that inform the council on various issues. Each committee has its own government-only website for sharing updates, materials, and announcements. These include:
* [Chief Information Security Officer (CISO) Council](https://community.max.gov/display/Egov/Federal+CISO+Council) **(OMB MAX Login Required)**
* [Innovation Committee](https://community.max.gov/display/Egov/CIO+Council+Innovation+Committee) **(OMB MAX Login Required)**
* [Enterprise Operations Committee](https://www.cio.gov/about/members-and-leadership/e-ops/) **(OMB MAX Login Required)**
* [Workforce Committee](https://community.max.gov/display/Egov/CIO+Council+Workforce+Committee) **(OMB MAX Login Required)**

### Additional Resources
Other government-only pages for key Council information include:
* [CIO Council Repository](https://community.max.gov/display/Egov/CIO+Council+Home+Page) **(OMB MAX Login Required)**
* [CIO Council Executive Committee Repository](https://community.max.gov/display/Egov/CIO+Council+Executive+Committee) **(OMB MAX Login Required)**

## Meeting Schedule
Below is the current schedule for both Full Council and Executive Committee meetings. CIOs can also review [previous meeting agendas and materials](https://community.max.gov/display/Egov/CIO+Council+Previous+Meeting+Documents) **(OMB MAX Login Required)**.

*Note: Committees are scheduled to meet from 2:30-3:20 before each Full Council meeting. All Council meetings are currently held virtually.*<br>

*Holiday Schedule update*

**Full Council:**
* **September -** Wednesday, September 28, 2022
* **October -** Wednesday, October 26, 2022
* **November -** Wednesday, November 16, 2022
* **December -** Wednesday, December 7, 2022

**CISO Council:**
* **September -** Wednesday, September 21, 2022
* **October -** Wednesday, October 19, 2022
* **November -** Wednesday, November 9, 2022
* **December -** Wednesday, December 6, 2022* 10AM-2PM (Strategy Session)
<br>
{% for events in site.events %}
{% if events.title contains 'CIO Council Meeting' %}

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
