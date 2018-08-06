<template>
  <div class="page-toast">
    <h1 class="page-title">Toast</h1>
    <div class="page-toast-wrapper">
      <div class="" @click="openToast">点击弹出</div>
    </div>
  </div>
</template>
<script>
import { Toast } from "@/example/index.js";

export default {
  methods: {
    openToast() {
      Toast("消息");
    }
  }
};
</script>

