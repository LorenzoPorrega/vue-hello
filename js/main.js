'use strict'

const app = Vue.createApp({
  data(){
    return{
      messaggio: "Hello World!",
      titleClass: "text-center",
      spanClass: "text-danger fs-1 fw-bold",
      link: "https://yt3.googleusercontent.com/UXFC9eFKxjbOcUeEiIFqpywdInXJijIrh5bkfUMPlKhCLKaO6rrTfh5O5IzNTS_2Wap2yBk1J44=s900-c-k-c0x00ffffff-no-rj",
    }
  }
});

app.mount("#app");