<template>
  <b-row>
    <b-col cols="12">
      <button-toolbar-navigation />
      <button-toolbar-input />
      <button-toolbar-dropdown />
      <button-toolbar-size />
      <button-toolbar-justify />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import ButtonToolbarNavigation from './ButtonToolbarNavigation.vue'
import ButtonToolbarInput from './ButtonToolbarInput.vue'
import ButtonToolbarDropdown from './ButtonToolbarDropdown.vue'
import ButtonToolbarSize from './ButtonToolbarSize.vue'
import ButtonToolbarJustify from './ButtonToolbarJustify.vue'

export default {
  components: {
    BRow,
    BCol,

    ButtonToolbarNavigation,
    ButtonToolbarInput,
    ButtonToolbarDropdown,
    ButtonToolbarSize,
    ButtonToolbarJustify,
  },
}
</script>
