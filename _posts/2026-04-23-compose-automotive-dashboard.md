---
title: "Building a Ferrari-inspired morphing dial with Compose Multiplatform"
excerpt: "A single dial that morphs between clock, stopwatch, and compass — and how I built it with Compose Multiplatform"
header:
  teaser: "/assets/images/automotive_dashboard_small.png"
---

I have a deep appreciation for design that goes beyond function — the kind where you can feel the intention behind every detail. So when Ferrari revealed the [Luce infotainment concept](https://www.instagram.com/p/DXJfJtmjc2c/){:target="_blank"}, a collaboration with Jony Ive's design studio LoveFrom, I stopped scrolling. The dashboard they showed wasn't just beautiful — it was a great example of clean design mixed with delightful animations. One element in particular caught my eye: a single circular dial that morphs fluidly between a clock, a stopwatch, and a compass. Minimal, confident, and obsessively refined.

<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/reel/DXJfJtmjc2c/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14" style=" background:#FFF; border:0; border-radius:3px; box-shadow:0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15); margin: 1px; max-width:540px; min-width:326px; padding:0; width:99.375%; width:-webkit-calc(100% - 2px); width:calc(100% - 2px);"><div style="padding:16px;"> <a href="https://www.instagram.com/reel/DXJfJtmjc2c/?utm_source=ig_embed&amp;utm_campaign=loading" style=" background:#FFFFFF; line-height:0; padding:0 0; text-align:center; text-decoration:none; width:100%;" target="_blank"> <div style=" display: flex; flex-direction: row; align-items: center;"> <div style="background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 40px; margin-right: 14px; width: 40px;"></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 100px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 60px;"></div></div></div><div style="padding: 19% 0;"></div> <div style="display:block; height:50px; margin:0 auto 12px; width:50px;"><svg width="50px" height="50px" viewBox="0 0 60 60" version="1.1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink"><g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g transform="translate(-511.000000, -20.000000)" fill="#000000"><g><path d="M556.869,30.41 C554.814,30.41 553.148,32.076 553.148,34.131 C553.148,36.186 554.814,37.852 556.869,37.852 C558.924,37.852 560.59,36.186 560.59,34.131 C560.59,32.076 558.924,30.41 556.869,30.41 M541,60.657 C535.114,60.657 530.342,55.887 530.342,50 C530.342,44.114 535.114,39.342 541,39.342 C546.887,39.342 551.658,44.114 551.658,50 C551.658,55.887 546.887,60.657 541,60.657 M541,33.886 C532.1,33.886 524.886,41.1 524.886,50 C524.886,58.899 532.1,66.113 541,66.113 C549.9,66.113 557.115,58.899 557.115,50 C557.115,41.1 549.9,33.886 541,33.886 M565.378,62.101 C565.244,65.022 564.756,66.606 564.346,67.663 C563.803,69.06 563.154,70.057 562.106,71.106 C561.058,72.155 560.06,72.803 558.662,73.347 C557.607,73.757 556.021,74.244 553.102,74.378 C549.944,74.521 548.997,74.552 541,74.552 C533.003,74.552 532.056,74.521 528.898,74.378 C525.979,74.244 524.393,73.757 523.338,73.347 C521.94,72.803 520.942,72.155 519.894,71.106 C518.846,70.057 518.197,69.06 517.654,67.663 C517.244,66.606 516.755,65.022 516.623,62.101 C516.479,58.943 516.448,57.996 516.448,50 C516.448,42.003 516.479,41.056 516.623,37.899 C516.755,34.978 517.244,33.391 517.654,32.338 C518.197,30.938 518.846,29.942 519.894,28.894 C520.942,27.846 521.94,27.196 523.338,26.654 C524.393,26.244 525.979,25.756 528.898,25.623 C532.057,25.479 533.004,25.448 541,25.448 C548.997,25.448 549.943,25.479 553.102,25.623 C556.021,25.756 557.607,26.244 558.662,26.654 C560.06,27.196 561.058,27.846 562.106,28.894 C563.154,29.942 563.803,30.938 564.346,32.338 C564.756,33.391 565.244,34.978 565.378,37.899 C565.522,41.056 565.552,42.003 565.552,50 C565.552,57.996 565.522,58.943 565.378,62.101 M570.82,37.631 C570.674,34.438 570.167,32.258 569.425,30.349 C568.659,28.377 567.633,26.702 565.965,25.035 C564.297,23.368 562.623,22.342 560.652,21.575 C558.743,20.834 556.562,20.326 553.369,20.18 C550.169,20.033 549.148,20 541,20 C532.853,20 531.831,20.033 528.631,20.18 C525.438,20.326 523.257,20.834 521.349,21.575 C519.376,22.342 517.703,23.368 516.035,25.035 C514.368,26.702 513.342,28.377 512.574,30.349 C511.834,32.258 511.326,34.438 511.181,37.631 C511.035,40.831 511,41.851 511,50 C511,58.147 511.035,59.17 511.181,62.369 C511.326,65.562 511.834,67.743 512.574,69.651 C513.342,71.625 514.368,73.296 516.035,74.965 C517.703,76.634 519.376,77.658 521.349,78.425 C523.257,79.167 525.438,79.673 528.631,79.82 C531.831,79.965 532.853,80.001 541,80.001 C549.148,80.001 550.169,79.965 553.369,79.82 C556.562,79.673 558.743,79.167 560.652,78.425 C562.623,77.658 564.297,76.634 565.965,74.965 C567.633,73.296 568.659,71.625 569.425,69.651 C570.167,67.743 570.674,65.562 570.82,62.369 C570.966,59.17 571,58.147 571,50 C571,41.851 570.966,40.831 570.82,37.631"></path></g></g></g></svg></div><div style="padding-top: 8px;"> <div style=" color:#3897f0; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:550; line-height:18px;">Visualizza questo post su Instagram</div></div><div style="padding: 12.5% 0;"></div> <div style="display: flex; flex-direction: row; margin-bottom: 14px; align-items: center;"><div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(0px) translateY(7px);"></div> <div style="background-color: #F4F4F4; height: 12.5px; transform: rotate(-45deg) translateX(3px) translateY(1px); width: 12.5px; flex-grow: 0; margin-right: 14px; margin-left: 2px;"></div> <div style="background-color: #F4F4F4; border-radius: 50%; height: 12.5px; width: 12.5px; transform: translateX(9px) translateY(-18px);"></div></div><div style="margin-left: 8px;"> <div style=" background-color: #F4F4F4; border-radius: 50%; flex-grow: 0; height: 20px; width: 20px;"></div> <div style=" width: 0; height: 0; border-top: 2px solid transparent; border-left: 6px solid #f4f4f4; border-bottom: 2px solid transparent; transform: translateX(16px) translateY(-4px) rotate(30deg)"></div></div><div style="margin-left: auto;"> <div style=" width: 0px; border-top: 8px solid #F4F4F4; border-right: 8px solid transparent; transform: translateY(16px);"></div> <div style=" background-color: #F4F4F4; flex-grow: 0; height: 12px; width: 16px; transform: translateY(-4px);"></div> <div style=" width: 0; height: 0; border-top: 8px solid #F4F4F4; border-left: 8px solid transparent; transform: translateY(-4px) translateX(8px);"></div></div></div> <div style="display: flex; flex-direction: column; flex-grow: 1; justify-content: center; margin-bottom: 24px;"> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; margin-bottom: 6px; width: 224px;"></div> <div style=" background-color: #F4F4F4; border-radius: 4px; flex-grow: 0; height: 14px; width: 144px;"></div></div></a><p style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; line-height:17px; margin-bottom:0; margin-top:8px; overflow:hidden; padding:8px 0 7px; text-align:center; text-overflow:ellipsis; white-space:nowrap;"><a href="https://www.instagram.com/reel/DXJfJtmjc2c/?utm_source=ig_embed&amp;utm_campaign=loading" style=" color:#c9c8cd; font-family:Arial,sans-serif; font-size:14px; font-style:normal; font-weight:normal; line-height:17px; text-decoration:none;" target="_blank">Un post condiviso da Ferrari (@ferrari)</a></p></div></blockquote>
<script async src="//www.instagram.com/embed.js"></script>

Good UX, for me, is exactly this: the absence of friction, the presence of intent. Not just that things work, but that they feel right — that every transition is smooth, every proportion deliberate, every detail earned. When I saw that dial I thought: *I want to build that*. Not to ship a product, but to understand it, to feel through my fingers how much craft goes into something that looks this effortless.

I picked Compose Multiplatform — a framework I know well and genuinely enjoy — and started building.



## Disclaimer

This project is strictly for educational purposes and is not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected to Ferrari S.p.A., LoveFrom, or any of their subsidiaries or affiliates. "Ferrari", the Prancing Horse logo, the "Luce" name, and all related designs are registered trademarks and the exclusive intellectual property of Ferrari S.p.A. This project generates no revenue and exists solely as a technical exploration for the developer community.



## What it does

The dial has three modes, each with a distinct visual identity:

- **Clock** — a traditional analog face with hour, minute, and second hands against a dark dial
- **Stopwatch** — a yellow face with two sub-dials for minutes and hours, all clock hands converging on the elapsed seconds position
- **Compass** — a clean dial with cardinal directions and degree markers that rotate as the device moves

Switching between modes isn't a jump cut. Everything morphs: the face color, the center shape, the tick mark lengths, the hands — all animate simultaneously. The clock's pill-shaped center expands sideways into the stopwatch's sub-dial housing, or collapses into the compass's clean circle. This choreography was the hardest thing to get right, and the most satisfying once it worked.

<figure>
	<img src="/assets/images/automotive_dashboard.png">
</figure>


## The technical side

### Drawing the dial: Canvas and polar coordinates

The entire dial is drawn on a Compose `Canvas`, using nothing but lines, arcs, paths, and text. There are no images or vector assets — everything is procedural.

The core geometry is polar. Each tick mark, hand, and label is placed by converting an angle and a radius into Cartesian coordinates:

```kotlin
val x = center.x + (radius * cos(angleRad)).toFloat()
val y = center.y + (radius * sin(angleRad)).toFloat()
```

The clock hands are drawn as `Path` objects — a rectangle with a rounded top (an `arcTo` semicircle) and an optional tail for the seconds hand. Getting the arc direction right in Compose's canvas (y-axis points down, so clockwise is positive sweep) took some careful thinking.

Scaling was an interesting challenge. Because the dial needs to look identical at any size and on any display density, I use a single `sizeRatio` factor derived from the actual canvas pixel width:

```kotlin
sizeRatio = canvasWidth / 1144f  // 1144px is the base design size
```

Every size — tick lengths, stroke widths, hand widths, font sizes — is expressed as a multiple of `sizeRatio`. The critical detail is that you must *not* use `dp.toPx()` for canvas drawing, because `toPx()` bakes in the display density. On a 2× display, the canvas already has twice the pixels; a `dp` value that also doubles gives you proportions that are inconsistent across screens. The fix is to work in pure pixel fractions of the canvas size.

For text, the same principle applies to `sp`: instead of `fontSize = 48.sp * sizeRatio` (which includes the display DPI factor from `sp`), I compute the exact canvas-pixel size I want and convert it back to sp by neutralising density and font scale:

```kotlin
fontSize = (48f * sizeRatio / density / fontScale).sp
```

### Compose animations: morphing state

The morphing effect is powered by Compose `updateTransition`, a declarative API that manages multiple animations in sync. By associating this single transition with several extension methods — such as `animateColor` for the dial face or `animateDp` for dimensions and positions — we can define exactly how each property should look for our three states: **Clock**, **Stopwatch**, and **Compass**.

<figure>
	<img src="/assets/images/automotive_dashboard_morph_animation.gif">
</figure>

The syntax is remarkably simple: you just define the target value for each state, and Compose takes care of the rest, providing smooth animations with beautifully interpolated values. Because the entire system is tied to the current `uiState`, switching modes triggers a coordinated choreography where every visual element "knows" where it needs to go:

```kotlin
val transition = updateTransition(targetState = uiState, label = "DialTransition")

val outerBackgroundColor by transition.animateColor(
    transitionSpec = { tween(600) }, label = "FaceColor"
) { state ->
    when (state) {
        is UiState.Clock     -> Color(0xFFCCCCCC)
        is UiState.Stopwatch -> Color(0xFFFFDD00)
        is UiState.Compass   -> Color(0xFFCCCCCC)
    }
}

val primaryTickLength by transition.animateDp(
    transitionSpec = { tween(600) }, label = "TickLength"
) { state ->
    when (state) {
        is UiState.Clock -> 36.dp
        is UiState.Stopwatch -> 48.dp
        is UiState.Compass -> 24.dp
    }
}
```

For the hand angles I learned something non-obvious: `transition.animateFloat` is designed for *discrete state targets*, not for continuously changing values. Using it to track real-time clock seconds caused the hands to animate backward every 60 seconds — the animation saw the angle target jump from ~360° to ~0° and took the shortest path. The fix was to compute hand angles directly from elapsed time each frame (no animation), and use the transition system only for two dimensionless *lerp factors*:

```kotlin
val nonCompassLerp by transition.animateFloat(...) { state ->
    if (state is UiState.Compass) 0f else 1f
}
val stopwatchLerp by transition.animateFloat(...) { state ->
    if (state is UiState.Stopwatch) 1f else 0f
}
```

The actual hand angle is then a blend of the frozen clock and frozen stopwatch positions, scaled by these factors:

```kotlin
val secondsHandAngle = (clockSecondsAngle + (swSecondsAngle - clockSecondsAngle) * swRatio) * nonCompassLerp
```

This also required keeping *separate* time counters for clock and stopwatch, so each freezes when its mode is inactive. That way, when you switch from stopwatch back to clock, the hands animate from where the stopwatch left them — not from where the clock time happened to jump when the elapsed counter was reset.

### Compose Multiplatform: one codebase, four targets

All the rendering logic lives in `commonMain`. The same `Canvas` drawing code runs on:

- **Android** — via Jetpack Compose
- **Desktop (JVM)** — via Compose for Desktop
- **Web (Wasm)** — deployed to GitHub Pages via a GitHub Actions workflow
- **Web (JS)** — fallback for older browsers

The build matrix is simple because Kotlin Multiplatform does the heavy lifting: there's no per-platform rendering code, no platform-specific sizing logic. The `sizeRatio` system handles the rest.

A GitHub Actions workflow builds the Wasm distribution on every push to `main` and deploys it automatically — no manual steps. You can see the live result here:

<iframe
  src="https://www.danielebonaldo.com/automotive-dashboard/"
  width="100%"
  height="620"
  style="border:none; border-radius:12px;"
  title="Automotive Dashboard — live demo"
></iframe>

> If your browser doesn't render iframes, [open the live demo here](https://www.danielebonaldo.com/automotive-dashboard/){:target="_blank"}.

### Not just an animation — a fully interactive demo

What you see above isn't a pre-recorded sequence: it's a **live, interactive application** built with Compose Multiplatform. You can run it on Android, on Desktop, or right here in the browser — and it behaves exactly the same everywhere.

Use the buttons to switch between modes and try it out:

- The **clock** displays real system time — the hands move with your actual hours, minutes, and seconds.
- The **stopwatch** is fully functional: start, pause, and reset it, and watch the elapsed time accumulate precisely.
- The **compass** is the only simulated part — the ViewModel emits random heading changes every second, mimicking the experience of a car moving through turns in a real driving scenario.

Every transition between these states is smooth and interpolated, thanks to the Compose animation system described above — but the data behind each mode is real (or realistically simulated in case of the compass direction), making this a proper interactive experience rather than a canned demo.


## The role of AI

I started building this largely by hand — laying out the geometry, working through the state machine, writing the initial animations. But at several points, having an AI collaborator made a genuine difference.

The **angle and path geometry** for the dial hands (arc directions, sweep signs, coordinate conversions) involves enough edge cases in Compose's y-down coordinate system that having a second pair of eyes to reason through the math — and catch when I had the sweep angle backwards — saved real time.

The **animation bug** — hands rotating backward at the 60-second mark — was subtle. The root cause (using `transition.animateFloat` as a continuous tracker when it's designed for discrete targets) wasn't obvious from looking at the symptom. Talking through the mechanism of how `animateFloat` computes its from/to values helped me see the fix quickly.

The **density scaling bug** — inconsistent text and tick proportions across displays (and platforms) — involved understanding the full chain: canvas pixels → `sizeRatio` → `dp.toPx()` → the extra density factor. Working through exactly where the density crept in benefited from systematic auditing across the whole drawing codebase.

And across all of it: the iteration loop of "this looks wrong, here's why I think it is, let's reason through it" was faster and more precise with an AI that could hold the full context of the problem.



## What I learned

Building something beautiful, even in miniature and even as a learning exercise, demands the same rigour that makes real products feel good. The Ferrari Luce dial has maybe ten moving parts visually. Implementing it faithfully involved: polar geometry, animation state machines, density-independent scaling, cross-platform rendering, WebAssembly deployment, and a fair amount of debugging subtle bugs.

Good UX isn't just about the final frame. It's about every frame in between.

---

*You can find [the project on GitHub](https://github.com/danybony/automotive-dashboard){:target="_blank"}. All code is open source under an educational use intent; see the disclaimer above.*
