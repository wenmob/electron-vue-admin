<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'xiaolg',
    provide () {
      return {
        reload: this.reload
      }
    },
    data () {
      return {
        isRouterAlive: true
      }
    },
    mounted () {

    },
    methods: {
      reload () {
        this.isRouterAlive = false
        this.$nextTick(function () {
          this.isRouterAlive = true
        })
      }
    }
    
  }
</script>

<style>
 html,body {
   width: 100%;
   height: 100%;
   margin: 0px;
   padding: 0px;
   font: 12px/1.5 Tahoma,Helvetica,Arial,'宋体',sans-serif;
   background: #CECECE; 
 }
 
 #app {
   position: relative;
   width: 100%;
   height: 100%;
 }
  /* CSS */
</style>
