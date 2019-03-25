<template>
  <div id="app" style="width: 100%;">
    <router-view class="main"/>
  </div>
</template>

<script>
import vHeader from '@/components/header.vue'

export default {
  name: 'App',
  components: { vHeader }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
