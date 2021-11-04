<template>
  <b-card-code title="Horizontal">
    <b-card-text>
      <span>Set the prop</span>
      <code>horizontal</code><span>to</span>
      <code>true</code>
      <span>to change the layout of list group items from vertical to horizontal across all breakpoints. Alternatively,
        set</span>
      <code>horizontal</code>
      <span>to a responsive breakpoint</span>
      <code>(sm, md, lg or xl)</code>
      <span>
        to make a list group horizontal starting at that breakpoint's min-width. Currently horizontal list groups
        cannot be combined with</span>
      <code>flush</code>
      <span>list groups.</span>
    </b-card-text>

    <b-alert show>
      <div class="alert-body">
        <span class="mr-25"><feather-icon icon="InfoIcon" /></span>
        <span class="ml-25">horizontal list groups cannot be combined with flush list groups.</span>
      </div>
    </b-alert>
    <b-list-group horizontal="md">
      <b-list-group-item>Chocolate cake</b-list-group-item>
      <b-list-group-item>Cookie pie</b-list-group-item>
      <b-list-group-item>Cheesecake</b-list-group-item>
      <b-list-group-item>Cotton candy</b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeListGroupHorizontal }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BListGroup, BListGroupItem, BCardText, BAlert,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeListGroupHorizontal } from './code'

export default {
  components: {
    BCardCode,
    BListGroup,
    BCardText,
    BListGroupItem,
    BAlert,
  },
  data() {
    return {
      codeListGroupHorizontal,
    }
  },
}
</script>
