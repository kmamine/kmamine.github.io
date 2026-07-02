---
layout: post
title: "Shifting Focus: From Global Semantics to Local Prominent Features in Swin-Transformer for Knee Osteoarthritis Severity Assessment"
date: 2024-08-26
categories: [research, publications]
tags: [medical-imaging, knee-osteoarthritis, swin-transformer]
---

Grading knee osteoarthritis (KOA) severity from radiographs is a diagnosis that hinges on small, localized cues — joint space narrowing, osteophytes, subtle bony changes — yet many transformer models are pulled toward global image semantics. In this EUSIPCO 2024 paper, we explore how to shift a Swin Transformer's focus from broad global context toward the locally prominent features that actually drive KOA grading.

The challenge is that severity assessment lives in fine detail. A model that reasons mainly about the overall appearance of a radiograph can miss the discriminative regions that separate one severity grade from the next, and these grades are often only marginally different from each other.

Our approach adapts the hierarchical, shifted-window design of the Swin Transformer to emphasize local prominent structures while still benefiting from its multi-scale representation. The goal is to align the model's attention with the diagnostic regions clinicians rely on.

This kind of attention-aware modeling matters for medical imaging, where interpretability and grounding in the right anatomical evidence are as important as raw predictive performance. This was joint work with A. Sekhri, M. Tliba, Y. Nasser, A. Chetouani, A. Bruno, and colleagues.

## Links
- [IEEE](https://ieeexplore.ieee.org/document/10716117)

See the paper for the full methodology and results.
