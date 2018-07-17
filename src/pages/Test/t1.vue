<template>
  <div class="t1">
    <h1>题目描述</h1>
    <p>找出元素 item 在给定数组 arr 中的位置</p>
    <h2>输出描述: </h2>
    <p>如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1</p>
    <p>输入 {{inputVal}}, 3</p>
    <p>输出{{outVal}}</p>
    <h1>题目描述</h1>
    <p>找出数组 arr 中重复出现过的元素</p>
    <h2>输出描述: </h2>
    <p>如果数组中存在 item，则返回元素在数组中的位置，否则返回 -1</p>
    <p>输入 {{inputVal2}}</p>
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
      inputVal2: [1, 2, 4, 4, 3, 3, 1, 5, 3],
      outVal: "",
      outVal2: ""
    };
  },
  methods: {
    _indexOf(arr, item) {
      return arr.indexOf(item);
      //如果
    },
    _repeat(arr) {
      let result = [];
      //lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
      arr.forEach(elem => {
        if (
          arr.indexOf(elem) != arr.lastIndexOf(elem) &&
          result.indexOf(elem) == -1
        ) {
          result.push(elem);
        }
      });
      return result;
    },
    _repeat2(arr) {
      var a = [],
        b = []; //遍历arr，如果以arr中元素为下标的的b元素已存在，则该b元素加1，否则设置为1
      for (var i = 0; i < arr.length; i++) {
        if (!b[arr[i]]) {
          b[arr[i]] = 1;
          continue;
        }
        b[arr[i]]++;
      } //遍历b数组，将其中元素值大于1的元素下标存入a数组中
      for (var i = 0; i < b.length; i++) {
        if (b[i] > 1) {
          a.push(i);
        }
      }
      return a;
    }
  },
  created() {
    this.outVal = this._indexOf(this.inputVal, 3);
    this.outVal2 = this._repeat2(this.inputVal2);
  }
};
</script>

