<template>
  <section id="card-actions">
    <b-row>

      <!-- card actions -->
      <b-col cols="12">
        <b-card-actions
          ref="cardAction"
          title="Card Actions"
          @refresh="refreshStop('cardAction')"
        >
          <b-row>
            <b-col cols="12">
              <b-table
                responsive
                :items="items"
                bordered
              >
                <template
                  #cell(ICON)="data"
                  class="text-center"
                >
                  <div class="text-center">
                    <feather-icon :icon="data.value" />
                  </div>
                </template>
              </b-table>
            </b-col>
          </b-row>
        </b-card-actions>
      </b-col>

      <!-- card collapsible  -->
      <b-col md="6">
        <b-card-actions
          title="Collapsible"
          action-collapse
        >
          <b-card-text>
            <span>You can create a collapsible content by adding </span>
            <code>actionCollapse</code>
            <span> prop in </span>
            <code>&lt;b-card-actions&gt;</code>
          </b-card-text>
          <b-card-text>
            <span>Click on </span>
            <feather-icon icon="ChevronDownIcon" />
            <span> to see card collapse in action.</span>
          </b-card-text>
        </b-card-actions>
      </b-col>

      <!-- card refresh -->
      <b-col md="6">
        <b-card-actions
          ref="refreshCard"
          title="Refresh Content"
          action-refresh
          @refresh="refreshStop('refreshCard')"
        >
          <b-card-text>
            To create a card with refresh action use <code>actionRefresh</code> prop along with
            <code>&lt;b-card-actions&gt;</code>
          </b-card-text>
          <b-card-text>
            <span>Click on </span>
            <feather-icon icon="RotateCwIcon" />
            <span> icon to see refresh card content in action.</span>
          </b-card-text>
        </b-card-actions>
      </b-col>

      <!-- card remove -->
      <b-col md="6">
        <b-card-actions
          title="Remove Card"
          action-close
        >
          <b-card-text>
            You can create a closeable card by using <code>actionClose</code> prop along with
            <code>&lt;b-card-actions&gt;</code>
          </b-card-text>
          <b-card-text>
            <span>Click on </span>
            <feather-icon icon="XIcon" />
            <span> icon to see closeable card in action.</span>
          </b-card-text>
        </b-card-actions>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import BCardActions from '@core/components/b-card-actions/BCardActions.vue'
import {
  BRow, BCol, BTable, BCardText,
} from 'bootstrap-vue'

export default {
  components: {
    BCardActions,
    BRow,
    BCol,
    BTable,
    BCardText,
  },
  data() {
    return {
      fields: [
        'ACTION',
        { key: 'ICON', label: 'ICON' },
        'DETAILS',
      ],
      items: [
        { ACTION: 'Collapse', ICON: 'ChevronDownIcon', DETAILS: 'Collapse card content using collapse action.' },
        { ACTION: 'Refresh Content', ICON: 'RotateCwIcon', DETAILS: 'Refresh your card content using refresh action.' },
        { ACTION: 'Remove Card', ICON: 'XIcon', DETAILS: 'Remove card from page using remove card action' },
      ],
    }
  },
  methods: {

    // stop refreshing card in 3 sec
    refreshStop(cardName) {
      setTimeout(() => {
        this.$refs[cardName].showLoading = false
      }, 3000)
    },
  },
}
</script>
