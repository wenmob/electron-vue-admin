<template>
  <div class="page-containera" id="webIframe">
     <div class="sh-d1">
       <span class="sh-d1-s1">{{userPage.name}}</span>
       <img class="sh-d1-s4" src="../assets/back.png" @mousedown="showIn($event)" @mouseup="showOut($event,1)"/>
       <img class="sh-d1-s5" src="../assets/go.png" @mousedown="showIn($event)" @mouseup="showOut($event,2)"/>
       <span class="sh-d1-s6">地址：{{userPage.url}}</span>
       <img class="sh-d1-s2" src="../assets/exit.png" @mousedown="showIn($event)" @mouseup="showOut($event,4)"/>
       <img class="sh-d1-s3" src="../assets/reference.png" @mousedown="showIn($event)" @mouseup="showOut($event,3)">
       <div style="clear: both"></div>
     </div>
     <div v-if="loading" class="sh-d2" align="center">
       <img width="260" height="260" src="../assets/loading.gif">
     </div>
     <div v-if="errorLoad" class="sh-d2" style="background: #fff" align="center">
       <div class="sh-d2-d1">网络故障，请<a @click="refener">刷新</a>重试</div>
     </div>
     <webview v-if="winner" class="sh-web" :src="userPage.url" id="myIframe" autosize plugins allowpopups></webview>
  </div>
</template>

<script>
const ipc = require('electron').ipcMain;
export default {
  name: 'ShowWeb',
  data() {
    return {
      loading: false,
      errorLoad: false,
      winner: true,
      iframeer: false,
      userPage: {
        name: '',
        url: ''
      }
    }
  },
  inject: ['reload'],
  mounted() {
    if (this.$route.query.targetObject) {
      this.userPage = {...this.$route.query.targetObject};
      this.listenIframe();
    }
  },
  methods: {
    listenIframe() {
      const web = document.getElementById("myIframe");
      this.loading = true;
      /**
       * 监听完成情况
       */
      web.addEventListener("dom-ready", (e) => {
        this.loading = false;
        this.listenKey();
        const webContents = web.getWebContents();
        /**
         * 解决没有弹出新地址的问题, 默认情况下是不支持有弹出框的
         */
        webContents.on('new-window', (event, url) => {
          event.preventDefault();
          // web.open(url);
          this.$ipc.send('open-brower', url);
        })
      });
      /**
       * 关闭状态
       */
      web.addEventListener('close', function() {
        web.src = 'about:blank';
      });
      /**
       * 访问出问题
       */
      web.addEventListener(
        "did-get-response-details",
        ({ httpResponseCode }) => {
          console.log(httpResponseCode);
          if (httpResponseCode != 200) {
            this.errorLoad = true;
          }
        }
      );
      /**
       * 加载失败
       */
      web.addEventListener(
        "did-fail-load",
        ({ errorCode, errorDescription, validatedURL }) => {
            this.errorLoad = true;
        }
      );
    },
    goFirst() {
      this.$router.push('/')
    },
    /**
     * 刷新按钮
     */
    refener() {
      const web = document.getElementById("myIframe");
      if (this.errorLoad) {
        this.errorLoad = false;
        web.clearHistory();
        this.reload();
      } else {
        web.reloadIgnoringCache();
      }
    },
    /**
     * 监听键盘事件F12 打开开发者工具
     */
    listenKey() {
      const web = document.getElementById("myIframe");  
      document.onkeydown=function(event) {
        let e = event || window.event || arguments.callee.caller.arguments[0];
        if(e && e.keyCode == 123) {
          if (web.isDevToolsOpened()) {
            web.closeDevTools();
          } else {
            web.openDevTools();
          }
        }
      }
    },
    goToBack() {
      const web = document.getElementById("myIframe");
      web.goBack();
    },
    goToNext() {
      const web = document.getElementById("myIframe");
      web.goForward();
    },
    showIn(event) {
      const e = event.currentTarget;
      e.classList.add("inClass");
    },
    showOut(event,n) {
      const e = event.currentTarget;
      e.classList.remove("inClass");
      switch (n) {
        case 4:
          this.goFirst();
          break;
        case 3:
          this.refener();
          break;
        case 2:
          this.goToNext();
          break;
        case 1:
          this.goToBack();
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style>
  @import url("../assets/css/common.css");
  .sh-d1 {
    position: fixed;
    height: 26px;
    width: calc(100% - 26px);
    background: #08816C;
    line-height: 26px;
    padding: 7px 13px;
    left: 0px;
    top: 0px;
    background: -webkit-gradient(linear, left top, left bottom, from(#0AB293), to(#08816C)); 
  }
  .sh-d1-s1 {
    float: left;
    font-size: 14px;
    color: #fff;
  }
  .sh-d1-s2 {
    float: right;
    width: 24px;
    cursor: pointer;
    -webkit-box-shadow:2px 2px 5px #333333;
    border-radius: 15px;
  }
  .sh-d1-s3 {
    float: right;
    width: 24px;
    margin-right: 10px;
    margin-top: 2px;
    cursor: pointer;
    -webkit-box-shadow:2px 2px 5px #333333;
    border-radius: 15px;
  }
  .sh-d1-s4 {
    float: left;
    width: 20px;
    margin-left: 30px;
    margin-top: 4px;
    cursor: pointer;
    -webkit-box-shadow:2px 2px 5px #333333;
  }
  .sh-d1-s5 {
    float: left;
    width: 20px;
    margin-left: 10px;
    margin-top: 4px;
    cursor: pointer;
    -webkit-box-shadow:2px 2px 5px #333333;
  }
  .sh-d1-s6 {
    float: left;
    width: 460px;
    height: 26px;
    font-size: 12px;
    font-weight: 600;
    color: #7E7C7C;
    display: inline-block;
    background: #fff;
    margin-left: 14px;
    margin-top: 1px;
    border-radius: 4px;
    padding: 0px 7px;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .sh-web {
    position: absolute;
    width: 100%;
    height: calc(100% - 40px);
    top: 40px;
  }
  .sh-web1 {
    position: absolute;
    width: 80%;
    height: calc(100% - 200px);
    top: 40px;
    z-index: 3000;
  }
  .sh-d2 {
    position: fixed;
    width: 100%;
    height: calc(100% - 44px);
    border-top: 1px solid #fff;
    top: 40px;
    left: 0px;
    background: #0E1A2D;
    z-index: 5000;
  }
  .sh-d2 img{
    position: absolute;
    left: 50%;
    margin-left: -130px;
    top: 50%;
    margin-top: -130px;
  }
  .sh-d2-d1 {
    position: absolute;
    width: 200px;
    padding: 7px 10px;
    height: 40px;
    font-size: 20px;
    text-align: center;
    line-height: 40px;
    left: 50%;
    margin-left: -110px;
    top: 50%;
    margin-top: -50px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .sh-d2-d1 a{
    color: #0000CC;
    cursor: pointer;
  }
  .inClass{
    -webkit-box-shadow:0px 0px 0px #333333;
  }
  .outClass {
    -webkit-box-shadow:2px 2px 5px #333333;
  }
</style>


