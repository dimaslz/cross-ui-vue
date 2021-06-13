import Vue from 'vue'
import App from './App.vue'

import CrossUIVueSetup from '@cross-ui/vue/setup';

Vue.use(CrossUIVueSetup);

new Vue({
  render: h => h(App),
}).$mount('#app')
