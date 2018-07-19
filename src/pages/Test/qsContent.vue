<template>
  <w-layout title="test">
    <h1>题目描述</h1>
    <div v-for="(item,index) in qsList" v-if="index+1==$route.query.id">
      <p>{{item.dre}}</p>
      <h2>输入描述: </h2>
      <p v-if="item.itemsVal">
        {{item.inputVal}},{{item.itemsVal}}
      </p>
      <p v-else>
        {{item.inputVal}}
      </p>
      <h2>输出描述: </h2>
      <p>{{item.res}}</p>
      <p>{{outVal($route.query.id,item)}}</p>
    </div>

  </w-layout>
</template>
<script>
import codeBlock from "/components/codeBlock";

export default {
  components: {
    codeBlock
  },
  data() {
    return {
      qsList: []
    };
  },
  methods: {
    _trim(str) {
      console.lot(str);
      return str.replace(/(^\s+)|(\s+$)/g, "");
    },
    _insert(arr, item, index) {
      let a = arr.slice(0);
      a.splice(index, 0, item);
      return a;
    },
    _square(arr) {
      let a = arr.slice(0);
      for (let i = 0; i < a.length; i++) {
        a[i] = a[i] * a[i];
      }
      return a;
    },
    _map(arr) {
      return arr.map(function(item, index, array) {
        return item * item;
      });
    },
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
    },
    _indexOf(arr, item) {
      return arr.indexOf(item);
      //如果
    },
    outVal(id, item) {
      switch (id) {
        case 1:
          return this._indexOf(item.inputVal, item.itemsVal);
          break;
        case 2:
          return this._repeat(item.inputVal, item.itemsVal);
          break;
        case 3:
          return this._remove(item.inputVal, item.itemsVal);
          break;
        case 4:
          return this._append(item.inputVal, item.itemsVal);
          break;
        case 5:
          return this._shift(item.inputVal);
          break;
        case 6:
          return this._truncate(item.inputVal);
          break;
        case 7:
          return this._insert(item.inputVal, item.itemsVal);
          break;
        case 8:
          return this._square(item.inputVal, item.itemsVal);
          break;
      }
    },
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
    // this.outVal2 = this._repeat2(this.inputVal2);
  },
  mounted() {
    this.$store.dispatch("getQs").then(res => {
      this.qsList = res.data.qs;
    });
  }
};
</script>
<style lang="scss" scoped>
@import "/styles/main.scss";
h1 {
  padding: 10px 0;
  margin-bottom: 0;
  font-weight: 700;
  font-size: 16px;
}
h2 {
  font-size: 14px;
  font-weight: bold;
  color: #34495e;
}
p {
  margin-bottom: 10px;
  font-size: 14px;
  line-height: 1.8;
  color: #5a676f;
}

code,
pre {
  font-family: Courier, "Courier New", monospace;
  white-space: pre-wrap;
  word-wrap: break-word;
}
pre {
  font-size: 14px;
  position: relative;
  border-left: 2px solid $green;
  padding: 10px 0 10px 10px;
  margin: 0.8em 0;
  background: #fefefe;
  word-break: break-word;
}
</style>




