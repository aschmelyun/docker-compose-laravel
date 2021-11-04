<template>
  <b-card-code title="Custom Toolbar">
    <b-card-text>You have freedom to create your own custom toolbar</b-card-text>

    <quill-editor
      v-model="content"
      :options="editorOption"
    >
      <div
        id="toolbar"
        slot="toolbar"
      >
        <!-- Add a bold button -->
        <button class="ql-bold">
          Bold
        </button>
        <button class="ql-italic">
          Italic
        </button>

        <!-- Add font size dropdown -->
        <select class="ql-size">
          <option value="small" />
          <!-- Note a missing, thus falsy value, is used to reset to default -->
          <option selected />
          <option value="large" />
          <option value="huge" />
        </select>

        <select class="ql-font">
          <option selected="selected" />
          <option value="serif" />
          <option value="monospace" />
        </select>

        <!-- Add subscript and superscript buttons -->
        <button
          class="ql-script"
          value="sub"
        />
        <button
          class="ql-script"
          value="super"
        />

        <!-- You can also add your own -->
        <button
          class="w-auto btn btn-primary"
          @click="customButtonClick"
        >
          Click here
        </button>
      </div>
    </quill-editor>

    <template #code>
      {{ codeCustom }}
    </template>
  </b-card-code>
</template>

<script>
import { BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { quillEditor } from 'vue-quill-editor'
import { codeCustom } from './code'

export default {
  components: {
    quillEditor,
    BCardCode,
    BCardText,
  },
  data() {
    return {
      codeCustom,
      editorOption: {
        modules: {
          toolbar: '#toolbar',
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
    theme: 'snow'
});
// Open your browser's developer console to try out the API!</pre>`,
    }
  },
  methods: {
    customButtonClick() {
      // eslint-disable-next-line
      alert('Button clicked!')
    },
  },
}
</script>
