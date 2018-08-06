<template>
  <div class="mf-loading-container">
    <img :src="loadImg">
  </div>
</template>
<script>
import LoadGif from "/assets/load.gif";

const COMPONENT_NAME = "loading";
export default {
  name: COMPONENT_NAME,
  data() {
    return {
      loadImg: LoadGif
    };
  }
};
</script>
<style lang="scss">
.mf-loading-container {
  img {
    width: 100px;
    height: 100px;
    display: block;
  }
}
</style>