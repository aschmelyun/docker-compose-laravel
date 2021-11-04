export const codeContextual = `
<template>
   <div class="demo-inline-spacing">
      <b-badge variant="primary">
        Primary
      </b-badge>
      <b-badge>
        Secondary
      </b-badge>
      <b-badge variant="success">
        Success
      </b-badge>
      <b-badge variant="danger">
        Danger
      </b-badge>
      <b-badge variant="warning">
        Warning
      </b-badge>
      <b-badge variant="info">
        Info
      </b-badge>
      <b-badge variant="dark">
        Dark
      </b-badge>
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
  <!-- glow badges -->
  <div class="demo-inline-spacing">
    <b-badge
      variant="primary"
      class="badge-glow"
    >
      Primary
    </b-badge>
    <b-badge class="badge-glow">
      Secondary
    </b-badge>
    <b-badge
      variant="success"
      class="badge-glow"
    >
      Success
    </b-badge>
    <b-badge
      variant="danger"
      class="badge-glow"
    >
      Danger
    </b-badge>
    <b-badge
      variant="warning"
      class="badge-glow"
    >
      Warning
    </b-badge>
    <b-badge
      variant="info"
      class="badge-glow"
    >
      Info
    </b-badge>
    <b-badge
      variant="dark"
      class="badge-glow"
    >
      Dark
    </b-badge>
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

export const codeLightBadges = `
<template>
  <div class="demo-inline-spacing">
    <b-badge variant="light-primary">
      Primary
    </b-badge>
    <b-badge variant="light-secondary">
      Secondary
    </b-badge>
    <b-badge variant="light-success">
      Success
    </b-badge>
    <b-badge variant="light-danger">
      Danger
    </b-badge>
    <b-badge variant="light-warning">
      Warning
    </b-badge>
    <b-badge variant="light-info">
      Info
    </b-badge>
    <b-badge variant="light-dark">
      Dark
    </b-badge>
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

export const codeIcon = `
<template>
  <!--badges -->
  <div class="demo-inline-spacing">
    <b-badge variant="primary">
      <feather-icon
        icon="StarIcon"
        class="mr-25"
      />
      <span>Primary</span>
    </b-badge>
    <b-badge>
      <feather-icon
        icon="StarIcon"
        class="mr-25"
      />
      <span>Secondary</span>
    </b-badge>
    <b-badge
      variant="success"
    >
      <feather-icon
        icon="StarIcon"
        class="mr-25"
      />
      <span>Success</span>
    </b-badge>
    <b-badge
      variant="danger"
    >
      <feather-icon
        icon="StarIcon"
        class="mr-25"
      />
      <span>Danger</span>
    </b-badge>
    <b-badge
      variant="warning"
    >
      <feather-icon
        icon="StarIcon"
        class="mr-25"
      />
      <span>Warning</span>
    </b-badge>
    <b-badge
      variant="info"
    >
      <feather-icon
        icon="StarIcon"
        class="mr-25"
      />
      <span>Info</span>
    </b-badge>
    <b-badge
      variant="dark"
    >
      <feather-icon
        icon="StarIcon"
        class="mr-25"
      />
      <span>Dark</span>
    </b-badge>
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

export const codeLink = `
<template>
  <b-badge
    href="#"
    variant="primary"
  >
    <feather-icon
      icon="LinkIcon"
      class="mr-25"
    />
    <span>Link Badge</span>
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

export const codeBlock = `
<template>
  <div class="text-center">
    <b-badge
      href="#"
      class="d-block"
      variant="primary"
    >
      Badge
    </b-badge>
  </div>
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
