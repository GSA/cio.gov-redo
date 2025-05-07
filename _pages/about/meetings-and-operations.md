---
title: Meetings and Operations
subtitle: How We Work
layout: page
permalink: /about/operations/
description: The CIO Council hosts monthly meetings with CIOs, Chief Information Security Officers, or their designated representatives. Key topics of discussion include CIO Council priorities. 
---
## Operations
The Council holds monthly meetings with CIOs, Chief Information Security Officers (CISO), and their designated representatives to discuss key priorities. Members exchange best practices and address challenges related to IT policy and priorities. Members can also review [previous meeting agendas and materials](https://login.max.gov/cas/login?service=https%3A%2F%2Fcommunity.connect.gov%2Fpages%2Fviewpage.action%3FspaceKey%3DEgov%26title%3DCIO%2BCouncil%2BHome%2BPage) (Connect.gov Login Required) on the CIO Council Home Page.


## CIO Resources
### Committee Pages
-   [Chief Information Security Officer (CISO) Council](https://community.connect.gov/x/JgLbRw) **(Connect.gov Login Required)**

> The Federal CISO Council is the principal interagency forum for identifying and recommending strategic high priority IT security initiatives to advise the CIO Council and OMB. The Federal Chief Information Security Officer (CISO) Council was established as primary body for inter-agency CISO collaboration and communication. The Council is led by the Federal CISO (OMB) and the co-chair, an elected member from the Council. The Council's current strategic focuses include:

> -   Identity Management
> -   Comprehensive Risk Assessment & Framework
> -   Vulnerability Response
> -   Shared Services
> -   Performance Metrics

-   [Digital Experience (DX) Council](https://community.connect.gov/display/Egov/Digital+Experience+Council) **(Connect.gov Login Required)**

> The creation of the DX Council was required by Office of Management and Budget (OMB) Memorandum M-23-22 – Delivering a Digital-First Public Experience.

> A strong digital experience is crucial for Federal agencies to fulfill their missions and best serve the American public. The public expects and deserves a simple, seamless and secure experience when interacting with government websites and digital services. Improving these interactions is a significant opportunity to make it easier to access the information and services that millions use and count on each and every day. Achieving this requires coordination across Federal agencies, programs, and the various functions involved in delivering digital experiences. The DX Council will play a critical role in coordinating government-wide efforts and assisting agencies in delivering digital experiences that meet the public’s needs and expectations.

### Additional Resources
Other government-only pages for key Council information include:

[CIO Council Repository](https://community.connect.gov/x/KYfzIQ) **(Connect.gov Login Required)**\
[CIO Council Executive Committee Repository](https://community.connect.gov/x/8wkGJg) **(Connect.gov Login Required)**
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
