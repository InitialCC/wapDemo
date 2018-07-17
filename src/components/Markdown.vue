<template>
  <div class="markdown-body" v-html="marked(text)">

  </div>
</template>
<script>
import marked from "marked";
import hljs from "highlight.js";
export default {
  name: "makedown",
  props: {
    text: {
      type: String,
      default: ""
    }
  },
  created() {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: true,
      smartLists: true,
      smartypants: false,
      highlight: code => hljs.highlightAuto(code).value
    });
  },
  methods: {
    marked(text) {
      return marked(text);
    }
  }
};
</script>
<style lang="scss">
@import "../assets/styles/github-markdown.scss";
@import "../assets/styles/atom-one-light.scss";

.markdown-body pre {
  background-color: #f4f7fd;
}
</style>