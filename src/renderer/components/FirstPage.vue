<template>
  <div class="page-container">
    <!--管理系统-->
    <h2 class="first-h">管理系统</h2>
    <ul class="first-ul1">
      <li v-for="item in dataList" :key="item.id" @click="goWeb(item)">
        <img :src="item.imgUrl"/>
        <p class="first-ul1-p1">{{item.name}}</p>
        <span class="first-span1">{{item.spa}}</span>
      </li>
      <div style="clear:both"></div>
    </ul>
    <!--公共-->
    <h2 class="first-h">公共</h2>
    <ul class="first-ul1">
      <li v-for="item in dataList1" :key="item.id" @click="goWeb(item)">
        <img :src="item.imgUrl"/>
        <p class="first-ul1-p1">{{item.name}}</p>
        <span class="first-span1">{{item.spa}}</span>
      </li>
      <div style="clear:both"></div>
    </ul>
    <!--测试-->
    <h2 class="first-h">测试</h2>
    <ul class="first-ul1">
      <li v-for="item in dataList3" :key="item.id" @click="goWeb(item)">
        <img :src="item.imgUrl"/>
        <p class="first-ul1-p1">{{item.name}}</p>
        <span class="first-span1">{{item.spa}}</span>
      </li>
      <div style="clear:both"></div>
    </ul>
    <!--APP-->
    <h2 class="first-h">APP</h2>
    <ul class="first-ul1">
      <li v-for="item in dataList2" :key="item.id" @click="goWeb(item)">
        <img :src="item.imgUrl"/>
        <p class="first-ul1-p1">{{item.name}}</p>
        <span class="first-span1">{{item.spa}}</span>
      </li>
      <div style="clear:both"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  data() {
    return {
      dataList: [],
      dataList1: [],
      dataList2: [],
      dataList3: []
    }
  },
  mounted () {
    this.cre1();
    this.cel2();
    this.cel3();
    this.cel4();
  },
  methods: {
    goWeb(u) {
      this.$router.push({path: '/web', query: {targetObject: u}})
    },
    // 管理系统
    cre1() {
      this.dataList = [
        {
          id: 1,
          imgUrl: require('../assets/business.png'),
          name: '业务系统',
          spa: 'Transport system',
          url: 'http://newapp.evcoming.com/sharego/common/login.action' // http://vs.evcoming.com/#/
        },
        {
          id: 2,
          imgUrl: require('../assets/carzi.png'),
          name: '车资系统',
          spa: 'Transport system',
          url: 'http://vs.evcoming.com/#/' // http://vs.evcoming.com/#/
        },
        {
          id: 3,
          imgUrl: require('../assets/carjt.png'),
          name: '集团用车',
          spa: 'Group car system',
          url: 'http://group.evcoming.com/#/'
        },
        {
          id: 4,
          imgUrl: require('../assets/bosssystem.png'),
          name: 'BOSS',
          spa: '业务支撑系统',
          url: 'http://boss.evcoming.com/login.html'
        },
        {
          id: 5,
          imgUrl: require('../assets/yunwei.png'),
          name: '运维H5',
          spa: '测试',
          url: 'http://test.yunwei.evcoming.com/#/login'
        }
      ];
    },
    // 公共
    cel2() {
      this.dataList1 = [
        {
          id: 1,
          imgUrl: require('../assets/gitlab.png'),
          name: 'GitLab',
          spa: 'Community Edition',
          url: 'http://115.231.63.170:28080/'
        },
        {
          id: 2,
          imgUrl: require('../assets/bug.png'),
          name: '禅道',
          spa: 'Zan&Tao',
          url: 'http://chandao.evcoming.com:82/index.php?m=user&f=login&referer=Lw=='
        },
        {
          id: 3,
          imgUrl: require('../assets/jiekouxiez.png'),
          name: '接口协作',
          spa: 'Apizza',
          url: 'https://apizza.net/'
        },
        {
          id: 4,
          imgUrl: require('../assets/oa.png'),
          name: 'OA',
          spa: 'wraver',
          url: 'http://oa.xlgcx.com:88/login/Login.jsp?logintype=1'
        },
        {
          id: 5,
          imgUrl: require('../assets/renshiEHR.png'),
          name: 'EHR',
          spa: 'vanguard',
          url: 'http://ehr.evcoming.com/'
        },
        {
          id: 6,
          imgUrl: require('../assets/teambition.png'),
          name: 'teambition',
          spa: '团队协作工具',
          url: 'https://account.teambition.com/login?next_url=https%3A%2F%2Fwww.teambition.com%2Fprojects'
        }
      ]
    },
    // app
    cel3() {
      this.dataList2 = [
        {
          id: 1,
          imgUrl: require('../assets/apple.png'),
          name: 'xlg-ios',
          spa: '测试环境',
          url: 'https://www.pgyer.com/xlg-ios'
        },
        {
          id: 2,
          imgUrl: require('../assets/android.png'),
          name: 'xlg-android',
          spa: '测试环境',
          url: 'https://www.pgyer.com/xlg-android'
        }
      ]
    },
    // 测试
    cel4() {
      this.dataList3 = [
        {
          id: 1,
          imgUrl: require('../assets/ceshi.png'),
          name: '车资-测试',
          spa: '10.0.8.102:8091',
          url: 'http://10.0.8.102:8091/#/login'
        },
        {
          id: 2,
          imgUrl: require('../assets/ceshi.png'),
          name: '业务系统-test环境',
          spa: 'testnewapp.evcoming.com',
          url: 'http://testnewapp.evcoming.com/sharego/common/login.action'
        },
        {
          id: 3,
          imgUrl: require('../assets/ceshi.png'),
          name: '业务系统-预发布',
          spa: 'yufabu.newapp.evcoming...',
          url: 'http://yufabu.newapp.evcoming.com/sharego/common/login.action'
        },
        {
          id: 4,
          imgUrl: require('../assets/ceshi.png'),
          name: '业务系统-152环境',
          spa: '122.246.11.152:8081',
          url: 'http://122.246.11.152:8081/sharego/common/login.action'
        }
      ]
    }
  }
}
</script>

<style>
  @import url("../assets/css/common.css");
  .first-h {
    margin: 0px;
    padding: 0px;
    height: 25px;
    font-size: 15px;
    font-weight: 500;
    padding: 5px 13px;
    color: #fff;
    background: -webkit-gradient(linear, left top, left bottom, from(#363636), to(#030303)); 
  }
  .first-ul1 {
    list-style: none;
    margin: 0px;
    padding: 0px;
    padding-bottom: 20px;
  }
  .first-ul1 li {
    float: left;
    margin-top: 20px;
    margin-left: 20px;
    width: 140px;
    height: 100px;
    background: #fff;
    border-radius: 4px;
    -webkit-box-shadow:2px 2px 5px #333333;
    border: 2px solid #fff;
    padding: 7px 10px;
    cursor: pointer;
  }
  .first-ul1 li:hover {
    border: 2px solid #E56F6F;
  }
  .first-btn1 {
    background: #fff;
    width: 68px;
    height: 68px;
    border-radius: 7px;
    border-style: none;
    background-repeat: no-repeat;
    background-size: contain;
    cursor: pointer;
  }
  .first-span1 {
    color: #A0A0A0;
    font-size: 12px;
  }
  .first-ul1-p1{
    font-size: 13px;
    font-weight: 600;
    padding: 0px;
    margin: 0px;
    margin-top: 9px;
    color: #434343;
  }
  #carzi {
    background-image: url("../assets/carzi.png");
    background-color: #2399BC;
  }
  
</style>


