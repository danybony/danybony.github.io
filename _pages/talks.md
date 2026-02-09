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

  // Most recent first
  // events.reverse();

  var groupedEvents = [];
  var locationMap = {};

  events.forEach(function(event) {
    var key = event.lat + ',' + event.lon;
    if (!locationMap[key]) {
      locationMap[key] = {
        lat: event.lat,
        lon: event.lon,
        location: event.location,
        talks: []
      };
      groupedEvents.push(locationMap[key]);
    }
    locationMap[key].talks.push(event);
  });

  var map = L.map('map').setView([20, 10], 2);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  function addMarker(index) {
    if (index >= groupedEvents.length) return;
    var group = groupedEvents[index];
    var marker = L.marker([group.lat, group.lon]).addTo(map);
    
    var popupContent = "<b>" + group.location + "</b><br>";
    var maxVisible = 3;
    var visibleTalks = group.talks.slice(0, maxVisible);
    
    visibleTalks.forEach(function(talk, i) {
      if (i > 0) popupContent += "<hr>";
      popupContent += "<b>" + talk.title + "</b><br>" + talk.date;
    });
    
    if (group.talks.length > maxVisible) {
      popupContent += "<hr><i>and " + (group.talks.length - maxVisible) + " more events</i>";
    }
    
    marker.bindPopup(popupContent);
    
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