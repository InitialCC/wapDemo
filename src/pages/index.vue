<template>
  <div class="main">
    <w-footer :items="footItem" @onSelect="onSel" :seleted="footSel"></w-footer>
    <router-view>
    </router-view>
    <!-- <transition>
      <router-view>
      </router-view>
    </transition> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "",
      footSel: 0,
      footItem: [
        {
          title: "Demo",
          path: "Demo"
        },
        {
          title: "Base",
          path: "Base"
        },
        {
          title: "Test",
          path: "Test"
        }
      ]
    };
  },

  methods: {
    onSel(val) {
      console.log(val);
    }
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
.slide-left-enter {
  transform: translateX(100%);
}
.slide-left-leave-active {
  transform: translateX(100%);
}
.slide-right-enter {
  transform: translateX(100%);
}
.slide-right-leave-active {
  transform: translateX(100%);
}
.page {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #efeff4;
}
// .slide-left-enter {
//   transform: translateX(100%);
// }
// .slide-left-leave-active {
//   transform: translateX(-100%);
// }
</style>



