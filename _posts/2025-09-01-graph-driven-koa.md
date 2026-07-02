---
layout: post
title: "A Graph-Driven Approach to Knee Osteoarthritis Severity Classification"
date: 2025-09-01
categories: [research, publications]
tags: [medical-imaging, knee-osteoarthritis, graphs]
---

Knee osteoarthritis severity classification benefits from reasoning about structure, not just appearance. In this work, presented at EUSIPCO 2025, we take a graph-driven approach to KOA grading, representing the structural relationships within the joint to support more reliable severity classification.

The context is that osteoarthritis severity is expressed through structural changes in the knee, and grading these changes is inherently relational: what matters is how regions of the joint relate to one another, not only their isolated appearance. Models that treat the image as an unstructured whole can miss these relationships and the diagnostic patterns they encode.

Our approach uses graphs to make these structural relationships explicit. By modeling the joint as connected components rather than a flat image, the method can capture dependencies relevant to grading and use them to inform the severity prediction, aligning the representation with the anatomy behind the diagnosis.

This contributes to a broader line of work on structure-aware medical image analysis, where encoding relationships explicitly helps grading models generalize and remain interpretable. This was joint work with M. Tliba, Y. Nasser, A. Chetouani, and R. Jennane.

## Links

This paper appeared at EUSIPCO 2025 and is listed on my Publications page.

See the paper for the full methodology and results.
