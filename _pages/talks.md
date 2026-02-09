---
title: "Public speaking"
layout: single
excerpt: "Some of the public talks I've done."
sitemap: false
permalink: /talks.html
author_profile: true
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

<div id="map" style="height: 400px; margin-bottom: 2em; z-index: 1;"></div>

<script>
  var events = [
    {% for year_group in site.data.talks %}
      {% for event in year_group.events %}
        {% if event.lat and event.lon %}
        {
          title: "{{ event.title | escape }}",
          location: "{{ event.location | escape }}",
          date: "{{ event.date }}",
          lat: {{ event.lat }},
          lon: {{ event.lon }}
        },
        {% endif %}
      {% endfor %}
    {% endfor %}
  ];

  // Reverse to show chronologically
  events.reverse();

  var map = L.map('map').setView([20, 10], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  function addMarker(index) {
    if (index >= events.length) return;
    var event = events[index];
    var marker = L.marker([event.lat, event.lon]).addTo(map);
    marker.bindPopup("<b>" + event.title + "</b><br>" + event.location + "<br>" + event.date);
    
    setTimeout(function() {
      addMarker(index + 1);
    }, 400); 
  }

  // Start animation when map is ready
  addMarker(0);
</script>

{% for year_group in site.data.talks %}
## {{ year_group.year }}
<ul>
  {% for event in year_group.events %}
  <li> <b>{{ event.title }}</b>
    <br>{{ event.date }}
    <br>{{ event.description }}
    {% if event.image %}
    <figure>
      <a href="{{ event.image_full }}"><img src="{{ event.image }}" alt="{{ event.image_alt }}"></a>
    </figure>
    {% endif %}
  </li>
  {% endfor %}
</ul>
{% endfor %}