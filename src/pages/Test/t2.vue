<template>
    <div class="t1">
        <h1>题目描述</h1>
        <p>移除数组中的元素</p>
        输出描述:
        <p>移除数组 arr 中的所有值与 item 相等的元素。不要直接修改数组 arr，结果返回新的数组</p>
        <p>输入 {{inputVal}}, 2</p>
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
      inputVal: [1, 2, 2, 3, 4, 2, 2],
      outVal: "" //[1,3,4]
    };
  },
  methods: {
    _remove(arr, item) {
      let a = [];
      arr.forEach(key => {
        if (key !== item) {
          a.push(key);
        }
      });
      return a;
    },
    _remove2(arr, item) {
      //splice方法
      //影响原有数组
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == item) {
          arr.splice(i, 1); //(index,delCount,addCount)
          i--;
          //删除a中第i个元素
          //如果不i--，第一个2被移除，右边的数往左移，第三个2就变成了第二个，下次循环就找不到了，以此类推。
          //被删除的元素后的所有元素索引会发生改变，
        }
      }
      return arr;
    },
    _remove3(arr, item) {
      return arr.filter(ele => {
        return ele != item;
      });
    },
    _indexOf(arr, val) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] == val) {
          return i;
        }
      }
      return -1;
    }
  },
  created() {
    let input = this.inputVal.slice(0);
    this.outVal = this._remove2(input, 2);
    //1,3,4
  }
};
</script>

