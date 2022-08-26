<template>
  <div class="modal" :class="{ modalshow: popup }" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content" style="border: none">
        <div class="modal-header">
          <h5 class="modal-title">
            Choose route from {{ aToB.source }} to {{ aToB.des }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="handleClose"
          ></button>
        </div>
        <div class="modal-body">
          <div class="container text-center">
            <div class="row">
              <div class="col">
                <div class="icon-clock"></div>
              </div>
              <div class="col">
                <div class="icon-money"></div>
              </div>
            </div>
            <div class="row">
              <div class="col" style="border-right: 2px black solid">
                <div><b> Cheapest</b></div>
                <span class="my-row">
                  <span class="icon-hourglass" style="margin-right: 10px" />
                  {{ routes[0] && routes[0].time / 60 }} hours
                </span>
                <span class="my-row">
                  <span class="icon-wallet" style="margin-right: 10px" /> $
                  {{ routes[0] && routes[0].cost / 100 }}
                </span>
                <span class="my-row">
                  <span class="icon-date" style="margin-right: 10px" />
                  {{ routes[0] && routes[0].arrivalDate }}
                </span>
              </div>
              <div class="col">
                <div><b> Fastest</b></div>
                <span class="my-row">
                  <span class="icon-hourglass" style="margin-right: 10px" />{{
                    routes[1] && routes[1].time / 60
                  }}
                  hours
                </span>
                <span class="my-row">
                  <span class="icon-wallet" style="margin-right: 10px" /> $
                  {{ routes[1] && routes[1].cost / 100 }}
                </span>
                <span class="my-row">
                  <span class="icon-date" style="margin-right: 10px" />
                  {{ routes[1] && routes[1].arrivalDate }}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer" style="padding-top: 0px">
          <div class="row" style="margin-bottom: 0px; width: 100%">
            <div class="col">
              <button
                type="button"
                class="btn secondary"
                data-bs-dismiss="modal"
                @click="onLeftClick"
              >
                Book
              </button>
            </div>
            <div class="col">
              <button type="button" class="btn secondary" @click="onRightClick">
                Book
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from "../event-bus.js";
import axios from "axios";
export default {
  name: "ConfirmPopup",
  props: {
    popup: Boolean,
    routes: [
      {
        time: 7200,
        cost: 6000,
        arrivalDate: "9/1/2022",
        bookings: [
          {
            companyId: 1,
            startDate: "2022-08-27T08:00:00+00:00",
            source: "Dakar",
            destination: "St. Helena",
            arrivalDate: "2022-09-01T08:00:00+00:00",
            category: "weapons",
            cost: 6000,
            time: 7200,
          },
        ],
      },
      {
        time: 7200,
        cost: 6000,
        arrivalDate: "9/1/2022",
        bookings: [
          {
            companyId: 1,
            startDate: "2022-08-27T08:00:00+00:00",
            source: "Dakar",
            destination: "St. Helena",
            arrivalDate: "2022-09-01T08:00:00+00:00",
            category: "weapons",
            cost: 6000,
            time: 7200,
          },
        ],
      },
    ],
    aToB: {
      source: "",
      des: "",
    },
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleClose() {
      EventBus.$emit("handleModal");
    },
    onLeftClick() {
      this.routes[0] && this.routes[0].bookings.forEach((item) => {
      axios
        .post("https://wa-eit-dk1.azurewebsites.net/api/BookingModels", item, {header : {"Access-Control-Allow-Origin": true,         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
        .then((response) => {
          this.info = response.data.bpi;
        })
        .catch((error) => {
          console.log(error);
        });
      })
      this.handleClose()
    },
    onRightClick() {
      this.routes[1] && this.routes[1].bookings.forEach((item) => {
      axios
        .post("https://wa-eit-dk1.azurewebsites.net/api/BookingModels", item, {header : {"Access-Control-Allow-Origin": true,         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'}
        })
        .then((response) => {
          this.info = response.data.bpi;
        })
        .catch((error) => {
          console.log(error);
        });
      })
        this.handleClose()
    },
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

.icon-hourglass {
  display: flex;
  width: 20px;
  height: 20px;
  background-image: url("../../icon/hourglass.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
}

.icon-money {
  display: block;
  width: 20px;
  height: 20px;
  background-image: url("../../icon/money.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
}

.col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.row {
  margin-bottom: 10px;
}

.icon-wallet {
  display: block;
  width: 20px;
  height: 20px;
  background-image: url("../../icon/wallet.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
}

.icon-clock {
  display: block;
  width: 20px;
  height: 20px;
  background-image: url("../../icon/clock.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
}

.my-row {
  display: flex;
}
</style>
