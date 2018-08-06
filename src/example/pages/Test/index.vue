<template>
  <div class="content">
    <ul class="list-ul">
      <li class="list-group-item" v-for="item in qsList" @click="goPages('/Test/content',item.id)">{{item.title}}</li>
    </ul>
    <transition :name="transitionName">
      <router-view>
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
</style>


