import Vue from 'vue'
import Hljs from 'highlight.js'
import 'highlight.js/styles/googlecode.css'
let Highlight = {}
Highlight.install = (Vue, options) => {
    Vue.directive('highlight', (el) => {
        let b = el.querySelectorAll('pre code');
        b.forEach((block) => {
            Hljs.highlightBlock(block)
        })

    })
}
export default Highlight