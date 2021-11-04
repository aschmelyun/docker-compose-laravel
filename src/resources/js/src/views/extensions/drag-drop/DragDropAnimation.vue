<template>
  <b-card-code
    title="Animation"
  >
    <b-card-text>
      <span>Add animation to changes using </span>
      <code>transition-group</code>
      <span>.</span>
    </b-card-text>

    <h6 class="text-primary font-weight-bold mb-2">
      People Group
    </h6>
    <!-- draggable -->
    <draggable
      v-model="list"
      class="list-group list-group-flush cursor-move"
      tag="ul"
    >
      <transition-group
        type="transition"
        name="flip-list"
      >
        <b-list-group-item
          v-for="listItem in list"
          :key="listItem.email"
          tag="li"
        >
          <div class="d-flex">
            <b-avatar :text="listItem.name.slice(0,2)" />
            <div class="ml-25">
              <b-card-text class="font-weight-bold mb-0">
                {{ listItem.name }}
              </b-card-text>
              <small>{{ listItem.email }}</small>
            </div>
          </div>
        </b-list-group-item>
      </transition-group>
    </draggable>

    <!-- code  -->
    <prism
      language="javascript"
      class="rounded mt-2"
    >
      {{ list }}
    </prism>

    <!-- toggleable code-->
    <template #code>
      {{ codeAnimation }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BListGroupItem, BAvatar, BCardText } from 'bootstrap-vue'
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import { codeAnimation } from './code'

export default {
  components: {
    BCardCode,
    draggable,
    BListGroupItem,
    BAvatar,
    BCardText,
    Prism,
  },
  data() {
    return {
      codeAnimation,
      list: [{
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

<style>
.list-group-item {
  transition: all 1s
}
</style>
