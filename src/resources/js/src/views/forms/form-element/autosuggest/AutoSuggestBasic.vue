<template>
  <b-card-code title="Basic">
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

    <template #code>
      {{ codeBasic }}
    </template>
  </b-card-code>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { codeBasic } from './code'

export default {
  components: {
    VueAutosuggest,
    BCardCode,
  },
  data() {
    return {
      datasuggest: [],
      filteredOptions: [],
      limit: 10,
      selected: null,
      codeBasic,
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
