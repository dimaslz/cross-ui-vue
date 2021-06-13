import Vue from 'vue';
import CrossUIVue from './dist/cross-ui-vue.esm';

import { applyPolyfills, defineCustomElements } from '@cross-ui/core/loader';

Vue.config.ignoredElements = [/cross-\w*/];

const install = function installSetup(Vue) {
	Vue.use(CrossUIVue);

	// Bind the custom elements to the window object
	applyPolyfills().then(() => {
		defineCustomElements();
	});
};

export default install;