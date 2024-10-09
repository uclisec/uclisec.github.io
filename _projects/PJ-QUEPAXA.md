---
title: "QuePaxa: Escaping the Tyranny of Timeouts in Consensus"
excerpt: "AQuePaxa, is the first consensus protocol offering state-of-the-art normalcase efficiency without depending on timeouts."

authors:
- Cristina Basescu (Swiss Federal Institute of Technology Lausanne)
- Vero Estrada-Galinanes (Swiss Federal Institute of Technology Lausanne)
- Bryan Ford (Swiss Federal Institute of Technology Lausanne)
- Lefteris Kokoris-Kogias (Mysten Labs and Institute of Science and Technology Austria)
- Philipp Jovanovic (University College London)
- Ewa Syta (Trinity College)
- Pasindu Tennage (Swiss Federal Institute of Technology Lausanne)
date: 2022-07-29 
endDate: 2025-07-29
---

Leader-based consensus algorithms are fast and efficient under normal conditions, but lack robustness to adverse conditions due to their reliance on timeouts for liveness. 
We present QuePaxa, the first protocol offering state-of-the-art normalcase efficiency without depending on timeouts.  QuePaxa uses a novel randomized asynchronous consensus core to tolerate adverse conditions such as denial-of-service (DoS) attacks, while a one-round-trip fast path preserves the normal-case efficiency of Multi-Paxos or Raft. By allowing simultaneous proposers without destructive interference, and using short hedging delays instead of conservative timeouts to limit redundant effort, QuePaxa permits rapid recovery after leader failure without risking costly view changes due to false timeouts. By treating leader choice and hedging delay as a multiarmed-bandit optimization, QuePaxa achieves responsiveness to prevalent conditions, and can choose the best leader even if the current one has not failed. Experiments with a prototype confirm that QuePaxa achieves normal-case LAN and WAN performance of 584k and 250k cmd/sec in throughput, respectively, comparable to Multi-Paxos. Under conditions such as DoS attacks, misconfigurations, or slow leaders that severely impact existing protocols, we find that QuePaxa remains live with median latency under 380ms in WAN experiments.

<iframe width="560" height="315" src="https://www.youtube.com/embed/kZMma6jbhqM?si=Ml1wTSXlYXkfPHmm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Publications

Tennage, P., Basescu, C., Kokoris-Kogias, L., Syta, E., Jovanovic, P., Estrada-Galinanes, V., & Ford, B. (2023, October).  **[QuePaxa: Escaping the tyranny of timeouts in consensus.](https://dl.acm.org/doi/pdf/10.1145/3600006.3613150)** In Proceedings of the 29th Symposium on Operating Systems Principles (pp. 281-297).