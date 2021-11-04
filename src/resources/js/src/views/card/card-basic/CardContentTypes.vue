<template>
  <section id="card-content-types">
    <h5 class="mt-3">
      Content Types
    </h5>
    <b-row>
      <b-col
        md="6"
        lg="4"
      >
        <!-- only body -->
        <h6 class="my-2 text-muted">
          Body
        </h6>
        <b-card class="mb-4">
          <b-card-text>
            This is some text within a card body. Jelly lemon drops tiramisu chocolate cake cotton candy soufflé oat cake sweet roll. Sugar plum marzipan dragée topping cheesecake chocolate bar. Danish muffin icing donut.
          </b-card-text>
        </b-card>

        <!-- title text and links -->
        <h6 class="my-2 text-muted">
          Titles, Text, and Links
        </h6>
        <b-card
          title="Card title"
          sub-title="Card subtitle"
          class="mb-4"
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-link class="card-link">
            Card link
          </b-link>
          <b-link class="card-link">
            Another link
          </b-link>
        </b-card>

        <!-- List groups -->
        <h6 class="my-2 text-muted">
          List groups
        </h6>
        <b-card
          no-body
          class="mb-4"
        >
          <b-list-group flush>
            <b-list-group-item
              v-for="data in listData"
              :key="data.text"
            >
              {{ data.text }}
            </b-list-group-item>
          </b-list-group>
        </b-card>
      </b-col>

      <!-- image card -->
      <b-col
        md="6"
        lg="4"
      >
        <h6 class="my-2 text-muted">
          Images
        </h6>
        <b-card
          :img-src="require('@/assets/images/slider/01.jpg')"
          img-alt="Card image"
          img-top
        >
          <b-card-text>
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </b-card-text>
          <b-card-text>
            Cookie topping caramels jujubes gingerbread. Lollipop apple pie cupcake candy canes cookie ice cream. Wafer chocolate bar carrot cake jelly-o.
          </b-card-text>
        </b-card>
      </b-col>

      <!-- Kitchen sink -->
      <b-col
        md="6"
        lg="4"
      >
        <h6 class="my-2 text-muted">
          Kitchen Sink
        </h6>
        <b-card
          :img-src="require('@/assets/images/slider/02.jpg')"
          img-alt="Card image"
          img-top
          no-body
        >
          <!-- body -->
          <b-card-body>
            <b-card-title>Card title</b-card-title>
            <b-card-text>
              Some quick example text to build on the card title.
            </b-card-text>
          </b-card-body>

          <!-- kitchen sink link -->
          <b-list-group flush>
            <b-list-group-item
              v-for="data in kitchenSinkList"
              :key="data.text"
            >
              {{ data.text }}
            </b-list-group-item>
          </b-list-group>

          <!-- card links -->
          <b-card-body>
            <b-link class="card-link">
              Card link
            </b-link>
            <b-link class="card-link">
              Another link
            </b-link>
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BLink, BListGroup, BListGroupItem, BCardTitle, BCardBody,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BLink,
    BCardTitle,
    BListGroup,
    BListGroupItem,
    BCardBody,
  },
  data() {
    return {
      listData: [
        { text: 'Cras justo odio' },
        { text: 'Dapibus ac facilisis in' },
        { text: 'Vestibulum at eros' },
      ],
      kitchenSinkList: [
        { text: 'Cras justo odio' },
        { text: 'Vestibulum at eros' },
      ],
    }
  },
}
</script>
