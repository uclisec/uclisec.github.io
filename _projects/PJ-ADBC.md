---
title: "Adaptively-Secure Asynchronous Consensus based on Directed Acyclic
Graphs"
excerpt: "This project aims to design a consensus protocol based on directed acyclic graphs (DAGs) that can operate under asynchronous network assumptions while being secure against adaptive adversaries."

authors:
- Lefteris Kokoris Kogias (Mysten Labs and Institute of Science and Technology Austria)
- Bryan Kumara (The Alan Turing Institute)
- Philipp Jovanovic (University College London)
- Alberto Sonnino (Mysten Labs and University College London)
- Pasindu Tennage (Swiss Federal Institute of Technology Lausanne)
- Igor Zablotchi (Mysten Labs)
funder: Mysten Labs
date: 2023-12-07 
endDate: 2027-12-07
---

CBlockchain technology has evolved rapidly, and consensus protocols based on directed acyclic graphs (DAGs) have emerged as the state-of-the-art solution for ensuring the performance and security of their underlying distributed system. Currently, all production DAG-based consensus protocols (like Narwhal or Mysticeti) operate under a partial-synchronous networking / threat model, allowing them to tolerate up to 1/3 of Byzantine faults (that is, actively adversarial parties) and where the system makes progress only when the network links are good: if network messages are delayed by more than a fixed delta amount of time, the protocol stalls, making it vulnerable to DoS attacks. In comparison, protocols that can safely operate in an asynchronous networking model do not make any assumptions on the network links and only assume that messages are delivered eventually making them much more robust against attacks such as DoS. Furthermore, the threat model of currently deployed protocols usually assumes a static adversary which means that the adversary can corrupt nodes at the beginning of time and never change them again which, however, is rather unrealistic from a practical perspective.

In comparison, a protocol that is secure against adaptive faults can tolerate adversaries that are able to corrupt nodes (up to the security threshold) over time rather than starting with a static set of parties that they control. This project aims to push the boundaries of consensus protocols by developing a DAG-based consensus protocol that works in the asynchronous networking model and is robust against adaptive Byzantine faults while maintaining performance (in terms of throughput and latency) as close as possible to its partially synchronous counterparts in a threat model with static adversaries.

## Publications

None