---
layout: blog
title: Modernizing Federal IT Part 7 - What Does a Modern Application Look Like?
date: 2016-11-22
display-date: 22 November 2016
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2016
image: /assets/img/blog/2016.11.22.ssa.modernization.png
image-thumbnail: /assets/img/blog/2016.11.22.ssa.modernization.png
img-alt: Image of a digital globe on a iPad
---
_This is the seventh in a series describing how the Social Security Administration is working towards a more modern IT infrastructure._

We have spent some time talking about how to modernize legacy applications, but no time describing what a modern application looks like. In this post we will outline the characteristics of a modern application as a product, that can be deployed in the Cloud, built using modern software engineering techniques.

Consider this: the reason that our applications gather technical debt and become a legacy is because we do not keep them up to date. We think of application development as a project with a relatively short duration and an end. Once we get to the end we put the application into maintenance mode and maintenance is like life-support – it is the absolute minimum effort required to keep the application running.

We should consider these applications as if we were a vendor with products that must be continually refreshed to retain our customers. When we buy commercial products we typically pay an annual 20% support fee. Some of this provides maintenance; bug fixes and help desk support. Some of this is pure profit for the vendor. However, much of this fee is used to develop the next generation of the product. Annually, agencies should be spending 20% of the initial cost to build a new application to enrich it.  If we spend $50M over two years to build a new application, we should spend $10M annually every year to extend and enhance it. This is not O&M; it is new development in support of a program of continuous improvement. This will slow the accrual of technical debt and extend the life of the product.

Note that this product approach lends itself to agile methods. In agile we continually add new feature requests as user stories into a backlog. As long as the benefit associated with the backlog is greater than the 20% per year cost then there is cost/benefit justification.

Next, a modern product should be capable of fully utilizing the Cloud. Let me be clear that this does not mean that a ten-year-old 3-tiered application that is deployed in the Cloud is modern. It does not mean that a monolithic batch-oriented COBOL application redeployed as a monolithic batch-oriented JAVA application is modern. A modern application must be built using modern design principles and an architecture that allows the application to be scalable across a cluster of server nodes. The Cloud is a scalable cluster of server nodes.

A modern cloud application uses architectural concepts that allow it to be elastic in the cloud. Elasticity means that the application can easily and dynamically add new servers as demand for the services grows, and dynamically return servers as the demand wanes. A modern application is cloud-aware, not just deployed in the cloud.

Note, if you are building applications to be deployed in the cloud, then you should be well aware of the advantages of containers. [Here](http://www.cio.com/article/2924995/enterprise-software/what-are-containers-and-why-do-you-need-them.html) is a CIO-level introduction for your information. Containers should be the target for any new application development project starting today.

This leads to the last topic. A modern application more-or-less follows the edicts outlined in the Twelve-Factor App manifesto. I will not go into the geeky details of these factors here, but will point the reader to the details [here](https://12factor.net/). These edicts should be known to every developer as they represent the best thinking in how to design and build modern applications. In many respect this is the most important topic in this blog. If your developers build to these twelve concepts, then the result will be extensible modern applications that will easily deploy in containers and in the cloud.

IT Modernization requires a target and I suggest that we need to aim for modern applications that can fully utilize the benefits of cloud-computing that are developed as products. With this in mind CIOs should be able to start preparing their organization for the IT Modernization efforts coming.

#### Social Security IT Modernization Series
* [Part 1: Catching Up and Jumping Ahead]({{site.baseurl}}/2015/12/10/ssa-modernization-1.html)
* [Part 2: The Gravity of Intellectual Property]({{site.baseurl}}/2016/01/19/ssa-modernization-2.html)
* Part 3: [Teasing Apart the Problem]({{site.baseurl}}/2016/03/07/ssa-modernization-3.html)
* Part 4: [Building a Modern Data Foundation]({{site.baseurl}}/2016/03/21/ssa-modernization-4.html)
* Part 5: [Modernizing Software Architecture]({{site.baseurl}}/2016/05/23/ssa-modernization-5.html)
* Part 6: [Agility and Evolving a Minimal Viable Product]({{site.baseurl}}/2016/11/07/ssa-modernization-6.html)
* **Part 7: Modernizing Federal IT Part 7 What Does a Modern Application Look Like**
* Part 8: [The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live]({{site.baseurl}}/2017/01/09/ssa-modernization-8.html)
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* Part 10: [Modernizing with a Buy or Build]({{site.baseurl}}/2017/04/14/ssa-modernization-10.html)
