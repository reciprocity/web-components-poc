import Vue from "vue";
import vueCustomElement from "vue-custom-element";

import myWebComponent from "./src/components/MyWebComponent.vue";

// Configure Vue to ignore the element name when defined outside of Vue.
Vue.config.ignoredElements = ["my-web-component"];

// Enable the plugin
Vue.use(vueCustomElement);

// Register your component
Vue.customElement("my-web-component2", myWebComponent, {
  // Additional Options: https://github.com/karol-f/vue-custom-element#options
});
