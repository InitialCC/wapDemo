<template>
  <div id="app">

    <transition :name="transitionName" class="main-router">
      <router-view class="111">

      </router-view>
    </transition>
  </div>
</template>


<script>
export default {
  name: "App",
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
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>

 <style lang="scss">
@import "/assets/styles/reset.scss";
@import "/assets/styles/main.scss";
body {
}
</style>
