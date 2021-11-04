export const codeBasic = `
<template>
  <vue-autosuggest
    :suggestions="filteredOptions"
    :limit="10"
    :input-props="{id:'autosuggest__input',class:'form-control', placeholder:'Do you feel lucky?'}"
    @input="onInputChange"
  >
    <template slot-scope="{suggestion}">
      <span class="my-suggestion-item">{{ suggestion.item.name }}</span>
    </template>
  </vue-autosuggest>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'

export default {
  components: {
    VueAutosuggest,
  },
  data() {
    return {
      datasuggest: [],
      filteredOptions: [],
      limit: 10,
      selected: null,
    }
  },
  created() {
    this.$http.get('/autosuggest/data')
      .then(res => { this.datasuggest = res })
  },
  methods: {
    onInputChange(text) {
      if (text === '' || text === undefined) {
        return
      }

      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */
      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)
      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)
      const filteredData = filteredDevelopers.concat(filteredDesigner)
      this.filteredOptions = [{
        data: filteredData,
      }]
    },
  },
}
</script>
`

export const codeSlot = `
<template>
  <vue-autosuggest
    :suggestions="filteredOptions"
    :input-props="inputProps"
    :on-selected="onSelected"
    :limit="10"
    @input="onInputChange"
  >
    <template slot-scope="{suggestion}">
      <div class="d-flex align-items-center">
        <b-avatar :src="suggestion.item.img" />
        <div class="detail ml-50">
          <b-card-text class="mb-0">
            {{ suggestion.item.name }}
          </b-card-text>
          <small class="text-muted">
            {{ suggestion.item.time }}
          </small>
        </div>
      </div>
    </template>
  </vue-autosuggest>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'
import { BAvatar, BCardText } from 'bootstrap-vue'

export default {
  components: {
    VueAutosuggest,
    BCardText,
    BAvatar,
  },
  data() {
    return {
      datasuggest: [],
      filteredOptions: [],
      inputProps: {
        id: 'autosuggest__input',
        class: 'form-control',
        placeholder: "Type 'e'",
      },
      limit: 10,
    }
  },
  created() {
    this.$http.get('/autosuggest/data')
      .then(res => { this.datasuggest = res })
  },
  methods: {
    onSelected(option) {
      this.selected = option.item
    },
    onInputChange(text) {
      if (text === '' || text === undefined) {
        return
      }

      /* Full control over filtering. Maybe fetch from API?! Up to you!!! */
      const filteredDevelopers = this.datasuggest.data[0].developers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)
      const filteredDesigner = this.datasuggest.data[0].designers.filter(item => item.name.toLowerCase().indexOf(text.toLowerCase()) > -1).slice(0, this.limit)
      const filteredData = filteredDevelopers.concat(filteredDesigner)
      this.filteredOptions = [{
        data: filteredData,
      }]
    },
  },
}
</script>
`

export const codeSection = `
<template>
  <vue-autosuggest
    v-model="query"
    :suggestions="suggestions"
    :input-props="inputProps"
    :section-configs="sectionConfigs"
    :render-suggestion="renderSuggestion"
    :limit="10"
    @input="fetchResults"
  />
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
import { VueAutosuggest } from 'vue-autosuggest'
import { BAvatar, BCardText } from 'bootstrap-vue'

export default {
  components: {
    VueAutosuggest,
    BAvatar,
    BCardText,
  },
  data() {
    return {
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
`

export const codeAjax = `
<template>
  <div>
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
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */
/* eslint no-unused-expressions: ["error", { "allowShortCircuit": true }] */
import { BCard, BCardText, BAvatar } from 'bootstrap-vue'
import { VueAutosuggest } from 'vue-autosuggest'
import axios from 'axios'

export default {
  components: {
    VueAutosuggest,
    BCard,
    BCardText,
    BAvatar,
  },
  data() {
    return {
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
`
