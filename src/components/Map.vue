
<template>
<div class="grid-container">
  <div class="route-container">
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">From</span>
      <input v-model="cityChosen" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <div class="input-group mb-3">
      <span class="input-group-text" id="inputGroup-sizing-default">To</span>
      <input type="text" v-model="desChosen" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
    </div>
    <label>Cargo dimension(in cm)</label>
    <div class="input-row mb-3">
      <label for="width" class="icon-width " > </label>
      <input type="text" id="width" class="dimension-size form-control" v-model="width"><br><br>
      <label for="height" class="icon-height "> </label>
      <input type="text" id="height" class="dimension-size form-control" v-model="height"><br><br>
      <label for="depth" class="icon-depth"> </label>
      <input type="text" id="depth" class="dimension-size form-control" v-model="depth"><br><br>
    </div>
    <div class="input-row mb-3">
      <label for="weight"  class="icon-weight "> </label>
      <input type="text" id="weight" class=" form-control" style="width:50%" v-model="weight"><br><br>
      <label for="category" class="icon-category dimension-size" ></label>
      <select name="category" id="category" class="form-control" v-model="category">
        <option value=""></option>
        <option value="animals">Animal</option>
        <option value="weapons">Weapon</option>
        <!-- <option value="recorded_delivery">Recorded Delivery</option>
        <option value="cautious_parcels">Cautios Parcel</option> -->
        <option value="refrigerated_goods">Refrigerated Goods</option>
        <option value="prisoners_with_jobs">Prisoners</option>
      </select>
    </div>
    <div class="input-row mb-3">
      <label for="date" class="icon-date" > </label>
      <input type="date" id="date"  class="form-control dimension-size"  style="width:80%" v-model="startDate"><br><br>
    </div>
    <div class="input-row input-group mb-3">
      <button id="search-button" class="form-control" @click="handleBooking">
        <div class="icon-search" style="margin-left:25%">
        </div>
      </button>
    </div>
    </div>
    <div id="map" style="width: 600px; height: 500px;"></div>
</div>
</template>
<script>
import L from 'leaflet';
import data from '../../data/dList.json'
import EventBus from '../event-bus.js';
import { required } from 'vuelidate/lib/validators'
import axios from "axios";

export default {
  name:"MapComponent",
  validations: {
    cityChosen: {
      required,
    },
  },
  data() {
    return {
      map: null,
      cityChosen: null,
      desChosen: null,
      width:null,
      height:null,
      depth:null,
      weight:null,
      category:null,
      startDate:null,
    };
  },
  mounted () {
  this.map = L.map('map').setView([2.846482054534499, 18.56250107288361], 3),
  data.forEach((record) => {
		L.marker(record.longlat).addTo(this.map).on('click', () => {
      if (this.cityChosen) {
        this.desChosen = record.name
      } else {
        this.cityChosen = record.name
      }
    })
  }) 
	// this.map.on('click', function(e) {
  //   console.log(e.latlng)
	// });
	L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
		maxZoom: 19,
		attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
	}).addTo(this.map);
  
  },
  methods: {
    getRoute() {
    
      let body = {
        "startDate":this.startDate + "T08:00:00-00:00",

        "source": this.cityChosen,

        "destination": this.desChosen,

        "category": this.category,

        "weight": parseInt(this.weight),

        "dimensionX": parseInt(this.width),

        "dimensionY": parseInt(this.height),

        "dimensionZ":parseInt(this.depth),
      }
      axios
        .post("https://wa-eit-dk1.azurewebsites.net/api/Calculator", body, {header : {"Access-Control-Allow-Origin": true,         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
        .then((response) => {
          this.info = response.data
          EventBus.$emit("setRoutes", (response.data) );
          EventBus.$emit("setSourceDes", {
            source:this.cityChosen,
            des:this.desChosen,
          } );
          EventBus.$emit("handleModal");
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
          alert("No path was found")
        });
    },
    handleBooking() {
      let errors = this.runValidate()
      if (errors && errors.length > 0){
        alert(errors)
        return
      }
      this.getRoute()
    },
    runValidate() {
      let rs = []
      if (isNaN(this.weight) || this.weight > 100000) {
        rs.push("Weight must be less than 100kg")
        return rs
      }
      if (this.width > 400 || this.height > 400 ||  this.depth > 400) {
        rs.push("Dimensions must be smaller than 4 meters ")
        return rs
      }
      if (!this.cityChosen || !this.desChosen  || !this.category || !this.startDate) {

        rs.push("All fields must be filled")
      }
      if (new Date(this.startDate).setHours(0, 0, 0, 0) < new Date().setHours(0, 0, 0, 0)){
        rs.push("Date must not be in the past")
      }
      return rs
    }
  },
};
</script>
