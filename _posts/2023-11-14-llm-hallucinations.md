---
layout: post
title: "Insights into Classifying and Mitigating LLMs' Hallucinations"
date: 2023-11-14
categories: [research, publications]
tags: [llm, hallucinations, nlp, trustworthy-ai]
---

Large language models are remarkably fluent, and that fluency is precisely what makes their hallucinations dangerous: confidently stated content that is simply not grounded in fact. In this work, we study the kinds of hallucinations LLMs produce and the strategies available to classify and mitigate them.

The core difficulty is that "hallucination" is not a single phenomenon. It spans different failure modes with different causes, and treating them uniformly makes them hard to detect and harder to address. A clearer taxonomy is a prerequisite for meaningful mitigation.

We work toward organizing these failure modes and reviewing approaches that aim to reduce them, connecting how hallucinations arise to how they might be caught or prevented. The intent is to give practitioners and researchers a more structured way to reason about trustworthiness in generative systems.

This has become the work of mine that has resonated most with the community, which I read as a sign of how pressing reliability has become as LLMs move into real applications. This was joint work with A. Bruno, P.L. Mazzeo, A. Chetouani, and M. Tliba.

## Links
- [arXiv](https://arxiv.org/abs/2311.08117)

See the paper for the full methodology and results.
