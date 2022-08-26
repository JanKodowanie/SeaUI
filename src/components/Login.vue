<template>
<div>
    You need to login before continue
    <div class="login-form ">
        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Username</span>
        <input v-model="inputedUsername" type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-default">Password</span>
        <input type="text" v-model="inputedPassword" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default">
        </div>
        <div class="btn-group" role="group" aria-label="Basic example">
        <button type="button" class="btn" style="color:#FFCCE6" @click="onLogin">Login</button>
        </div>
    </div>
</div>
</template>

<script>
import EventBus from '../event-bus.js';
export default {
  name:"LogIn",
  data() {
    return {
        inputedPassword:"",
        inputedUsername:"",
    };
  },
  mounted () {
  },
  methods: {
    onLogin () {
        console.log(this.inputedPassword,this.inputedUsername)
        if (this.inputedPassword === "admin" && this.inputedUsername === "admin") {
            EventBus.$emit("handleLogin");
        }
    }
  },
};
</script>

<style>
.modalshow {
  display: unset;
}
.modal-dialog {
  top: 30%;
}
.modal-header {
  background-color: #ffcce6;
  padding: 6px 16px;
  font-size: 16px;
}

.modal-footer {
  border: none;
}
</style>
