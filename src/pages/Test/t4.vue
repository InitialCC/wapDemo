<template>
  <div class="t1">
    <h1>删除数组最后一个元素</h1>
    输出描述:
    <p>删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组</p>
    <p>输入 {{inputVal}}</p>
    <p>输出{{outVal}}</p>
    <h1>删除数组首位元素</h1>
    <p>输入 {{inputVal}}</p>
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
      outVal: "", //[1,3,4]，
      outVal: ""
    };
  },
  methods: {
    _truncate2(arr, item) {
      let newArray = [];
      newArray.push.apply(newArray, arr);
      console.log(newArray);
      newArray.pop();
      return newArray;
    },
    _truncate(arr, item) {
      //return arr.slice(0, -1);
      //从数组末尾删除
      return arr.slice(0, arr.length - 1);
      //那就用该方法返回第0至倒数第二个的值
    },
    _shift(arr) {
      let a = arr.slice(0);
      a.shift();
      return a;
    }
  },
  created() {
    this.outVal = this._truncate(this.inputVal);
    this.outVal2 = this._shift(this.inputVal);
    //1,3,
  }
};
</script>

