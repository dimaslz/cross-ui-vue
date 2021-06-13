// Import vue components
import Vue from 'vue';
import * as components from '@/components/index';

// import { applyPolyfills, defineCustomElements } from '@cross-ui/core/loader';
Vue.config.ignoredElements = [/cross-\w*/];

// // Bind the custom elements to the window object
// applyPolyfills().then(() => {
//   defineCustomElements();
// });

// install function executed by Vue.use()
const install = function installCrossUIVue(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/components/index';
