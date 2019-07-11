---
layout: blog
title: Modernizing Federal IT Part 4 - Building a Modern Data Foundation
date: 2016-03-21
display-date: 21 March 2016
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2016
image:
image-thumbnail: /assets/img/CIO-council-Logo-silver1.png
img-alt: CIO Council Logo
---
_This is the fourth in a series describing how the Social Security Administration is working towards a more modern IT infrastructure._

In this post we will consider how to develop a modern data architecture to underpin the modernization of your code base.

Systems developed before the year 2000 were often built on application-specific data models. Today we build applications that more-or-less adhere to an enterprise data model. This move from modeling data in an application context, which created stovepipes, into data modeled into an enterprise context is what we consider the foundation of a modern data architecture.

Systems developed even earlier, before 1990, were built before relational databases became the norm. The legacy of these systems is data that is not normalized and that uses application-specific keys to identify records. Normalizing these stovepipes into a subject-oriented enterprise model requires a fair amount of effort, but the result is data that is integrated and easy-to-use. Easy-to-use translates into reduced software development costs and integrated translates into better business applications.

Note that there are lots of applications built pre-1990 that were semi-modernized and semi-normalized to run in relational databases but that were not re-architected into a modern subject-oriented, enterprise context. So while they are relational they are not modern and there is a technical debt still to be paid.

There is a great example of this at the SSA. Our original systems were tape-based; there was no direct access storage available for files as large as our. As a result all of our systems were developed to process file sequentially. Every night we read in 500 reels of tape and wrote out 500 updated reels. When direct access storage devices (DASD in mainframe-speak) came along there was no file system that could support putting all of this data online, so we built one from scratch. Since we could not afford to rewrite all of the applications we just passed on this technical debt and built an API that let the original code “believe” that it was still talking to tape.

Please note that this theme, we did not have the budget for a rewrite so we passed on the debt, reoccurs throughout this series on IT modernization. The fact of this technical debt and of the inability to fund the effort to retire that debt makes the argument for the President’s $3.1B IT Modernization Fund (more here) which we strongly support.

Back to the SSA story. Now we have sequential processes lashed to a proprietary file system that mimics tape but provides the performance enhancement of reading from disk. Many years later when databases were conventional we decided to retire the technical debt associated with running on our own file system, so we built an API that masked the previous API from “seeing” that data was now stored in an RDBMS and retired our home-grown file system (or very nearly retired it… Sigh). The end result is data stored in a relational database is an un-integrated application-specific context, sort-of normalized, that still looks like tape to the legacy business applications. These efforts to retire some technical debt without the ability to execute a proper modernization program represent what can be done around the edges and I suspect that most Federal agencies have similar stories and similar legacy systems.

With this background in place, at the SSA we are starting on a “data first” approach to modernization. While data changes, the rate of change is much slower than the rate software changes. We want to develop a stable foundation before we start modernizing the code base so we are building a new data architecture with an enterprise-wide customer subject area that will pull all of the data we store about our customers into an integrated whole. This project started a year ago and will deploy into production in December 2016.

Data first and a modern data foundation seems to be the right starting point. In the next posts we will consider several options on how to leverage this start and to begin modernizing the code base.

#### Social Security IT Modernization Series
* Part 1: [Catching Up and Jumping Ahead]({{site.baseurl}}/2015/12/10/ssa-modernization-1.html)
* Part 2: [The Gravity of Intellectual Property]({{site.baseurl}}/2016/01/19/ssa-modernization-2.html)
* Part 3: [Teasing Apart the Problem]({{site.baseurl}}/2016/03/07/ssa-modernization-3.html)
* **Part 4: Building a Modern Data Foundation**
* Part 5: [Modernizing Software Architecture]({{site.baseurl}}/2016/05/23/ssa-modernization-5.html)
* Part 6: [Agility and Evolving a Minimal Viable Product]({{site.baseurl}}/2016/11/07/ssa-modernization-6.html)
* Part 7: [Modernizing Federal IT Part 7 What Does a Modern Application Look Like]({{site.baseurl}}/2016/11/22/ssa-modernization-7.html)
* Part 8: [The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live]({{site.baseurl}}/2017/01/09/ssa-modernization-8.html)
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* Part 10: [Modernizing with a Buy or Build]({{site.baseurl}}/2017/04/14/ssa-modernization-10.html)
