export const codeSizes = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      size="sm"
      :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
    />
    <b-avatar
      :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
    />
    <b-avatar
      size="lg"
      :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
    />
    <b-avatar
      size="70px"
      :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
    />
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BAvatar,
  },
}
</script>
`

export const codeInitials = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      size="sm"
      variant="light-primary"
      text="PI"
    />
    <b-avatar
      variant="light-secondary"
      text="PI"
    />
    <b-avatar
      size="lg"
      variant="light-success"
      text="PI"
    />
    <b-avatar
      size="70px"
      variant="light-danger"
      text="PI"
    />
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BAvatar
  },
}
</script>
`

export const codeColor = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      variant="primary"
      text="PI"
    />
    <b-avatar
      variant="secondary"
      text="PI"
    />
    <b-avatar
      variant="success"
      text="PI"
    />
    <b-avatar
      variant="danger"
      text="PI"
    />
    <b-avatar
      variant="warning"
      text="PI"
    />
    <b-avatar
      variant="info"
      text="PI"
    />
  </div>
</template>

<script>
import { BAvatar} from 'bootstrap-vue'

export default {
  components: {
    BAvatar,
  },
}
</script>
`

export const codeColorLight = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      text="PI"
      variant="light-primary"
    />
    <b-avatar
      text="PI"
      variant="light-secondary"
    />
    <b-avatar
      text="PI"
      variant="light-success"
    />
    <b-avatar
      text="PI"
      variant="light-danger"
    />
    <b-avatar
      text="PI"
      variant="light-warning"
    />
    <b-avatar
      text="PI"
      variant="light-info"
    />
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BAvatar,
  },
}
</script>
`

export const codeIcon = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar variant="primary">
      <feather-icon icon="HomeIcon" />
    </b-avatar>
    <b-avatar variant="success">
      <feather-icon icon="BellIcon" />
    </b-avatar>
    <b-avatar variant="info">
      <feather-icon icon="UserIcon" />
    </b-avatar>
    <b-avatar variant="danger">
      <feather-icon icon="MessageSquareIcon" />
    </b-avatar>
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BAvatar
  },
}
</script>
`

export const codeCustomContent = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar variant="primary">
      <span>Hi</span>
    </b-avatar>

    <b-avatar variant="secondary">
      <span>New</span>
    </b-avatar>

    <b-avatar variant="success">
      <span>Hey</span>
    </b-avatar>

    <b-avatar variant="light-danger">
      <span>Hi</span>
    </b-avatar>

    <b-avatar variant="light-warning">
      <span>New</span>
    </b-avatar>

    <b-avatar variant="light-info">
      <span>Hey</span>
    </b-avatar>
  </div>
</template>

<script>
import { BAvatar} from 'bootstrap-vue'

export default {
  components: {
    BAvatar
  },
}
</script>
`

export const codeBadge = `
<template>
  <div class="demo-inline-spacing">
    <!-- using default slot  -->
    <b-avatar
      badge="5"
      badge-variant="primary"
    >
      <span class="d-flex align-items-center">
        <feather-icon
          icon="DownloadIcon"
          size="16"
        />
      </span>
    </b-avatar>

    <!-- with badge prop -->
    <b-avatar
      badge="3"
      badge-variant="primary"
    />

    <b-avatar
      badge="2"
      badge-variant="primary"
    />

    <b-avatar
      badge="1"
      badge-variant="primary"
    />

    <b-avatar
      badge="10"
      badge-variant="primary"
      text="BV"
    />
  </div>
</template>

<script>
import { BAvatar} from 'bootstrap-vue'

export default {
  components: {
    BAvatar,
  },
}
</script>
`

export const codeBadgeContent = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      class="mr-1"
      badge="B"
    />
    <b-avatar
      badge="7"
      class="mr-1"
      variant="primary"
      badge-variant="danger"
    />
    <b-avatar
      badge-variant="success"
      badge="1"
      :src="require('@/assets/images/portrait/small/avatar-s-16.jpg')"
    />
</div>
</template>

<script>
import { BAvatar} from 'bootstrap-vue'

export default {
  components: {
    BAvatar
  },
}
</script>
`

export const codeBadgePosition = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      class="mr-1"
      badge
      badge-variant="success"
    />
    <b-avatar
      class="mr-1"
      badge-variant="success"
      badge
      badge-left
    />
    <b-avatar
      badge
      class="mr-1"
      badge-variant="success"
      badge-top
    />
    <b-avatar
      badge
      class="mr-1"
      badge-variant="success"
      badge-left
      badge-top
    />
</div>
</template>

<script>
import { BAvatar} from 'bootstrap-vue'

export default {
  components: {
    BAvatar
  },
}
</script>
`

export const codeBadgeOffset = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      badge
      badge-variant="success"
      badge-offset="-0.5em"
      class="mr-1"
    />
    <b-avatar
      badge
      badge-variant="success"
      badge-offset="-2px"
      class="mr-1"
    />
    <b-avatar
      badge
      badge-variant="success"
      badge-offset="2px"
      class="mr-1"
    />
    <b-avatar
      badge
      badge-top
      badge-variant="success"
      badge-offset="-0.5em"
      class="mr-1"
    />
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BAvatar
  },
}
</script>
`

export const codeSquare = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      variant="light-primary"
      square
    />
    <b-avatar
      square
      variant="light-success"
    />
  </div>
</template>

<script>
import { BAvatar } from 'bootstrap-vue'

export default {
  components: {
    BAvatar
  },
}
</script>
`

export const codeRounded = `
<template>
  <div class="demo-inline-spacing">
    <b-avatar
      rounded="sm"
      variant="light-primary"
    />
    <b-avatar
      rounded
      variant="light-success"
    />
    <b-avatar
      rounded="top"
      variant="light-danger"
    />
    <b-avatar
      rounded="lg"
      variant="light-warning"
    />
    <b-avatar
      rounded="left"
      variant="light-info"
    />
    <b-avatar
      rounded="right"
      variant="light-primary"
    />
    <b-avatar
      rounded="bottom"
      variant="light-dark"
    />
  </div>
</template>

<script>
import { BAvatar} from 'bootstrap-vue'

export default {
  components: {
    BAvatar
  },
}
</script>
`

export const codeGroup = `
<template>
  <b-avatar-group size="32px">
    <b-avatar
      class="pull-up"
      :src="require('@/assets/images/portrait/small/avatar-s-5.jpg')"
    />
    <b-avatar
      class="pull-up"
      variant="primary"
      :src="require('@/assets/images/portrait/small/avatar-s-7.jpg')"
    />
    <b-avatar
      class="pull-up"
      :src="require('@/assets/images/portrait/small/avatar-s-10.jpg')"
    />
    <b-avatar
      class="pull-up"
      variant="danger"
      :src="require('@/assets/images/portrait/small/avatar-s-8.jpg')"
    />
    <b-avatar
      class="pull-up"
      :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
    />
  </b-avatar-group>
</template>

<script>
import { BAvatarGroup, BAvatar, } from 'bootstrap-vue'

export default {
  components: {
    BAvatarGroup,
    BAvatar,
  },
}
</script>
`

export const codeGroupTooltip = `
<template>
  <b-avatar-group size="32px">
    <b-avatar
      v-b-tooltip.hover
      class="pull-up"
      title="Jenny Looper"
      :src="require('@/assets/images/portrait/small/avatar-s-5.jpg')"
    />
    <b-avatar
      v-b-tooltip.hover
      class="pull-up"
      title="Darcey Nooner"
      variant="primary"
      :src="require('@/assets/images/portrait/small/avatar-s-7.jpg')"
    />
    <b-avatar
      v-b-tooltip.hover
      class="pull-up"
      title="Julee Rossignol"
      :src="require('@/assets/images/portrait/small/avatar-s-10.jpg')"
    />
    <b-avatar
      v-b-tooltip.hover
      class="pull-up"
      title="Elicia Rieske"
      variant="danger"
      :src="require('@/assets/images/portrait/small/avatar-s-8.jpg')"
    />
    <b-avatar
      v-b-tooltip.hover
      class="pull-up"
      title="Vinnie Mostowy"
      :src="require('@/assets/images/portrait/small/avatar-s-20.jpg')"
    />
  </b-avatar-group>
</template>

<script>
import {  BAvatarGroup, BAvatar, VBTooltip} from 'bootstrap-vue'

export default {
  components: {
    BAvatarGroup,
    BAvatar
  },
  directives: {
    'b-tooltip': VBTooltip,
  },
}
</script>
`

export const codeAction = `
<template>
  <div class="demo-inline-spacing">
    <!-- button avatar -->
    <b-avatar
      button
      variant="primary"
      text="BA"
      class="align-baseline"
      @click="showToast"
    />
    <span> Button Avatar</span>

    <!-- link avatar -->
    <b-avatar
      href="#foobar"
      :src="require('@/assets/images/portrait/small/avatar-s-8.jpg')"
    />
    <span>Link Avatar</span>
  </div>
</template>

<script>
import { BAvatar} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  components: {
    BAvatar,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  methods: {
    showToast() {
      this.$toast({
        component: ToastificationContent,
        props: {
          title: 'Notification',
          icon: 'BellIcon',
        },
      })
    },
  },
}
</script>
`
