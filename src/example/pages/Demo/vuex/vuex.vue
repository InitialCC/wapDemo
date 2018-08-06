<template>
    <w-layout title="demo-vuex">
        <div class="demo-veux">
            <product-one></product-one>
            <product-two></product-two>
        </div>
    </w-layout>
</template>
<script>
import { mapGetters } from "vuex";
import productOne from "./productOne.vue";
import productTwo from "./productTwo.vue";
export default {
  name: "demo-vuex",
  data() {
    return {};
  },
  components: {
    productOne,
    productTwo
  },
  computed: {
    ...mapGetters(["products"])
  }
};
</script>
<style lang="scss" scoped>
.demo-veux {
  margin-top: 20px;
}
</style>


