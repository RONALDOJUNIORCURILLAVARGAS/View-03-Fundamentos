<template>
  <div>
    <!--<img alt="Vue logo" src="./assets/logo.png">-->
    <!--Si no se declara star en counter.vue props este sera un atributo
    y no una properties-->
    <!--Como no uso el counter comento esta linea-->
     <!-- <Counter :start="100"/> -->
<Indecision/>
  </div>
    
</template>

<script>
//import Counter from './components/Counter.vue'
import Indecision from './components/Indecision.vue'
export default {
  components: {
    //Como nu uso el counter lo comento
   //  Counter , 
     Indecision},
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
