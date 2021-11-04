<template>
  <b-row class="match-height">
    <b-col lg="6">
      <list-group-basic />
    </b-col>
    <b-col lg="6">
      <list-group-disable />
    </b-col>
    <b-col lg="6">
      <list-group-icon />
    </b-col>
    <b-col lg="6">
      <list-group-badge />
    </b-col>
    <b-col lg="6">
      <list-group-action />
    </b-col>
    <b-col lg="6">
      <list-group-action-button />
    </b-col>
    <b-col lg="6">
      <list-group-contextual />
    </b-col>
    <b-col lg="6">
      <list-group-custom />
    </b-col>
    <b-col lg="6">
      <list-group-flush />
    </b-col>
    <b-col lg="6">
      <list-group-horizontal />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import ListGroupBadge from './ListGroupBadge.vue'
import ListGroupBasic from './ListGroupBasic.vue'
import ListGroupIcon from './ListGroupIcon.vue'
import ListGroupContextual from './ListGroupContextual.vue'
import ListGroupDisable from './LIstGroupDisable.vue'
import ListGroupHorizontal from './ListGroupHorizontal.vue'
import ListGroupAction from './ListGroupAction.vue'
import ListGroupActionButton from './ListGroupActionButton.vue'
import ListGroupFlush from './ListGroupFlush.vue'
import ListGroupCustom from './ListGroupCustom.vue'

export default {
  components: {
    BCol,
    BRow,

    ListGroupBadge,
    ListGroupBasic,
    ListGroupIcon,
    ListGroupContextual,
    ListGroupDisable,
    ListGroupHorizontal,
    ListGroupAction,
    ListGroupActionButton,
    ListGroupFlush,
    ListGroupCustom,
  },
}
</script>
