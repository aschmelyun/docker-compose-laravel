// Full Calendar Plugins
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import interactionPlugin from '@fullcalendar/interaction'

// Notification
import { useToast } from 'vue-toastification/composition'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

// eslint-disable-next-line object-curly-newline
import { ref, computed, watch, onMounted } from '@vue/composition-api'
import store from '@/store'

export default function userCalendar() {
  // Use toast
  const toast = useToast()
  // ------------------------------------------------
  // refCalendar
  // ------------------------------------------------
  const refCalendar = ref(null)

  // ------------------------------------------------
  // calendarApi
  // ------------------------------------------------
  let calendarApi = null
  onMounted(() => {
    calendarApi = refCalendar.value.getApi()
  })

  // ------------------------------------------------
  // calendars
  // ------------------------------------------------
  const calendarsColor = {
    Business: 'primary',
    Holiday: 'success',
    Personal: 'danger',
    Family: 'warning',
    ETC: 'info',
  }

  // ------------------------------------------------
  // event
  // ------------------------------------------------
  const blankEvent = {
    title: '',
    start: '',
    end: '',
    allDay: false,
    url: '',
    extendedProps: {
      calendar: '',
      guests: [],
      location: '',
      description: '',
    },
  }
  const event = ref(JSON.parse(JSON.stringify(blankEvent)))
  const clearEventData = () => {
    event.value = JSON.parse(JSON.stringify(blankEvent))
  }

  // *===========================================================================---*
  // *--------- Calendar API Function/Utils --------------------------------------------*
  // Template Future Update: We might move this utils function in its own file
  // *===========================================================================---*

  // ------------------------------------------------
  // (UI) addEventInCalendar
  // ? This is useless because this just add event in calendar and not in our data
  // * If we try to call it on new event then callback & try to toggle from calendar we get two events => One from UI and one from data
  // ------------------------------------------------
  // const addEventInCalendar = eventData => {
  //   toast({
  //     component: ToastificationContent,
  //     position: 'bottom-right',
  //     props: {
  //       title: 'Event Added',
  //       icon: 'CheckIcon',
  //       variant: 'success',
  //     },
  //   })
  //   calendarApi.addEvent(eventData)
  // }

  // ------------------------------------------------
  // (UI) updateEventInCalendar
  // ------------------------------------------------
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    toast({
      component: ToastificationContent,
      props: {
        title: 'Event Updated',
        icon: 'CheckIcon',
        variant: 'success',
      },
    })

    const existingEvent = calendarApi.getEventById(updatedEventData.id)

    // --- Set event properties except date related ----- //
    // ? Docs: https://fullcalendar.io/docs/Event-setProp
    // dateRelatedProps => ['start', 'end', 'allDay']
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index]
      existingEvent.setProp(propName, updatedEventData[propName])
    }

    // --- Set date related props ----- //
    // ? Docs: https://fullcalendar.io/docs/Event-setDates
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay })

    // --- Set event's extendedProps ----- //
    // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
    // eslint-disable-next-line no-plusplus
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index]
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    }
  }

  // ------------------------------------------------
  // (UI) removeEventInCalendar
  // ------------------------------------------------
  const removeEventInCalendar = eventId => {
    toast({
      component: ToastificationContent,
      props: {
        title: 'Event Removed',
        icon: 'TrashIcon',
        variant: 'danger',
      },
    })
    calendarApi.getEventById(eventId).remove()
  }

  // ------------------------------------------------
  // grabEventDataFromEventApi
  // ? It will return just event data from fullCalendar's EventApi which is not required for event mutations and other tasks
  // ! You need to update below function as per your extendedProps
  // ------------------------------------------------
  const grabEventDataFromEventApi = eventApi => {
    const {
      id,
      title,
      start,
      end,
      // eslint-disable-next-line object-curly-newline
      extendedProps: { calendar, guests, location, description },
      allDay,
    } = eventApi

    return {
      id,
      title,
      start,
      end,
      extendedProps: {
        calendar,
        guests,
        location,
        description,
      },
      allDay,
    }
  }

  // ------------------------------------------------
  // addEvent
  // ------------------------------------------------
  const addEvent = eventData => {
    store.dispatch('calendar/addEvent', { event: eventData }).then(() => {
      // eslint-disable-next-line no-use-before-define
      refetchEvents()
    })
  }

  // ------------------------------------------------
  // updateEvent
  // ------------------------------------------------
  const updateEvent = eventData => {
    store.dispatch('calendar/updateEvent', { event: eventData }).then(response => {
      const updatedEvent = response.data.event

      const propsToUpdate = ['id', 'title', 'url']
      const extendedPropsToUpdate = ['calendar', 'guests', 'location', 'description']

      updateEventInCalendar(updatedEvent, propsToUpdate, extendedPropsToUpdate)
    })
  }

  // ------------------------------------------------
  // removeEvent
  // ------------------------------------------------
  const removeEvent = () => {
    const eventId = event.value.id
    store.dispatch('calendar/removeEvent', { id: eventId }).then(() => {
      removeEventInCalendar(eventId)
    })
  }

  // ------------------------------------------------
  // refetchEvents
  // ------------------------------------------------
  const refetchEvents = () => {
    calendarApi.refetchEvents()
  }

  // ------------------------------------------------
  // selectedCalendars
  // ------------------------------------------------
  const selectedCalendars = computed(() => store.state.calendar.selectedCalendars)

  watch(selectedCalendars, () => {
    refetchEvents()
  })

  // --------------------------------------------------------------------------------------------------
  // AXIOS: fetchEvents
  // * This will be called by fullCalendar to fetch events. Also this can be used to refetch events.
  // --------------------------------------------------------------------------------------------------
  const fetchEvents = (info, successCallback) => {
    // If there's no info => Don't make useless API call
    if (!info) return

    // Fetch Events from API endpoint
    store
      .dispatch('calendar/fetchEvents', {
        calendars: selectedCalendars.value,
      })
      .then(response => {
        successCallback(response.data)
      })
      .catch(() => {
        toast({
          component: ToastificationContent,
          props: {
            title: 'Error fetching calendar events',
            icon: 'AlertTriangleIcon',
            variant: 'danger',
          },
        })
      })
  }

  // ------------------------------------------------------------------------
  // calendarOptions
  // * This isn't considered in UI because this is the core of calendar app
  // ------------------------------------------------------------------------
  const calendarOptions = ref({
    plugins: [dayGridPlugin, interactionPlugin, timeGridPlugin, listPlugin],
    initialView: 'dayGridMonth',
    headerToolbar: {
      start: 'sidebarToggle, prev,next, title',
      end: 'dayGridMonth,timeGridWeek,timeGridDay,listMonth',
    },
    events: fetchEvents,

    /*
      Enable dragging and resizing event
      ? Docs: https://fullcalendar.io/docs/editable
    */
    editable: true,

    /*
      Enable resizing event from start
      ? Docs: https://fullcalendar.io/docs/eventResizableFromStart
    */
    eventResizableFromStart: true,

    /*
      Automatically scroll the scroll-containers during event drag-and-drop and date selecting
      ? Docs: https://fullcalendar.io/docs/dragScroll
    */
    dragScroll: true,

    /*
      Max number of events within a given day
      ? Docs: https://fullcalendar.io/docs/dayMaxEvents
    */
    dayMaxEvents: 2,

    /*
      Determines if day names and week names are clickable
      ? Docs: https://fullcalendar.io/docs/navLinks
    */
    navLinks: true,

    eventClassNames({ event: calendarEvent }) {
      // eslint-disable-next-line no-underscore-dangle
      const colorName = calendarsColor[calendarEvent._def.extendedProps.calendar]

      return [
        // Background Color
        `bg-light-${colorName}`,
      ]
    },
    eventClick({ event: clickedEvent }) {
      // * Only grab required field otherwise it goes in infinity loop
      // ! Always grab all fields rendered by form (even if it get `undefined`) otherwise due to Vue3/Composition API you might get: "object is not extensible"
      event.value = grabEventDataFromEventApi(clickedEvent)

      // eslint-disable-next-line no-use-before-define
      isEventHandlerSidebarActive.value = true
    },

    customButtons: {
      sidebarToggle: {
        // --- This dummy text actual icon rendering is handled using SCSS ----- //
        text: 'sidebar',
        click() {
          // eslint-disable-next-line no-use-before-define
          isCalendarOverlaySidebarActive.value = !isCalendarOverlaySidebarActive.value
        },
      },
    },

    dateClick(info) {
      /*
        ! Vue3 Change
        Using Vue.set isn't working for now so we will try to check reactivity in Vue 3 as it can handle this automatically
        ```
        event.value.start = info.date
        ```
      */
      event.value = JSON.parse(JSON.stringify(Object.assign(event.value, { start: info.date })))
      // eslint-disable-next-line no-use-before-define
      isEventHandlerSidebarActive.value = true
    },

    /*
      Handle event drop (Also include dragged event)
      ? Docs: https://fullcalendar.io/docs/eventDrop
      ? We can use `eventDragStop` but it doesn't return updated event so we have to use `eventDrop` which returns updated event
    */
    eventDrop({ event: droppedEvent }) {
      updateEvent(grabEventDataFromEventApi(droppedEvent))
    },

    /*
      Handle event resize
      ? Docs: https://fullcalendar.io/docs/eventResize
    */
    eventResize({ event: resizedEvent }) {
      updateEvent(grabEventDataFromEventApi(resizedEvent))
    },

    // Get direction from app state (store)
    direction: computed(() => (store.state.appConfig.isRTL ? 'rtl' : 'ltr')),
    rerenderDelay: 350,
  })

  // ------------------------------------------------------------------------

  // *===============================================---*
  // *--------- UI ---------------------------------------*
  // *===============================================---*

  const isEventHandlerSidebarActive = ref(false)

  const isCalendarOverlaySidebarActive = ref(false)

  return {
    refCalendar,
    isCalendarOverlaySidebarActive,
    calendarOptions,
    event,
    clearEventData,
    addEvent,
    updateEvent,
    removeEvent,
    refetchEvents,
    fetchEvents,

    // ----- UI ----- //
    isEventHandlerSidebarActive,
  }
}
