const codeAspectDefaut = `
<template>
  <div>
   <!-- alert -->
    <b-alert
      show
      variant="success"
    >
      <div class="alert-body">
        <feather-icon
          icon="InfoIcon"
          class="mr-50 mt-25"
        />
        Change width of your browser window to see effect
      </div>
    </b-alert>

    <!-- select -->
    <b-form-group
      label="Aspect ratio"
      label-for="ratio"
      label-cols-md="auto"
      class="mb-3"
    >
      <b-form-select
        id="ratio"
        v-model="aspect"
        :options="aspects"
      />
    </b-form-group>

    <!-- aspect -->
    <b-aspect :aspect="aspect">
      <p>This will always be an aspect of "{{ aspect }}", except when the content is too tall.</p>
    </b-aspect>
  </div>
</template>

<script>
import { BAlert, BAspect, BFormGroup, BFormSelect, BLink} from 'bootstrap-vue'

export default {
  components: {
    BAlert,
    BAspect,
    BFormGroup,
    BLink,
    BFormSelect,
  },
  data: () => ({
    aspect: '16:9',
    aspects: [
      { text: '4:3 (SD)', value: '4:3' },
      { text: '1:1 (Square)', value: '1:1' },
      { text: '16:9 (HD)', value: '16:9' },
      { text: '1.85:1 (Widescreen)', value: '1.85:1' },
      { text: '2:1 (Univisium/Superscope)', value: '2:1' },
      { text: '21:9 (Anamorphic)', value: '21:9' },
      { text: '1.43:1 (IMAX)', value: '1.43:1' },
      { text: '3:2 (35mm Film)', value: '3:2' },
      { text: '3:1 (APS-P)', value: '3:1' },
      { text: '4/3 (Same as 4:3)', value: 4 / 3 },
      { text: '16/9 (Same as 16:9)', value: 16 / 9 },
      { text: '3 (Same as 3:1)', value: 3 },
      { text: '2 (Same as 2:1)', value: 2 },
      { text: '1.85 (Same as 1.85:1)', value: 1.85 },
      { text: '1.5', value: 1.5 },
      { text: '1 (Same as 1:1)', value: 1 },
    ],
  }),
}
</script>
`

export default codeAspectDefaut
