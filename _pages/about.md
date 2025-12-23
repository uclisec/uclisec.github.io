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
If you are interested in any of the below positions, please get in touch with the faculty member advertising the position via email. 

- [Human–Computer Interaction (HCI) and Usable Security for Addressing Technology-Facilitated Abuse (“Tech Abuse”)](https://ucl-epsrc-dtp.github.io/2026-27-project-catalogue/projects/2531bd1647.html) - Dr Leonie Tanczer, Home and International Students, Closes 5 January 2026.
- [“Rethinking Intrusion Detection with Advanced AI for Explainable, Robust and Cost-Aware Decisions”](https://ucl-epsrc-dtp.github.io/2026-27-project-catalogue/projects/2531bd1649.html) - Dr Fabio Pierazzi, Home and International Students, Closes 5 January 2026.
- [“Explainable, Knowledge-driven AI and ML for Systems Security”](https://www.findaphd.com/phds/programme/ucl-s-department-of-computer-science-offers-fully-funded-home-studentships-starting-september-2026/?p6777) - Dr Fabio Pierazzi, Home Students, Closes 5 January 2026.
- [CDT in Cyber-Physical Risk: “Risk assessment and mitigation of threats to AI-enabled devices in cyber-physical-social systems”](https://www.ucl.ac.uk/engineering/security-crime-science/study/postgraduate-research/epsrc-centre-doctoral-training-cyber-physical-risk/study-us/project-proposals) - Dr Fabio Pierazzi, Home Students, Closes 15 February 2026.
- [CDT in Cyber-Physical Risk: "Understanding and Measuring Influence in Harmful Online Conspiracy Theory Communities"](https://www.ucl.ac.uk/engineering/security-crime-science/study/postgraduate-research/epsrc-centre-doctoral-training-cyber-physical-risk/study-us/project-proposals) - Dr Mark Warner, Home Students, Closes 15 February 2026.
- [CDT in Cyber-Physical Risk: "Privacy-Preserving Interventions Against Cyber-Enabled Sexual Exploitation on Social Apps"](https://www.ucl.ac.uk/engineering/security-crime-science/study/postgraduate-research/epsrc-centre-doctoral-training-cyber-physical-risk/study-us/project-proposals) - Dr Mark Warner, Home Students, Closes 15 February 2026.
- [Designing user reporting tools for online social platforms](https://www.findaphd.com/phds/project/designing-user-reporting-tools-for-online-social-platforms/?p192806) - Home - Dr Mark Warner, Home Students, Closes 28 January 2026.
- [CDT in Cyber-Physical Risk: "Systemic risk in the Internet of Things"](https://www.ucl.ac.uk/engineering/security-crime-science/study/postgraduate-research/epsrc-centre-doctoral-training-cyber-physical-risk/study-us/project-proposals) - Dr Tristan Caulfield, Home Students, Closes 15 February 2026.




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
