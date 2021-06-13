import Vue from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
// import CrossUIVue from '@/entry.esm';
import CrossUIVue from '@/entry.esm';
Vue.use(CrossUIVue);

import { applyPolyfills, defineCustomElements } from '@cross-ui/core/loader';

Vue.config.ignoredElements = [/cross-\w*/];

// Bind the custom elements to the window object
applyPolyfills().then(() => {
  defineCustomElements();
});

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
