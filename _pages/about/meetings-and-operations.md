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
-   [Chief Information Security Officer (CISO) Council](https://community.connect.gov/display/Egov/Federal+CISO+Council) **(Connect.gov Login Required)**

> The Federal CISO Council is the principal interagency forum for identifying and recommending strategic high priority IT security initiatives to advise the CIO Council and OMB. The Federal Chief Information Security Officer (CISO) Council was established as primary body for inter-agency CISO collaboration and communication. The Council is led by the Federal CISO (OMB) and the co-chair, an elected member from the Council. The Council's current strategic focuses include:

> -   Identity Management
> -   Comprehensive Risk Assessment & Framework
> -   Vulnerability Response
> -   Shared Services
> -   Performance Metrics

-   [Innovation Committee](https://community.connect.gov/display/Egov/CIO+Council+Innovation+Committee) **(Connect.gov Login Required)**

> The Innovation Committee is committed to providing an open forum for CIO's and improving their knowledge of the language, leading practices, and emerging technologies surrounding innovation. By championing the CIO in the area of innovation CIO's can foster cultural change and growth within their agencies. The Innovation committee strives to educate CIO's on the topic of innovation through:

> -   Roundtables
> -   Labs
> -   Field Trips
> -   Open Forums
> -   Workshops
> -   Academic Lectures

-   [Enterprise Operations Committee ](https://community.connect.gov/x/URp5K)(**Connect.gov Login Required)**

> The Enterprise Operations (E-Ops), Committee focuses on acquisition reform and Federal IT infrastructure through execution of the following policies and initiatives:

> -   Enterprise Architecture (EA) with a focus on Oracle
> -   Secure Mobility Best Practices
> -   Shared Services
> -   Technology Business Management (TBM)
> -   Zero Trust Architecture Initiative

-   [Workforce Committee](https://community.connect.gov/display/Egov/CIO+Council+Workforce+Committee) **(Connect.gov Login Required)**

> The Workforce Committee's agenda encompasses the full employment life cycle: workforce planning, recruitment, and retention and career development. The committee works in partnership with the HR community to develop, implement and communicate strategies to recruit, retain and manage a fully trained and qualified IT workforce, to meet current and future mission requirements. The Workforce Committee is committed to its strategic goal of providing the Federal Government with a cadre of highly capable IT professionals with mission critical competencies to meet agency goals.

### Additional Resources
Other government-only pages for key Council information include:

CIO Council Repository **(Connect.gov Login Required)**\
CIO Council Executive Committee Repository **(Connect.gov Login Required)**

## Meeting Schedule
Below is the current schedule for both Full Council and Executive Committee meetings. CIOs can also review previous meeting agendas and materials **(Connect.gov Login Required)**

*Note: Committees are scheduled to meet from 2:30-3:20 before each Full Council meeting. All Council meetings are currently held virtually.*<br>

**Full Council:**
* **January -** Wednesday, January 24, 2024
* **February -** Wednesday, February 28, 2024
* **March -** Wednesday, March 27, 2024
* **April -** Wednesday, April 24, 2024
* **May -** Wednesday, May 22, 2024
* **June -** Wednesday, June 26, 2024

**CISO Council:**
* **January -** Friday, January 26, 2024
* **February -** Wednesday, February 21, 2024
* **March -** Wednesday, March 20, 2024
* **April -** Wednesday, April 17, 2024
* **May -** Wednesday, May 15, 2024
* **June -** Wednesday, June 19, 2024


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
