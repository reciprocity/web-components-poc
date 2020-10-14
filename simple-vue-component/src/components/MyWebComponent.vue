<template>
  <div class="my-web-component">
    <h1>Simple Vue WC</h1>
    <div>Dynamic: {{ msg }}</div>
  </div>
</template>

<script>
  export default {
    name: 'myWebComponent',
    props: ['msg']
  }
</script>
<style lang="scss" scoped>
.my-web-component {
  display: block;
  max-width: 480px;
  margin: 1rem auto;
  background-image: linear-gradient(40deg,#e5e0f0,#fbfaff);
  padding: 1rem 3rem;
  padding-top: 0.5rem;
  border-radius: 3px;
  box-shadow: 1px 1px 2px rgb(0 0 0 / 14%),
    1px 3px 11px rgb(0 0 0 / 14%);
}

h1 {
  color: #988fb2;
  margin: 0.1em 0;
}
</style>