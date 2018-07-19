<template>
  <div class="content">
    <ul class="list-ul">
      <li v-for="item in qsList" @click="goPages('/Test/qsContent',item.id)">{{item.title}}</li>
    </ul>
  </div>

</template>
<script>
export default {
  name: "test",
  methods: {},
  components: {},
  data() {
    return {
      qsList: []
    };
  },
  mounted() {
    this.$store.dispatch("getQs").then(res => {
      console.log(res);
      this.qsList = res.data.qs;
    });
  },
  watch: {}
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


