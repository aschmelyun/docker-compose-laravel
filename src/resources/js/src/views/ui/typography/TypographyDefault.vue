<template>
  <b-row class="match-height">
    <!-- html heading -->
    <b-col md="6">
      <b-card no-body>
        <b-card-header>
          <b-card-title>HTML headings <small class="text-muted">Default</small></b-card-title>
        </b-card-header>
        <b-card-body class="pb-1">
          <b-card-text>
            All HTML headings, <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>, are available.
            <code>.h1</code> through <code>.h6</code> classes are also available, for when you want to match the font
            styling of a heading.
          </b-card-text>
        </b-card-body>

        <b-table-simple
          borderless
        >
          <b-thead head-variant="danger">
            <b-tr>
              <b-th>PREVIEW</b-th>
              <b-th class="text-right">
                FONT SIZE
              </b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td><h1>H1 Heading</h1></b-td>
              <b-td class="text-right">
                2rem
              </b-td>
            </b-tr>
            <b-tr>
              <b-td><h2>H2 Heading</h2></b-td>
              <b-td class="text-right">
                1.714rem
              </b-td>
            </b-tr>
            <b-tr>
              <b-td><h3>H3 Heading</h3></b-td>
              <b-td class="text-right">
                1.5rem
              </b-td>
            </b-tr>
            <b-tr>
              <b-td><h4>H4 Heading</h4></b-td>
              <b-td class="text-right">
                1.286rem
              </b-td>
            </b-tr>
            <b-tr>
              <b-td><h5>H5 Heading</h5></b-td>
              <b-td class="text-right">
                1.07rem
              </b-td>
            </b-tr>
            <b-tr>
              <b-td><h6>H6 Heading</h6></b-td>
              <b-td class="text-right">
                1rem
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card>
    </b-col>
    <!--/ html heading -->

    <!-- light/bold headings -->
    <b-col md="6">
      <b-card no-body>
        <b-card-header>
          <b-card-title>Light / Bold Headings</b-card-title>
        </b-card-header>
        <b-card-body class="pb-1">
          <b-card-text>
            All HTML headings are available with light and bold font-weight. Use <code>.font-weight-normal</code> for
            light heading and <code>.font-weight-bolder</code> for bold headings along with heading tags or classes.
          </b-card-text>
        </b-card-body>

        <b-table-simple
          borderless
        >
          <b-thead head-variant="danger">
            <b-tr>
              <b-th>LIGHT HEADINGS</b-th>
              <b-th class="text-right">
                BOLD HEADINGS
              </b-th>
            </b-tr>
          </b-thead>
          <b-tbody>
            <b-tr>
              <b-td>
                <h1 class="font-weight-normal">
                  Heading 1
                </h1>
              </b-td>
              <b-td class="text-right">
                <h1 class="font-weight-bolder">
                  Heading 1
                </h1>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h2 class="font-weight-normal">
                  Heading 2
                </h2>
              </b-td>
              <b-td class="text-right">
                <h2 class="font-weight-bolder">
                  Heading 2
                </h2>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h3 class="font-weight-normal">
                  Heading 3
                </h3>
              </b-td>
              <b-td class="text-right">
                <h3 class="font-weight-bolder">
                  Heading 3
                </h3>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h4 class="font-weight-normal">
                  Heading 4
                </h4>
              </b-td>
              <b-td class="text-right">
                <h4 class="font-weight-bolder">
                  Heading 4
                </h4>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h5 class="font-weight-normal">
                  Heading 5
                </h5>
              </b-td>
              <b-td class="text-right">
                <h5 class="font-weight-bolder">
                  Heading 5
                </h5>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h6 class="font-weight-normal">
                  Heading 6
                </h6>
              </b-td>
              <b-td class="text-right">
                <h6 class="font-weight-bolder">
                  Heading 6
                </h6>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card>
    </b-col>
    <!--/ light/bold headings -->

    <!-- customizing headings -->
    <b-col md="6">
      <b-card no-body>
        <b-card-header>
          <b-card-title>Customizing headings <small class="text-muted">Default</small></b-card-title>
        </b-card-header>
        <b-card-body class="pb-1">
          <b-card-text>Use the included utility classes to recreate the small secondary heading text.</b-card-text>
        </b-card-body>

        <b-table-simple borderless>
          <b-tbody>
            <b-tr>
              <b-td>
                <h1>Display heading <small class="text-muted">Secondary text</small></h1>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h2>Display heading <small class="text-muted">Secondary text</small></h2>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h3>Display heading <small class="text-muted">Secondary text</small></h3>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h4>Display heading <small class="text-muted">Secondary text</small></h4>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h5>Display heading <small class="text-muted">Secondary text</small></h5>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h6>Display heading <small class="text-muted">Secondary text</small></h6>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card>
    </b-col>
    <!--/ customizing headings -->

    <!-- heading colors -->
    <b-col md="6">
      <b-card no-body>
        <b-card-header>
          <b-card-title>Heading colors</b-card-title>
        </b-card-header>

        <b-card-body class="pb-1">
          <b-card-text>
            Heading elements are also changed with different color options. Use <code>.text-{colorName}</code> class with
            heading elements.
          </b-card-text>
        </b-card-body>

        <b-table-simple borderless>
          <b-tbody>
            <b-tr>
              <b-td>
                <h1 class="text-primary">
                  Display heading
                </h1>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h2 class="text-success">
                  Display heading
                </h2>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h3 class="text-danger">
                  Display heading
                </h3>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h4 class="text-warning">
                  Display heading
                </h4>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h5 class="text-info">
                  Display heading
                </h5>
              </b-td>
            </b-tr>
            <b-tr>
              <b-td>
                <h6>Display heading</h6>
              </b-td>
            </b-tr>
          </b-tbody>
        </b-table-simple>
      </b-card>
    </b-col>
    <!--/ heading colors -->
  </b-row>
</template>

<script>
import {
  BRow, BCol, BCard, BCardHeader, BCardTitle, BCardBody, BCardText, BTableSimple, BThead, BTr, BTh, BTbody, BTd,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BTableSimple,
    BCardHeader,
    BCardBody,
    BCardTitle,
    BCardText,
    BThead,
    BTr,
    BTh,
    BTbody,
    BTd,
  },
}
</script>
