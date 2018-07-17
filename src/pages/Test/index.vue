<template>
    <div class="Test">
        <p>Test</p>
        <li @click="goPages('/Test/1')">查找数组元素位置</li>
        <li @click="goPages('/Test/2')">移除数组中的元素</li>
        <li @click="goPages('/Test/3')">添加数组中的元素</li>
        <li @click="goPages('/Test/4')"> 删除数组指定位置元素</li>
        <li @click="goPages('/Test/5')"> 插入指定位置元素</li>
        <section class="demo-block">
            <router-view>
            </router-view>
        </section>
    </div>
</template>
<script>
export default {
  name: "test",
  methods: {}
};
</script>
<style lang="scss" scoped>
.demo-block {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 10;
  /* height: 100%; */
  background: #fff;
}
</style>


