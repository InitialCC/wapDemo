<template>
  <div>
    <div class="main-inner">
      <ul class="list-ul">
        <li v-for="item in demoList" @click="goPages('/Demo/'+item.title)" class="list-group-item">{{item.title}}</li>
      </ul>
      <transition :name="transitionName">
        <router-view>
        </router-view>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  name: "demo",
  data() {
    return {
      flag: false,
      demoList: [
        {
          title: "pull"
        },
        {
          title: "vuex"
        }
      ],
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      // const toDepth = to.path.split("/").length;
      // const fromDepth = from.path.split("/").length;
      // toDepth < fromDepth ? (this.flag = false) : (this.flag = true);
      this.transitionName = this.getRouter(to, from);
    }
  },
  mounted() {
    // console.log(this.$route);
  }
};
</script>

