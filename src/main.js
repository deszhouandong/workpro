import Vue from 'vue'
import App from './App.vue'
// import './registerServiceWorker'
import router from './router'
// import store from './store'

 new Vue({
    // store,
    router,
    render:h=>h(App)
})
console.log(Vue,'vue')
