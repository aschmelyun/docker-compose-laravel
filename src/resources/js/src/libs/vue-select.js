import Vue from 'vue'
import vSelect from 'vue-select'

// Set the components prop default to return our fresh components
vSelect.props.components.default = () => ({
  Deselect: {
    render: h => h('feather-icon', { props: { size: '14', icon: 'XIcon' } }),
  },
  OpenIndicator: {
    render: h => h('feather-icon', { props: { size: '15', icon: 'ChevronDownIcon' }, class: 'open-indicator' }),
  },
})

Vue.component(vSelect)
