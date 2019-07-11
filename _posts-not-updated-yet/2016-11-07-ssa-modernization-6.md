---
layout: blog
title: Modernizing Federal IT Part 6 - Agility and Evolving a Minimal Viable Product
date: 2016-11-07
display-date: 07 November 2016
author: Rob Klopp, CIO, Social Security Administration
tags: it-modernization ssa 2016
image: /assets/img/blog/2016.11.07.ssa.modernization.png
image-thumbnail: /assets/img/blog/2016.11.07.ssa.modernization.png
img-alt: Image of a dictionary definition of the word agile
---
_This is the sixth in a series describing how the Social Security Administration is working towards a more modern IT infrastructure._

This post is sort of about IT Modernization, but mostly about a part of Agile software development; and Agile is critical to IT modernization. Here we will consider the concept of a Minimum Viable Product (MVP), one of the hardest ideas to master in the journey towards applying Agile methods. It is also one of the most important concepts to master. Let me apologize in advance as this post is on the long side. We will look at a real case study – the DCPS2 project at the Social Security Administration (SSA). I hope that you find it worth the time.

Background: In 2010 the SSA engaged with Lockheed Martin and their principal partner Iron Data (now MicroPact) to develop a new Disability Case Processing System (DCPS1). Sometime later we ended this effort without deploying a new system and in October of 2015 started a new development effort, DCPS2, with the SSA in-the-lead, fully utilizing Agile methods.

Usually a new product or program, a new IT Modernization effort, will start from scratch. Because DCPS2 started from the legacy of DCPS1, we started with a full, but aging, description of the desired end-state and we had to work hard from there back to a definition of a “minimum” first release. The evolution of our DCPS2 MVP and associated product roadmap is interesting and illustrative of the problem of building an MVP.

The story is illustrative because we have all been trained to envision the end-state, and then work backwards. This is second nature for engineers and for business analysts; and I am suggesting that it will be very normal for your teams to conceive the final product up-front as you begin every IT Modernization effort. But, starting with a fully-composed end-state in mind is not very Agile. An MVP is based on a scope and a definition of the starting point. Here is how we evolved.

DCPS is about processing cases. In the beginning of the DCPS2 effort, we promised the business a first release that defined “minimum” as the ability to process every type of case end-to-end. So, what we cut out were the bells and whistles –  the “nice-to-have” functions – and defined the MVP as the whole core system end-to-end. The problem was that the business was used to the waterfall approach where anything ruled out-of-scope was out forever. They would not agree to very much being “out”. As a result, our first MVP was far from minimal.

Once we engaged in the development cycle, and after every two-week sprint, the business could see the results. Once we developed a little code and a little trust, we engaged in a serious pruning exercise that moved some more “nice-to-have” user stories out of the first release and into the backlog. This was painful. Users fought for every feature, so we pruned only a little. They could not see that features “out” were postponed, not eliminated.

Over time the product owners and the business, came to see that the backlog was not a grave where features were buried, but rather a holding area that provided a place to store ideas that could move into, as well as out of, the R1 release plan. With this idea in place, we tried another pruning exercise, fought a little less, and reduced the size of what was expected out of the gates.

It is important to point out that new user stories were coming in all of the time as new ideas and new features were conceived. The backlog grew and the stories in the R1 scope changed based on the product owner’s updated priorities. This is critical to grasp. It is the heart of Agile. The scope is creeping as the result of new priorities and ideas coming from the business. We are now doing more in R1 than was originally planned in order to more fully satisfy the emerging requirements.

Let me say again, this concept of cultivating scope creep as you go is at the heart of Agile. As we moved along, the scope of “core” changed with some new features in and some features re-prioritized out. This is a very difficult concept for auditors to get their head around. The end is not fixed. The DCPS2 product development process cannot be measured against the scope of DCPS2 at the start as the scope is fundamentally changed and constantly changing.

About six months into the project, the business owner approached us with the notion that we could remove one of the case types completely from R1 as this type was not processed until about a year after an initial claim. In other words, these CDRs cases would not show up for a year, so it made no sense to include them in the first release. There would be no CDR cases to process for a year. You can see that the business, our customers, are catching on. It is also important to point out that this is not Systems cutting scope, it is the business trying to get a minimally viable release into production as soon as possible so that they can gain the benefits from processing cases in the modern system. Finally, we must again point out that none of these features were removed from the scope of the product. – they were removed from the R1 scope and scheduled into R2 or into R3. This is agility at its best – a dynamic scope driven by the business.

About nine months in, the product owners could start to see the product come to life. They could run example cases end-to-end and feel the usability. They could see how the developers wielded Agile methods to incorporate their suggestions into code within days. Trust was building. Three States signed up to be early adopters and roll into production in December.

By the middle of Summer, the product really started to fall into place. The Agile feedback loop allowed developers to constantly tweak the usability to satisfy the business users. About that time, another watershed event occurred. The three early adopters, our customers, asked if we could further cut the scope of the first release to allow them to process only the two simplest case types. They said that they would trade off functionality to get a product into production sooner. Now we started approaching “minimal”.

Today we are working on a release plan that is fine-grained and will deliver new functionality every two to three months starting after the December MVP release. With each new release we will build on the functionality one case type at a time until we have met the original core scope and support all case types. The scope of each release will be set by the business, based on the backlog of user stories in place at the time. By extending functionality incrementally, we have the ability to tweak and adjust as we go. The business will be able to see what is working and where we need help and we can include the changes. This is the essence of Agile… satisfy the customer… do not just build to a target that is now a year old. Learn and change.

Two last comments:

Several weeks ago we performed usability testing. We brought in several claims representatives, subject matter experts who know the business process inside and out, but who had never seen DCPS2. We put them in a room, fired up the application, and asked them to figure it out. No training, no help. Soon enough they were working cases. They came out smiling and said: “We can do this. We do not require training.” This is what Agile can do. Note that we also have a first rate user experience team.

Finally, we just polled the States to see who would be interested in being next in line to move to production. Remember, they can see the real-life work-in-progress every two weeks after each sprint. We hoped to have another three States sign up. We received eight requests.

These two final comments point out the beauty of Agile. It is not about pre-determined targets; it is about customer satisfaction, and about letting the customer define scope as you go.

#### Social Security IT Modernization Series
* [Part 1: Catching Up and Jumping Ahead]({{site.baseurl}}/2015/12/10/ssa-modernization-1.html)
* [Part 2: The Gravity of Intellectual Property]({{site.baseurl}}/2016/01/19/ssa-modernization-2.html)
* Part 3: [Teasing Apart the Problem]({{site.baseurl}}/2016/03/07/ssa-modernization-3.html)
* Part 4: [Building a Modern Data Foundation]({{site.baseurl}}/2016/03/21/ssa-modernization-4.html)
* Part 5: [Modernizing Software Architecture]({{site.baseurl}}/2016/05/23/ssa-modernization-5.html)
* **Part 6: Agility and Evolving a Minimal Viable Product**
* Part 7: [Modernizing Federal IT Part 7 What Does a Modern Application Look Like]({{site.baseurl}}/2016/11/22/ssa-modernization-7.html)
* Part 8: [The Proof is in the Pudding, Disability Case Processing System 2 (DCPS2) goes Live]({{site.baseurl}}/2017/01/09/ssa-modernization-8.html)
* Part 9: [Modernization begets Modernization]({{site.baseurl}}/2017/03/27/ssa-modernization-9.html)
* Part 10: [Modernizing with a Buy or Build]({{site.baseurl}}/2017/04/14/ssa-modernization-10.html)
