---
layout: post
title: "A Simple and Efficient Deep Scanpath Prediction"
date: 2022-01-17
categories: [research, publications]
tags: [visual-attention, scanpath, efficiency]
---

A scanpath is the sequence of fixations that traces how a viewer's gaze moves across an image over time. Predicting it well usually invites heavy, elaborate architectures. In this work, presented at Electronic Imaging 2022, I take the opposite stance and propose a simple, efficient deep model for scanpath prediction, arguing that restraint in design need not cost much in fidelity.

The motivation is that scanpath modeling has trended toward increasingly complex pipelines, stacking recurrent components, attention mechanisms, and multi-stage training. That complexity carries real costs in compute, memory, and the effort required to train and deploy a model, which can put scanpath prediction out of reach for lightweight or real-time applications.

The core idea is to favor simplicity: a compact deep model that predicts the sequence of fixations directly, without the machinery that has become customary. By keeping the architecture lean, the method stays efficient to run and straightforward to reason about, while still aiming to capture the essential temporal structure of human gaze.

Why it matters is a question of accessibility. An efficient scanpath predictor can slot into interactive systems, on-device settings, and larger attention-aware pipelines where a bulky model simply would not fit, broadening where this kind of gaze modeling can be used.

## Links
- [arXiv](https://arxiv.org/abs/2112.04610)

See the paper for the full methodology and results.
