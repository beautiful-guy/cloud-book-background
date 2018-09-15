// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import {$axios} from "./utils";
// 执行了里面对象的install方法，将install方法里所有的组件声明为全局组件
Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.prototype.$axios = $axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
