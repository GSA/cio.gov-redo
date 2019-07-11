---
layout: blog
title: Modernizing Federal IT Part 3 - Teasing Apart the Problem
date: 2016-03-07
display-date: 07 March 2016
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2016
image:
image-thumbnail: /assets/img/CIO-council-Logo-silver1.png
img-alt: CIO Council Logo
---
_This is the 3rd in a series describing how the Social Security Administration is working towards a more modern IT infrastructure._

This post will start to tease out the different technologies that we might modernize. In the previous two posts of this series, we considered how the advance of technology made it imperative that we start modernizing as soon as possible. We also considered how we might get things started by getting gravity on our side. You can see these posts here and here.

At the Social Security Administration, we see the modernization problem in four facets: modernizing the infrastructure, the data architecture, the code, and the business processes. Modernizing the business is a topic that is tangential to modernizing IT that I will tackle separately in a later post. So let us consider the infrastructure, data, and code first. Further, let us set the stage in this post and then dive a little deeper in subsequent posts.

Modernizing the infrastructure means modernizing the stack: the hardware, operating system, middleware, and possibly the program development environment. I know that there are endless debates over the place in IT for legacy systems. I am going to dodge the debate here and just point out that the IT market has clearly, for the time being, selected the x86, LINUX, Web Server foundation as the modern choice for a stack. When I talk about a modern infrastructure, I will be referring to a commodity-based, open source-ish, distributed, scalable, and possibly cloud-based infrastructure.

Modernizing the data architecture means building a data foundation that changes slowly enough to provide a stable base for business functions to be modernized as code. As we detail this topic we will consider what a modern data model looks like and how to effectively architect to support both transactional and analytic use cases.

Modernizing code is the hard part. If we forget about modernizing the business processes and just consider how to get existing processes to run on a modern stack over modern data architecture, we are still left with a very hard problem. We will consider code migration here, and consider methods to extract business logic from old code. We will discuss some programming language choices and ask the question: have we set the right goal if we migrate from a 40-year-old language to a 20-year-old language?

Finally, we will come back to the tension introduced in the first two posts between modernizing organically and incrementally or by a transformative leap. We will talk about some trends that may influence the decision. Note that I do not see a way to resolve this tension completely, but I will share some ideas.

Here we go – considering data first, then code, then infrastructure, then the business.

#### Social Security IT Modernization Series
* Part 1: [Catching Up and Jumping Ahead]({{site.baseurl}}/2015/12/10/ssa-modernization-1.html)
* Part 2: [The Gravity of Intellectual Property]({{site.baseurl}}/2016/01/19/ssa-modernization-2.html)
* **Part 3: Teasing Apart the Problem**
* Part 4: [Building a Modern Data Foundation]({{site.baseurl}}/2016/03/21/ssa-modernization-4.html)
* Part 5: [Modernizing Software Architecture]({{site.baseurl}}/2016/05/23/ssa-modernization-5.html)
* Part 6: [Agility and Evolving a Minimal Viable Product]({{site.baseurl}}/2016/11/07/ssa-modernization-6.html)
* Part 7: [Modernizing Federal IT Part 7 What Does a Modern Application Look Like]({{site.baseurl}}/2016/11/22/ssa-modernization-7.html)
* Part 8: [The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live]({{site.baseurl}}/2017/01/09/ssa-modernization-8.html)
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* Part 10: [Modernizing with a Buy or Build]({{site.baseurl}}/2017/04/14/ssa-modernization-10.html)
