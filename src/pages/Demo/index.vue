<template>
  <w-layout class="Demo">
    <ul class="list-ul">
      <li v-for="item in demoList" @click="goPages('/Demo/content',item.title)">{{item.title}}</li>
    </ul>
    <transition :name="transitionName">
      <router-view class="page">
      </router-view>
    </transition>

  </w-layout>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      demoList: [
        {
          id: 1,
          title: "pull"
        }
      ],
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      this.transitionName = this.getRouter(to, from);
    }
  },
  mounted() {}
};
</script>

