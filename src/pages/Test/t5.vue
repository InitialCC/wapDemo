<template>
    <div class="t1">
        <h1>删除数组最后一个元素</h1>
        输出描述:
        <p>在数组 arr 的 index 处添加元素 item。不要直接修改数组 arr，结果返回新的数组</p>
        <p>输入 {{inputVal}},{{insertVal}},{{inserIndex}}</p>
        <p>输出{{outVal}}</p>

    </div>
</template>
<script>
import codeBlock from "/components/codeBlock";

export default {
  components: {
    codeBlock
  },
  data() {
    return {
      inputVal: [1, 2, 3, 4],
      insertVal: "z",
      inserIndex: 2,
      outVal: "" //[1, 2, 'z', 3, 4]
    };
  },
  methods: {
    _insert(arr, item, index) {
      let a = arr.slice(0);
      a.splice(index, 0, item);
      return a;
    }
  },
  created() {
    this.outVal = this._insert(this.inputVal, this.insertVal, this.inserIndex);

    //1,3,
  }
};
</script>

