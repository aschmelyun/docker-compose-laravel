export const codeButtonFilled = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
    >
      Primary
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="secondary"
    >
      Secondary
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="success"
    >
      Success
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="danger"
    >
      Danger
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="warning"
    >
      Warning
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="info"
    >
      Info
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="dark"
    >
      Dark
    </b-button>
  </div>
</template>

<script>
import { BButton} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeButtonBorder = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
    >
      Primary
    </b-button>
    <b-button
      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
      variant="outline-secondary"
    >
      Secondary
    </b-button>
    <b-button
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      variant="outline-success"
    >
      Success
    </b-button>
    <b-button
      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
      variant="outline-danger"
    >
      Danger
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 159, 67, 0.15)'"
      variant="outline-warning"
    >
      Warning
    </b-button>
    <b-button
      v-ripple.400="'rgba(0, 207, 232, 0.15)'"
      variant="outline-info"
    >
      Info
    </b-button>
    <b-button
      v-ripple.400="'rgba(30, 30, 30, 0.15)'"
      variant="outline-dark"
    >
      Dark
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeButtonFlat = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="flat-primary"
    >
      Primary
    </b-button>
    <b-button
      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
      variant="flat-secondary"
    >
      Secondary
    </b-button>
    <b-button
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      variant="flat-success"
    >
      Success
    </b-button>

    <b-button
      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
      variant="flat-danger"
    >
      Danger
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 159, 67, 0.15)'"
      variant="flat-warning"
    >
      Warning
    </b-button>
    <b-button
      v-ripple.400="'rgba(0, 207, 232, 0.15)'"
      variant="flat-info"
    >
      Info
    </b-button>
    <b-button
      v-ripple.400="'rgba(30, 30, 30, 0.15)'"
      variant="flat-dark"
    >
      Dark
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeButtonGradient = `
<template>
  <div class="demo-inline-spacing">
    <b-button variant="gradient-primary">
      Primary
    </b-button>
    <b-button variant="gradient-secondary">
      Secondary
    </b-button>
    <b-button variant="gradient-success">
      Success
    </b-button>
    <b-button variant="gradient-danger">
      Danger
    </b-button>
    <b-button variant="gradient-warning">
      Warning
    </b-button>
    <b-button variant="gradient-info">
      Info
    </b-button>
    <b-button variant="gradient-dark">
      Dark
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  components: {
    BButton,
  },
}
</script>
`

export const codeButtonRelief = `
<template>
  <div class="demo-inline-spacing">
    <b-button variant="relief-primary">
      Primary
    </b-button>
    <b-button variant="relief-secondary">
      Secondary
    </b-button>
    <b-button variant="relief-success">
      Success
    </b-button>
    <b-button variant="relief-danger">
      Danger
    </b-button>
    <b-button variant="relief-warning">
      Warning
    </b-button>
    <b-button variant="relief-info">
      Info
    </b-button>
    <b-button variant="relief-dark">
      Dark
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'

export default {
  components: {
    BButton,
  },
}
</script>
`

export const codeButtonRounded = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      pill
    >
      Primary
    </b-button>
    <b-button
      v-ripple.400="'rgba(186, 191, 199, 0.15)'"
      variant="outline-secondary"
      pill
    >
      Secondary
    </b-button>
    <b-button
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      variant="outline-success"
      pill
    >
      Success
    </b-button>
    <b-button
      v-ripple.400="'rgba(234, 84, 85, 0.15)'"
      variant="outline-danger"
      pill
    >
      Danger
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 159, 67, 0.15)'"
      variant="outline-warning"
      pill
    >
      Warning
    </b-button>
    <b-button
      v-ripple.400="'rgba(0, 207, 232, 0.15)'"
      variant="outline-info"
      pill
    >
      Info
    </b-button>
    <b-button
      v-ripple.400="'rgba(30, 30, 30, 0.15)'"
      variant="outline-dark"
      pill
    >
      Dark
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeIcon = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
    >
      <feather-icon
        icon="HomeIcon"
        class="mr-50"
      />
      <span class="align-middle">Home</span>
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="warning"
    >
      <feather-icon
        icon="StarIcon"
        class="mr-50"
      />
      <span class="align-middle">Star</span>
    </b-button>
    <b-button
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      variant="flat-success"
    >
      <feather-icon
        icon="CheckIcon"
        class="mr-50"
      />
      <span class="align-middle">Done</span>
    </b-button>
    <b-button
      variant="gradient-danger"
    >
      <feather-icon
        icon="HeartIcon"
        class="mr-50"
      />
      <span class="align-middle">Favorite</span>
    </b-button>
    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      disabled
    >
      <feather-icon
        icon="HomeIcon"
        class="mr-50"
      />
      <span class="align-middle">Disabled</span>
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeButtonIconOnly = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="warning"
      class="btn-icon"
    >
      <feather-icon icon="ArchiveIcon" />
    </b-button>

    <b-button
      variant="gradient-danger"
      class="btn-icon"
    >
      <feather-icon icon="UserPlusIcon" />
    </b-button>

    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="warning"
      class="btn-icon rounded-circle"
    >
      <feather-icon icon="ArchiveIcon" />
    </b-button>

    <b-button
      variant="gradient-danger"
      class="btn-icon rounded-circle"
    >
      <feather-icon icon="UserPlusIcon" />
    </b-button>

    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      class="btn-icon"
    >
      <feather-icon icon="SearchIcon" />
    </b-button>

    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      class="btn-icon"
      disabled
    >
      <feather-icon icon="SearchIcon" />
    </b-button>

    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      class="btn-icon rounded-circle"
    >
      <feather-icon icon="SearchIcon" />
    </b-button>

    <b-button
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      variant="outline-primary"
      class="btn-icon rounded-circle"
      disabled
    >
      <feather-icon icon="SearchIcon" />
    </b-button>

    <b-button
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      variant="flat-success"
      class="btn-icon rounded-circle"
    >
      <feather-icon icon="CameraIcon" />
    </b-button>

    <b-button
      v-ripple.400="'rgba(40, 199, 111, 0.15)'"
      variant="flat-success"
      class="btn-icon"
    >
      <feather-icon icon="CameraIcon" />
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeButtonSize = `
<template>
  <b-row>
    <b-col md="6">

      <!-- filled button size -->
      <div class="demo-inline-spacing">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          size="lg"
          variant="primary"
        >
          Large
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
        >
          Default
        </b-button>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          size="sm"
          variant="primary"
        >
          Small
        </b-button>
      </div>
    </b-col>
    <b-col>

      <!-- outline button size -->
      <div class="demo-inline-spacing">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          size="lg"
          variant="outline-primary"
        >
          Large
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-primary"
        >
          Default
        </b-button>
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          size="sm"
          variant="outline-primary"
        >
          Small
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { BButton, BRow, BCol} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BRow,
    BCol,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeCheckboxRadio = `
<template>
  <b-row>
    <b-col md="6">

      <!-- checkbox button  -->
      <b-form-group>
        <b-form-checkbox-group
          v-model="selectedCheckbox"
          :options="optionsChekcbox"
          name="buttons-1"
          buttons
          button-variant="primary"
        />
      </b-form-group>
    </b-col>
    <b-col md="6">

      <!-- radio button -->
      <b-form-group>
        <b-form-radio-group
          id="btn-radios-1"
          v-model="selectedRadio"
          button-variant="outline-primary"
          :options="optionsRadio"
          buttons
          name="radios-btn-default"
        />
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import {BFormRadioGroup, BFormCheckboxGroup, BFormGroup, BRow, BCol} from 'bootstrap-vue'

export default {
  components: {
    BFormRadioGroup,
    BFormCheckboxGroup,
    BFormGroup,
    BRow,
    BCol,
  },
  data() {
    return {
      selectedCheckbox: ['active'],
      optionsChekcbox: [
        { text: 'Active', value: 'active' },
        { text: 'Checkbox', value: 'checkbox' },
        { text: 'Checkbox', value: 'checkbox2' },
      ],
      selectedRadio: 'active',
      optionsRadio: [
        { text: 'Active', value: 'active' },
        { text: 'Radio', value: 'radio' },
        { text: 'Radio', value: 'radio2' },
      ],
    }
  },
}
</script>
`

export const codeButtonRouter = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      to="breadcrumb"
    >
      String Literal
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="warning"
      :to="{ path: 'breadcrumb' }"
    >
      Object Path
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="success"
      :to="{ name: 'Breadcrumb'}"
    >
      Named Router
    </b-button>
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="dark"
      :to="{ path: 'breadcrumb', query: { plan: 'private' } }"
    >
      With Query
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeBlockButton = `
<template>
  <b-row>
    <b-col md="6">
      <div class="demo-inline-spacing">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          block
          variant="primary"
        >
          Block level buttton
        </b-button>
      </div>
    </b-col>

    <b-col md="6">
      <div class="demo-inline-spacing">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          block
          variant="outline-primary"
        >
          Block level buttton
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { BButton, BCol, BRow } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BCol,
    BRow,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeButtonHref = `
<template>
  <div class="demo-inline-spacing">
    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      href="https://pixinvent.com/"
    >
      String Literal
    </b-button>

    <b-button
      v-ripple.400="'rgba(255, 255, 255, 0.15)'"
      variant="primary"
      target="_blank"
      href="https://pixinvent.com/"
    >
      Open New Tab
    </b-button>
  </div>
</template>

<script>
import { BButton } from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BAlert,
  },
  directives: {
    Ripple,
  },
}
</script>
`
