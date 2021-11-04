<template>
  <b-card-code title="Anchors">
    <b-card-text>
      <span>Turn a </span>
      <code>&lt;b-list-group-item&gt;</code>
      <span> into an actionable link </span>
      <code>(&lt;a href="..."&gt;)</code>
      <span> by specifying either an </span>
      <code>href</code>
      <span> prop or </span>
      <code>router-link</code>
      <span> prop.</span>
    </b-card-text>

    <b-list-group>
      <b-list-group-item
        active
        href="#some-link"
      >
        Awesome link
      </b-list-group-item>
      <b-list-group-item href="#">
        Link with active state
      </b-list-group-item>
      <b-list-group-item href="#">
        Action links are easy
      </b-list-group-item>
      <b-list-group-item href="#">
        Action links are fast
      </b-list-group-item>
      <b-list-group-item
        href="#foobar"
        disabled
      >
        Disabled link
      </b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeListGroupAction }}
    </template>
  </b-card-code>
</template>

<script>
import { BListGroup, BListGroupItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeListGroupAction } from './code'

export default {
  components: {
    BCardCode,
    BListGroup,
    BListGroupItem,
    BCardText,
  },
  data() {
    return {
      codeListGroupAction,
    }
  },
}
</script>
