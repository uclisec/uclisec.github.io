---
title: "Arke: Scalable and Byzantine Fault Tolerant Privacy-Preserving Contact Discovery"
excerpt: "Arke is a novel approach towards privacy-preserving scalable contact discovery in a Byzantine setting that does not rely on trusted third parties."

authors:
- Kobi Gurkan (Geometry Research)
- Philipp Jovanovic (UCL)
- Nicolas Mohnblatt (Geometry Research)
- Alberto Sonnino (Mysten Labs, UCL)
funder: Mysten Labs
date: 2022-07-29 
endDate: 2025-07-29
---

Contact discovery is a crucial component of social applications, facilitating interactions between registered contacts. This work introduces Arke, a novel approach to contact discovery that addresses the limitations of existing solutions in terms of privacy, scalability, and reliance on trusted third parties. Arke ensures the unlinkability of user interactions, mitigates enumeration attacks, and operates without single points of failure or trust. Notably, Arke is the first contact discovery system whose performance is independent of the total number of users and the first that can operate in a Byzantine setting. It achieves its privacy goals through an unlinkable handshake mechanism built on top of an identity-based non-interactive key exchange. By leveraging a custom distributed architecture, Arke forgoes the expense of consensus to achieve scalability while maintaining consistency in a Byzantine fault tolerant environment. Performance evaluations demonstrate that Arke can support enough throughput to operate at a planetary scale while maintaining sub-second latencies in a large geo-distributed setting.

## Publications

Mohnblatt, N., Sonnino, A., Gurkan, K., & Jovanovic, P. (2023). **[Arke: Scalable and Byzantine fault tolerant privacy-preserving contact discovery](https://eprint.iacr.org/2023/1218.pdf)**. Cryptology ePrint Archive.