---
layout: post
title: "Automatic Diagnosis of Knee Osteoarthritis Severity Using Swin Transformer"
date: 2023-09-20
categories: [research, publications]
tags: [medical-imaging, knee-osteoarthritis, swin-transformer]
---

Assessing knee osteoarthritis (KOA) severity from radiographs is a subtle, labor-intensive task, and consistent grading is hard even for experts. In this CBMI 2023 paper, we apply the Swin Transformer to automatically grade KOA severity directly from radiographic images.

KOA grading depends on fine-grained radiographic cues that differ only slightly from one severity level to the next. Capturing these distinctions calls for a model that can represent both local detail and broader anatomical context, which is where hierarchical vision transformers become attractive.

The Swin Transformer's shifted-window, multi-scale design lets it build representations across scales while remaining computationally tractable, and we explore how well this architecture transfers to the demands of KOA severity assessment. The aim is reliable, reproducible grading support.

Automated grading of this kind can help standardize assessment and lighten clinical workload, and it also laid groundwork for our later efforts to refine where such models focus. This was joint work with A. Sekhri, A. Chetouani, M. Tliba, Y. Nasser, R. Jennane, and colleagues.

## Links
- [DOI](https://doi.org/10.1145/3549555.3549597)

See the paper for the full methodology and results.
