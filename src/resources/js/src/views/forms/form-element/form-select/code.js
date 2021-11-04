export const codeBasic = `
<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
    />
    <b-form-select
      v-model="selected"
      :options="options"
      size="sm"
      class="mt-1"
    />
    <div class="mt-1">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormSelect,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select an option' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Simple Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>
`

export const codeControlSize = `
<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      size="sm"
    />
    <b-form-select
      v-model="selected"
      :options="options"
      size="lg"
      class="mt-1"
    />
    <div class="mt-1">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormSelect,
  },
  data: () => ({
    selected: null,
    options: [
      { value: null, text: 'Please select an option' },
      { value: 'a', text: 'This is First option' },
      { value: 'b', text: 'Simple Option' },
      { value: { C: '3PO' }, text: 'This is an option with object value' },
      { value: 'd', text: 'This one is disabled', disabled: true },
    ],
  }),
}
</script>
`

export const codeMultiple = `
<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      multiple
      :select-size="4"
    />
    <div class="mt-1">
      Selected: <strong>{{ selected }}</strong>
    </div>
  </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormSelect,
  },
  data() {
    return {
      selected: ['b'],
      options: [
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
        { value: 'e', text: 'This is option e' },
        { value: 'f', text: 'This is option f' },
        { value: 'g', text: 'This is option g' },
      ],
    }
  },
}
</script>
`

export const codeSize = `
<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      :select-size="4"
    />
    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>
  </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormSelect,
  },
 data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is option a' },
        { value: 'b', text: 'Default Selected Option b' },
        { value: 'c', text: 'This is option c' },
        { value: 'd', text: 'This one is disabled', disabled: true },
        { value: 'e', text: 'This is option e' },
        { value: 'e', text: 'This is option f' },
      ],
    }
  },
}
</script>
`

export const codeStandard = `
<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
    />
    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>
  </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormSelect,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>
`

export const codeStates = `
<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      :state="selected === null ? false : true"
    />
    <b-card-text class="mt-1 mb-0">
      Selected: <strong>{{ selected }}</strong>
    </b-card-text>
  </div>
</template>

<script>
import { BFormSelect } from 'bootstrap-vue'

export default {
  components: {
    BCardCode,
    BFormSelect,
  },
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: 'Please select some item' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Default Selected Option' },
        { value: 'c', text: 'This is another option' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
    }
  },
}
</script>
`
