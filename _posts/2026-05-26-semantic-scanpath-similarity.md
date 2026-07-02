---
layout: post
title: "What They Saw, Not Just Where They Looked: Semantic Scanpath Similarity via VLMs and NLP Metrics"
date: 2026-05-26
categories: [research, publications]
tags: [visual-attention, scanpath, vlm, nlp, eye-tracking]
---

Classic scanpath metrics tell us *where* two people looked and how well their gaze paths overlap in space. In this work, presented at ETRA 2026, we ask a different question: did they actually *see* the same things? We use vision-language models together with NLP similarity measures to compare the semantic content of what observers attended to, not just the spatial geometry of their fixations.

The problem is that two scanpaths can trace very different spatial trajectories while landing on the same objects and meanings, or follow similar routes while attending to entirely different content. Purely geometric comparisons miss this. They reward spatial coincidence and penalize legitimate variation in viewing strategy, which limits how well they reflect shared understanding of a scene.

Our approach describes what lies under each fixation using a vision-language model, then measures agreement between these descriptions with established NLP similarity metrics. This shifts scanpath comparison from coordinates toward semantics, letting us quantify whether observers converged on the same interpretation of an image even when their eyes took different paths.

This matters for evaluating attention models, studying expertise, and comparing human and machine viewing behavior in settings where meaning matters more than pixel-level overlap. This was joint work with M. Tliba, B. Wang, A. Chetouani, U. Bagci, and A. Bruno.

The similarity tools are open-sourced as **scanpath_nlp_metrics** so others can apply semantic comparison to their own gaze data.

## Links

- [Code: scanpath_nlp_metrics](https://github.com/kmamine/scanpath_nlp_metrics)

See the paper for the full methodology and results.
