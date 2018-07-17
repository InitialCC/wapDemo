<template>
    <div class="t1">
        <h1>添加元素</h1>
        输出描述:
        <p>在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组</p>
        <p>输入 {{inputVal}}, {{itemVal}}</p>
        <p>输出{{outVal}}</p>
        <p>输出{{outVal2}}</p>
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
      itemVal: 10,
      outVal: "", //[1,2,3,4,10],
      outVal2: "" //[10,1,2,3,4]
    };
  },
  methods: {
    _append(arr, item) {
      let a = [];
      arr.forEach((key, index) => {
        a.push(key);
      });
      a.push(item);
      return a;
    },
    _append2(arr, item) {
      return arr.concat(item);
    },
    _prepend(arr, item) {
      //不能改变原数组，因此不能把arr的引用赋给a，可以使用arr.slice(0)将数组复制给a
      //    var a = arr.slice(0); 基于当前数组的一或多个 创建一个新的数组
      //
      let a = [].concat(arr);
      //使用unshift方法向a开头添加item
      a.unshift(item);
      return a;
    },
    _prepend2(arr, item) {
      //这个牛逼
      return [item].concat(arr);
    }
  },
  created() {
    this.outVal = this._append(this.inputVal, this.itemVal);
    this.outVal2 = this._prepend2(this.inputVal, this.itemVal);
    //1,3,4
  }
};
</script>

