<template>
  <b-card-code title="Bubble Editor">
    <b-card-text>Bubble is a simple tooltip based theme.</b-card-text>

    <quill-editor
      v-model="content"
      :options="editorOption"
    />

    <template #code>
      {{ codeBubble }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { quillEditor } from 'vue-quill-editor'
import { codeBubble } from './code'

export default {
  components: {
    quillEditor,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      codeBubble,
      editorOption: {
        theme: 'bubble',
        syntax: false,
        modules: {
          toolbar: [
            ['bold', 'italic'],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            ['link', 'image'],
          ],
        },
      },
      content: `<h1 class="ql-align-center">Quill Rich Text Editor</h1>
                    <p class="card-text"><br /></p>
                    <p class="card-text">
                      Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built
                      for the modern web. With its
                      <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive
                      <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.
                    </p>
                    <p class="card-text"><br /></p>
                    <iframe
                      class="ql-video ql-align-center"
                      src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0"
                      width="560"
                      height="238"
                    ></iframe>
                    <p class="card-text"><br /></p>
                    <p class="card-text"><br /></p>
                    <h2 class="ql-align-center">Getting Started is Easy</h2>
                    <p class="card-text"><br /></p>
                    <pre>
// &lt;link href="https://cdn.quilljs.com/1.3.6/quill.snow.css" rel="stylesheet"&gt;
// &lt;script src="https://cdn.quilljs.com/1.3.6/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
var quill = new Quill('#editor', {
    modules: {
        toolbar: '#toolbar'
    },
    theme: 'bubble'
});
// Open your browser's developer console to try out the API!</pre>`,
    }
  },
}
</script>
