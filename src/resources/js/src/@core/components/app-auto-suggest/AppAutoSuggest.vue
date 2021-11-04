<template>
  <div class="app-auto-suggest">
    <input
      v-model="searchQuery"
      type="text"
      v-bind="inputProps"
    >
    <ul class="auto-suggest-suggestions-list">
      <li
        v-for="(suggestion_list, grp_name, grp_index) in filteredData"
        :key="grp_index"
        class="suggestions-groups-list"
      >

        <!-- Group Header -->
        <p class="suggestion-group-title">
          <slot
            name="group"
            :group_name="grp_name"
          >
            <span>
              {{ grp_name }}
            </span>
          </slot>
        </p>

        <!-- Suggestion List of each group -->
        <ul>
          <li
            v-for="(suggestion, index) in suggestion_list"
            :key="index"
            class="suggestion-group-suggestion cursor-pointer"
            @click="suggestionSelected(suggestion)"
          >
            <slot
              :name="grp_name"
              :suggestion="suggestion"
            >
              <span>{{ suggestion[data[grp_name].key] }}</span>
            </slot>
          </li>

          <li
            v-if="!suggestion_list.length && searchQuery"
            class="suggestion-group-suggestion no-results"
          >
            <slot
              name="noResult"
              :group_name="grp_name"
            >
              <p>No Results Found.</p>
            </slot>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script>
import useAutoSuggest from './useAutoSuggest'

export default {
  props: {
    inputProps: {
      type: Object,
      default: () => {},
    },
    data: {
      type: Object,
      required: true,
    },
    searchLimit: {
      type: Number,
      default: 4,
    },
  },
  setup(props, { emit }) {
    // eslint-disable-next-line no-console
    console.warn('This component is still in Development. Please do not use it.')

    const { searchQuery, filteredData, resetsearchQuery } = useAutoSuggest(props)

    const suggestionSelected = suggestion => {
      resetsearchQuery()
      emit('suggestion-selected', suggestion)
    }

    return {
      searchQuery, filteredData, suggestionSelected,
    }
  },
}
</script>

<style scoped>
ul
{
  list-style: none;
  padding: 0;
  margin: 0;
}
p {
  margin: 0;
}

.app-auto-suggest {
  position: relative;
}

.auto-suggest-suggestions-list {
  box-shadow: 0 4px 24px 0 rgba(34, 41, 47, 0.1);
  border-radius: 6px;
  position: absolute;
  top: calc(100% + 1rem);
  background-color: white;
  width: 100%;
}

.suggestion-group-title {
  font-weight: 500;
  padding: .75rem 1rem .25rem;
}

.suggestion-group-suggestion {
  padding: .75rem 1rem
}
</style>
