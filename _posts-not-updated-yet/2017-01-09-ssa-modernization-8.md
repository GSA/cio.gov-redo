---
layout: blog
title: Modernizing Federal IT Part 8 - The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live
date: 2017-01-09
display-date: 09 January 2017
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2017
image: /assets/img/blog/2017.01.09.ssa.modernization.png
image-thumbnail: /assets/img/blog/2017.01.09.ssa.modernization.png
img-alt: A baked pudding sits on a wood table
---
_This is the eighth in a series describing how the Social Security Administration is working towards a more modern IT infrastructure._

Over the last two years the Social Security Administration (SSA) has worked toward a point where the ideas presented in this series could be implemented. On December 16, we deployed our first newly modernized application, DCPS2.

You may recognize DCPS2 from the earlier blog [here]({{site.baseurl}}/2016/11/07/ssa-modernization-6). This is a restart of a failed attempt to outsource the development of a new disability case processing system to contractors. In 14 months we built a new application from the ground using agile methods. We developed it on a modern programming stack based on node.js using open source components and deployed in the cloud. In 14 months we accomplished, for a fraction of the cost, success that could not be found over the four-plus years with Lockheed Martin and MicroPact in the lead.

This is a huge success. Over the duration, our staff learned a new programming language, learned a new development toolset based on GIT and Jenkins, learned a new database management system, Postgres, and deployed a product. The code rolled out with no– zero — reported bugs.

But this is not just a story about the SSA. This is the case that demonstrates that the federal government can successfully modernize IT infrastructure in a reasonable timeframe for a reasonable cost. This is the pudding, the proof. The next time we work, with the expense of the learning curve behind us, we could cut another 30% off the cost.

And the story could be bigger still. Before undertaking this last attempt, the agency performed a buy vs. build analysis. We determined that we could build a bespoke application, from scratch, specific to our unique government business process, for less cost than the cost of buying and tweaking an off-the-shelf product. We found and have now proved that by using agile methods and open source tools and components, we can build for less.

And bigger still, we have a second disability case business process around case adjudication that requires modernization. This process is publicly visible and therefore a little political. We suspect that the DCPS2 process can be married to the adjudication process, and replicated as the basis for a new adjudication process, in order to significantly improve the productivity of our case workers and judges on the adjudication side of the disability process. In other words, because we own the code, DCPS2 could become the basis for modernizing our determination process end-to-end.

This success story provides a great end to this series on IT modernization. Success fittingly underscores the messages delivered by Federal CIO Tony Scott, President Barack Obama, and many IT-literate members of Congress who have emphasized the importance of fixing our aging federal IT infrastructure. The DCPS2 success is a tribute to Acting Commissioner Colvin, who initiated the turnaround, and a tribute to the strong effort by the DCPS2 development team, both federal employees and contractors (including Lockheed Martin, who made a significant contribution as Leidos). DCPS2 is a tribute to our State partners, who have persevered DCPS1 and can now see a path forward.

The success of DCPS2 also punctuates my stint with this administration. I hope that the blogs in this series have helped a little, here and there. It has been my pleasure to throw these ideas out for your consideration.

#### Social Security IT Modernization Series
* [Part 1: Catching Up and Jumping Ahead]({{site.baseurl}}/2015/12/10/ssa-modernization-1.html)
* [Part 2: The Gravity of Intellectual Property]({{site.baseurl}}/2016/01/19/ssa-modernization-2.html)
* Part 3: [Teasing Apart the Problem]({{site.baseurl}}/2016/03/07/ssa-modernization-3.html)
* Part 4: [Building a Modern Data Foundation]({{site.baseurl}}/2016/03/21/ssa-modernization-4.html)
* Part 5: [Modernizing Software Architecture]({{site.baseurl}}/2016/05/23/ssa-modernization-5.html)
* Part 6: [Agility and Evolving a Minimal Viable Product]({{site.baseurl}}/2016/11/07/ssa-modernization-6.html)
* Part 7: [Modernizing Federal IT Part 7 What Does a Modern Application Look Like]({{site.baseurl}}/2016/11/22/ssa-modernization-7.html)
* **Part 8: The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live**
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* Part 10: [Modernizing with a Buy or Build]({{site.baseurl}}/2017/04/14/ssa-modernization-10.html)
