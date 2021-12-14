import Vue from 'vue'
import App from './App'

// vuex
import store from './store'

// 引入全局uView
import uView from "uview-ui";
Vue.use(uView);

Vue.prototype.$store = store

Vue.config.productionTip = false

App.mpType = 'app'
Vue.use(uView)

const app = new Vue({
    store,
    ...App
})

// 引入请求封装
require('./common/request/index.js')(app)

app.$mount()