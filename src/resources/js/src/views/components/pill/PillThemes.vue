<template>
  <b-card-code title="Pill Themes">
    <b-card-text>
      <span>Use class </span>
      <code>.nav-pill-{color-name}</code>
      <span> with </span>
      <code>&lt;b-tabs&gt;</code>
      <span> class to apply color according to your choice.</span>
    </b-card-text>

    <!-- primary -->
    <h6>Primary</h6>
    <b-tabs
      pills
      nav-class="nav-pill-primary"
    >
      <b-tab
        title="Active"
        active
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Disabled"
        disabled
      />
    </b-tabs>

    <!-- secondary -->
    <h6>Secondary</h6>
    <b-tabs
      pills
      nav-class="nav-pill-secondary"
    >
      <b-tab
        title="Active"
        active
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Disabled"
        disabled
      />
    </b-tabs>

    <!-- success -->
    <h6>Success</h6>
    <b-tabs
      pills
      nav-class="nav-pill-success"
    >
      <b-tab
        title="Active"
        active
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Disabled"
        disabled
      />
    </b-tabs>

    <!-- danger -->
    <h6>Danger</h6>
    <b-tabs
      pills
      nav-class="nav-pill-danger"
    >
      <b-tab
        title="Active"
        active
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Disabled"
        disabled
      />
    </b-tabs>

    <!-- warning -->
    <h6>Warning</h6>
    <b-tabs
      pills
      nav-class="nav-pill-warning"
    >
      <b-tab
        title="Active"
        active
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Disabled"
        disabled
      />
    </b-tabs>

    <!-- info -->
    <h6>Info</h6>
    <b-tabs
      pills
      nav-class="nav-pill-info"
    >
      <b-tab
        title="Active"
        active
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Link"
      />
      <b-tab
        title="Disabled"
        disabled
      />
    </b-tabs>

    <template #code>
      {{ codeThemes }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BTab, BTabs, BCardText } from 'bootstrap-vue'
import { codeThemes } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BTab,
    BTabs,
  },
  data() {
    return {
      codeThemes,
    }
  },
}
</script>
