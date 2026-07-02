---
layout: post
title: "Deep-Based Quality Assessment of Medical Images Through Domain Adaptation"
date: 2022-10-16
categories: [research, publications]
tags: [medical-imaging, quality-assessment, domain-adaptation]
---

Assessing the quality of a medical image is a clinical necessity: artefacts, noise, and degradations can obscure findings and mislead diagnosis. In this work, presented at ICIP 2022, we tackle deep-learning-based quality assessment for medical images and use domain adaptation to work around a persistent obstacle, the scarcity of labeled quality annotations in the medical domain.

The difficulty is practical. Data-driven quality models thrive on large annotated datasets, but building such collections for medical imagery is expensive and requires expert judgment. Natural-image quality datasets, by contrast, are comparatively abundant, yet models trained on them do not transfer cleanly to medical content, where the statistics and the notion of what makes an image "good" differ substantially.

Our approach is to bridge that gap with domain adaptation. Rather than training a medical quality model from scratch, we transfer knowledge learned in a data-rich source domain and adapt it to the target medical domain, aligning representations so that quality cues learned elsewhere remain useful where labels are scarce. This lets a deep model estimate perceptual quality without demanding a large purpose-built medical annotation effort.

The relevance is direct. Reliable, automatic quality assessment can flag degraded acquisitions early, support triage, and improve the inputs to downstream analysis pipelines, all in a setting where annotated data is genuinely hard to come by.

## Links
- [arXiv](https://arxiv.org/abs/2210.10533)

See the paper for the full methodology and results.
