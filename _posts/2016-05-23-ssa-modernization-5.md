---
layout: blog
title: Modernizing Federal IT Part 5 - Modernizing Software Architecture
date: 2016-05-23
display-date: 23 May 2016
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2016
image:
image-thumbnail: /assets/img/CIO-council-Logo-silver1.png
img-alt: CIO Council Logo
---
_This is the fifth in a series describing how the Social Security Administration is working towards a more modern IT infrastructure._

In the next three posts we will consider the problem of modernizing old legacy software. In this post we will start a discussion about why modernizing software is important and what is most important to think about first. In the next post we’ll consider how to go about modernization; and in the last post we will discuss buy vs build.

To state the bottom line up front – the modernization issue is not about COBOL. It is about building software that takes full advantage of the economics of a modern hardware infrastructure. It is about architecture, not about a programming language.

Modern software is architected to run over a stack that can be distributed across a cluster of servers. It is designed so that each layer of the stack and so that every business application can be distributed and deployed and scaled across a cluster of servers.

Legacy software was architected to optimize performance on a single large (mainframe) server. When we designed legacy systems we worked to eliminate every extraneous use of compute resources because compute was expensive. We built monolithic business applications to eliminate as far as possible the overhead of reaching across layers of the stack and across systems boundaries. We built giant programs and linked all of the parts into a single monolithic package and we then deployed all of the components on a single server. When we needed fault tolerance we built a mirror image of the monolith and synced the two images.

Today we deploy applications and the associated stack across many tiers, n-tiers, running on very inexpensive commodity servers. We use compute indiscriminately because it costs almost nothing (and with cloud computing it will truly approach $0, but more on that in a later post). To take advantage of this cloudy distributed platform we architect software in smaller pieces that interplay across a cluster. To provide fault tolerance we build software to survive the failure of a single server in the cluster. The result of this new architecture are applications that use DevOps to heal themselves and (almost) never go down. They (almost) never suffer from a shortage of compute as they dynamically scale across a server cluster or across all of the servers in a cloud. Because applications can tolerate the failure of a server, cyber-security is enhanced. If you suspect that something bad has infected a server, even if it is the vaguest of suspicions, your cyber-defenses can kill the server and let the application recover without affecting service levels to your business. Best of all, the cost of running these magic, self-healing, scalable, distributed applications decreases with time. They ride Moore’s Law in a way that large monolithic applications cannot.

Now back to the issue at hand. To take full advantage of these features and economics we have to architect applications differently. We have to deploy the tiers in our stack across servers and we have to develop business applications comprised of small distributed piece-parts that can run anywhere. This is not as hard as it sounds if we develop applications using modern tools and techniques. In fact, it is not very much harder than building a new monolithic application. You can do it using modern architectures such as those outlined in the twelve factor app manifesto (see here) and you can do it using a modern, DevOps-oriented, continuous software development environment.

Over the last year we have developed just such an environment at the SSA and this sets us up to start re-architecting our legacy software. We do not think that going from COBOL and assembler to JAVA or .Net or Ruby on Rails is the whole answer. Going from COBOL to JAVA trades a 40 year old programming language for a 20 year old programming language. There has to be more accomplished and that more is about architecture.

So let me restate this one last time: modernizing legacy software is not about rewriting old applications in a modern language. It is not about converting an old monolithic software architecture in COBOL into a monolithic software architecture in JAVA. It is about getting to a modern distributed software architecture that can take full advantage of a cluster of servers and take full advantage of the very large cluster that is a cloud. It is about giving up the quest for a perfectly compute-efficient application to quest for a more fault-tolerant, scalable, secure inexpensive application.

#### Social Security IT Modernization Series
* Part 1: [Catching Up and Jumping Ahead]({{site.baseurl}}/2015/12/10/ssa-modernization-1.html)
* Part 2: [The Gravity of Intellectual Property]({{site.baseurl}}/2016/01/19/ssa-modernization-2.html)
* Part 3: [Teasing Apart the Problem]({{site.baseurl}}/2016/03/07/ssa-modernization-3.html)
* Part 4: [Building a Modern Data Foundation]({{site.baseurl}}/2016/03/21/ssa-modernization-4.html)
* **Part 5: Modernizing Software Architecture**
* Part 6: [Agility and Evolving a Minimal Viable Product]({{site.baseurl}}/2016/11/07/ssa-modernization-6.html)
* Part 7: [Modernizing Federal IT Part 7 What Does a Modern Application Look Like]({{site.baseurl}}/2016/11/22/ssa-modernization-7.html)
* Part 8: [The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live]({{site.baseurl}}/2017/01/09/ssa-modernization-8.html)
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* Part 10: [Modernizing with a Buy or Build]({{site.baseurl}}/2017/04/14/ssa-modernization-10.html)
