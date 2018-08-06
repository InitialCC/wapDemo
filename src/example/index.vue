<template>
  <section class="pages-demo">
    <div v-for="group in navs">
      <div class="page-title" v-text="group.title"></div>
      <wap-cell v-for="(item,index) in group.list" :to="item.path" :key="index">
        <div slot="title">
          <i :class="['indexicon', 'icon-' + item.icon]"></i>
          <span>{{ item.name }}</span>
        </div>
      </wap-cell>
    </div>

    <!-- <div class="main-inner">
      <router-view>
      </router-view>
      <transition name="slide-right">
        <router-view class="router">
        </router-view>
      </transition> -->
    <!-- </div> -->
    <!-- <w-footer :items="footItem" @onSelect="onSel" :seleted="footSel"></w-footer> -->
  </section>
</template>

<script>
import { navs } from "@/router/index.js";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      footSel: 0,
      transitionName: "",
      navs: [],
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
  created() {
    this.navs = navs;
  },
  computed: {
    ...mapGetters(["direction"]),
    headerTransition() {
      if (!this.direction) return "";
      return this.direction === "forward"
        ? "vux-header-fade-in-right"
        : "vux-header-fade-in-left";
    },
    viewTransition() {
      if (!this.direction) return "";
      return "vux-pop-" + (this.direction === "forward" ? "in" : "out");
    }
  },
  methods: {
    onSel(val) {}
    // goPages(url) {
    //   this.$router.push(url);
    // }
  },
  watch: {
    $route(to, from) {
      // this.transitionName = this.getRouter(to, from);
      // console.log(this.transitionName);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
// 直接写px，编译后会直接转化成rem ---- 除开下面两种情况，其他长度用这个
// 在px后面添加/*no*/，不会转化px，会原样输出。 --- 一般border需用这个
// 在px后面添加/*px*/,会根据dpr的不同，生成三套代码。---- 一般字体需用这个

.router {
  box-sizing: border-box;

  -webkit-overflow-scrolling: touch;
}
.main-router {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.main-inner {
  margin: 20px;
}
.router-view {
  position: fixed;
  z-index: 20;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
// .page {
//   position: fixed;
//   z-index: 20;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background: #efeff4;
// }
// .slide-left-enter {
//   transform: translateX(100%);
// }
// .slide-left-leave-active {
//   transform: translateX(-100%);
// }
</style>



