---
title: 'Comments on "Algorithmic Extremism: Examining YouTube’s Rabbit Hole of Radicalization"'
date: 2019-12-29
permalink: /posts/2019/12/youtube-radicalization-study/
tags:
  - YouTube radicalization
  - research paper
---

Written by [Manoel Horta Ribeiro](https://manoelhortaribeiro.github.io/), [Savvas Zannettou](https://zsavvas.github.io/), [Emiliano De Cristofaro](https://emilianodc.com/), [Gianluca Stringhini](https://seclab.bu.edu/people/gianluca/), [Jeremy Blackburn](https://mrjimmyblack.com/)

Introduction
============

Understanding the role that social media has in the radicalization of extremists has gained an increasing amount of attention from the research community. A new paper on this, titled [Algorithmic Extremism: Examining YouTube’s Rabbit Hole of Radicalization](https://arxiv.org/abs/1912.11211), hit arXiv this week, and has caused a bit of a stir on social media.


The authors, [Mark Ledwich](https://twitter.com/mark_ledwich) (no affiliation) and [Anna Zaitsev](https://www.ischool.berkeley.edu/people/anna-zaitsev) (UC Berkeley) are trying to understand the impact that YouTube’s recommendation algorithm might have in pushing users towards certain types of content with a focus on radicalization. To do this, they categorize about 800 YouTube channels and then analyze “algorithmic traffic flow” in and out of each category. I.e., if a category of channels receives more recommendations from other categories than it receives, they say it is being “favored” by the recommender system. The authors also released an [interactive website](https://www.recfluence.net/).

The reason this paper has been gaining attention is that it comes to a contrary conclusion than a lot of existing research literature: the YouTube algorithm actually pushes people towards mainstream content. In the conclusion, they state:  “..our study shows that one cannot proclaim that YouTube’s algorithm, at the current state, is leading users towards more radical content.” On Twitter, [the main author states](https://twitter.com/mark_ledwich/status/1210743168246771716) “...It turns out the late 2019 algorithm *DESTROYS* conspiracy theorists, provocateurs, and white identitarians *Helps* partisans *Hurts* almost everyone else”. 

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">2. It turns out the late 2019 algorithm <br>*DESTROYS* conspiracy theorists, provocateurs and white identitarians<br>*Helps* partisans<br>*Hurts* almost everyone else.<br><br>👇 compares an estimate of the recommendations presented (grey) to received (green) for each of the groups: <a href="https://t.co/5qPtyi5ZIP">pic.twitter.com/5qPtyi5ZIP</a></p>&mdash; Mark Ledwich (@mark_ledwich) <a href="https://twitter.com/mark_ledwich/status/1210743168246771716?ref_src=twsrc%5Etfw">December 28, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

Since we have spent the past few years doing [large-scale measurements and analysis of fringe Web communities and online extremism](http://idrama.science/publications), and indeed, some of our previous work ([Ribeiro et al. 2019](https://arxiv.org/abs/1908.08313) and [Papadamou et al. 2019](https://arxiv.org/abs/1901.07046)) is contradicted by Ledwich and Zaitsev’s paper, we decided to take a look.

While we laude Ledwich and Zaitsev’s efforts to look at this problem from a different point of view, there are significant flaws in their work, as well as some things that are probably fixable, that ultimately call the results into question.

**Tl;dr: Large-scale measurement and analysis of social media data is hard. The authors misunderstood their data source and ended up measuring a different thing than they thought they did, and made unfounded claims based on their results.**

Analysis
============

Now for some details.


### The data collection methodology is flawed because the authors misunderstood some literature on recommendation systems from Google.

 The biggest flaw in the paper is that it does not take into account personalization (viewing history) in YouTube’s recommendation algorithm. Instead, the authors claim that they assume there is no difference because “it is too difficult.” This assumption comes from a misunderstanding of a recent paper by Zhao et al. from Google, [“Recommending What Video to Watch Next: A Multitask Ranking System”](https://dl.acm.org/doi/10.1145/3298689.3346997) (appeared at [RecSys 2019](https://recsys.acm.org/recsys19/)). Zhao et al. explicitly state that user history is taken into account if available. I.e., personalization is absolutely part of the feature set of YouTube’s recommendation algorithm (see below for direct quote from the paper).

 > Our video recommendation system uses multiple candidate generation algorithms, each of which captures one aspect of similarity between query video and candidate video. For example, one algorithm generates candidates by matching topics of query video. Another algorithm retrieves candidate videos based on how often the video has been watched together with the query video. We construct a sequence model similar to [cit] for generating personalized candidate given user history. We also use techniques mentioned in [cit] to generate context-aware high recall relevant candidates

Interestingly, Ledwich and Zaitsev find that YouTube’s recommendation algorithm redirects users towards more mainstream channels. They assume that this is evidence refuting previous results, however, recommending popular channels is a text-book approach to deal with the case of cold start in recommendation systems. I.e., if there is little knowledge about a user’s content preferences, recommend something that is popular with the “average” user.

Ledwich and Zaitsev further go on to say that small channels are not recommended by YouTube. While this claim might be true, we believe it is more likely due to the entire point of personalization and recommender systems: as more information on a user’s preferences are learned, more focussed (i.e., small or niche)  channels will be suggested. In fact, this is exactly the benefit of recommender systems: they allow the exploration of long-tail content by users.



### The data analyzed is from after a major change in YouTube’s algorithms but the authors treat it as if it was from a previous version.

Another major issue with the paper is that Ledwich and Zaitsev collect a dataset from recent years (in fact, this is not very clear in the paper, in a tweet, the author refers to the late 2019 algorithm, but mention scraping since 2018). In any case, it is clear that the authors backport results to earlier points in time, disregarding recent major changes to YouTube’s recommendation algorithm and content moderation policies.

During 2019, YouTube banned a very large number of alt-right channels; for example 4 out of the top 5 most viewed channels from the list recently examined by [Ribeiro et al. 2019](https://arxiv.org/abs/1908.08313); James Allsup, Thulean Perspective, The Golden One, and Red Ice TV were all banned by the time Ledwich and Zaitsev collected their dataset. Moreover, YouTube has reportedly changed the algorithms multiple times since 2015-16 (when the problem of user radicalization is often traced back to). A good timeline of statements from YouTube has been compiled by [Mozilla](https://foundation.mozilla.org/en/blog/congratulations-youtube-now-show-your-work/).

Ledwich and Zaitsev make extremely bold claims that previous literature, reporting, and YouTube’s own statements are wrong. Unfortunately, due to this lack of accounting of algorithm and policy changes, these bold claims remain unsupported by their experimentation.


### The authors do not properly explain their methodology, making it impossible to know if their experiments were properly performed.

Overall, the methodology of the paper is not clearly explained in the manuscript. This is particularly worrisome for several reasons. First, since the methodology is unclear and likely flawed, it questions all the findings that the study makes. Also, the authors do not explicitly state the limitations of their approach, and more importantly, they do not adjust their claims according to the limitations of their approach. In summary, due to the above mentioned reasons and also the  sloppy writing of the paper, there are serious concerns regarding both the methodology and findings that this study makes.

In addition to the above methodological flaws, the authors do not provide adequate information to verify the analysis is sound. Besides a general lack of clarity, the authors do not report (and in most cases do not perform) any statistical measures of the significance of their results. Although we have no particular reason to believe the results are not significant, we (and we suspect most researchers) have been mislead by simple correlations and comparisons in the past, and hypothesis testing helps increasing confidence in results.

There are other issues with the presentation that make it difficult to ascertain the validity of the results. For example, the authors use an inter annotator agreement metric (ICC) to validate their categorization of channels. Unfortunately, there are many different versions of these agreement algorithms, each suitable for a specific use case and the authors fail to justify, or even specify, the particular metric they used. While we have no particular reason to believe the authors made poor choice of metric, the reference they use to explain ICC explicitly states that the particular metric and details of parameters used must accompany its use to allow for proper evaluation of the results by other researchers.

Conclusion 
============

Ultimately, these issues with this paper highlight the research challenges associated with large-scale measurement and analysis of social media. While there is technical skill required to collect data and perform analysis, the major challenge is understanding what data to collect and what analyses are appropriate.


