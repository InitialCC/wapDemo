<template>

    <div class="product-two">
        <ul>
            <li v-for="product in products">
                <span class="name">{{ product.name }}</span>
                <span class="price">${{ product.price }}</span>
            </li>
        </ul>
        <span @click="minusPrice">减少价格</span>
        <span @click="minusPriceAsync">异步减少价格</span>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "p-two",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["products"])
  },
  methods: {
    minusPrice() {
      this.$store.commit("minusPrice", 2);
    },
    minusPriceAsync() {
      this.$store.dispatch("minusPriceAsync", 5); //分发actions中的minusPriceAsync这个异步函数
    }
  }
};
</script>
<style lang="scss" scoped>
.product-two {
  background: #d1e4ff;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  padding: 10px 20px;
}
.product-two ul {
  padding: 0;
  list-style-type: none;
}
.product-two li {
  margin-right: 10px;
  margin-top: 10px;
  padding: 20px;
  background: rgba(255, 255, 255, 0.7);
}
.price {
  font-weight: bold;
  color: #860ce8;
  display: block;
}
</style>


