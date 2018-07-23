<template>
  <div class="content">
    <ul class="list-ul">
      <li v-for="item in qsList" @click="goPages('/Test/content',item.id)">{{item.title}}</li>
    </ul>
    <transition :name="transitionName">
      <router-view class="page">
      </router-view>
    </transition>
  </div>

</template>
<script>
// import { getters, mapActions, mapGetters } from "vuex";
export default {
  name: "test",
  methods: {},
  components: {},
  data() {
    return {
      qsList: [],
      transitionName: ""
    };
  },
  methods: {
    // ...mapActions(["getTrans"])
  },
  mounted() {
    console.log(this.transitionName);
    this.$store.dispatch("getJson").then(res => {
      this.qsList = res.qs;
    });
  },
  computed: {
    // ...mapGetters(["transitionName"])
  },
  watch: {
    $route(to, from) {
      this.transitionName = this.getRouter(to, from);
    }
  }
};
</script>
<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0;
}
</style>


