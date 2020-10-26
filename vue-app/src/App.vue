<template>
  <div id="app">
    <div class="multiselect-container">
      <p>Custom element:</p>
      <zen-multiselect2
        id="multiselect1"
        class="multisel"
        :options="JSON.stringify(options)"
        :value="JSON.stringify(selected)"
        placeholder="Choose!"
        :show-checkboxes="true"
        :allow-empty="true"
        label="label"
        @input="onInput"
        multiple="true"
        track-by="value"
      >
      </zen-multiselect2>
    </div>
    <p><b>Selected:</b> <small>{{ selected }}</small></p>
    <button @click="addItem()">Add item</button>

    <my-web-component :msg="msg" :arr="JSON.stringify(options)" @clicked="logEvent($event)">
    </my-web-component>
    <my-web-component2 :msg="msg" :arr="JSON.stringify(options)" @clicked="logEvent($event)">
    </my-web-component2>
    <input style="display: block; margin:auto" type="text" v-model="msg"/>
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'App',
  data: () => ({
    msg: 'empty',
    selected: '',
    options: [1, 2, 3].map((n) => ({ value: `initial${n}`, label: `Initial ${n}` })),
  }),
  components: {
    HelloWorld,
  },
  mounted() {
    const multiselect = document.querySelector('#multiselect1');
    multiselect.customLabel = (opt) => {
      if (Array.isArray(opt)) {
        return opt.map((n) => n.label).join(', ');
      }
      return opt.label;
    };
  },
  methods: {
    },
    getName(opt) {
      return `${opt.label} jan`;
    },
    addItem() {
      const index = this.options.length + 1;
      this.options.push({ label: `New ${index}`, value: `new${index}` });
    },
    onInput(event) {
      [this.selected] = event.detail;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.multiselect-container {
  max-width: 300px;
  margin: auto;
}
</style>
