<template>
    <div>
        <div class="code-block"></div>
        <markdown :text="script" class="markdown-style">
        </markdown>
    </div>
</template>
<script>
/*
@  \s是指空白，包括空格、换行、tab缩进等所有的空白，而\S刚好相反
   这样一正一反下来，就表示所有的字符，完全的，一字不漏的。
@ []这个符号，表示在它里面包含的单个字符不限顺序的出现。
例如:[\s\S]* 只要出现多类型空白，或非空白 都匹配
*/

import markdown from "/components/Markdown.vue";

export default {
  name: "code-block",
  props: {
    code: {
      type: String,
      default: ""
    },
    description: {
      type: String
    }
  },

  components: {
    markdown
  },
  computed: {
    html() {
      //console.log(this.code);
      //match 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹配
      if (this.code.match(/<template>([\s\S]*?)<\/template>/)) {
        return `\`\`\`html
    			${this.code.match(/<template>([\s\S]*?)<\/template>/)[1]}
           					 \`\`\``;
      } else {
        return "暂无 HTML";
      }
    },
    script() {
      if (this.code.match(/<script>([\s\S]*?)<\/script>/)) {
        return `\`\`\`javascript
				${this.code.match(/<script>([\s\S]*?)<\/script>/)[1]}
				    \`\`\``;
      } else {
        return "暂无 script";
      }
    },
    scss() {
      if (this.code.match(/<style lang="scss">([\s\S]*?)<\/style>/)) {
        return `\`\`\`scss${
          this.code.match(/<style lang="scss">([\s\S]*?)<\/style>/)[1]
        }\`\`\``;
      } else {
        return "暂无 scss";
      }
    }
  }
};
</script>

