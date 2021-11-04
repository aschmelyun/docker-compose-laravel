<template>
  <b-card-code title="Multiple Lists">
    <b-card-text>
      <span>Drag and drop items of more than one list. Add same </span>
      <code>group</code>
      <span> to </span>
      <code>group</code>
      <span> prop.</span>
    </b-card-text>

    <b-row>

      <!-- people group 1 -->
      <b-col md="6">
        <h6 class="text-primary font-weight-bold mb-2">
          People Group 1
        </h6>

        <!-- draggable -->
        <draggable
          :list="list1"
          tag="ul"
          group="people"
          class="list-group list-group-flush cursor-move"
        >
          <b-list-group-item
            v-for="(listItem, index) in list1"
            :key="index"
            tag="li"
          >
            <div class="d-flex">
              <b-avatar :text="listItem.name.slice(0,2)" />
              <div class="ml-25">
                <b-card-text class="mb-0 font-weight-bold">
                  {{ listItem.name }}
                </b-card-text>
                <small>{{ listItem.email }}</small>
              </div>
            </div>
          </b-list-group-item>
        </draggable>
      </b-col>

      <!-- people group 2 -->
      <b-col
        md="6"
        class="mt-sm-2 mt-md-0"
      >
        <h6 class="text-primary font-weight-bold mb-2">
          People Group 2
        </h6>

        <!-- draggable -->
        <draggable
          :list="list2"
          tag="ul"
          group="people"
          class="list-group list-group-flush cursor-move"
        >
          <b-list-group-item
            v-for="(listItem, index) in list2"
            :key="index"
            tag="li"
          >
            <div class="d-flex">
              <b-avatar :text="listItem.name.slice(0,2)" />
              <div class="ml-25">
                <b-card-text class="mb-0 font-weight-bold">
                  {{ listItem.name }}
                </b-card-text>
                <small>{{ listItem.email }}</small>
              </div>
            </div>
          </b-list-group-item>
        </draggable>
      </b-col>

      <!-- people group 1 code -->
      <b-col
        md="6"
        class="mt-1"
      >
        <prism
          language="javascript"
          class="rounded"
        >
          People Group 1: {{ list1 }}
        </prism>
      </b-col>

      <!-- people group 2 code -->
      <b-col
        md="6"
        class="mt-1"
      >
        <prism
          language="javascript"
          class="rounded"
        >
          People Group 2: {{ list2 }}
        </prism>
      </b-col>
    </b-row>

    <template #code>
      {{ codeMultiple }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BListGroupItem, BAvatar, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { codeMultiple } from './code'

export default {
  components: {
    BCardCode,
    BAvatar,
    BListGroupItem,
    BCardText,
    BRow,
    BCol,
    Prism,
    draggable,
  },
  data() {
    return {
      codeMultiple,
      list1: [
        {
          name: 'Paz Joya',
          email: 'girliness@spotlike.co.uk',
        },
        {
          name: 'Sunshine Cose',
          email: 'executrixship@equisized.edu',
        },
        {
          name: 'Alba Dobbin',
          email: 'bidding@demibob.or',
        },
        {
          name: 'Marlin Hinchee',
          email: 'preholding@scuffly.co.uk',
        },
      ],
      list2: [
        {
          name: 'Leia Atienza',
          email: 'unmeasurableness@interlamellar.co.uk',
        },
        {
          name: 'Lashawna Vaudrainm',
          email: 'soaking@khubber.com',
        },
        {
          name: 'Liliana Henscheid',
          email: 'lecideine@turndown.org',
        },
        {
          name: 'Keven Kolter',
          email: 'nontenure@anglicanum.co.uk',
        },
      ],
    }
  },
}
</script>
