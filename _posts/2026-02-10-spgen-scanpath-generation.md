---
layout: post
title: "SPGen: Stochastic Scanpath Generation for Paintings using Unsupervised Domain Adaptation"
date: 2026-02-10
categories: [research, publications]
tags: [visual-attention, scanpath, generative, domain-adaptation]
---

SPGen generates diverse, human-like scanpaths for paintings, capturing not one canonical viewing path but the variety of ways people explore a work of art. We frame the problem stochastically so that the model produces plausible variation across viewers, and we use unsupervised domain adaptation to reach the art domain without labeled fixations.

The core difficulty is data. Rich eye-tracking corpora exist for natural images, but labeled gaze on paintings is scarce, and art invites a broader, more idiosyncratic range of exploration than everyday photographs. Training a scanpath model directly on paintings is therefore hard, and models trained only on natural images transfer poorly to the aesthetics and composition of art.

Our approach bridges this gap. Unsupervised domain adaptation transfers knowledge from natural-image gaze data toward paintings, while the stochastic formulation lets SPGen sample multiple distinct yet coherent scanpaths rather than collapsing to a single average trajectory. The aim is generated gaze behavior that looks and varies like that of real observers.

This opens practical uses in digital humanities, cultural heritage, and interactive museum experiences, where modeling how people look at art is as interesting as modeling what they look at. This was joint work with M. Tliba, A. Chetouani, and A. Bruno.

The code is released as **SP_Gen** for generating and experimenting with stochastic scanpaths on paintings.

## Links

- [Code — SP_Gen](https://github.com/kmamine/SP_Gen)

See the paper for the full methodology and results.
