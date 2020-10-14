import Vue from 'vue';
import App from './App.vue';

window.Vue = Vue;
Vue.config.productionTip = false;

/* const loadScript = (scriptUrl) => new Promise((resolve) => {
  const script = document.createElement('script');
  script.onload = () => {
    resolve();
  };
  script.async = true;
  script.src = scriptUrl;
  document.head.appendChild(script);
}); */

async function initApp() {
  // await loadScript('https://unpkg.com/vue');
  // await loadScript('./js/my-web-component.js');

  new Vue({
    render: (h) => h(App),
  }).$mount('#app');
}

initApp();
