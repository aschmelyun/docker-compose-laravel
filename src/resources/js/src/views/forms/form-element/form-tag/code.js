export const codeAdvanceCustom = `
<template>
  <div>
    <b-form-group label="Tagged input using dropdown">
      <b-form-tags
        v-model="value"
        no-outer-focus
      >
        <template v-slot="{ tags, disabled, addTag, removeTag }">
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
            <template v-slot:button-content>
              <b-icon icon="tag-fill" /> Choose tags
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
</template>

<script>
import {BFormTags,BFormGroup,BDropdown,BDropdownForm,BFormInput,BDropdownDivider,BDropdownItem,BFormTag,BDropdownText} from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
    BFormGroup,
    BDropdown,
    BDropdownForm,
    BFormInput,
    BDropdownDivider,
    BDropdownItem,
    BFormTag,
    BDropdownText,
  },
  data: () => ({
    options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
    search: '',
    value: [],
    codeAdvanceCustom,
  }),
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
`
export const codeBasic = `
<template>
  <div>
    <label for="tags-basic">Type a new tag and press enter</label>
    <b-form-tags
      v-model="value"
      input-id="tags-basic"
      class="mb-2"
    />
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
import { BFormTags } from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
  },
  data: () => ({
    value: ['apple', 'orange'],
  }),
}
</script>
`

export const codeCustom = `
<template>
  <div>
    <b-form-group label="Tagged input using select">
      <!-- prop \`add-on - change\` is needed to enable adding tags vie the \`change\` event -->
      <b-form-tags
        v-model="value"
        size="lg"
        add-on-change
        no-outer-focus
      >
        <template v-slot="{ tags, inputAttrs, inputHandlers, disabled, removeTag }">
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
            <template v-slot:first>
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
</template>

<script>
import {BFormTags, BFormTag, BFormGroup, BFormSelect} from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
    BFormGroup,
    BFormSelect,
    BFormTag,
  },
  data: () => ({
    options: ['Apple', 'Orange', 'Banana', 'Lime', 'Peach', 'Chocolate', 'Strawberry'],
    value: [],
    codeCustom,
  }),
  computed: {
    availableOptions() {
      return this.options.filter(opt => this.value.indexOf(opt) === -1)
    },
  },
}
</script>
`
export const codeDetecting = `
<template>
  <div>
    <label for="tags-state-event">Enter tags</label>
    <b-form-tags
      v-model="tags"
      input-id="tags-state-event"
      :tag-validator="validator"
      placeholder="Enter tags (3-5 characters) separated by space"
      separator=" "
      @tag-state="onTagState"
    />
    <p class="mt-2">
      Tags: {{ tags }}
    </p>
    <p>Event values:</p>
    <ul>
      <li>validTags: {{ validTags }}</li>
      <li>invalidTags: {{ invalidTags }}</li>
      <li>duplicateTags: {{ duplicateTags }}</li>
    </ul>
  </div>
</template>

<script>
import { BFormTags } from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
  },
  data: () => ({
    tags: [],
    validTags: [],
    invalidTags: [],
    duplicateTags: [],
    codeDetecting,
  }),
  methods: {
    onTagState(valid, invalid, duplicate) {
      this.validTags = valid
      this.invalidTags = invalid
      this.duplicateTags = duplicate
    },
    validator(tag) {
      return tag.length > 2 && tag.length < 6
    },
  },
}
</script>
`

export const codeNativeInput = `
<template>
  <div>
    <b-form-tags
      v-model="value"
      no-outer-focus
    >
      <template #"{ tags, inputAttrs, inputHandlers, addTag, removeTag }">
        <b-input-group aria-controls="my-custom-tags-list">
          <input
            v-bind="inputAttrs"
            placeholder="New tag - Press enter to add"
            class="form-control"
            v-on="inputHandlers"
          >
          <b-input-group-append>
            <b-button
              variant="primary"
              @click="addTag()"
            >
              Add
            </b-button>
          </b-input-group-append>
        </b-input-group>
        <ul
          id="my-custom-tags-list"
          class="list-unstyled d-inline-flex flex-wrap mb-0"
          aria-live="polite"
          aria-atomic="false"
          aria-relevant="additions removals"
        >
          <!-- Always use the tag value as the :key, not the index! -->
          <!-- Otherwise screen readers will not read the tag
             additions and removals correctly -->
          <b-card
            v-for="tag in tags"
            :id="\`my-custom-tags-tag_\${tag.replace(/\\s/g, '_')}_\`"
            :key="tag"
            tag="li"
            class="shadow-none border mt-1 mr-1 mb-0"
            body-class="py-1 pr-2 text-nowrap"
          >
            <strong>{{ tag }}</strong>
            <b-button
              variant="link"
              size="sm"
              :aria-controls="\`my-custom-tags-tag_\${tag.replace(/\\s/g, '_')}_\`"
              class="py-0"
              @click="removeTag(tag)"
            >
              remove
            </b-button>
          </b-card>
        </ul>
      </template>
    </b-form-tags>
  </div>
</template>

<script>
import {
  BFormTags, BInputGroup, BInputGroupAppend, BCard, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
    BInputGroup,
    BCard,
    BButton,
    BInputGroupAppend,
  },
  data: () => ({
    value: ['apple', 'orange', 'banana', 'pear', 'peach'],
  }),
}
</script>
`
export const codeRemoval = `
<template>
  <div>
    <label for="tags-remove-on-delete">Enter new tags separated by space</label>
    <b-form-tags
      v-model="value"
      input-id="tags-remove-on-delete"
      :input-attrs="{ 'aria-describedby': 'tags-remove-on-delete-help' }"
      separator=" "
      placeholder="Enter new tags separated by space"
      remove-on-delete
      no-add-on-enter
      class="mb-2"
    />
    <b-form-text id="tags-remove-on-delete-help">
      Press <kbd>Backspace</kbd> to remove the last tag entered
    </b-form-text>
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
import { BFormTags, BFormText } from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
    BFormText,
  },
  data: () => ({
    value: ['apple', 'orange', 'grape'],
  }),
}
</script>
`
export const codeSeparators = `
<template>
  <div>
    <label for="tags-separators">Enter tags separated by space, comma or semicolon</label>
    <b-form-tags
      v-model="value"
      input-id="tags-separators"
      separator=" ,;"
      placeholder="Enter new tags separated by space, comma or semicolon"
      no-add-on-enter
      class="mb-2"
    />
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
import { BFormTags } from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
  },
  data: () => ({
    value: ['one', 'two'],
  }),
}
</script>

`

export const codeStyling = `
<template>
  <div>
    <label for="tags-pills">Enter tags</label>
    <b-form-tags
      v-model="value"
      input-id="tags-pills"
      tag-variant="primary"
      tag-pills
      size="lg"
      separator=" "
      placeholder="Enter new tags separated by space"
      class="mb-2"
    />
    <p>Value: {{ value }}</p>
  </div>
</template>

<script>
import { BFormTags } from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
  },
  data: () => ({
    value: ['apple', 'orange', 'grape'],
  }),
}
</script>
`
export const codeValidation = `
<template>
  <div>
    <b-form-group
      :state="state"
      label="Tags validation example"
      label-for="tags-validation"
    >
      <b-form-tags
        v-model="tags"
        input-id="tags-validation"
        :input-attrs="{ 'aria-describedby': 'tags-validation-help' }"
        :state="state"
        :tag-validator="tagValidator"
        separator=" "
      />
      <!-- The following slots are for b-form-group -->
      <template #invalid-feedback>
        You must provide at least 3 tags and no more than 8
      </template>
      <template #description>
        <div id="tags-validation-help">
          Tags must be 3 to 5 characters in length and all lower case. Enter tags separated by spaces or press enter.
        </div>
      </template>
    </b-form-group>
  </div>
</template>

<script>
import { BFormTags, BFormGroup } from 'bootstrap-vue'

export default {
  components: {
    BFormTags,
    BFormGroup,
  },
  data: () => ({
    tags: [],
    dirty: false,
    codeValidation,
  }),
  computed: {
    state() {
      // Overall component validation state
      return this.dirty ? this.tags.length > 2 && this.tags.length < 9 : null
    },
  },
  watch: {
    tags() {
      // Set the dirty flag on first change to the tags array
      this.dirty = true
    },
  },
  methods: {
    tagValidator(tag) {
      // Individual tag validator function
      return tag === tag.toLowerCase() && tag.length > 2 && tag.length < 6
    },
  },
}
</script>
`
