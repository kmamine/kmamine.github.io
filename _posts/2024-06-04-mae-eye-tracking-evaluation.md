---
layout: post
title: "Perceptual Evaluation of Masked AutoEncoder Emergent Properties Through Eye-Tracking-Based Policy"
date: 2024-06-04
categories: [research, publications]
tags: [eye-tracking, self-supervised, masked-autoencoder, evaluation]
---

Masked autoencoders (MAEs) learn rich visual representations without labels, and they exhibit intriguing emergent properties along the way. But how do we judge whether what they learn aligns with human perception? In this ETRA 2024 paper, we use human eye-tracking as the lens.

Self-supervised models are typically evaluated through downstream task performance, which tells us little about *how* they attend to images or whether their emergent focus resembles human viewing behavior. That gap is exactly what perceptual evaluation can close.

Our idea is to build an eye-tracking-based policy that compares the regions an MAE emphasizes against where people actually look. By treating human gaze as a reference signal, we can probe the emergent properties of masked autoencoders in perceptual rather than purely task-driven terms.

This offers a complementary way to understand self-supervised vision models — one grounded in human attention — and opens a path toward representations that are both effective and perceptually plausible. This was joint work with M. Tliba, A. Chetouani, A. Bruno, M. El Hassouni, and A. Çöltekin.

The evaluation code and notebooks are released as **MAE-EyeTracking-Evaluation** for reproducing and extending the analysis.

## Links
- [Code — MAE-EyeTracking-Evaluation](https://github.com/kmamine/MAE-EyeTracking-Evaluation)

See the paper for the full methodology and results.
