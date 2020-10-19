<template>
  <div id="app">
    {{ options }}
    <p>Selected option: <span style="color: #f00;">{{selected}}</span></p>
    <zen-multiselect
      class="multisel"
      :options.prop="options"
      :value.prop="selected"
      :placeholder="'jan'"
      :label="'label'"
      @open="onDropdownChange"
      @input="onInput"
      :custom-label.prop="getName"
    >
    </zen-multiselect>
    <my-web-component :msg="msg" :arr.prop="options" @clicked="onDropdownChange"></my-web-component>
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
    options: [
      {
        value: 'initial1',
        label: 'Initial 1',
      },
      {
        value: 'initial2',
        label: 'Initial 2',
      },
    ],
  }),
  components: {
    HelloWorld,
  },
  mounted() {
    const multiselect = document.getElementsByTagName('zen-multiselect')[0];
    multiselect.addEventListener('open', (event) => { console.log('[Event]', event.detail); });

    setTimeout(() => {
      this.options = [
        {
          value: 'option1',
          label: 'Option 1',
        },
        {
          value: 'option2',
          label: 'Option 2',
        },
      ];
      [this.selected] = this.options;
    }, 2000);
  },
  methods: {
    onDropdownChange() {
      console.log('opened');
    },
    onInput(val) {
      console.log('val', val);
      [this.selected] = val.detail;
    },
    getName(opt) {
      return `${opt.label} jan`;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.multisel {
  max-width: 300px;
  background-color: #f00;
  margin: auto;
}
</style>
