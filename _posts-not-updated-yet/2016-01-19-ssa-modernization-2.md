---
layout: blog
title: Modernizing Federal IT Part 2 - The Gravity of IP
date: 2016-01-19
display-date: 19 January 2016
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2016
image:
image-thumbnail: /assets/img/CIO-council-Logo-silver1.png
img-alt: CIO Council Logo
---
_This is the 2nd in a series describing how the Social Security Administration is working towards a more modern IT infrastructure._

Most of you who are reading this series will expect to see an approach that forces a migration to modernization. You are likely expecting an expensive march to transform 60 million lines of COBOL code and move several extensive databases that run on proprietary servers to a new “modern” state. You might wonder how we could take this on and still maintain the mission of the agency in the face of new legislative demands. A forced march may have to happen, but this blog post will suggest a more natural, organic, path first and consider how we might start a march with a smaller push to reduce the organizational friction and discontent that comes with the use of force.

To think start thinking about the problem differently let us consider the current state at the SSA. Thirty-plus years ago to today we started developing on a mainframe stack. Eight years ago, we started developing with JAVA and web services, often still on the mainframe. Today, we have tens of millions of lines of code that run our business without fail. In this code base, we have encoded the complex business rules made from the laws and policies that evolved over our 80 years as an agency. When a new rule or feature is required, we call on this intellectual property (IP) to invoke those business rules.

![Figure 1]({{site.baseurl}}/assets/img/blog/2016.01.19.ssa.modernization.jpg)
Figure 1 depicts this IP, the proprietary stack and our code, as a mass. It also depicts the “modern” stack. It is not an accident that the picture shows the modern stack as more massive. The weight of the modern stack is such that every new significant venture you can think of –  Amazon, Google, Netflix, and so on – is attracted.

![Figure 2]({{site.baseurl}}/assets/img/blog/2016.01.19.ssa.modernization2.jpg)
The same attraction makes every CIO with legacy IT infrastructure wonder how to move their infrastructure to the modern world. Figure 2 suggests the dilemma. New applications that do not use the legacy IP gravitate to the modern stack. Other applications that use the encoded business logic do not escape the pull of the legacy side.

Note that this inability to escape is not because of backward thinking on the part of the SSA IT staff. They are as attracted to the modern stack as any Silicon Valley geek. However, they are engineers, and engineers develop software within constraints. It is always more costly to develop new code than to leverage existing IP. SSA wants to go beyond the legacy horizon but we cannot do it without spending more time and money. When we get more money, for all of the right reasons, we always elect to build business functionality to further service the public rather than replicating existing functionality in the modern stack. We are pulled back to the legacy stack by the gravity of our legacy IP.

Now back to the opening remarks: We could force ourselves to spend hundreds or thousands or millions to replicate all of the legacy business rules to the modern side. In reality, though, all we need to do is get just enough SSA-specific IP over the horizon to make it economically attractive to work on the modern side. If we could manage to modernize just the right mass over the line,  forcing as little as possible and spending only a little extra, gravity takes over.

![Figure 3]({{site.baseurl}}/assets/img/blog/2016.01.19.ssa.modernization3.jpg)
Figure 3 shows the result. With a little mass on the right, it becomes possible to code new functionality next to that new IP. With each new feature, the modern gravity grows. Engineers start to make smart engineering decisions without force and without friction.

The path we are on at the SSA depends on finding this critical mass and forcing just that little bit across the legacy horizon.

It is worth noting the tension between this post, which suggests an organic approach, and the previous post, which hints that a more transformative approach is required to catch up. I will leave it to the last post in this series to suggest how I see the tension resolving.

The take-away should be that in any approach, the sooner you understand how the weight and gravity of your current IP and stack affects the behavior of your engineers, and the sooner that you can make gravity work for you, the sooner you will get the cultural buy-in required to make a modernization project succeed.

In the next parts of this series, we will explore our approach more fully and explain how we expect to limit the forcing function and start an organic modernization process from the start.

#### Social Security IT Modernization Series
* Part 1: [Catching Up and Jumping Ahead]({{site.baseurl}}/2015/12/10/ssa-modernization-1.html)
* **Part 2: The Gravity of Intellectual Property**
* Part 3: [Teasing Apart the Problem]({{site.baseurl}}/2016/03/07/ssa-modernization-3.html)
* Part 4: [Building a Modern Data Foundation]({{site.baseurl}}/2016/03/21/ssa-modernization-4.html)
* Part 5: [Modernizing Software Architecture]({{site.baseurl}}/2016/05/23/ssa-modernization-5.html)
* Part 6: [Agility and Evolving a Minimal Viable Product]({{site.baseurl}}/2016/11/07/ssa-modernization-6.html)
* Part 7: [Modernizing Federal IT Part 7 What Does a Modern Application Look Like]({{site.baseurl}}/2016/11/22/ssa-modernization-7.html)
* Part 8: [The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live]({{site.baseurl}}/2017/01/09/ssa-modernization-8.html)
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* Part 10: [Modernizing with a Buy or Build]({{site.baseurl}}/2017/04/14/ssa-modernization-10.html)
