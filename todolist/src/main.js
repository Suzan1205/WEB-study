// 入口js
import Vue from 'vue'

import App from './App.vue'
import './base.css'

Vue.config.productionTip = false

new Vue({
  el: '#app',        //页面上的app
  components: {
    App
  },
  template: '<App/>' //模板：标签格式的字符串
})

