<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <!--Si no se declara star en counter.vue props este sera un atributo
    y no una properties-->
      <Counter :start="100"/>
  </div>
    
</template>

<script>
import Counter from './components/Counter.vue'

export default {
  components: { Counter },
  name: 'App',
}
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
</style>
