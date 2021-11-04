<template>
  <b-card-code title="Slot">
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

    <template #code>
      {{ codeSlot }}
    </template>
  </b-card-code>
</template>

<script>
import { VueAutosuggest } from 'vue-autosuggest'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import { BAvatar, BCardText } from 'bootstrap-vue'
import { codeSlot } from './code'

export default {
  components: {
    VueAutosuggest,
    BCardCode,
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
      codeSlot,
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
