<template>
  <section class="w-flexview">
    <slot name="navbar" v-if="showNavbar">
      <w-navbar :title="title" v-if="!!title">
        <a @click="goBack" slot="left" class="back">
          后退
          <!-- <yd-navbar-back-icon></yd-navbar-back-icon> -->
        </a>
      </w-navbar>
    </slot>
    <section class="w-content" ref="scrollView" id="scrollView">
      <slot></slot>
    </section>
    <slot name="top"></slot>
    <!-- <section class="yd-scrollview" ref="scrollView" id="scrollView">
            <slot></slot>
        </section>

        <slot name="bottom"></slot>

        <slot name="tabbar"></slot> -->
  </section>
</template>

<script >
export default {
  name: "w-layout",
  props: {
    link: String,
    back: Boolean,
    title: String,
    showNavbar: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack() {
      console.log(window.history.length);
      window.history.length > 1 ? this.$router.go(-1) : this.$router.push("/");
    }
  },
  watch: {}
};
</script>
<style lang="scss" scoped>
.w-navbar {
  position: relative;
  display: flex;
  z-index: 99;
}
.w-scrollview {
}
.w-flexview {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
.w-content {
  margin: 0 20px;
}
.back {
  display: flex;
  height: 100%;
  align-items: center;
  padding-right: 20px;
}
</style>



