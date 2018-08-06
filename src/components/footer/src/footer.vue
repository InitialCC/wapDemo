<template>
  <div class="footer">
    <ul class="foot-navbar">
      <li v-for="(item,index) in items" @click="changeSelect(item,index)" :class="{_selected:index == active}">
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "w-footer",
  data() {
    return {
      active: 0
    };
  },
  props: {
    items: {
      type: [Array],
      default: [
        {
          title: "test",
          path: "/test"
        },
        {
          title: "test2",
          path: "/test2"
        }
      ]
    },
    seleted: {
      type: [Number, String],
      default: 0
    }
  },
  methods: {
    changeSelect(item, index) {
      if (item.path) {
        this.goPages("/" + item.path);
      }

      this.active = index;
      this.$emit("onSelect", index);
    }
  },
  watch: {
    seleted(val) {
      console.log(val);
      this.active = val;
    }
  },
  mounted() {
    this.active = this.seleted;
    // this.goPages("/" + this.items[this.active].path);
  }
};
</script>

<style lang="scss" scoped>
.foot-navbar {
  display: flex;
  background: #fff;
  li {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 1.2rem;
    &._selected {
      background: green;
      span {
        color: white;
      }
    }

    > span {
      padding: 0 0.26rem;
      font-size: 18px; /*no*/
    }
  }
}
.footer {
  position: absolute;

  bottom: 0;
  z-index: 90;
  width: 100%;
}
</style>
