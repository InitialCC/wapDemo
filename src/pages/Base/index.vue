<template>
  <div class="Base">
    <p>Base</p>
    <li @click="goPages('/Base/Async')">async</li>
    <router-view>
    </router-view>
  </div>
</template>
<script>
export default {
  name: "base",
  methods: {}
};
</script>

