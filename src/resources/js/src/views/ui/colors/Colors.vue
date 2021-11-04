<template>
  <b-row>
    <b-col cols="12">
      <!-- Default Colors -->
      <b-card
        title="Default Colors"
        class="background-color"
      >
        <!-- alert -->
        <b-alert
          variant="primary"
          show
        >
          <div class="alert-body">
            For more color classes options please read the
            <b-link
              href="https://pixinvent.com/demo/vuexy-html-bootstrap-admin-template/documentation/documentation-colors.html"
              target="_blank"
              class="alert-link"
            >
              documentation.
            </b-link>
          </div>
        </b-alert>
        <!--/ alert -->

        <b-card-text class="mb-0">
          We have a series of colors that are used by default. They include:
        </b-card-text>
        <ul class="colors-list list-unstyled mb-0">
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>Primary</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>Secondary</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>Success</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>Warning</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>Danger</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>Info</span>
          </li>
        </ul>
        <b-card-text>
          For each color, we think has its functionality in the application as alerts of errors <b>(danger)</b>,
          warnings to the user <b>(warning)</b>, communications of approval <b>(success)</b>, or main color of the
          application <b>(primary)</b>.
        </b-card-text>
        <!-- default -->
        <div class="d-flex justify-content-start flex-wrap">
          <div class="text-center bg-primary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>primary</span>
          </div>
          <div class="text-center bg-secondary colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>secondary</span>
          </div>
          <div class="text-center bg-success colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>success</span>
          </div>
          <div class="text-center bg-warning colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>warning</span>
          </div>
          <div class="text-center bg-danger colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>danger</span>
          </div>
          <div class="text-center bg-info colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow">
            <span>info</span>
          </div>
        </div>
        <!--/ default -->

        <!-- light colors -->
        <h6 class="mt-1">
          Lighten Variant
        </h6>
        <b-card-text class="mb-0">
          Use <code>.bg-{color}.bg-lighten-{1 | 2 | 3 | 4 | 5}</code> classes for lighten background color.
        </b-card-text>
        <div class="d-flex justify-content-start flex-wrap">
          <div class="text-center bg-primary bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>lighten-2</span>
          </div>
          <div class="text-center bg-secondary bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>lighten-2</span>
          </div>
          <div class="text-center bg-success bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>lighten-2</span>
          </div>
          <div class="text-center bg-warning bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>lighten-2</span>
          </div>
          <div class="text-center bg-danger bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>lighten-2</span>
          </div>
          <div class="text-center bg-info bg-lighten-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow">
            <span>lighten-2</span>
          </div>
        </div>
        <!--/ light colors -->

        <!-- dark colors -->
        <h6 class="mt-1">
          Darken Variant
        </h6>
        <b-card-text class="mb-0">
          Use <code>.bg-{color}.bg-darken-{1 | 2 | 3 | 4}</code> classes for darken background color.
        </b-card-text>
        <div class="d-flex justify-content-start flex-wrap">
          <div class="text-center bg-primary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>darken-2</span>
          </div>
          <div class="text-center bg-secondary bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>darken-2</span>
          </div>
          <div class="text-center bg-success bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>darken-2</span>
          </div>
          <div class="text-center bg-warning bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>darken-2</span>
          </div>
          <div class="text-center bg-danger bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>darken-2</span>
          </div>
          <div class="text-center bg-info bg-darken-2 colors-container rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow">
            <span>darken-2</span>
          </div>
        </div>
      <!--/ dark colors -->
      </b-card>
      <!-- Default Colors -->

      <!-- Gradient color start -->
      <b-card title="Gradient Colors">
        <b-card-text class="mb-0">
          We have make gradient color based on our default color:
        </b-card-text>
        <ul class="colors-list list-unstyled mb-0">
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>bg-gradient-primary</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>bg-gradient-secondary</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>bg-gradient-success</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>bg-gradient-warning</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>bg-gradient-danger</span>
          </li>
          <li>
            <feather-icon
              size="15"
              icon="ChevronsRightIcon"
            />
            <span>bg-gradient-info</span>
          </li>
        </ul>
        <b-card-text>
          For each color, we think has its functionality in the application as alerts of errors <b>(danger)</b>,
          warnings to the user <b>(warning)</b>, communications of approval <b>(success)</b>, or main color of the
          application <b>(primary)</b>.
        </b-card-text>

        <div class="d-flex justify-content-start flex-wrap">
          <div class="text-center colors-container bg-gradient-primary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>primary gradient</span>
          </div>
          <div class="text-center colors-container bg-gradient-secondary rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>secondary gradient</span>
          </div>
          <div class="text-center colors-container bg-gradient-success rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>success gradient</span>
          </div>
          <div class="text-center colors-container bg-gradient-warning rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>warning gradient</span>
          </div>
          <div class="text-center colors-container bg-gradient-danger rounded text-white width-100 height-100 d-flex align-items-center justify-content-center mr-1 ml-50 my-1 shadow">
            <span>danger gradient</span>
          </div>
          <div class="text-center colors-container bg-gradient-info rounded text-white width-100 height-100 d-flex align-items-center justify-content-center my-1 ml-50 shadow px-1">
            <span>info gradient</span>
          </div>
        </div>
      </b-card>
    <!--/ Gradient color start -->
    </b-col>
  </b-row>
</template>

<script>
import {
  BCard, BAlert, BLink, BCardText, BRow, BCol,
} from 'bootstrap-vue'

export default {
  components: {
    BCard,
    BAlert,
    BLink,
    BRow,
    BCol,
    BCardText,
  },
}
</script>

<style lang="scss">
.colors-list {
  li {
    padding: 0.4rem;
    svg {
      margin-right: 0.25rem;
    }
  }
}
</style>
