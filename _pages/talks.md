---
title: "Public speaking"
layout: single
excerpt: "Some of the public talks I've done."
sitemap: false
permalink: /talks.html
classes: wide
---

<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>

<div id="map" class="talks-map" role="region" aria-label="Map of the places where I gave a talk"></div>

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

  var map = L.map('map', {
    minZoom: 2,
    scrollWheelZoom: false,
    worldCopyJump: true
  }).setView([30, 10], 2);

  // OpenStreetMap tiles; the dark theme recolours them with a CSS filter
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  var markers = [];
  var accentColor = function() {
    return getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#0a7d4f';
  };
  var accent = accentColor();
  document.addEventListener('themechange', function() {
    accent = accentColor();
    markers.forEach(function(m) { m.setStyle({ fillColor: accent }); });
  });

  function addMarker(index) {
    if (index >= groupedEvents.length) return;
    var group = groupedEvents[index];
    var marker = L.circleMarker([group.lat, group.lon], {
      radius: 6 + Math.min(group.talks.length, 6),
      color: '#fff',
      weight: 2,
      fillColor: accent,
      fillOpacity: 0.9,
      className: 'talks-map__marker'
    }).addTo(map);
    markers.push(marker);

    var popupContent = '<p class="talks-map__place">' + group.location + '</p>';
    var maxVisible = 3;
    group.talks.slice(0, maxVisible).forEach(function(talk) {
      popupContent += '<p class="talks-map__talk"><b>' + talk.title + '</b><br><span>' + talk.date + '</span></p>';
    });
    if (group.talks.length > maxVisible) {
      popupContent += '<p class="talks-map__more">and ' + (group.talks.length - maxVisible) + ' more events</p>';
    }

    marker.bindPopup(popupContent);

    setTimeout(function() {
      addMarker(index + 1);
    }, 250);
  }

  // Start animation when map is ready
  addMarker(0);
</script>

<div class="timeline">
{% for year_group in site.data.talks %}
  <section class="timeline__year">
    <h2 class="timeline__label" id="talks-{{ year_group.year }}">{{ year_group.year }}</h2>
    <ol class="timeline__events">
      {% for event in year_group.events %}
      <li class="card talk{% if event.image %} talk--with-image{% endif %}">
        <div class="talk__body">
          <p class="meta">{{ event.date }}{% if event.location %} <span aria-hidden="true">·</span> {{ event.location }}{% endif %}</p>
          <h3 class="talk__title">{{ event.title }}</h3>
          <p class="talk__description">{{ event.description }}</p>
        </div>
        {% if event.image %}
        <a class="talk__image" href="{{ event.image_full | default: event.image }}" data-lightbox-group="talks" data-caption="{{ event.image_alt | escape }}">
          <img src="{{ event.image }}" alt="{{ event.image_alt }}" loading="lazy">
        </a>
        {% endif %}
      </li>
      {% endfor %}
    </ol>
  </section>
{% endfor %}
</div>
