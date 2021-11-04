<template>
  <b-card-code title="Async Tree">
    <v-tree
      ref="tree"
      :data="treeData"
      :multiple="false"
      @node-check="nodechecked"
      @async-load-nodes="asyncLoad"
    />

    <template #code>
      {{ codeAsync }}
    </template>
  </b-card-code>
</template>

<script>
import { VTree } from 'vue-tree-halower'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { codeAsync } from './code'

export default {
  components: {
    VTree,
    BCardCode,
  },
  data() {
    return {
      codeAsync,
      initSelected: ['node-1'],
      treeData: [
        {
          title: 'node1',
          expanded: false,
          async: true,
        },
      ],
    }
  },
  methods: {
    nodechecked(node, v) {
      // eslint-disable-next-line no-alert
      alert(`that a node-check envent ...${node.title}${v}`)
    },
    async asyncLoad(node) {
      const { checked = false } = node
      this.$set(node, 'loading', true)
      const pro = await new Promise(resolve => {
        setTimeout(resolve, 2000, [{ title: 'test1', async: true }, { title: 'test2', async: true }, { title: 'test3' }])
      })

      // eslint-disable-next-line no-prototype-builtins
      if (!node.hasOwnProperty('children')) {
        this.$set(node, 'children', [])
      }
      node.children.push(...pro)
      this.$set(node, 'loading', false)
      if (checked) {
        this.$refs.tree.childCheckedHandle(node, checked)
      }
    },
  },
}
</script>
