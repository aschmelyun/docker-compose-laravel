<template>
  <b-card-code title="Clone List">
    <b-card-text>
      <span>Clone list items from another existing list. Add </span>
      <code>pull</code>
      <span> and </span>
      <code>put</code>
      <span> to </span>
      <code>group</code>
      <span> prop.</span>
    </b-card-text>

    <b-row>

      <!-- tag source -->
      <b-col md="6">
        <h6>Tag Source</h6>

        <draggable
          :list="list1"
          :group="{name:'tags', pull:'clone', put:false }"
          class="mb-1 cursor-move"
        >
          <b-badge
            v-for="(listItem, index) in list1"
            :key="index"
            class="mr-25"
          >
            {{ listItem }}
          </b-badge>
        </draggable>
      </b-col>

      <!-- add tag -->
      <b-col md="6">
        <h6>Your Tags</h6>

        <draggable
          :list="list2"
          :group="{name: 'tags'}"
          class="mb-1 cursor-move"
        >
          <b-badge
            v-for="(listItem, index) in list2"
            :key="index"
            class="mr-25"
          >
            {{ listItem }}
          </b-badge>
        </draggable>
      </b-col>

      <!-- tag source code -->
      <b-col md="6">
        <prism
          language="javascript"
          class="rounded"
        >
          Tag Source: {{ list1 }}
        </prism>
      </b-col>

      <!-- tag add code -->
      <b-col md="6">
        <prism
          language="javascript"
          class="rounded"
        >
          Added tags: {{ list2 }}
        </prism>
      </b-col>
    </b-row>

    <template #code>
      {{ codeClone }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BBadge, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { codeClone } from './code'

export default {
  components: {
    BCardCode,
    BBadge,
    draggable,
    BCardText,
    BRow,
    Prism,
    BCol,
  },
  data() {
    return {
      codeClone,
      list1: ['youtube', 'google', 'facebook', 'twitter', 'instagram', 'pinterest', 'tinder', 'slack', 'discord', 'github', 'gitlab'],
      list2: ['google', 'youtube'],
    }
  },
}
</script>
