---
title: "The making of an Android library: Download Manager v2"
excerpt: "How to get started creating a library, what are the difficulties we encountered and finally how to publish and share the library between multiple projects, presented at Droidcon Turin 2019"
header:
  teaser: "/assets/images/download_manager_droidcon_italy_2019_small.jpg"
---

Software are a great way to 

---

All this is something we experienced when creating the Novoda Download Manager.

Android allows developers to add download functionality to their apps, but if you want to extend that behaviour, or customise it to your liking — that’s not easy. That’s why at Novoda we created an improved version of the Download Manager. We started forking the original AOSP version and added several features on top of it, like the ability to download to internal storage or batching of multiple files. The original architecture was not very maintainable in the long therm though, so we decided to rewrite it from scratch as a brand new library and improve it even more! 

To know more about which features we added to it and how flexible it is, you can find more details [in this blog post](../download_manager_v2).

---

The library was always open source during development, and still is, and you can find the [repo here](https://github.com/novoda/download-manager).

When creating and maintaining an open-source repository there are some things to consider, especially if it hosts a software library:

The _Readme_ file is the showcase for the project. It's the first page new users will see when evaluating your library and for this reason it should describe how to add the library as a project dependency and how to use it to fulfill some of the most common use cases. It's not needed to cover edge cases or more advanced features here, as users will be able to see these both in the demo app and possibly in some dedicated wiki pages.

Third-party developers contributions are one of the most positive aspects in publishing projects as open-source. In case of libraries is pretty important that maintainers are present and address feedbacks, issues and feature requests, asking for more details when needed. It's also good to remember that it's ok to say _no_ to feature requests, but always motivating the reasons behind this. 

[Github templates]() can make your life easier as they are a good way to pre-populate pull-request and issue forms. They are especially important in the second case, when a library user filling an issue can find a predefined schema to follow to provide a set of information that can help maintainers to better understand the problem.

<script async class="speakerdeck-embed" data-id="ba866b52e93445329174b1de6b1cefd9" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>
