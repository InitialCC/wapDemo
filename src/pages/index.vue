<template>
  <div class="main">
    <ul class="fixed foot-navbar">
      <li @click="goPages('/Demo')">
        <span>Demo</span>
      </li>
      <li @click="goPages('/Base')">
        <span>Base</span>
      </li>
      <li @click="goPages('/Test')">
        <span>Test</span>
      </li>
    </ul>
    <transition class="main-router">
      <router-view>
      </router-view>
    </transition>

  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: ""
    };
  },

  methods: {
    // goPages(url) {
    //   this.$router.push(url);
    // }
  },
  watch: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// 直接写px，编译后会直接转化成rem ---- 除开下面两种情况，其他长度用这个
// 在px后面添加/*no*/，不会转化px，会原样输出。 --- 一般border需用这个
// 在px后面添加/*px*/,会根据dpr的不同，生成三套代码。---- 一般字体需用这个

.demo-block {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.8s ease;

  background: #fff;

  height: 100%;
  z-index: 999;
}

.list-ul {
  > li {
    padding: 10px;
    background: #fff;
  }
}

.fixed {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  font-size: 18px;
}
.foot-navbar {
  display: flex;
  background: #fff;
  li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.2rem;

    > span {
      padding: 0 0.26rem;
      font-size: 14px;
    }
  }
}
.router {
  transition: all 0.8s ease;
}

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 0.3s;
  position: absolute;
  width: 100%;
  left: 0;
}
.slide-right-enter {
  transform: translateX(-100%);
}
.slide-right-leave-active {
  transform: translateX(100%);
}
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-active {
  transform: translateX(-100%);
}
</style>



