'use strict'

const app = Vue.createApp({
  data(){
    return{
      messaggio: "Hello World!",
      titleClass: "text-center mb-5",
      spanClass: "text-danger fs-1 fw-bold",
      link: "https://yt3.googleusercontent.com/UXFC9eFKxjbOcUeEiIFqpywdInXJijIrh5bkfUMPlKhCLKaO6rrTfh5O5IzNTS_2Wap2yBk1J44=s900-c-k-c0x00ffffff-no-rj",
      imgMsg: "Immagine (e testo presente) printati con Vue ^"
    }
  }
});

app.mount("#app");