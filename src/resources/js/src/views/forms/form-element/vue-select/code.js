export const codeVueBasic = `
<template>
   <b-row>
    <!-- basic select -->
    <b-col md="6">
      <h6>Basic Select</h6>
      <b-card-text>
        <code>vue-select</code>
        <span> accepts arrays of primitive values or objects to use as </span>
        <code>options</code>
        <span> through the options prop:</span>
      </b-card-text>

      <b-form-group>
        <v-select
          v-model="selected"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="option"
        />
      </b-form-group>
    </b-col>

    <!-- select with icon -->
    <b-col md="6">
      <h6>Select with Icon</h6>
      <b-card-text>
        <span>The current option within the dropdown, contained within </span><code>&lt;li&gt;</code>
        <span>.</span>
        <code>option {Object}</code>
        <span> - The currently iterated option from </span>
        <code>filteredOptions</code>
      </b-card-text>

      <b-form-group>
        <v-select
          v-model="selected1"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          :options="books"
          label="title"
        >
          <template #option="{ title, icon }">
            <feather-icon
              :icon="icon"
              size="16"
              class="align-middle mr-50"
            />
            <span> {{ title }}</span>
          </template>
        </v-select>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BFormGroup } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    vSelect,
  },
  data() {
    return {
      selected: { title: 'Square' },
      selected1: {
        title: 'Aperture',
        icon: 'ApertureIcon',
      },
      option: [{ title: 'Square' }, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],
      books: [
        {
          title: 'Aperture',
          icon: 'ApertureIcon',
        },
        {
          title: 'Codepen',
          icon: 'CodepenIcon',
        },
        {
          title: 'Globe ',
          icon: 'GlobeIcon',
        },
        {
          title: 'Instagram ',
          icon: 'InstagramIcon',
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>
`

export const codeVueSize = `
<template>
  <b-row>

    <!-- Small -->
    <b-col cols="12">
      <b-form-group>
        <v-select
          v-model="selected"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="option"
          class="select-size-sm"
        />
      </b-form-group>
    </b-col>

    <!-- Medium -->
    <b-col cols="12">
      <b-form-group>
        <v-select
          v-model="selected"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="option"
        />
      </b-form-group>
    </b-col>

    <!-- Large -->
    <b-col cols="12">
      <b-form-group>
        <v-select
          v-model="selected"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="option"
          class="select-size-lg"
        />
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BFormGroup } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    vSelect,
  },
 data() {
    return {
      selected: { title: 'Square' },
      option: [{ title: 'Square' }, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
</style>
`

export const codeVueMultipleSize = `
<template>
  <b-row>

    <!-- Small -->
    <b-col cols="12">
      <b-form-group>
        <v-select
          v-model="selected"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="option"
          class="select-size-sm"
          multiple
        />
      </b-form-group>
    </b-col>

    <!-- Medium -->
    <b-col cols="12">
      <b-form-group>
        <v-select
          v-model="selected"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="option"
          multiple
        />
      </b-form-group>
    </b-col>

    <!-- Large -->
    <b-col cols="12">
      <b-form-group>
        <v-select
          v-model="selected"
          :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
          label="title"
          :options="option"
          class="select-size-lg"
          multiple
        />
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol, BFormGroup } from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    vSelect,
  },
  data() {
    return {
      selected: { title: 'Square' },
      option: [{ title: 'Square' }, { title: 'Rectangle' }, { title: 'Rombo' }, { title: 'Romboid' }],
    }
  },
}
</script>
`

export const codeVueMultiBasic = `
<template>
  <v-select
    v-model="selected"
    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    multiple
    label="title"
    :options="option"
  />
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
  },
   data() {
    return {
      dir: 'ltr',
      selected: [
        { title: 'Square' },
        { title: 'Romboid' },
      ],
    }
  },
}
</script>
`

export const codeVueMultiIcon = `
<template>
  <v-select
    v-model="selected1"
    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    multiple
    :options="books"
    label="title"
  >
    <template #option="{ title, icon }">
      <feather-icon
        :icon="icon"
        size="16"
        class="align-middle mr-25"
      />
      <span> {{ title }}</span>
    </template>
  </v-select>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      selected1: [
        {
          title: 'Command',
          icon: 'CommandIcon',
        },
      ],
      books: [
        {
          title: 'Database',
          icon: 'DatabaseIcon',
        },
        {
          title: 'Codepen',
          icon: 'CodepenIcon',
        },
        {
          title: 'Aperture ',
          icon: 'ApertureIcon',
        },
        {
          title: 'Command',
          icon: 'CommandIcon',
        },
      ],
    }
  },
}
</script>
`

export const codeMultiPush = `
<template>
  <div>
    <v-select
      :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
      multiple
      taggable
      push-tags
      placeholder="Add Options"
      label="title"
    />
  </div>
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
  },
}
</script>
`

export const codeVueSelectionLimit = `
<template>
  <v-select
    v-model="selected2"
    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    multiple
    placeholder="Choose up to 3 books!"
    label="title"
    :options="books"
    :selectable="() => selected2.length < 3"
  />
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      selected2: [],
      books: [
        {
          title: 'Database',
          icon: 'DatabaseIcon',
        },
        {
          title: 'Codepen',
          icon: 'CodepenIcon',
        },
        {
          title: 'Aperture ',
          icon: 'ApertureIcon',
        },
        {
          title: 'Command',
          icon: 'CommandIcon',
        },
      ],
    }
  },
}
</script>
`

export const codeVueDir = `
<template>
  <div>
    <div class="mb-2">
      <b-form-radio
        v-model="dir"
        name="some-radios"
        value="ltr"
        inline
      >
        LRT
      </b-form-radio>
      <b-form-radio
        v-model="dir"
        name="some-radios"
        value="rtl"
        inline
      >
        RTL
      </b-form-radio>
    </div>

    <v-select
      v-model="selected3"
      :dir="dir"
      multiple
      label="title"
      :options="books"
    />
  </div>
</template>

<script>
import {BFormRadio} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BFormRadio,
    vSelect,
  },
  data() {
    return {
      dir: 'ltr',
      selected3: [{
        title: 'Database',
        icon: 'DatabaseIcon',
      }],
      books: [
        {
          title: 'Database',
          icon: 'DatabaseIcon',
        },
        {
          title: 'Codepen',
          icon: 'CodepenIcon',
        },
        {
          title: 'Aperture ',
          icon: 'ApertureIcon',
        },
        {
          title: 'Command',
          icon: 'CommandIcon',
        },
      ],
    }
  },
}
</script>
`
