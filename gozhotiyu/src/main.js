// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import '@/assets/css/common.css'
import '@/assets/js/rem.js'
import Vue from 'vue'
import App from './App'
import router from './router'

import api from '@/api/index'
Vue.prototype.$api= api;
Vue.prototype.$imgurl = process.env.IMG_URL;
Vue.prototype.$videourl = process.env.VIDEO_URL;
import {globalFun} from '@/mixins/globalFun'
Vue.mixin(globalFun)

import 'vant/lib/index.css';


// 轻提示
import { Toast } from 'vant';
Toast.setDefaultOptions({
  duration: 3000
})
Vue.use(Toast);

// 粘性布局
import { Sticky } from 'vant';
Vue.use(Sticky);
// 轮播图
import { Swipe, SwipeItem } from 'vant';
Vue.use(Swipe).use(SwipeItem);
// Popup
import { Popup } from 'vant';
Vue.use(Popup);
// 上拉菜单
// import { ActionSheet } from 'vant';
// Vue.use(ActionSheet);
// Dialog
// import { Dialog } from 'vant';
// Vue.use(Dialog);
// List 列表
import { List } from 'vant';
Vue.use(List);

/** vant end */

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
