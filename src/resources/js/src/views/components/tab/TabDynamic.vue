<template>
  <b-card-code title="Dynamic tabs + tabs-end slot">
    <b-tabs>
      <!-- Render Tabs, supply a unique `key` to each tab -->
      <b-tab
        v-for="i in tabs"
        :key="'dyn-tab-' + i"
        :title="'Tab ' + i"
      >
        Tab contents {{ i }}
        <b-button
          size="sm"
          variant="danger"
          class="float-right"
          @click="closeTab(i)"
        >
          Close tab
        </b-button>
      </b-tab>

      <!-- New Tab Button (Using tabs-end slot) -->
      <template #tabs-end>
        <b-nav-item
          role="presentation"
          @click.prevent="newTab"
        >
          <b>+</b>
        </b-nav-item>
      </template>

      <!-- Render this if no tabs -->
      <template #empty>
        <div class="text-center text-muted">
          There are no open tabs<br>
          Open a new tab using the <b>+</b> button above.
        </div>
      </template>
    </b-tabs>

    <template #code>
      {{ codeDynamic }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BTabs, BTab, BNavItem, BButton,
} from 'bootstrap-vue'
import { codeDynamic } from './code'

export default {
  components: {
    BCardCode,
    BTabs,
    BTab,
    BNavItem,
    BButton,
  },
  data() {
    return {
      tabs: [1],
      tabCounter: 1,
      codeDynamic,
    }
  },
  methods: {
    closeTab(x) {
      for (let i = 0; i < this.tabs.length; i += 1) {
        if (this.tabs[i] === x) {
          this.tabs.splice(i, 1)
        }
      }
    },
    newTab() {
      this.tabs.push((this.tabCounter += 1))
    },
  },
}
</script>
