---
layout: post
title: "ThinkProbe: Beyond Accuracy, Structural Profiling of LLM Reasoning Traces"
date: 2026-06-27
categories: [research, publications]
tags: [llm, reasoning, nlp, evaluation, thought-graphs]
---

When we evaluate a reasoning model, we almost always look at one thing: was the final answer right? In **ThinkProbe**, my collaborators and I ask a different question: not *whether* a model reached the answer, but *how* its reasoning was shaped along the way. It's a framework for profiling the structure of open-ended reasoning traces.

The idea is to turn a raw reasoning trace into a **Thought Graph** and then read structure off that graph directly, without asking another model to judge it. This *non-generative* analysis avoids the cost and circularity of LLM-as-a-judge setups: instead of a subjective score, we derive a compact cognitive profile, a set of structural metrics organized into a handful of interpretable dimensions.

What surprised us most is how consistent these profiles are. Across thousands of traces spanning several models and question sets, reasoning *structure* behaves as a stable, model-level property: two models can reach similar accuracy while thinking in visibly different shapes, and the variation between models is larger than the variation across problem domains. In other words, how a model reasons is closer to a fingerprint than to a per-task artifact.

I think structural profiling is a useful complement to accuracy for understanding, comparing, and eventually improving reasoning systems. This work is currently under review for EMNLP 2026.

## Links
- [arXiv:2606.29067](https://arxiv.org/abs/2606.29067)

See the paper for the full methodology and results.
