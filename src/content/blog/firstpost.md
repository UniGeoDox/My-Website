---
title: "Hello World"
date: "2026-01-20"
summary: "A small introduction and how this site was built"
cover: "/images/covers/first.jpg"
draft: false
---
## Hello World!
Hello and welcome to my blog! My name is Donald Clark, and I am an aspiring IT systems administrator with a growing interest in how software, infrastructure, and tooling all fit together. I decided to build this website as a place to document projects I’m working on, experiments I’m running, and things I’m learning along the way. Rather than relying entirely on a single platform, I wanted something I owned end‑to‑end, from the code to the deployment. That decision is what led to the creation of donald.click.
##
I plan to post on a roughly monthly basis, highlighting anything interesting I’ve worked on recently. Topics will likely vary, as I tend to explore multiple areas at once when I’m gaining that sweet, sweet knowledge. As I try new hobbies some stick into long term projects and some fail until another day.   Any project updates may eventually be sorted into topics but currently will be organized chronologically.  (spoilers maybe?)This first post serves as an introduction, as well as a high‑level breakdown of how the site itself is built.

To get started, I set up a basic development environment. This included installing Node.js and npm for dependency management, creating a new GitHub repository for version control, and configuring my editor (VS Code) for web development. From there, I initialized the project using Astro and Tailwind CSS, and refreshed my familiarity with TypeScript by revisiting some older scripts I had written while playing the programming game BitBurner.

The framework powering this site is Astro, paired with Tailwind CSS for styling. Astro allows pages to be composed from reusable components while shipping minimal JavaScript to the browser by default, which keeps the site fast and lightweight. While the site still uses standard HTML and CSS under the hood, Astro’s component model and build process reduce boilerplate and make the structure easier to reason about. Tailwind’s utility‑first approach made it easy to iterate on layout and styling directly in markup without constantly switching contexts. For hosting and deployment, I’m using Vercel, which handles builds, deployments, and HTTPS automatically whenever changes are pushed to the repository.

One of the first things I focused on was organizing the project’s directory structure. This is a habit I picked up from working with game engines like Unity and Godot, where keeping assets and logic clearly separated becomes essential as projects grow. In Astro, this meant keeping components, layouts, and content organized from the beginning. As the site expanded, I found that adding new pages or components rarely affected existing ones, which made iteration much smoother. Most debugging was handled directly in VS Code using compiler errors, logs, and documentation, with occasional help from an LLM to confirm syntax or clarify concepts.

The blog system itself ended up being one of the more interesting parts to design. Posts are stored as content files, and each includes metadata such as a publication date. During the build process, the site checks this date against the current time and only renders posts that are scheduled to be public. This allows me to write and commit posts ahead of time while controlling when they appear on the site. New content still requires a push to the repository, but the scheduling logic means posts can be prepared in advance without additional manual changes.

This site is very much a work in progress, but it already serves its main purpose: giving me a space to learn in public and document my growth. Up next, I’m planning to experiment with an Amiibo card project, which should involve a mix of hardware tinkering and software tooling. I’ll be documenting that here as well.

Goodbye!

-Donald

(thanks for reading)
