---
title: "Do-it-yourselfie"
excerpt: "An Android Things-powered photo booth, presented at DevFest Gorky 2018"
header:
  teaser: "/assets/images/devfest_gorky_small.jpg"
---

Last summer I worked with my friend [Roberto](https://twitter.com/_tiwiz) on a side project for a very important event: his own wedding!
<br>
For this occasion we realised an hand-made photo booth, using the opportunity to experiment with Android Things and the newly announced [Google Photos API](https://developers.google.com/photos/).

The idea behind the project is simple: attendees at the wedding would press a button to take a picture. That photo is then shown for review and shared with the other attendees.
<figure>
	<a href="/assets/images/do-it-yourselfie_scheme.png"><img src="/assets/images/do-it-yourselfie_scheme_small.jpg" alt="The usage flow of our photo booth"></a>
</figure>

The core of our device is a Raspberry Pi 3 running Android Things. That was connected to a big red button which made it immediately clear what the user needed to interact with, to start the photo capture. The camera module we used is a Raspberry Pi Camera module v2, which has a true 8 Mpx sensor and produces pretty good pictures, even with low light.

The Raspberry PI is connected to a monitor through HDMI and at first we tried to implement a live preview from the camera. When we worked on it, however, Android Things wasn't able to render a fluid video stream from the camera, so we went for a workaround: we transformed the monitor into a magic mirror. By using a two-way film, the monitor reflects the people in front if it when the background is black, like a traditional mirror. On the other hand, displaying bright text or images, these are visible through the mirror. This workaround allowed attendees to place themselves on the frame after pressing the button, while a countdown was displayed.

<figure>
	<a href="/assets/images/do-it-yourselfie_final.jpg"><img src="/assets/images/do-it-yourselfie_final_small.jpg" alt="This is how the photo booth was looking like during the wedding"></a>
</figure>

Once the picture is taken, we store it locally as a jpeg file, and when a network connection is available we upload it to a shared Photos album, using the [Google Photos API](https://developers.google.com/photos/). This automatically notifies all the attendees participating to the album that a new picture has been taken. Given the unreliability of the network, we used Android Jetpack’s [WorkManager](https://developer.android.com/topic/libraries/architecture/workmanager/) to schedule a task to upload the stored picture to Photos immediately when a network connection is available.

Google Photos API requires the user to be logged in with the same Google account that created the album where the pictures are being uploaded. Given that our device doesn’t have any keyboard or touchscreen, we created a mobile companion app running on an Android phone. Through this app we could easily login to the right Google account, create a new Photos album and then send the needed information (auth token, configuration, etc) to the device. For the connection between the smartphone and Android Thing, we used [Google Nearby](https://developers.google.com/nearby/), which allowed the two devices to discover each other and share data without any previous configuration.

--- 

<figure>
	<a href="/assets/images/devfest_gorky_speakers.jpg"><img src="/assets/images/devfest_gorky_speakers_small.jpg" alt="Me and Roberto on stage at DevFest Gorky 2018"></a>
</figure>

This weekend Roberto and I spoke at [DevFest Gorky](https://devfest2018.gdgnn.ru/) in Nizhny Novgorod, Russia, presenting the project with two talks. It was an amazing conference, brilliantly organized and with with a very active audience. Kudos to the organisers for such a great event!

In the first talk we covered most of the hardware aspects and included an introduction to Android Things. You can find the slides here:

<script async class="speakerdeck-embed" data-id="8f18ea403a124175a07dbf58b8baa8b2" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

<br>
In the second talk we focused more on the software aspects of the project and the new Google Photos API:
<script async class="speakerdeck-embed" data-id="7de882c8d9bc479ea1e35d878afe2e62" data-ratio="1.77777777777778" src="//speakerdeck.com/assets/embed.js"></script>

---

While we created this project for a specific event, it is still active and we are planning to add more features on it in the future. It is also open source, so if you want to know more just have a look at the [official repository](https://github.com/danybony/do-it-yourselfie).
