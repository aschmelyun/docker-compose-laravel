<template>
  <b-card-code
    title="Variations"
  >
    <b-card-text class="mb-0">
      <span>Group a set of dropdown sub components with an optional associated header. Place a </span>
      <code>&lt;b-dropdown-divider&gt;</code>
      <span> between your</span>
      <code>&lt;b-dropdown-group&gt;</code>
      <span> and other groups or non-grouped dropdown contents.</span>
    </b-card-text>

    <div class="demo-inline-spacing">
      <!-- group -->
      <b-dropdown
        id="dropdown-grouped"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        right
        text="Group"
      >
        <b-dropdown-group
          id="dropdown-group-1"
          header="Group 1"
        >
          <b-dropdown-item>Option 1</b-dropdown-item>
          <b-dropdown-item>Option 2</b-dropdown-item>
        </b-dropdown-group>
        <b-dropdown-divider />
        <b-dropdown-group
          id="dropdown-group-2"
          header="Group 2"
        >
          <b-dropdown-item>Option 1</b-dropdown-item>
          <b-dropdown-item>Option 2</b-dropdown-item>
        </b-dropdown-group>
      </b-dropdown>

      <!-- icon -->
      <b-dropdown
        id="dropdown-grouped"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        right
        class="dropdown-icon-wrapper"
      >
        <template #button-content>
          <span class="mr-1">Volume</span>
          <feather-icon
            icon="Volume1Icon"
            size="16"
            class="align-middle"
          />
        </template>
        <b-dropdown-item>
          <feather-icon
            icon="Volume1Icon"
            size="18"
          />
        </b-dropdown-item>
        <b-dropdown-item>
          <feather-icon
            icon="Volume2Icon"
            size="18"
          />
        </b-dropdown-item>
        <b-dropdown-item>
          <feather-icon
            icon="VolumeXIcon"
            size="18"
          />
        </b-dropdown-item>
      </b-dropdown>

      <!-- form -->
      <b-dropdown
        id="dropdown-form"
        ref="dropdown"
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        right
        variant="primary"
        text="Form"
      >
        <b-dropdown-form class="py-1">
          <b-form-group
            label="Email"
            label-for="dropdown-form-email"
            @submit.stop.prevent
          >
            <b-form-input
              id="dropdown-form-email"
              size="sm"
              placeholder="email@example.com"
            />
          </b-form-group>

          <b-form-group
            label="Password"
            label-for="dropdown-form-password"
          >
            <b-form-input
              id="dropdown-form-password"
              type="password"
              size="sm"
              placeholder="Password"
            />
          </b-form-group>

          <div class="mb-2">
            <b-form-checkbox>
              Remember me
            </b-form-checkbox>
          </div>
          <b-button
            variant="primary"
            size="sm"
            @click="onClick"
          >
            Sign In
          </b-button>
        </b-dropdown-form>
        <b-dropdown-divider />
        <b-dropdown-item>New around here? Sign up</b-dropdown-item>
        <b-dropdown-item>Forgot Password?</b-dropdown-item>
      </b-dropdown>
    </div>

    <template #code>
      {{ codeDropdownVariation }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButton,
  BDropdown,
  BDropdownDivider,
  BDropdownForm,
  BDropdownGroup,
  BDropdownItem,
  BFormCheckbox,
  BFormGroup,
  BFormInput,
  BCardText,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codeDropdownVariation } from './code'

export default {
  components: {
    BCardCode,
    BCardText,
    BButton,
    BDropdown,
    BDropdownDivider,
    BDropdownForm,
    BDropdownGroup,
    BDropdownItem,
    BFormCheckbox,
    BFormGroup,
    BFormInput,
  },
  directives: {
    Ripple,
  },
  data() { return { codeDropdownVariation } },
  methods: {
    onClick() {
      // Close the menu and (by passing true) return focus to the toggle button
      this.$refs.dropdown.hide(true)
    },
  },
}
</script>
