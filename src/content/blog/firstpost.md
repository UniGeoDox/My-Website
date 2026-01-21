---
title: "Hello World"
date: "2026-01-20"
summary: "A small introduction and how this site was built"
cover: "/images/covers/first.jpg"
draft: false
---
## Hello World!

Hello and welcome to my blog! My name is Donald Clark and I am an aspiring IT systems administrator.  I wanted to start building out a website to catalog some of the fun and interesting (at least to me) projects that I work on time to time.  I don’t really like solely relying on any single platform and thought might as well create my own, and so donald.click is born.

I will likely post monthly showing off anything interesting I have done recently. Topics and projects may vary widely as I like to let creativity flow in many directions at once to pick up that sweet, sweet, knowledge.  This post will be mostly an introduction on me as well as a breakdown of how this basic sight is designed. So let us begin.

I had to start with getting some basic dev tools. I first got npm installed as well as a set up a new GitHub repository. Then I went ahead and got Astro/Tailwind combo implemented into VS Code and read up a little bit on TypeScript as well reviewed some of my old BitBurner scripts. Sweet game that, recommend you check it out.  After that I was off to the races. 

The framework I’m using for this site is Astro, with Tailwind CSS. This setup let me skip a lot of traditional HTML and CSS boilerplate and jump straight into building components with TypeScript, which was a huge plus since I already had some hands-on experience with it from the game BitBurner.  Anyway Astro’s component-based system made it easy to structure the site cleanly. I then used Vercel to handle deployments, builds, and SSL automatically in the background. Most of the code came together through a mix of trial and error, YouTube tutorials, and the occasional assist from your favorite LLM. By leaning on utility-first styling with Tailwind and Astro’s layout system, I was able to create quickly and focus on structure, style and readability instead of fighting CSS.

I started first with the directory frameworks. Keeping things organized in projects has been something I picked up while developing little games in Unity and Godot. I figure keeping most files organized would help with debug later but to be honest I didn’t even need it.  Even as I added more and more components to the site something that didn’t feel at all like Unity or Godot was the fact that new stuff didn’t break the old. Most debug was done in the VSCode directly when errors occurred and using the integrated (your favorite LLM) to look up proper syntax. I was able to slowly begin creating the style of global style of the site. This global CSS allowed me to use the aforementioned component-based system to create reusable segments which meant once the homepage felt complete, the rest of the site was going to fall much faster.  Re-usability for the win! 

The blog section of the site was the most interesting for me to design. I wanted the ability to store posts for queue and I was able to implement a handy little hiding function that allows me to pre-post blogs if needed. It works by checking today’s date daily 12:00noon and if any post exists in the content blog that has a date code before the moment, it automatically get revealed on the site! To add new posts I still have to push new changes but it means I can stockpile changes if needed! 

Anyways on to my next project. I think I am going to begin working on an Amiibo card hack so stay tuned for that! 

Goodbye world!