---
title: "Bingo: Adaptivity and asynchrony in verifiable secret sharing and distributed key generation"
excerpt: "ingo is the first efficient distributed key generation algorithm that is secure against an adaptive adversary and works in an asynchronous network."

authors:
- Ittai Abraham (Intel Labs)
- Philipp Jovanovic (University College London)
- Mary Maller (Ethereum Foundation and PQShield)
- Sarah Meiklejohn (Google and University College London)
- Gilad Stern (The Hebrew University of Jerusalem)
date: 2022-07-13
endDate: 2023-08-09
---

In this work we present Bingo, an adaptively secure and optimally resilient packed asynchronous verifiable secret sharing (PAVSS) protocol that allows a dealer to share $f+1$ secrets with a total communication complexity of $O(\lambda n^2)$ words, where $\lambda$  is the security parameter and $n$ is the number of parties. Using Bingo, we obtain an adaptively secure validated asynchronous Byzantine agreement (VABA) protocol that uses $O(\lambda n^3)$ expected words and constant expected time, which we in turn use to construct an adaptively secure high-threshold asynchronous distributed key generation (ADKG) protocol that uses $O(\lambda n^3)$ expected words and constant expected time. To the best of our knowledge, our ADKG is the first to allow for an adaptive adversary while matching the asymptotic complexity of the best known static ADKGs.

## Publications

Abraham, Ittai, Philipp Jovanovic, Mary Maller, Sarah Meiklejohn, and Gilad Stern. **[Bingo: Adaptivity and asynchrony in verifiable secret sharing and distributed key generation.](https://eprint.iacr.org/2022/1759.pdf)**In Annual International Cryptology Conference, pp. 39-70. Cham: Springer Nature Switzerland, 2023.