<template>
  <section class="w-flexview">
    <slot name="navbar" v-if="showNavbar">
      <w-navbar :title="title" v-if="!!title">
        <a @click="goBack" slot="left">
          <div>后退</div>
          <!-- <yd-navbar-back-icon></yd-navbar-back-icon> -->
        </a>
      </w-navbar>
    </slot>
    <section class="w-scrollview" ref="scrollView" id="scrollView">
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
}
.w-scrollview {
  margin: 20px;
}
</style>



