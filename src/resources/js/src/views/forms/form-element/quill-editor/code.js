export const codeBubble = `
<template>
  <div>
    <quill-editor
      v-model="content"
      :options="editorOption"
    />
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'

// eslint-disable-next-line
import 'quill/dist/quill.core.css'
// eslint-disable-next-line
import 'quill/dist/quill.snow.css'
// eslint-disable-next-line
import 'quill/dist/quill.bubble.css'

export default {
  components: {
    quillEditor,
  },
  data: () => ({
    editorOption: {
      theme: 'bubble',
    },
    content: \`<h2><span>Quill Rich Text Editor</span></h2><br />
<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>.</p><br />
<iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>\`,
  }),
}
</script>
`

export const codeSnow = `
<template>
  <quill-editor
    v-model="content"
    :options="snowOption"
  />
</template>

<script>
// eslint-disable-next-line
import 'quill/dist/quill.core.css'
// eslint-disable-next-line
import 'quill/dist/quill.snow.css'
// eslint-disable-next-line
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor,
  },
  data: () => ({
    content: \`<h1>Quill Rich Text Editor</h1>
  <p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p>
  <iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>
  <p><br></p>
  <h2>Getting Started is Easy</h2>
  <p><br></p>
  <pre>
// &lt;link href="https://cdn.quilljs.com/1.0.5/quill.snow.css" rel="stylesheet"&gt;
// &lt;script src="https://cdn.quilljs.com/1.0.5/quill.min.js" type="text/javascript"&gt;&lt;/script&gt;
  var quill = new Quill('#editor', {
  modules: {
  toolbar: '#toolbar'
  },
  theme: 'snow'
  });
// Open your browser's developer console to try out the API!</pre>  \`,
  }),
}
</script>
`
export const codeCustom = `
<template>
  <div>
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
          style="width:auto"
          @click="customButtonClick"
        >
          Click here
        </button>
      </div>
    </quill-editor>
  </div>
</template>

<script>
// eslint-disable-next-line
import 'quill/dist/quill.core.css'
// eslint-disable-next-line
import 'quill/dist/quill.snow.css'
// eslint-disable-next-line
import 'quill/dist/quill.bubble.css'
import { quillEditor } from 'vue-quill-editor'

export default {
  components: {
    quillEditor,
  },
  data: () => ({
    editorOption: {
      modules: {
        toolbar: '#toolbar',
      },
    },
    content: \`<h2><span class="ql-font-serif">Quill Rich Text Editor</span></h2><br />
<p>Quill is a free, <a href="https://github.com/quilljs/quill/">open source</a> WYSIWYG editor built for the modern web. With its <a href="http://quilljs.com/docs/modules/">modular architecture</a> and expressive <a href="http://quilljs.com/docs/api/">API</a>, it is completely customizable to fit any need.</p><br />
<iframe class="ql-video" src="https://www.youtube.com/embed/QHH3iSeDBLo?showinfo=0" width="560" height="238"></iframe>\`,
  }),
  methods: {
    customButtonClick() {
      alert('Button clicked!')
    },
  },
}
</script>
`
