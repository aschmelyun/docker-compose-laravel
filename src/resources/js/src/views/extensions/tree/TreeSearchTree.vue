<template>
  <b-card-code title="Search Tree">

    <!-- search input -->
    <b-input-group class="mb-1">
      <b-input-group-prepend is-text>
        <feather-icon icon="SearchIcon" />
      </b-input-group-prepend>
      <b-form-input
        v-model.lazy="searchword"
        placeholder="Search..."
        @input="search"
      />
    </b-input-group>

    <!-- tree -->
    <v-tree
      ref="tree"
      :can-delete-root="true"
      :data="treeData"
      :draggable="true"
      :tpl="tpl"
      :halfcheck="true"
      :multiple="true"
    />

    <template #code>
      {{ codeSearch }}
    </template>
  </b-card-code>
</template>

<script>
import { VTree } from 'vue-tree-halower'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BFormInput, BInputGroupPrepend, BInputGroup,
} from 'bootstrap-vue'
import { codeSearch } from './code'

export default {
  components: {
    VTree,
    BCardCode,
    BInputGroupPrepend,
    BInputGroup,
    BFormInput,
  },
  data() {
    return {
      codeSearch,
      searchword: '',
      treeData: [
        {
          title: 'node1',
          expanded: true,
          children: [
            {
              title: 'node 1-1',
              expanded: true,
              children: [
                {
                  title: 'node 1-1-1',
                }, {
                  title: 'node 1-1-2',
                }, {
                  title: 'node 1-1-3',
                },
              ],
            }, {
              title: 'node 1-2',
              children: [
                {
                  title: '<span style=\'color: red\'>node 1-2-1</span>',
                }, {
                  title: '<span style=\'color: red\'>node 1-2-2</span>',
                },
              ],
            },
          ],
        },
      ],
    }
  },
  methods: {
    search() {
      this.$refs.tree.searchNodes(this.searchword)
    },
    tpl(...args) {
      const { 0: node, 2: parent, 3: index } = args
      let titleClass = node.selected ? 'node-title node-selected' : 'node-title'
      if (node.searched) titleClass += ' node-searched'
      return <span>
        <span class="tree-expand" onClick={() => this.$refs.tree.addNode(node, { title: 'sync node' })}>+</span>
        <span class={titleClass} domPropsInnerHTML={node.title} onClick={() => {
          this.$refs.tree.nodeSelected(node)
        }}></span>
        <button class="btn-async text-warning border-0 cursor-pointer mr-1" onClick={() => this.asyncLoad(node)}>async</button>
        <button class="btn-delete text-danger border-0 cursor-pointer" onClick={() => this.$refs.tree.delNode(node, parent, index)}>delete</button>
      </span>
    },
    async asyncLoad(node) {
      const { checked = false } = node
      this.$set(node, 'loading', true)
      const pro = new Promise(resolve => {
        setTimeout(resolve, 2000, ['async node1', 'async node2'])
      })
      this.$refs.tree.addNodes(node, await pro)
      this.$set(node, 'loading', false)
      if (checked) {
        this.$refs.tree.childCheckedHandle(node, checked)
      }
    },
  },
}
</script>
