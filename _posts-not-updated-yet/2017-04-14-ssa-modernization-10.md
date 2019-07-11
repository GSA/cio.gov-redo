---
layout: blog
title: Modernizing Federal IT Part 10 - Modernizing with a Buy or Build
date: 2017-04-14
display-date: 14 April 2017
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2017
image:
image-thumbnail: /assets/img/CIO-council-Logo-silver1.png
img-alt: CIO Council Logo
---
_This is the tenth in a series describing how the Social Security Administration is working towards a more modern IT infrastructure._

In the last few posts I’ve been bragging about some successes. To close out my term I’ll try to say something more provocative and discuss how the economics of buy versus build are changing.  Over the last twenty years in the commercial world, there have been very compelling reasons to buy rather than build. First, a pre-built product carries less risk of a failure in development. Note that there are lots of stories around failed implementations of commercial off-the-shelf (COTS), so this advantage can be overstated.

There is also an economic advantage as a company that has built a COTS package can leverage the software over and over again in the market and amortize the cost of R&D across many sales. In other words, it can be less expensive to buy COTS.

The downside is that a COTS product offers, by definition, a common denominator and not a purpose-built, custom application tailored to your specific business process. This downside is mitigated when your business process is more generic. We see great success in areas like accounting, finance, and human resources where companies tend to solve the business problem in similar ways. However, we see less success in building COTS for government where there is a limited number of customers and little market pressure on prices.

Finally, note that over the last twenty years, COTS has implied the installation and configuration of a shrink-wrapped product where “configuration” meant (almost) “no coding required.”

Let me describe how the playing field is changing.

Before I arrived at the agency, we performed a buy versus build analysis for a new system to build and deliver our postal notices. We evaluated the market and selected a very good commercial product and started building a prototype. In the very last step, we turned up the prototype to scale to the volumes of output required at the SSA and the product failed. It just could not scale. We executed a TechStat, ended the prototype, and parted cordially with the vendor folks. The cost of this exercise was considerable, but we did everything right. We bought rather than built and neither the vendor nor the agency could know that the product would not scale until we tried it on our workload.

That is not the important part of this story. The product we selected, like a great many COTS products today, was built upon an open sourced component freely offered by the Apache Foundation. In the course of our prototype development, my technical staff suggested that they could develop a system using the same open source component that would scale up. The cost of trying this was small and so we agreed to prove the concept. Today, we have developed a proof-of-concept and demonstrated that it will scale. This new engine, which is comprised mostly of off-the-shelf open source code, will be the basis for our next large IT Modernization effort aimed to provide a modern communications capability for the SSA.

Let me ask the reader — is our new communications capability going to be a buy or a build? Most of the capability is off-the-shelf. Note that it is not commercial off-the-shelf, it is open source. Still, did we build?

Consider the original value proposition of a “buy.” It involves less risk, but since the core of our new product is open source tried-and-true, the risk of a development failure is very small. It is less cost, but since the core is free the cost of our development effort was the same or less than the cost of trying to configure the vendor product to our specifications. Furthermore, we do not have to pay for a COTS license. Finally, we have a purpose-built custom result.

This trend, for COTS products to be built from open source components, is significant. Nearly every COTS product uses open source code and then the vendor charges the government a commercial license fee. This is not as egregious as it sounds because in a market system where there are competitive pressures, the value of free open source software will be (maybe imperfectly) passed on to the government.

There is another trend that is important. New COTS products expose their software as components just like open source. We are performing market research examining software from several firms that would want us to code our own custom result using their components to reduce the cost and technical risk of development. This is a very powerful approach, but again I would ask — does using these components represent a buy or a build?

As we plan for IT Modernization, every one of our efforts is likely to include either open source or commercial components throughout. Will these efforts be considered risky “builds” or safe “buys?” The line is just not clear anymore.

So I would suggest that every IT Modernization product must consider leveraging existing code to reduce cost and risk. When the heart of a commercial product is open source, we need to ask if the value add of the commercial wrapper is worth the cost or if we can build a bespoke product from the same components for less cost with the same or only slightly more risk. When there is no market for a commercial offering outside of a few government agencies, and therefore no pressure to reduce prices, we need to consider the ongoing costs of that near-monopolistic relationship.

The buy versus build equation is much more complicated now. We need to rethink. Old school shrink wrapped vendors will push us to always “buy.” New age vendors will offer components and ask us to build a little. We cannot knee-jerk to a “buy” and we must allow this sort of “build” to happen. Once we agree that these builds are OK, we need to consider builds that use open source instead of commercial components. We need to be sure that we are not paying commercial fees for free open source code. Finally, we need to be sure that when we buy, we buy products that compete in a market. If we enter into near monopolistic COTS relationships, we will surely pay the price.

#### Social Security IT Modernization Series
* Part 1: [Catching Up and Jumping Ahead]({{site.baseurl}}/2015/12/10/ssa-modernization-1.html)
* Part 2: [The Gravity of Intellectual Property]({{site.baseurl}}/2016/01/19/ssa-modernization-2.html)
* Part 3: [Teasing Apart the Problem]({{site.baseurl}}/2016/03/07/ssa-modernization-3.html)
* Part 4: [Building a Modern Data Foundation]({{site.baseurl}}/2016/03/21/ssa-modernization-4.html)
* Part 5: [Modernizing Software Architecture]({{site.baseurl}}/2016/05/23/ssa-modernization-5.html)
* Part 6: [Agility and Evolving a Minimal Viable Product]({{site.baseurl}}/2016/11/07/ssa-modernization-6.html)
* Part 7: [Modernizing Federal IT Part 7 What Does a Modern Application Look Like]({{site.baseurl}}/2016/11/22/ssa-modernization-7.html)
* Part 8: [The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live]({{site.baseurl}}/2017/01/09/ssa-modernization-8.html)
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* **Part 10: Modernizing with a Buy or Build**
