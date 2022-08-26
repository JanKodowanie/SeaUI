
<template>
<div class="container flex-column" style="display:flex,flex-direction:row">
   <h2 class="m-3"> Booking Information</h2>
    <div class="booking-container">
        <div v-for="booking in bookingList" class="  booking-record secondary" :key="booking.id">
            <div class="row p-2 m-2">
                ID: {{booking.id}}
            </div>
            <div class="row  p-2 ml-2 ml-2 mr-2">
              <div class="col-sm">
                From {{booking.source}} To {{booking.destination}}
              </div>
              <div class="col-sm">
                Category: {{booking.category}}
              </div>
              <div class="col-sm">
                cost: ${{booking.cost/100}}
              </div>
            </div>
            <div class="row ">
              <div class="col-sm">
                Start date: {{booking.startDate.split("T")[0]}}
              </div>
              <div class="col-sm">
                Arrival date: {{booking.arrivalDate.split("T")[0]}}
              </div>
            </div>
        </div>
    </div>

</div>
</template>
<style>
.booking-container {
  width: 70%
}
.flex-column{
  display: flex;
  flex-direction: column;
  align-items:center;
}
</style>

<script>
import axios from "axios";

export default {
  name:"BookingComponent",
  data() {
    return {
        bookingList: []
    };
  },
  mounted () {
      axios
        .get("https://wa-eit-dk1.azurewebsites.net/api/BookingModels",{header : { "Access-Control-Allow-Origin": true, 'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
        .then((response) => {
          this.bookingList = response.data.reverse()
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        });
  },
  methods: {

  },
};
</script>
