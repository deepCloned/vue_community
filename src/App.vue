<template>
  <div id="app">
    <header-common />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import HeaderCommon from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    HeaderCommon,
    Footer
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: #f8f8f8;
  font-size: 14px;
}
</style>
