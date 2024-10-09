---
title: "Cryptobazaar: Scalable Sealed-bid Auctions with Everlasting Privacy"
excerpt: "Cryptobazaar is a novel scalable sealed-bit action protocol with everlasting privacy."

authors:
- Kobi Gurkan (Geometry Research)
- Alireza Kavousi (University College London)
- Philipp Jovanovic (University College London)
- Andrija Novakovic (Geometry Research)
funder: Ethereum Foundation
date: 2023-11-20
endDate: 2025-11-20
---

In this project we introduce Cryptobazaar, a novel scalable sealed-bid auction protocol with everlasting privacy. Our protocol protects in particular the privacy of losing bidders by preserving the confidentiality of their bids while ensuring public verifiability of the auction outcome and relying only on a single untrusted auctioneer for coordination. At its core, Cryptobazaar combines an efficient distributed protocol to compute the logical-OR for a list of unary-encoded bids with various novel zero-knowledge succinct arguments of knowledge that we developed which may be of independent interest. We further show how our protocol can be used efficiently for first-, second-, and more generally (p+1)\text{st}$-price auctions as well as for sequential first-price auctions. Finally, the performance evaluation of our implementation demonstrates that Cryptobazaar is highly practical: a single run of the auction with 128 bidders for a price range of 1024 values terminates in less than 0.5 seconds and requires each bidder to send and receive only about 32KB of data.
