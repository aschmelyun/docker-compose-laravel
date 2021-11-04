export const codeDefault = `
<template>
 <b-breadcrumb
    :items="items"
  />
</template>

<script>
import { BBreadcrumb } from 'bootstrap-vue'

export default {
  components: {
    BBreadcrumb,
  },
 data() {
    return {
      codeDefault,
      items: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Library',
        },
        {
          text: 'Data',
          active: true,
        },
      ],
    }
  },
}
</script>
`

export const codeSeparator = `
<template>
   <div id="component-breadcrumbs">
    <b-breadcrumb
      class="breadcrumb-slash"
      :items="items"
    />
    <b-breadcrumb
      class="breadcrumb-dots"
      :items="items"
    />
    <b-breadcrumb
      class="breadcrumb-dashes"
      :items="items"
    />
    <b-breadcrumb
      class="breadcrumb-pipes"
      :items="items"
    />
    <b-breadcrumb
      class="breadcrumb-chevron mb-0"
      :items="items"
    />
  </div>
</template>

<script>
import { BBreadcrumb } from 'bootstrap-vue'

export default {
  components: {
    BBreadcrumb,
  },
  data() {
    return {
      items: [
        {
          text: 'Home',
        },
        {
          text: 'Library',
        },
        {
          text: 'Data',
          active: true,
        },
      ],
    }
  },
}
</script>
`

export const codeSlot = `
<template>
  <b-breadcrumb class="breadcrumb-slash">
    <b-breadcrumb-item href="#home">
      Home
    </b-breadcrumb-item>
    <b-breadcrumb-item href="#foo">
      Chat
    </b-breadcrumb-item>
    <b-breadcrumb-item active>
      Infos
    </b-breadcrumb-item>
  </b-breadcrumb>
</template>

<script>
import { BBreadcrumb, BBreadcrumbItem } from 'bootstrap-vue'

export default {
  components: {
    BBreadcrumb,
    BBreadcrumbItem,
  },
}
</script>
`

export const codeAlignment = `
<template>
  <div id="breadcrumb-alignment">
    <div class="d-flex justify-content-start breadcrumb-wrapper">
      <b-breadcrumb :items="items" />
    </div>
    <div class="d-flex justify-content-center breadcrumb-wrapper my-1">
      <b-breadcrumb :items="items" />
    </div>
    <div class="d-flex justify-content-end breadcrumb-wrapper pr-1">
      <b-breadcrumb :items="items" />
    </div>
  </div>
</template>

<script>
import { BBreadcrumb} from 'bootstrap-vue'

export default {
  components: {
    BBreadcrumb,
  },
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
        },
        {
          text: 'Library',
        },
        {
          text: 'Data',
          active: true,
        },
      ],
    }
  },
}
</script>
`
