---
layout: post
title: "Paper Published - Domain Adaptive Deep Learning for Scanpath Prediction"
date: 2022-09-30
categories: [publications, research]
tags: [deep-learning, domain-adaptation, scanpath, paintings, transfer-learning]
---

Our latest paper **"A Domain Adaptive Deep Learning Solution for Scanpath Prediction of Paintings"** is now available on arXiv!

## The Problem

One of the key challenges in visual attention research is the **domain gap**: models trained on natural images (photos) don't perform well on paintings, and collecting eye-tracking data for every type of image is expensive and time-consuming.

## Our Solution

We developed a **domain adaptation approach** that allows models trained on natural images to work effectively on paintings, without requiring extensive labeled data for the target domain.

### Key Contributions

- A domain adaptation framework specifically designed for scanpath prediction
- Techniques to bridge the gap between natural images and artistic content
- Comprehensive evaluation showing improved performance on painting datasets

### Why This Matters

This work is important for:
- **Cultural Heritage**: Making visual attention models accessible for museum and art applications
- **Data Efficiency**: Reducing the need for expensive eye-tracking data collection
- **Generalization**: Building models that work across different visual domains

## Links

- [arXiv Preprint](https://arxiv.org/abs/2209.11338)

This paper was also presented at CBMI 2022. The combination of self-supervised learning (our CVPR workshop paper) and domain adaptation provides a powerful toolkit for scanpath prediction in data-scarce scenarios.
