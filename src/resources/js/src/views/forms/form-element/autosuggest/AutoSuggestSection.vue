<template>
  <b-card-code title="Section">
    <vue-autosuggest
      v-model="query"
      :suggestions="suggestions"
      :input-props="inputProps"
      :section-configs="sectionConfigs"
      :render-suggestion="renderSuggestion"
      :limit="10"
      @input="fetchResults"
    />

    <template #code>
      {{ codeSection }}
    </template>
  </b-card-code>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
import { VueAutosuggest } from 'vue-autosuggest'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeSection } from './code'

export default {
  components: {
    VueAutosuggest,
    BCardCode,
    BAvatar,
    BCardText,
  },
  data() {
    return {
      codeSection,
      datasuggest: [],
      query: '',
      suggestions: [],
      selected: null,
      inputProps: {
        id: 'autosuggest__input',
        class: 'form-control',
        placeholder: "Type 'e'",
      },
      sectionConfigs: {
        developers: {
          limit: 6,
          label: 'Developers',
          onSelected: selected => {
            this.selected = selected.item
          },
        },
        pages: {
          limit: 6,
          label: 'Pages',
          onSelected: selected => {
            this.selected = selected.item
          },
        },
      },
      limit: 10,
    }
  },
  created() {
    this.$http.get('/autosuggest/data')
      .then(res => { this.datasuggest = res })
  },
  methods: {
    fetchResults(text) {
      const { query } = this
      if (query) {
        this.suggestions = []
      }

      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */
      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)
      const filteredPages = this.datasuggest.data[0].pages.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)
      filteredDevelopers.length && this.suggestions.push({ name: 'developers', data: filteredDevelopers })
      filteredPages.length && this.suggestions.push({ name: 'pages', data: filteredPages })
    },
    renderSuggestion(suggestion) {
      if (suggestion.name === 'developers') {
        const dev = suggestion.item
        return (
          <div class="d-flex align-items-center">
            <b-avatar src={dev.img} class="mr-50"></b-avatar>
            <div class="detail">
              <b-card-text class="mb-0">{dev.name}</b-card-text>
              <small class="text-muted">{dev.email}</small>
            </div>
          </div>
        )
      }
      if (suggestion.name === 'pages') {
        const page = suggestion.item
        return (
          <div class="d-flex align-items-center">
            <feather-icon icon={page.icon} size={'18'} class={'mr-75'} />
            <span>{page.name}</span>
          </div>
        )
      }
      return false
    },
  },
}
</script>
