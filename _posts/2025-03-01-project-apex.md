---
layout: post
title: "APEX: Agentic Portrait Editing"
date: 2025-03-01
categories: [projects, open-source]
tags: [ai-agents, genai, computer-vision]
---

`APEX` is an experimental agentic pipeline for editing portraits from natural-language instructions. The idea is to let an AI agent sit between a user's plain-language request and the image editing operations that carry it out, so that "soften the lighting" or "change the background" becomes something the system can plan and execute. It is very much a prototype for exploring that connection between agents and image editing.

The repository experiments with how an agent can decompose an editing instruction, choose the right tools, and apply them to a portrait. Because it is exploratory, the emphasis is on trying out the workflow and understanding where it breaks rather than on delivering a polished editor.

This ties together two threads of my work: computer vision on one side and the reasoning capabilities of LLM-based agents on the other. Portraits are a nice testbed because the edits are visually intuitive, which makes it easy to judge whether the agent understood what was actually asked.

## Links

- GitHub: [kmamine/APEX](https://github.com/kmamine/APEX)

Explore the code on GitHub.
