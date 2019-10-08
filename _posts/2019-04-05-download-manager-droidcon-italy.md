---
title: "The making of an Android library: Download Manager v2"
excerpt: "How to get started creating a library, what are the difficulties we encountered and finally how to publish and share the library between multiple projects"
header:
  teaser: "/assets/images/download_manager_droidcon_italy_2019_small.jpg"
---

Android allows developers to add download functionality to their apps, but if you want to extend that behaviour, or customise it to your liking — that’s not easy. That’s why at Novoda we created an improved version of the Download Manager. We started forking the original AOSP version and added several features on top of it, like the ability to download to internal storage or batching of multiple files. The original architecture was not very maintainable in the long therm though, so we decided to rewrite it from scratch as a brand new library and improve it even more! 

To know more about which features we added to it and how flexible it is, you can find more details [in this blog post](../download_manager_v2).

---

I gave a talk at Droidcon Turin 2019, where I explained some of the reasoning behind most of the choices we did while creating this new library, what we considered in order to make it maintainable and extensible, and how to be good citizens by making it open-source and allowing others to contribute to the project.

These are the slides for the presentation I gave:

<script async class="speakerdeck-embed" data-id="ba866b52e93445329174b1de6b1cefd9" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

<br>
And this is the recording:

<iframe width="560" height="315" src="https://www.youtube.com/embed/D6fnE0HZImo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>