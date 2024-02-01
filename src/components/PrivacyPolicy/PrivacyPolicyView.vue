<template>
  <div class="container py-5 px-3">
      <div class="markdown-body" v-html="mdContent"></div>
  </div>
</template>

<script>
import {marked} from 'marked'
import {markedHighlight} from "marked-highlight";
import {mangle} from "marked-mangle";
import { gfmHeadingId } from "marked-gfm-heading-id";

marked.use(mangle());
marked.use(gfmHeadingId({
  prefix: "my-prefix-",
}));

marked.use(markedHighlight({
    langPrefix: 'hljs language-',
    highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext';
        return hljs.highlight(code, { language }).value;
    }
}));

export default {
    name: "PrivacyPolicyView",
    components: {

    },
    data() {
        return {
            content: ""
        }
    },
    computed: {
        mdContent() {
            return marked(this.content)
        }
    },
    mounted() {
        this.getContent()
    },
    methods: {
        getContent() {
            fetch('/privacy-policy.md')
                .then(response => response.text())
                .then((data) => {
                    this.content = data
                })
        }
    },
}
</script>

<style scoped>

</style>