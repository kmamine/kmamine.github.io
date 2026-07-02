---
layout: post
title: "Closing the Foveal Gap: Perceptually Grounded Scanpath Comparison with Disc IoU"
date: 2026-05-27
categories: [research, publications]
tags: [visual-attention, scanpath, metrics, eye-tracking]
---

Fixations are usually treated as exact points on an image, but human vision does not work that way. Each fixation gathers information from a foveal region around the gaze point. In this ETRA 2026 paper, we introduce Disc IoU, a perceptually grounded metric that compares scanpaths by accounting for this region rather than pretending each fixation is a single pixel.

The context is that point-based scanpath comparisons are brittle. Small, perceptually meaningless offsets between two fixations can be treated as large disagreements, while the shared area of visual intake around each point is ignored. This mismatch between the metric and how the eye actually samples a scene distorts how we score similarity between viewing behaviors.

Our idea is simple and grounded in perception: represent each fixation as a disc approximating its foveal extent, and measure agreement through the intersection over union of these discs along the scanpath. Overlap in attended area, rather than exact coincidence of points, becomes the basis for comparison, which tolerates natural jitter while still rewarding genuinely shared attention.

By closing this foveal gap, Disc IoU aims to give more faithful and robust scanpath comparisons for both human studies and model evaluation. This was joint work with M. Tliba, Z. Sellam, C. Distante, A. Bruno, and A. Chetouani.

The reference implementation is open-sourced as **FDISS**, so the metric can drop straight into existing scanpath-evaluation pipelines.

## Links

- [Code — FDISS](https://github.com/kmamine/FDISS)

See the paper for the full methodology and results.
