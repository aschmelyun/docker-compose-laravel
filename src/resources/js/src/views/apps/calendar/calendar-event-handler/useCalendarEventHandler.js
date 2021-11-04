import { ref, computed, watch } from '@vue/composition-api'
import store from '@/store'

export default function useCalendarEventHandler(props, clearForm, emit) {
  // ------------------------------------------------
  // eventLocal
  // ------------------------------------------------
  const eventLocal = ref(JSON.parse(JSON.stringify(props.event.value)))
  const resetEventLocal = () => {
    eventLocal.value = JSON.parse(JSON.stringify(props.event.value))
  }
  watch(props.event, () => {
    resetEventLocal()
  })

  // ------------------------------------------------
  // isEventHandlerSidebarActive
  // * Clear form if sidebar is closed
  // ------------------------------------------------
  watch(props.isEventHandlerSidebarActive, val => {
    // ? Don't reset event till transition is finished
    if (!val) {
      setTimeout(() => {
        clearForm.value()
      }, 350)
    }
  })
  // ------------------------------------------------
  // calendarOptions
  // ------------------------------------------------
  const calendarOptions = computed(() => store.state.calendar.calendarOptions)

  const onSubmit = () => {
    const eventData = JSON.parse(JSON.stringify(eventLocal))

    // * If event has id => Edit Event
    // Emit event for add/update event
    if (props.event.value.id) emit('update-event', eventData.value)
    else emit('add-event', eventData.value)

    // Close sidebar
    emit('update:is-event-handler-sidebar-active', false)
  }

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  // ------------------------------------------------
  // guestOptions
  // ------------------------------------------------

  /* eslint-disable global-require */
  const guestsOptions = [
    { avatar: require('@/assets/images/avatars/1-small.png'), name: 'Jane Foster' },
    { avatar: require('@/assets/images/avatars/3-small.png'), name: 'Donna Frank' },
    { avatar: require('@/assets/images/avatars/5-small.png'), name: 'Gabrielle Robertson' },
    { avatar: require('@/assets/images/avatars/7-small.png'), name: 'Lori Spears' },
    { avatar: require('@/assets/images/avatars/9-small.png'), name: 'Sandy Vega' },
    { avatar: require('@/assets/images/avatars/11-small.png'), name: 'Cheryl May' },
  ]
  /* eslint-enable global-require */

  return {
    eventLocal,
    resetEventLocal,
    calendarOptions,

    // UI
    guestsOptions,
    onSubmit,
  }
}
