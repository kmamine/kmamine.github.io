---
layout: post
title: "Morphology-Aware KOA Classification: Integrating Graph Priors with Vision Models"
date: 2025-10-24
categories: [research, publications]
tags: [medical-imaging, knee-osteoarthritis, graph-neural-networks]
---

Grading knee osteoarthritis (KOA) severity from X-rays is a subtle task where the structure of the joint carries much of the diagnostic signal. In this work, we combine vision models with graph priors that encode joint morphology, so that classification is informed not only by image appearance but by the anatomical relationships within the knee.

The challenge is that severity grading depends on structural cues, such as joint space narrowing and the arrangement of bony features, that a purely appearance-based model may capture only implicitly. Standard vision backbones learn powerful features but do not natively represent the morphology of the joint, which can make grading less robust and harder to ground in anatomy.

Our idea is to make the model morphology-aware by introducing graph priors alongside the visual representation. Graphs are well suited to encoding the structural relationships between anatomical regions, and coupling them with a vision model lets appearance and structure inform one another during classification, aligning the model more closely with how the joint is actually read.

This points toward KOA grading that is both more accurate and more interpretable, grounded in the anatomy clinicians rely on. This was joint work with M. Tliba, Y. Nasser, N. Aburaed, A. Chetouani, U. Bagci, and colleagues.

## Links

- [arXiv](https://arxiv.org/abs/2510.21801)

See the paper for the full methodology and results.
