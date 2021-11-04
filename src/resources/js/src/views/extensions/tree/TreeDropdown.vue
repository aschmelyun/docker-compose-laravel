<template>
  <b-card-code title="Dropdown Tree">
    <v-select-tree
      v-model="initSelected"
      :data="treeData"
      :multiple="true"
    />

    <template #code>
      {{ codeDropdown }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { VSelectTree } from 'vue-tree-halower'
import { codeDropdown } from './code'

export default {
  components: {
    VSelectTree,
    BCardCode,
  },
  data() {
    return {
      codeDropdown,
      initSelected: ['node-1'],
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
            },
          ],
        },
      ],
    }
  },
}
</script>
