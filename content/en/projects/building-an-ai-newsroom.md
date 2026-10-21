---
title: "Building an AI Newsroom: One Human Editor, a Team of AI Collaborators"
seoTitle: "Building an AI Newsroom — An Ongoing Experiment"
description: "Can one human editor run a serious publication with AI researchers, writers, editors, and illustrators? Inside the ongoing AI Caver experiment."
slug: "building-an-ai-newsroom"
date: 2026-10-21
lastmod: 2026-10-21
layout: "project"
heroStyle: "light"
modelStyle: "hub"
images: ["/uploads/ai-caver-desktop-hero-rappel.webp"]

eyebrow: "Project · Ongoing experiment"
subtitle: "An experiment in human-led journalism, AI agents, editorial automation, and the limits of working with machines."
intro: |
  I'm trying to build a newsroom where I remain the editor-in-chief and artificial intelligence takes on parts of the work traditionally performed by journalists, researchers, editors, illustrators, and publishing teams.

  Not everything works yet. Some processes are automated, some are assisted, and others still need a human at every step.

  **This page documents the experiment as it develops.**

question:
  heading: "The Question Behind the Experiment"
  body: |
    For years, running even a small publication meant bringing together different kinds of expertise: research, writing, editing, illustration, technology, distribution, and administration.

    AI is beginning to challenge that structure.

    A single person can now call on tools that can search, analyze, draft, translate, generate images, and interact with other software.

    But being able to perform individual tasks is not the same as operating a trustworthy newsroom.

    Can AI systems maintain context across assignments? Can they distinguish meaningful stories from noise? Can they work consistently without repeating themselves? Can they reliably check facts? And what happens when the human editor becomes responsible for reviewing far more material than one person could ever produce?

    Those are the questions I'm exploring through AI Caver.

editorialModel:
  heading: "The Editorial Model"
  intro: "The idea is to replace the traditional division of editorial labor with a human-led system of AI-assisted functions."
  diagramLabel: "The human editor-in-chief at the center, connected to five AI-assisted functions"
  coreKicker: "HUMAN"
  coreLabel: "Editor-in-Chief"
  short: ["Research & Reporting", "Writing & Editing", "Illustration", "Proofreading · Localization", "Publishing & Distribution"]
  legendHuman: "Human decision"
  legendAI: "AI-assisted function"
  pipeline:
    - { label: "Discovery", who: "AI-assisted" }
    - { label: "Research", who: "AI-assisted" }
    - { label: "Drafting", who: "AI-assisted" }
    - { label: "Verification", who: "Human", human: true }
    - { label: "Illustration", who: "AI-assisted" }
    - { label: "Approval", who: "Human", human: true }
    - { label: "Publication", who: "AI-assisted" }
  roles:
    - name: "Human Editor-in-Chief"
      human: true
      text: "That's me. I decide what is worth investigating, set the editorial direction, evaluate sources, review the reasoning, and approve publication. AI does not have final editorial authority."
    - name: "AI Research & Reporting"
      text: "AI tools help discover potential stories, investigate source materials, compare information, and prepare research notes."
    - name: "AI Writing & Editing"
      text: "AI assists with drafting, structuring, and revising texts. The final argument, factual responsibility, and editorial voice remain under human supervision."
    - name: "AI Illustration"
      text: "Generative tools help create editorial imagery, illustrations, and clearly labeled visual reconstructions."
    - name: "AI Proofreading & Localization"
      text: "AI helps review language and adapt materials for different audiences and publishing platforms."
    - name: "AI Publishing & Distribution"
      text: "Publishing workflows help prepare and distribute approved material across channels."
  note: "These functions are at different stages of development. They should not be mistaken for five fully autonomous, production-ready agents."

sections:
  - id: "today"
    heading: "What Exists Today"
    lead: |
      AI Caver is already a working independent publication.

      The editorial experiment has included AI-assisted research, content preparation, illustration, language adaptation, and experiments with publishing automation.

      Some workflows have been useful enough to keep.

      Others have been redesigned or discontinued.

      I have also been experimenting with connecting AI-assisted editorial work to publishing tools, while keeping approval and responsibility under human control.

      The larger vision is a coherent editorial system rather than a collection of disconnected prompts.

      But I don't want to declare that system complete before it actually is.
  - id: "difficult"
    heading: "What Has Been Difficult"
    lead: "The most interesting problems have not always been the obvious ones."
    cards:
      - "AI can generate a convincing article without giving you the confidence that every statement is correct."
      - "A publishing assistant can save time and still create repetitive content."
      - "An automation can work technically while becoming too expensive or complicated to justify."
      - "And the more work AI performs, the more important editorial consistency and human supervision become."
    body: |
      These are not just implementation bugs. They are clues about what an AI-assisted newsroom actually requires.

      In future updates, I plan to document specific failures, changes, operating costs, and lessons, supported by evidence from the project.
  - id: "next"
    heading: "What I'm Trying to Build Next"
    lead: |
      The next challenge is turning separate experiments into a more coherent editorial workflow.

      I want to improve how story ideas move from discovery to research, drafting, verification, illustration, approval, and publication.

      I also want a more reliable memory of what has already been published, a clearer division of responsibility between AI functions, and a practical way to measure quality, time, and cost.

      The goal is not automation for its own sake.

      It's discovering which parts of a publication genuinely benefit from AI — and where a human editor remains irreplaceable.

# Changelog. Add entries like:
# - date: "2026-11-05"
#   changed: "What changed"
#   why: "Why it changed"
#   result: "What worked or failed"
#   link: "/posts/some-article/"
updatesHeading: "Experiment Log"
updatesEmpty: "This project is ongoing. Dated updates will be added as specific changes and results are documented."
updates: []

follow:
  heading: "Follow the Experiment"
  body: |
    I'll update this page as the newsroom develops.

    That includes new workflows, abandoned ideas, technical changes, and lessons from running the publication.

    If you're experimenting with AI-assisted content production or building similar editorial systems, I'd be interested in comparing notes.
  signName: "Denys Voroshylov"
  signRole: "Founder & Editor of AI Caver"
  links:
    - { label: "Read AI Caver", url: "/" }
    - { label: "About the editor", url: "/about/" }
    - { label: "Contact: author@aicaver.com", url: "mailto:author@aicaver.com" }
---
