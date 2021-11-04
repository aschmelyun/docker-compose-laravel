<template>
  <b-card-code
    title="Using native browser inputs"
  >
    <b-card-text>
      <span>The scope contains attributes and event handlers that can be directly bound to native </span>
      <code>&lt;input&gt;</code>
      <span> or </span>
      <code>&lt;select&gt;</code>
      <span> elements.</span>
    </b-card-text>

    <div>
      <b-form-tags
        v-model="value"
        no-outer-focus
      >
        <template #default="{ tags, inputAttrs, inputHandlers, addTag, removeTag }">
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
              :id="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
              :key="tag"
              tag="li"
              class="shadow-none border mt-1 mr-1 mb-0"
              body-class="py-1 pr-2 text-nowrap"
            >
              <strong>{{ tag }}</strong>
              <b-button
                variant="link"
                size="sm"
                :aria-controls="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
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

    <template #code>
      {{ codeNativeInput }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import {
  BFormTags, BInputGroup, BInputGroupAppend, BCard, BButton, BCardText,
} from 'bootstrap-vue'
import { codeNativeInput } from './code'

export default {
  components: {
    BCardCode,
    BFormTags,
    BInputGroup,
    BCard,
    BButton,
    BCardText,
    BInputGroupAppend,
  },
  data() {
    return {
      value: ['apple', 'orange', 'banana', 'pear', 'peach'],
      codeNativeInput,
    }
  },
}
</script>
