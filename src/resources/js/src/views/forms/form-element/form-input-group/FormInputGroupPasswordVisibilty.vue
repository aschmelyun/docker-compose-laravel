<template>
  <b-card-code title="Password Visibility">
    <b-form-group>
      <b-input-group>
        <b-form-input
          v-model="password"
          :type="passwordFieldType"
          placeholder="enter your password"
        />
        <b-input-group-append is-text>
          <feather-icon
            icon="EyeIcon"
            @click="passwordToggle"
          />
        </b-input-group-append>
      </b-input-group>
    </b-form-group>

    <template #code>
      {{ codePasswordVisibility }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BFormGroup, BInputGroup, BFormInput, BInputGroupAppend,
} from 'bootstrap-vue'
import { codePasswordVisibility } from './code'

export default {
  components: {
    BCardCode,
    BFormGroup,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,
  },
  data() {
    return {
      password: '',
      passwordFieldType: 'password',
      codePasswordVisibility,
    }
  },
  methods: {
    passwordToggle() {
      this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
    },
  },
}
</script>
