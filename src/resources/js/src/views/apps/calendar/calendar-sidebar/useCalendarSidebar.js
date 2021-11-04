import store from '@/store'

import { computed } from '@vue/composition-api'

export default function useCalendarSidebar() {
  // ------------------------------------------------
  // calendarOptions
  // ------------------------------------------------
  const calendarOptions = computed(() => store.state.calendar.calendarOptions)

  // ------------------------------------------------
  // selectedCalendars
  // ------------------------------------------------
  const selectedCalendars = computed({
    get: () => store.state.calendar.selectedCalendars,
    set: val => {
      store.commit('calendar/SET_SELECTED_EVENTS', val)
    },
  })

  // ------------------------------------------------
  // checkAll
  // ------------------------------------------------
  const checkAll = computed({
    /*
      GET: Return boolean `true` => if length of options matches length of selected filters => Length matches when all events are selected
      SET: If value is `true` => then add all available options in selected filters => Select All
           Else if => all filters are selected (by checking length of both array) => Empty Selected array  => Deselect All
    */
    get: () => selectedCalendars.value.length === calendarOptions.value.length,
    set: val => {
      if (val) {
        selectedCalendars.value = calendarOptions.value.map(i => i.label)
      } else if (selectedCalendars.value.length === calendarOptions.value.length) {
        selectedCalendars.value = []
      }
    },
  })

  return {
    calendarOptions,
    selectedCalendars,
    checkAll,
  }
}
