<template>
  <div>
    <h2>LeaFletSample01</h2>
    <div id="map"></div>
  </div>
</template>

<script>
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'LeafletSample01',
  map: '',
  // components: {
  //   L
  // },
  created () {
    console.log(this)
    console.log(L)
  },

  mounted () {
    this.initMap()
    // L.map("map").setView([33.4501001, -101.9107704], 4); // Coordinates, Zoom
  },
  methods: {
    initMap () {
      // 47.2061924,8.9419101,14z
      // this.map = L.map('map').setView([47.2061924, 8.9419101], 14)
      // L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      //   attribution:
      //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      // }).addTo(this.map)
      // L.marker([47.2061924, 8.9419101])
      //   .addTo(map)
      //   .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      //   .openPopup()
    }
  },
  data () {
    return {
      // zoom: 13
      // center: latLng(47.41322, -1.219482),
      // url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      // attribution:
      //   '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      // withPopup: latLng(47.41322, -1.219482),
      // withTooltip: latLng(47.41422, -1.250482),
      // currentZoom: 11.5,
      // currentCenter: latLng(47.41322, -1.219482),
      // showParagraph: false,
      // mapOptions: {
      //   zoomSnap: 0.5
      // },
      // showMap: true
    }
  }

  // methods: {
  //   zoomUpdate(zoom) {
  //     this.currentZoom = zoom;
  //   },
  //   centerUpdate(center) {
  //     this.currentCenter = center;
  //   },
  //   showLongText() {
  //     this.showParagraph = !this.showParagraph;
  //   },
  //   innerClick() {
  //     alert("Click!");
  //   }
  // }
}
</script>
<style>
#map {
  position: relative;
  padding: 0;
  width: 1200px;
  height: 600px;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
