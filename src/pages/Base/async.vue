<template>
  <div class="async">

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },

  methods: {
    async testAsync() {
      this.test = await this.f();
    },
    f() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(123);
        }, 2000);
      });
    }
  },
  created() {
    this.testAsync();
  }
};
</script>

