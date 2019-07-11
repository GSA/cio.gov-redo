---
layout: blog
title: Modernizing Federal IT Part 1 - Catching Up and Jumping Ahead
date: 2015-12-10
display-date: 10 December 2015
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2015
image:
image-thumbnail: /assets/img/CIO-council-Logo-silver1.png
img-alt: CIO Council Logo
---
_This post is the first in a series of entries from Social Security Administration CIO Rob Klopp that will consider issues associated with modernizing the US Federal IT infrastructure._

First… here is a little about me. I came to the Social Security Administration (SSA) in January of 2015 as the CTO and became the CIO a couple of months ago. I was invited to government service as part of the President’s US Digital Services (USDS) initiative after many years working in California’s Silicon Valley. I have a technical background and you can read about some of my technical ideas at my Database Fog Blog (here).

To start, let us consider the modernization problem from a high level. Figure 1 is designed to outline the problem. The blue curve represents the ability of a hypothetical Federal agency to adopt technology. The green curve represents the ability of a hypothetical Fortune 500 firm to adopt technology. The technology gap between these curves represent the problem confronting a Federal CIO; we believe that we must catch up to the Fortune 500.

![IT modernization chart with 3 curves]({{site.baseurl}}/assets/img/blog/2015.12.10.ssa.modernization.png)

Note on the curves that in the late 1970’s and early 1980’s, the Federal space, and especially the SSA, was on a par or even a little ahead of the Fortune 500. In that timeframe, the SSA was aggressive in developing systems and databases to store information. These systems pushed the state of the art. They represented Big Data in the 1980’s.

Unfortunately, the systems of the 1980’s, once developed and stable, became stagnant. Today they represent a significant technical debt. SSA’s core systems are today run on 60 million lines of COBOL and on another 1 million lines of Assembler language. Much of this code was developed long ago, before programmers carefully structured code to reduce the cost of maintenance. The mainframe languages, development, and operating environment are no longer widely taught in our university systems. The Federal staff who developed and maintained these systems are retiring. As a result, the interest payments on this 30-year-old technical debt are compounding and in the next five years we could face a crisis keeping the systems that execute the SSA mission running.

Closing the gap between Government IT and Commercial IT is critically important. However, closing that gap could be the wrong target.

Consider the orange curve… representing not technology adoption curve but technology advancement. You can see there the gap that haunts the CIOs of the Fortune 500. Technology is advancing faster than even the Fortune 500 can adopt it. It is this gap that start-up companies exploit to put the Fortune 500 out of business by jumping straight onto the technology curve.

Start-ups can make this jump because they are not encumbered by technical debt or by a requirement to sustain an existing customer base. They do not attempt to catch-up… they jump. If their jump succeeds, they make companies on an incremental growth path completely irrelevant.

Now consider the red dashed curve. This depicts the ambition of most Federal CIOs: matching the IT prowess of the Fortune 500. Consider the steepness of this dashed line. It is truly ambitious. But if a most-amazing Federal CIO managed to bridge this gap she-or-he would find that their agency has actually lost ground to technology.

Federal agencies are unlikely to go out of business. But the technology gaps represented here could make Federal agencies irrelevant. The most amazing applications today… pick your favorite: Uber or Siri or Facebook… will be outdated in five years. What will the public think of Federal agencies that are still rolling out web services with electronic forms in 2020? Not much, I suspect.

This is the topic I’ll consider in the blog posts to follow… how might the Federal government catch up in IT. I’ll discuss in detail how the SSA is addressing the problem. I’ll also be discussing buy versus build options, techniques to modernize old code, initiatives to develop a modern infrastructure, and jumping onto the technology curve.

I hope you enjoy the series and look forward to your comments.

#### Social Security IT Modernization Series
* **Part 1: Catching Up and Jumping Ahead**
* Part 2: [The Gravity of Intellectual Property]({{site.baseurl}}/2016/01/19/ssa-modernization-2.html)
* Part 3: [Teasing Apart the Problem]({{site.baseurl}}/2016/03/07/ssa-modernization-3.html)
* Part 4: [Building a Modern Data Foundation]({{site.baseurl}}/2016/03/21/ssa-modernization-4.html)
* Part 5: [Modernizing Software Architecture]({{site.baseurl}}/2016/05/23/ssa-modernization-5.html)
* Part 6: [Agility and Evolving a Minimal Viable Product]({{site.baseurl}}/2016/11/07/ssa-modernization-6.html)
* Part 7: [Modernizing Federal IT Part 7 What Does a Modern Application Look Like]({{site.baseurl}}/2016/11/22/ssa-modernization-7.html)
* Part 8: [The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live]({{site.baseurl}}/2017/01/09/ssa-modernization-8.html)
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* Part 10: [Modernizing with a Buy or Build]({{site.baseurl}}/2017/04/14/ssa-modernization-10.html)
