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
        @open="logEvent($event)"
        @select="logEvent($event)"
        multiple="true"
        track-by="value"
      >
      </zen-multiselect2>
    </div>
    <p><b>Selected:</b> <small>{{ selected }}</small></p>
    <button @click="addItem()">Add item</button>

    <ul class="event-list">
      <li v-for="event in events" :key="event.id">{{ event.value }}</li>
    </ul>

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
    events: [],
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
    logEvent(event) {
      const value = `${this.events.length + 1}. ${event.type}:  ${event.detail}`;
      this.events.push({ id: Math.random(), value });
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
      this.logEvent(event);
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

.event-list {
  z-index: 10000;
  font-size: 0.8rem;
  background-color: #000000c7;
  color: #0f0;
  list-style: none;
  position: fixed;
  left: 10px;
  top: 10px;
  padding: 0;
  min-width: 200px;
  text-align: left;
  border-radius: 6px;
  box-shadow: 1px 2px 20px #0000008f;
  min-height: 20vh;
  max-height: 20vh;
  overflow-x: hidden;
  overflow-y: auto;

  li {
    padding: 3px 12px;
    list-style: none;
  }
}
</style>
