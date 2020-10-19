import Vue from 'vue';
import vueCustomElement from 'vue-custom-element';

import MyWebComponent from './components/MyWebComponent.vue';

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = [
  'my-web-component'
];

// Enable the plugin
Vue.use(vueCustomElement);

// Register your component
Vue.customElement('my-web-component', MyWebComponent, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
});