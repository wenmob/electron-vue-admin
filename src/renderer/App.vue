<template>
  <div id="app">
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>

<script>
export default {
  name: "xiaolg",
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      isRouterAlive: true
    };
  },
  mounted() {
    
  },
  methods: {
    /**
     * 刷新功能
     */
    reload() {
      this.isRouterAlive = false;
      this.$nextTick(function() {
        this.isRouterAlive = true;
      });
    },
    // /**
    //  * 监听键盘事件F12 打开开发者工具
    //  */
    // listenKey() {
    //   document.onkeydown = event => {
    //     let e = event || window.event || arguments.callee.caller.arguments[0];
    //     if (e && e.keyCode == 122) {  
    //       const win = this.$remote.getCurrentWebContents();
    //       win.openDevTools();
    //     }
    //   };
    // }
  }
};
</script>

<style>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  font: 12px/1.5 Tahoma, Helvetica, Arial, "宋体", sans-serif;
  background: #cecece;
}

#app {
  position: relative;
  width: 100%;
  height: 100%;
}
/* CSS */
</style>
