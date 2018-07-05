---
title: "Word Clock featured on MagPi"
excerpt: "My Word Clock Android Thing project was featured on July 2018 MagPi issue"
header:
  teaser: "/assets/images/world_clock_magpi_teaser.jpg"
---

As you might know I'm really passionate about watches, clocks and different ways to tell the time in general.
So last year I started toying with the idea of a clock that allows the user to really _read_ the time: instead of using rotating hands or displayed numbers to show the current hours and minutes, the clock I created uses the user's language to write a sentence describing the time, in the same way a person would answer to the question _"what time is it?"_. That's the main reason behind the name of the project: **Word Clock**.

While this is definitely not the first example of this kind of clocks, it was the first one using Android Things and integrating with Google Assistant. 
To give the user even more options to customize their clock, I created an Android mobile companion app that allows them to change the color of the letters, using the [Nearby API](https://developers.google.com/nearby/) to automatically discover the clock without any configuration required. It is the same level of friction-less customization that you can find on other popular consumer devices, like the Chromecast.

I also integrated the clock with [Smart Home](https://developers.google.com/actions/smarthome/), so that the user can configure it in an even simpler way: just talking with the Google Assistant. It is incredibly simple to change part of its aspect just saying _"Ok Google, change the word clock color to green"_ or _"Hey Google, dim the world clock"_.

Last year Google and NXP did a contest on the popular Hackster.io portal, about [building connected devices, powered by Android Things](https://www.hackster.io/contests/Google).
There were dozens of completed projects and hundreds of ideas for the contest and in that occasion my project got an Honorable Mention on the contest.<br>
It is, still today, one of the most viewed and appreciated projects and I just discovered that it has been featured in the section _Amazing Android Things Projects_ of the [July 2018 issue](https://www.raspberrypi.org/magpi/issues/71/) of MagPi, the official Raspberry Pi magazine!

<figure>
	<a href="/assets/images/world_clock_magpi_large.jpg"><img src="/assets/images/world_clock_magpi_small.jpg" alt="My project on the July 2018 issue of MagPi"></a>
</figure>

If you are curious about how to build one word clock yourself, you can check the [project on Hackster.io](https://www.hackster.io/daniele-bonaldo/android-things-word-clock-46cc14) for detailed instructions and the [Github repository](https://github.com/danybony/word-clock) for the source code (and different hardware configurations).