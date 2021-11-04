<template>
  <b-card-code
    title="Advanced custom rendering usage"
  >
    <b-card-text>
      <span>In situations where the </span>
      <code>inputHandlers</code>
      <span>
        will not work with your custom input, or if you need greater control over tag creation, you can take advantage
        of the additional properties provided via the default slot's scope.
      </span>
    </b-card-text>

    <div>
      <b-form-group label="Tagged input using dropdown">
        <b-form-tags
          v-model="value"
          no-outer-focus
        >
          <template #default="{ tags, disabled, addTag, removeTag }">
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

            <b-dropdown
              size="sm"
              variant="outline-secondary"
              block
              menu-class="w-100"
            >
              <template #button-content>
                <feather-icon icon="LinkIcon" />
                <span class="ml-25">Choose tags</span>
              </template>
              <b-dropdown-form @submit.stop.prevent="() => {}">
                <b-form-group
                  label-for="tag-search-input"
                  label="Search tags"
                  label-cols-md="auto"
                  class="mb-0"
                  label-size="sm"
                  :description="searchDesc"
                  :disabled="disabled"
                >
                  <b-form-input
                    id="tag-search-input"
                    v-model="search"
                    type="search"
                    size="sm"
                    autocomplete="off"
                  />
                </b-form-group>
              </b-dropdown-form>
              <b-dropdown-divider />
              <b-dropdown-item
                v-for="option in availableOptions"
                :key="option"
                @click="onOptionClick({ option, addTag })"
              >
                {{ option }}
              </b-dropdown-item>
              <b-dropdown-text v-if="availableOptions.length === 0">
                There are no tags available to select
              </b-dropdown-text>
            </b-dropdown>
          </template>
        </b-form-tags>
      </b-form-group>
    </div>

    <template #code>
      {{ codeAdvanceCustom }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormTags,
  BFormGroup,
  BDropdown,
  BDropdownForm,
  BFormInput,
  BDropdownDivider,
  BDropdownItem,
  BFormTag,
  BDropdownText,
  BCardText,
} from 'bootstrap-vue'
import { codeAdvanceCustom } from './code'

export default {
  components: {
    BCardCode,
    BFormTags,
    BFormGroup,
    BDropdown,
    BDropdownForm,
    BFormInput,
    BDropdownDivider,
    BCardText,
    BDropdownItem,
    BFormTag,
    BDropdownText,
  },
  data() {
    return {
      options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
      search: '',
      value: [],
      codeAdvanceCustom,
    }
  },
  computed: {
    criteria() {
      // Compute the search criteria
      return this.search.trim().toLowerCase()
    },
    availableOptions() {
      const { criteria } = this

      // Filter out already selected options
      const options = this.options.filter(opt => this.value.indexOf(opt) === -1)
      if (criteria) {
        // Show only options that match criteria
        return options.filter(opt => opt.toLowerCase().indexOf(criteria) > -1)
      }

      // Show all options available
      return options
    },
    searchDesc() {
      if (this.criteria && this.availableOptions.length === 0) {
        return 'There are no tags matching your search criteria'
      }
      return ''
    },
  },
  methods: {
    onOptionClick({ option, addTag }) {
      addTag(option)
      this.search = ''
    },
  },
}
</script>
