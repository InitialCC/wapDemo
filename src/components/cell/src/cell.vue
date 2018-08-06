<template>
  <a class="wap-cell" :href="href">
    <div class="cell-wrapper">
      <div class="cell-title">
        <slot name="icon">
          <i v-if="icon" class="cell-ui" :class=" 'cell-ui-' + icon"></i>
        </slot>
        <slot name="title">
          <span class="cell-text" v-text="title"></span>
          <span v-if="label" class="cell-label" v-text="label"></span>
        </slot>
      </div>
    </div>
  </a>
</template>
<script>
export default {
  name: "wap-cell",
  props: {
    to: [String, Object],
    icon: String,
    title: String,
    label: String,
    isLink: Boolean,
    value: {}
  },
  computed: {
    href() {
      if (this.to && !this.added && this.$router) {
        const resolved = this.$router.match(this.to);
        if (!resolved.matched.length) return this.to;
        this.$nextTick(() => {
          this.added = true;
          this.$el.addEventListener("click", this.handleClick);
        });
        return resolved.fullPath || resolved.path;
      }
      return this.to;
    }
  },
  methods: {
    handleClick($event) {
      $event.preventDefault();
      this.$router.push(this.href);
    }
  }
};
</script>
<style lang="scss" scoped>
.cell-wrapper {
  padding-left: 20px;
}
.wap-cell {
  background-color: #fff;
  box-sizing: border-box;
  color: inherit;
  min-height: 48px;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
}
.cell-wrapper {
  background-image: -webkit-linear-gradient(
    top,
    #d9d9d9,
    #d9d9d9 50%,
    transparent 0
  );
  line-height: 1;
  min-height: inherit;
  display: flex;
  background-size: 100% 1px; /*no*/
  background-repeat: no-repeat;
  align-items: center;
  font-size: 16px;
}
.cell-title {
  flex: 1;
}
</style>


