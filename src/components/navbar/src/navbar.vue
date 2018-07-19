<template>
  <header class="w-navbar navbar-bottom-line-color" :class="classes" :style="{backgroundColor: bgcolor, height: height}">
    <div class="w-navbar-item">
      <slot name="left"></slot>
    </div>
    <div class="w-navbar-center-box" :style="{height: height}">
      <div class="w-navbar-center">
        <slot name="center">
          <span class="w-navbar-center-title" :style="{color: color, fontSize: fontsize}">{{title}}</span>
        </slot>
      </div>
    </div>
    <div class="w-navbar-item">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script type="text/babel">
export default {
  name: "w-navbar",
  props: {
    title: String,
    fixed: Boolean,
    bgcolor: {
      default: "#FFF"
    },
    color: {
      default: "#5C5C5C"
    },
    fontsize: {
      default: ".4rem"
    },
    height: {
      default: "1rem"
    }
  },
  computed: {
    classes() {
      return this.fixed ? "w-navbar-fixed" : "";
    }
  }
};
</script>

<style lang="scss" scoped>
@import "/styles/main.scss";
.w-navbar {
  position: relative;
  display: flex;
  border-bottom: 1px solid #ddd;
  .w-navbar-item {
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    /* flex: 0 0 25%; */
    padding: 0 0.2rem;
    font-size: 0.3rem;
    white-space: nowrap;
    overflow: hidden;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    color: inherit;
    &:first-child {
      -webkit-box-ordinal-group: 2;
      -webkit-order: 1;
      -ms-flex-order: 1;
      order: 1;
      margin-right: -25%;
    }
    &:last-child {
      -webkit-box-ordinal-group: 4;
      -webkit-order: 3;
      -ms-flex-order: 3;
      order: 3;
      -webkit-box-pack: end;
      -webkit-justify-content: flex-end;
      -ms-flex-pack: end;
      justify-content: flex-end;
    }
  }
}
.w-navbar-center-box {
  -webkit-box-ordinal-group: 3;
  -webkit-order: 2;
  -ms-flex-order: 2;
  order: 2;
  height: 0.9rem;
  width: 50%;
  margin-left: 25%;
}
.w-navbar-center {
  width: 100%;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -ms-flex-align: center;
  align-items: center;
  height: inherit;
}
</style>
