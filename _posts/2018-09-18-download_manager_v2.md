---
title: "Creating an improved Android Download Manager"
excerpt: "An open-source Android library to easily manage files download"
header:
  teaser: "/assets/images/download_manager.jpg"
---

In the last year I worked with some Novoda colleagues on an open&#8209;source, improved version of the Android Download Manager. <br>
We started forking the AOSP one, but in the end we decided to write this new version from scratch.

Some features of the library:
* grouping of multiple files into a single download batch
* better API
* easy Notifications customisation
* no `ContentProviders` or `Broacasts` involved
* …and many more!

You can read more about it in the blog post we wrote:

<blockquote class="embedly-card"><h4><a href="https://blog.novoda.com/download-manager-v2/">The (re)making of a Download Manager</a></h4><p>We created our improved version of the Download Manager, allowing Android developers to add customisable download functionality to their apps.</p></blockquote>
<script async src="//cdn.embedly.com/widgets/platform.js" charset="UTF-8"></script>