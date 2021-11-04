<template>
  <b-card-code title="Ajax">
    <vue-autosuggest
      ref="autocomplete"
      v-model="query"
      :suggestions="suggestions"
      :input-props="inputProps"
      :section-configs="sectionConfigs"
      :render-suggestion="renderSuggestion"
      :get-suggestion-value="getSuggestionValue"
      @input="fetchResults"
    />

    <b-card-text class="mt-1">
      Selected element (object):
    </b-card-text>
    <b-card
      class="border"
      no-body
    >
      <pre>{{ JSON.stringify(selected, null, 4) }}</pre>
    </b-card>

    <template #code>
      {{ codeAjax }}
    </template>
  </b-card-code>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BCard, BCardText, BAvatar } from 'bootstrap-vue'
import { VueAutosuggest } from 'vue-autosuggest'
import axios from 'axios'
import { codeAjax } from './code'

export default {
  components: {
    VueAutosuggest,
    BCardCode,
    BCard,
    BCardText,
    BAvatar,
  },
  data() {
    return {
      codeAjax,
      query: '',
      results: [],
      timeout: null,
      selected: null,
      debounceMilliseconds: 250,
      usersUrl: 'https://jsonplaceholder.typicode.com/users',
      photosUrl: 'https://jsonplaceholder.typicode.com/photos',
      inputProps: {
        id: 'autosuggest__input_ajax',
        placeholder: 'Do you feel lucky, punk?',
        class: 'form-control',
        name: 'ajax',
      },
      suggestions: [],
      sectionConfigs: {
        destinations: {
          limit: 6,
          label: 'Destination',
          onSelected: selected => {
            this.selected = selected.item
          },
        },
        hotels: {
          limit: 6,
          label: 'Hotels',
          onSelected: selected => {
            this.selected = selected.item
          },
        },
      },
    }
  },
  methods: {
    fetchResults() {
      const { query } = this

      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        const photosPromise = axios.get(this.photosUrl)
        const usersPromise = axios.get(this.usersUrl)

        Promise.all([photosPromise, usersPromise]).then(values => {
          this.suggestions = []
          this.selected = null

          const photos = this.filterResults(values[0].data, query, 'title')
          const users = this.filterResults(values[1].data, query, 'name')
          users.length && this.suggestions.push({ name: 'destinations', data: users })
          photos.length && this.suggestions.push({ name: 'hotels', data: photos })
        })
      }, this.debounceMilliseconds)
    },
    filterResults(data, text, field) {
      return data.filter(item => {
        if (item[field].toLowerCase().indexOf(text.toLowerCase()) > -1) {
          return item[field]
        }
        return false
      }).sort()
    },
    renderSuggestion(suggestion) {
      if (suggestion.name === 'hotels') {
        const image = suggestion.item
        return (
          <div class="d-flex">
            <div>
              <b-avatar src={image.thumbnailUrl} class="mr-50"></b-avatar>
            </div>
            <div>
              <span>{image.title}</span>
            </div>
          </div>
        )
      }
      return suggestion.item.name
    },
    getSuggestionValue(suggestion) {
      const { name, item } = suggestion
      return name === 'hotels' ? item.title : item.name
    },
  },
}
</script>

<style lang="scss" scoped>
pre{
  min-height: 295px;
  padding: 1.5rem;
  margin-bottom: 0;
  border-radius: .5rem;
}
</style>
