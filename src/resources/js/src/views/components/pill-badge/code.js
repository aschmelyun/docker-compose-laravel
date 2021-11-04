export const codePillContextual = `
<template>
  <div class="demo-inline-spacing">
    <b-badge pill variant="primary">Primary</b-badge>
    <b-badge pill>Secondary</b-badge>
    <b-badge pill variant="success">Success</b-badge>
    <b-badge pill variant="danger">Danger</b-badge>
    <b-badge pill variant="warning">Warning</b-badge>
    <b-badge pill variant="info">Info</b-badge>
    <b-badge pill variant="dark">Dark</b-badge>
  </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'

export default {
  components: {
    BBadge,
  },
}
</script>
`

export const codeGlow = `
<template>
  <div class="demo-inline-spacing">
    <b-badge pill variant="primary" class="badge-glow">Primary</b-badge>
    <b-badge pill variant="secondary" class="badge-glow">Secondary</b-badge>
    <b-badge pill variant="success" class="badge-glow">Success</b-badge>
    <b-badge pill variant="danger" class="badge-glow">Danger</b-badge>
    <b-badge pill variant="warning" class="badge-glow">Warning</b-badge>
    <b-badge pill variant="info" class="badge-glow">Info</b-badge>
    <b-badge pill variant="dark" class="badge-glow">Dark</b-badge>
  </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'

export default {
  components: {
    BBadge,
  },
}
</script>
`

export const codeNotification = `
<template>
  <div class="demo-inline-spacing">
    <feather-icon
      icon="BellIcon"
      size="21"
      class="text-primary"
      badge="4"
    />

    <feather-icon
      icon="BellIcon"
      size="21"
      class="text-info"
      badge="4"
      badge-classes="badge-info"
    />
    <feather-icon
      icon="BellIcon"
      size="21"
      class="text-danger"
      badge="4"
      badge-classes="badge-danger badge-glow"
    />
  </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'

export default {
  components: {
    BBadge,
  },
}
</script>
`

export const codeLightBadge = `
<template>
  <div class="demo-inline-spacing">
    <b-badge pill variant="light-primary">Primary</b-badge>
    <b-badge pill variant="light-secondary">Secondary</b-badge>
    <b-badge pill variant="light-success">Success</b-badge>
    <b-badge pill variant="light-danger">Danger</b-badge>
    <b-badge pill variant="light-warning">Warning</b-badge>
    <b-badge pill variant="light-info">Info</b-badge>
    <b-badge pill variant="light-dark">Dark</b-badge>
  </div>
</template>

<script>
import { BBadge } from 'bootstrap-vue'

export default {
  components: {
    BBadge,
  },
}
</script>
`

export const codeLinkBadge = `
<template>
 <b-badge
    href="#"
    pill
    variant="primary"
  >
    Primary
  </b-badge>
</template>

<script>
import { BBadge} from 'bootstrap-vue'

export default {
  components: {
    BBadge,
  },
}
</script>
`

export const codeLinkBlock = `
<template>
  <b-badge
    href="#"
    class="d-block"
    pill
    variant="danger"
  >
    Block Badge Pill
  </b-badge>
</template>

<script>
import {BBadge} from 'bootstrap-vue'

export default {
  components: {
    BBadge,
  },
}
</script>
`
