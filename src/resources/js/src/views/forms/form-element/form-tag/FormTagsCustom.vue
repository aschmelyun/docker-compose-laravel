<template>
  <b-card-code
    title="Using custom form components"
  >
    <b-card-text>
      The scope contains attributes and event handlers that can be directly bound to most custom inputs or select
      components.
    </b-card-text>

    <div>
      <b-form-group label="Tagged input using select">

        <!-- prop `add-on-change` is needed to enable adding tags vie the `change` event -->
        <b-form-tags
          v-model="value"
          size="lg"
          add-on-change
          no-outer-focus
        >
          <template #default="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
            <ul
              v-if="tags.length > 0"
              class="list-inline d-inline-block mb-1"
            >
              <li
                v-for="tag in tags"
                :key="tag"
                class="list-inline-item"
              >
                <b-form-tag
                  :title="tag"
                  :disabled="disabled"
                  variant="primary"
                  @remove="removeTag(tag)"
                >
                  {{ tag }}
                </b-form-tag>
              </li>
            </ul>
            <b-form-select
              v-bind="inputAttrs"
              :disabled="disabled || availableOptions.length === 0"
              :options="availableOptions"
              v-on="inputHandlers"
            >
              <template #first>

                <!-- This is required to prevent bugs with Safari -->
                <option
                  disabled
                  value=""
                >
                  Choose a tag...
                </option>
              </template>
            </b-form-select>
          </template>
        </b-form-tags>
      </b-form-group>
    </div>

    <template #code>
      {{ codeCustom }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormTags, BFormTag, BFormGroup, BFormSelect, BCardText,
} from 'bootstrap-vue'
import { codeCustom } from './code'

export default {
  components: {
    BCardCode,
    BFormTags,
    BFormGroup,
    BFormSelect,
    BFormTag,
    BCardText,
  },
  data() {
    return {
      options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
      value: [],
      codeCustom,
    }
  },
  computed: {
    availableOptions() {
      return this.options.filter(opt => this.value.indexOf(opt) === -1)
    },
  },
}
</script>
