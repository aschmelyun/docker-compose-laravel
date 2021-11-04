<template>
  <b-card no-body>
    <b-card-body class="pb-1">
      <b-card-title>Display headings</b-card-title>
      <b-card-text>
        Traditional heading elements are designed to work best in the meat of your page content. When you need a heading
        to stand out, consider using a <strong>display heading</strong> — a larger, slightly more opinionated heading
        style.
      </b-card-text>
    </b-card-body>

    <b-table-simple borderless>
      <b-tbody>
        <b-tr>
          <b-td>
            <h1 class="display-1">
              Display 1
            </h1>
          </b-td>
        </b-tr>
        <b-tr>
          <b-td>
            <h2 class="display-2">
              Display 2
            </h2>
          </b-td>
        </b-tr>
        <b-tr>
          <b-td>
            <h3 class="display-3">
              Display 3
            </h3>
          </b-td>
        </b-tr>
        <b-tr>
          <b-td>
            <h4 class="display-4">
              Display 4
            </h4>
          </b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </b-card>
</template>

<script>
import {
  BCard, BCardBody, BCardText, BCardTitle, BTableSimple, BTr, BTbody, BTd,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BCardBody,
    BCardText,
    BCardTitle,
    BTableSimple,
    BTr,
    BTbody,
    BTd,
  },
}
</script>
