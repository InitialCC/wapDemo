<template>
  <div id="app">
    <router-link class="page-back" v-if="visible" :to="'/'">
      <span>后退</span>
    </router-link>
    <router-view>
    </router-view>
  </div>
</template>


<script>
export default {
  name: "App",
  computed: {
    visible() {
      return ["/", "/header", "/search"].indexOf(this.$route.path) < 0;
    }
  },
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
  watch: {
    $route(to, from) {
      // const toDepth = to.path.split("/").length;
      // const fromDepth = from.path.split("/").length;
      // toDepth < fromDepth ? (this.flag = false) : (this.flag = true);
      // console.log(this.transitionName);
    }
  }
};
</script>

 <style lang="scss">
@import "/assets/styles/reset.scss";
@import "/assets/styles/main.scss";
body {
  background-color: #fafafa;
}
.page-title {
  font-size: 20px; /*no*/
  margin: 20px auto;
  text-align: center;
  display: block;
  line-height: 1;
}
.page-back {
  display: inline-block;
  top: 12px;
  left: 10px;
  position: absolute;
  width: 40px;
  height: 40px;
  text-align: center;
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
  // transform: translateX(100%);
  // transform: translateX(100%);
  // transform: translate3d(-100%, 0, 0);
}

.slide-right-enter {
  transform: translateX(100%);
  // transform: translate3d(-100%, 0, 0);
  // transform: translateX(100%);
}
.slide-right-leave-active {
  transform: translateX(-100%);
  // transform: translateX(100%);

  // transform: translate3d(100%, 0, 0);
}

.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 500ms;
  height: 100%;
  top: 46px;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
body {
  overflow-x: hidden;
  width: 100%;
  height: 100%;
}
.pages-main {
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
