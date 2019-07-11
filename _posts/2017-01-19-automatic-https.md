---
layout: blog
title: Automatic HTTPS Enforcement for New Executive Branch .Gov Domains
date: 2017-01-19
display-date: 19 January 2017
author: Marina Fox & Eric Mill
tags: cybersecurity 2017
image:
image-thumbnail: /assets/img/CIO-council-Logo-silver1.png
img-alt: CIO Council Logo
---
HTTPS is a necessary baseline for security on the modern web. Non-secure HTTP connections lack integrity protection, and can be used to attack citizens, foreign nationals, and government staff. HTTPS provides increased confidentiality, authenticity, and integrity that mitigate these attacks.

In June 2015, the White House required all new federal web services to support and enforce HTTPS connections over the public internet, and for agencies to migrate existing web services to HTTPS by the end of calendar year 2016. GSA’s Office of Government-wide Policy has supported the growth of HTTPS in the federal government by providing a [public HTTPS](https://pulse.cio.gov/) monitoring dashboard and thorough policy guidance and technical assistance.

Federal agencies have made very significant progress towards that goal, to the point that [federal use of HTTPS](https://18f.gsa.gov/2017/01/04/tracking-the-us-governments-progress-on-moving-https/) now outpaces the private sector.

This year, GSA will be taking another significant step forward in making secure communication the default for federal web services by automatically enforcing HTTPS in modern web browsers for newly issued executive branch .gov domains and their subdomains.

As new executive branch domains are registered, the [DotGov](https://www.dotgov.gov/) program will submit them to web browsers for “preloading.” After submission, it can take up to three months before preloading takes effect in modern web browsers. The change will be introduced to dotgov customers when they register a new domain under the Executive Branch, and will not affect existing or renewed domains.

Once preloading is in effect, browsers will strictly enforce HTTPS for these domains and their subdomains. Users will not be able to click through certificate warnings. Any web services on these domains will need to be accessible over HTTPS in order to be used by modern web browsers.

GSA provides extensive guidance on HTTPS deployment to agencies, and encourages .gov domain owners to obtain low cost or free certificates trusted by the general public. In our experience, more expensive certificates do not offer more security value to service owners, and automatic deployment of free certificates can significantly improve service owners’ security posture.

GSA plans to introduce this HTTPS preloading change in the spring of 2017. DotGov domain customers will be notified by the Gov Domain Registrar via email 30 days before the change goes in effect.

For more information on preloading, please read 18F’s blog post on the first preloaded .gov domains, and GSA’s HTTPS policy support article on the topic.

Some important notes:
* Executive agencies do not have to do any work to be in compliance, other than ensuring that HTTPS is supported on their web services deployed to any newly issued .gov domains.
* This change only affects clients that support HTTP Strict Transport Security (HSTS), which is generally limited to modern web browsers. Specialized HTTP clients (such as cURL or HTTP standard libraries) should generally not be affected by default.
* This change will affect all subdomains of newly registered executive .gov domains. This includes intranet websites, if they are deployed to subdomains of publicly registered .gov domains. Using plain HTTP for intranet websites is not secure and is discouraged, but can still be achieved by using private domain names that only resolve inside the intranet.

GSA’s DigitalGov University and 18F teams have partnered to produce three detailed video presentations on HTTPS:

* [An Introduction to HTTPS](https://www.youtube.com/watch?v=d2GmcPYWm5k) (basic, a general introduction for anyone)
* [Implementing HTTPS](https://www.youtube.com/watch?v=rnM2qAfEG-M) (advanced, more technical detail)
* [Migrating to HTTPS](https://www.youtube.com/watch?v=X5H8JRULDOo) (advanced, focused on HSTS, certificates, and mixed content)
