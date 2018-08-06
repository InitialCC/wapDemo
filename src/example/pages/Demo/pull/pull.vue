<template>
  <w-layout title="pull">
    <w-scroll ref="scroll" :data="items" :scrollbar="scrollbarObj " :pullDownRefresh="pullDownRefreshObj" :pullUpLoad="pullUpLoadObj" :startY="parseInt(startY)" @pullingDown="onPullingDown" @pullingUp="onPullingUp" class="demo-pull">
    </w-scroll>
  </w-layout>
</template>
<script>
export default {
  name: "pull-demo",
  data() {
    return {
      scrollbar: true,
      scrollbarFade: true,
      pullDownRefresh: true,
      pullDownRefreshThreshold: 90,
      pullDownRefreshStop: 80,
      pullUpLoad: true,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: "加载更多",
      pullUpLoadNoMoreTxt: "没有数据了",
      startY: 0,
      scrollToX: 0,
      scrollToY: -300,
      scrollToTime: 700,
      scrollToEasing: "bounce",
      scrollToEasingOptions: ["bounce", "swipe", "swipeBounce"],
      items: [],
      allPage: "",
      pages: 0,
      allItemsLen: "",
      currentPage: 1,
      itemLen: 5,
      totalPage: 0
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    scrollTo() {
      this.$refs.scroll.scrollTo(
        this.scrollToX,
        this.scrollToY,
        this.scrollToTime,
        ease[this.scrollToEasing]
      );
    },
    clickItem() {
      this.$router.back();
    },
    onPullingDown() {
      let _this = this;
      // 模拟更新数据
      console.log("上拉刷新");
      setTimeout(() => {
        if (this._isDestroyed) {
          return;
        }
        if (Math.random() > 0.5) {
          //如果有新数据;
          //   this.$store.dispatch("getJson").then(res => {
          //     for (let i = 0; i < 2; i++) {
          //       this.items.unshift(res.demo[i].title);
          //     }
          //   });
        } else {
          // 如果没有新数据
          _this.$refs.scroll.forceUpdate();
          //数据跟新后强制更新页面
        }
      }, 2000);
    },
    onPullingUp() {
      // 更新数据

      let _this = this;
      this.$nextTick(() => {
        setTimeout(() => {
          if (this._isDestroyed) {
            return;
          }
          // 如果有新数据

          let newPage = [];
          if (this.pages >= 0 && this.pages < this.allPage) {
            this.pages++;
            this.$store.dispatch("getJson").then(res => {
              if (this.pages == this.allPage) {
                for (
                  let i = this.pages * this.itemLen;
                  i < this.allItemsLen;
                  i++
                ) {
                  newPage = res.demo[i].title;
                  this.items = this.items.concat(newPage);
                }
              } else {
                for (
                  let i = this.pages * this.itemLen;
                  i < this.itemLen * this.pages + this.itemLen;
                  i++
                ) {
                  newPage = res.demo[i].title;
                  this.items = this.items.concat(newPage);
                }
              }
            });
          } else {
            alert("没有数据了");

            _this.$refs.scroll.forceUpdate();
          }
        }, 1500);
      });
    },
    loadData() {
      this.$store.dispatch("getJson").then(res => {
        this.allItemsLen = res.demo.length;
        this.allPage = Math.floor(res.demo.length / this.itemLen);
        for (let i = 0; i < this.itemLen; i++) {
          this.items.push(res.demo[i].title);
        }
      });
    },
    rebuildScroll() {
      this.nextTick(() => {
        this.$refs.scroll.destroy();
        this.$refs.scroll.initScroll();
      });
    }
  },
  computed: {
    scrollbarObj: function() {
      return this.scrollbar ? { fade: this.scrollbarFade } : false;
    },
    pullDownRefreshObj: function() {
      return this.pullDownRefresh
        ? {
            threshold: parseInt(this.pullDownRefreshThreshold),
            stop: parseInt(this.pullDownRefreshStop)
          }
        : false;
    },
    pullUpLoadObj: function() {
      return this.pullUpLoad
        ? {
            threshold: parseInt(this.pullUpLoadThreshold),
            txt: {
              more: this.pullUpLoadMoreTxt,
              noMore: this.pullUpLoadNoMoreTxt
            }
          }
        : false;
    }
  },
  watch: {
    scrollbarObj: {
      handler() {
        this.rebuildScroll();
      },
      deep: true
    },
    pullDownRefreshObj: {
      handler(val) {
        const scroll = this.$refs.scroll.scroll;
        if (val) {
          scroll.openPullDown();
        } else {
          scroll.closePullDown();
        }
      },
      deep: true
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: none;
}

.demo-pull {
  position: fixed;
  left: 0;
  top: 0;
  margin-top: 1.5rem;
  width: 100%;
  height: 90%;
  background: #fff;
  // padding-bottom: 30px;

  // left: 0;
  // top: 1rem;
  // /* height: 200px; */
  // height: 100%;

  // border: 1px solid rgba(0, 0, 0, 0.1);
  // border-radius: 0.3rem;
  // -webkit-transform: rotate(0deg);
  // transform: rotate(0deg);
  // overflow: hidden;
}
</style>
<style lang="scss">
.list-item {
  text-overflow: ellipsis;

  white-space: nowrap;

  overflow: hidden;
}
</style>
