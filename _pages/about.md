---
permalink: /
title: "UCL Information Security Research Group (UCL ISec)"
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

## What is UCL ISec?

The Information Security Research Group was set up in 2006, as a constituent part of the [University College London
](https://www.ucl.ac.uk) and the [Department of Computer Science](https://www.ucl.ac.uk/computer-science/). Our research addresses key technical aspects of information security and privacy - such as cryptography and system security - and overall aims to deliver end-to-end security solutions, and address broader human, economic and societal aspects of security, privacy, and trust. We also support consultancy as well as develop and deliver advanced training in our areas of expertise. 

We maintain an active blog on topics related to our work. Find it [here](https://www.benthamsgaze.org/).

**Recent posts on Bentham's Gaze**

<div id="feed"></div>

<script src=" https://cdn.jsdelivr.net/npm/rss-parser@3.13.0/dist/rss-parser.min.js "></script>
<script>
let parser = new RSSParser();
parser.parseURL("https://www.benthamsgaze.org/feed/", function(err, feed) {
  if (err) throw err;
  /*console.log(feed.title);*/
  const limit = 5;
  const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  };
  feed.items.slice(0,limit).forEach(function(entry) {
    /*console.log(entry.title + ':' + entry.link);*/
    e = document.createElement('a');
    e.appendChild(document.createTextNode(entry.title));
    e.href = entry.link;
    f = document.getElementById('feed');
    p = document.createElement('p');
    p.appendChild(e);
    d = (new Date(entry.isoDate)).toLocaleDateString(undefined, options);
    p.appendChild(document.createTextNode(' by ' + entry.creator + ' on ' + d));
    f.appendChild(p);
  })
})
</script>

## Who are we?
Our group has about 50 members, including faculty, research staff, and doctoral researchers. Please visit the [people](/people) page for an up-to-date list of our members.

## Open PhD positions
- [Human–Computer Interaction (HCI) and Usable Security for Addressing Technology-Facilitated Abuse (“Tech Abuse”)](https://ucl-epsrc-dtp.github.io/2026-27-project-catalogue/projects/2531bd1647.html) - Home and International - 05 January 2026
- [Designing user reporting tools for online social platforms][https://www.findaphd.com/phds/project/designing-user-reporting-tools-for-online-social-platforms/?p192806] - Home - 1 March 2026




## Research Themes
Some of the key research themes addressed by the group include, but are not limited to:

- Anonymity
- Authentication
- Blockchain and Cryptocurrencies
- Computer Security
- Cryptanalysis
- Cryptography
- Cybercrime
- Cybersafety
- Financial Cryptography
- Human Aspects of Security
- Malware
- Network Security
- Online Harms
- Privacy-Enhancing Technologies
- Reliability and Dependability
- Security and Privacy Measurements
- Systems Security
- Trust
- Usable Security
