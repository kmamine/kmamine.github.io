---
layout: post
title: "Quantization Effects on Neural Networks Perception"
date: 2024-03-15
categories: [research, publications]
tags: [quantization, perception, efficiency, computer-vision]
---

Quantization is one of the most practical tools we have for shrinking vision models and running them on constrained hardware, but it is almost always judged by a single yardstick: task accuracy. In this work, presented at IPTA 2024, we ask a different question — how does quantization change what a model actually *perceives*?

Compressing weights and activations to lower precision inevitably alters a network's internal representations. Yet a model can preserve its top-line accuracy while quietly reorganizing where it looks and what it treats as salient. We wanted to characterize this shift in perceptual behavior rather than reduce the story to a single performance number.

To do this, we study how a model's perceptual field responds as precision is reduced, comparing the attention and saliency behavior of quantized networks against their full-precision counterparts. The aim is to make the trade-offs of quantization visible in perceptual terms, not just in accuracy terms.

This matters because efficiency gains should not come at the cost of silently changing model behavior, especially in perception-critical settings. Framing quantization as a perceptual question, alongside co-authors M. Tliba, A. Chetouani, and A. Bruno, points toward compression strategies that are aware of what they preserve and what they discard.

## Links
- [arXiv](https://arxiv.org/abs/2403.09939)

See the paper for the full methodology and results.
