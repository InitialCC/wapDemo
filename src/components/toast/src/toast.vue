<template>
    <transition name="wap-toast-pop">
        <div class="wap-toast" v-show="visible">
            <span class="toast-text" :style="{ 'padding-top': iconClass === '' ? '0' : '10px' }">{{ message }}</span>
        </div>
    </transition>
</template>
<script>
export default {
  name: "wap-toast",
  props: {
    message: String,
    iconClass: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      visible: false
    };
  }
};
</script>
<style lang="scss" scoped>
@import "/styles/_mixin.scss";
.wap-toast {
  position: fixed;
  max-width: 80%;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  box-sizing: border-box;
  text-align: center;
  z-index: 1000;
  -webkit-transition: opacity 0.3s linear;
  transition: opacity 0.3s linear;
  @include placeMiddle;
}
.wap-toast-pop-enter,
.wap-toast-pop-leave-active {
  opacity: 0;
}
</style>

