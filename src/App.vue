<template>
  <div id="app">
  <div class="app-container" :style="isBlur">
    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#" @click="onHomePageHandle">East India Trading Co.</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="#" @click="onBookingHandle">Booking</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div v-if="!isAtBooking">
      <Map/>
    </div>
    <div v-else>
      <Booking/>
    </div>
  </div>
  <div v-if="false" class="login-container" >
    <Login/>
    <Map/>
    <Booking/>
  </div>
  <div>
    <Popup :popup="isOpenPopup" :routes="routes" :aToB="aToB"/>
  </div>
</div>
</template>

<script>
import Login from './components/Login.vue'
import Map from './components/Map.vue'
import Popup from './components/Popup.vue'
import Booking from './components/Booking.vue'
import EventBus from './event-bus.js';
export default {
  name: 'App',
  components: {
    Map,
    Popup,
    Login,
    Booking,
  },
  data() {
    return {
      isOpenPopup: false,
      isLoggedin: false,
      inputedUsername: "",
      inputedPassword: "",
      isAtBooking: false,
      routes: [], 
      aToB: {
        source:"",
        des:"",
      }
    }
  },
  mounted () {
    EventBus.$on("handleModal", () => {
      this.isOpenPopup = !this.isOpenPopup
    })
    EventBus.$on("handleLogin", () => {
      this.isLoggedin = true
    });
    EventBus.$on("setRoutes", (routes) => {
      this.routes = routes
    });
    EventBus.$on("setSourceDes", (sourceDes) => {
      // eslint-disable-next-line
      debugger
      this.aToB = sourceDes
    });
  },
  methods : {
    onBookingHandle() {
      if (!this.isAtBooking) {
        this.isAtBooking = true
      } 
    },
    onHomePageHandle() {
      if (this.isAtBooking) {
        this.isAtBooking = false
      } 
    }
  },
  computed: {
    isBlur() {
      return this.isOpenPopup ? "filter: blur(5px)" : "";
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#search-button{
  max-width:20%
}
.app-container {
  text-align: center;
  background: #AD5794;
  min-height: 100vh
}

.login-container {
  text-align: center;
  background: #AD5794;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction:column;
}

.login-form {
  max-width: 100%;
  width: 500px;
}

.grid-container {
  display: grid;
  grid-template-columns: 400px auto ;
  grid-gap: 10px;
  padding: 10px;
  text-align: start;
  justify-content:center;
  margin-top: 3%
}
.dimension-size {
  width: 20%;
  margin-right: 2%;
  margin-left: 2%;
}
.input-row {
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content:center
}
.icon-weight {
    display: block;
    width: 36px;
    height: 20px;
    background-image: url("../icon/weight-svgrepo.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
}
.icon-width {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../icon/width.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
}

.icon-depth {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../icon/depth.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
}

.icon-height {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../icon/height.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
}

.icon-date {
    display: block;
    width: 20px;
    height: 20px;
    background-image: url("../icon/date.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
}

.icon-category {
    display: block;
    width: 30px;
    height: 20px;
    background-image: url("../icon/category.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
}


.icon-search {
    display: block;
    width: 30px;
    height: 20px;
    background-image: url("../icon/search.svg");
    background-repeat: no-repeat;
    background-size: 20px 20px;
}

.input-group input {
  background: #FFCCE6
}

.input-row input {
  background: #FFCCE6
}

.input-row select {
  background: #FFCCE6
}

.input-row button {
  background: #FFCCE6
}

.my-row {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.secondary{
  background: #FFCCE6
}
</style>
