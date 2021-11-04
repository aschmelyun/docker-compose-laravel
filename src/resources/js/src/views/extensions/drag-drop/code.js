export const codeSimple = `
<template>
  <div>
    <!-- draggable -->
    <draggable
      v-model="list"
      tag="ul"
      class="list-group list-group-flush cursor-move"
    >
      <b-list-group-item
        v-for="(item, index) in list"
        :key="index"
        tag="li"
      >
        <strong> {{ item }}</strong>
      </b-list-group-item>
    </draggable>

    <!-- code -->
    <prism
      language="javascript"
      class="rounded mt-2"
    >list: {{ list }}
    </prism>
  </div>
</template>

<script>
import { BListGroupItem} from 'bootstrap-vue'
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  components: {
    draggable,
    BListGroupItem,
    Prism,
  },
  data() {
    return {
      list:
      [
        'Marzipan I love I love. Soufflé donut I love gummi bears powder. Candy danish biscuit.',
        'Halvah bonbon bonbon brownie sugar plum. Halvah I love cupcake I love.',
        'Cake muffin icing topping wafer topping gummi bears apple pie.',
        'Cotton candy gummi bears bear claw cake brownie jelly-o lemon drops croissant sweet roll.',
      ],
    }
  },
}
</script>
`

export const codeMultiple = `
<template>
  <div>
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
  </div>
</template>

<script>
import {
  BListGroupItem, BAvatar, BRow, BCol,
} from 'bootstrap-vue'
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  components: {
    BAvatar,
    BListGroupItem,
    BRow,
    BCol,
    Prism,
    draggable,
  },
  data() {
    return {
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
`

export const codeClone = `
<template>
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
</template>

<script>
import {
  BBadge, BRow, BCol,
} from 'bootstrap-vue'
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  components: {
    BBadge,
    draggable,
    BRow,
    Prism,
    BCol,
  },
  data() {
    return {
      list1: ['youtube', 'google', 'facebook', 'twitter', 'instagram', 'pinterest', 'tinder', 'slack', 'discord', 'github', 'gitlab'],
      list2: ['google', 'youtube'],
    }
  },
}
</script>
`

export const codeAnimation = `
<template>
  <div>

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
  </div>
</template>

<script>
import { BListGroupItem, BAvatar} from 'bootstrap-vue'
import draggable from 'vuedraggable'
import Prism from 'vue-prism-component'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'

export default {
  components: {
    draggable,
    BListGroupItem,
    BAvatar,
    Prism,
  },
  data() {
    return {
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
`
