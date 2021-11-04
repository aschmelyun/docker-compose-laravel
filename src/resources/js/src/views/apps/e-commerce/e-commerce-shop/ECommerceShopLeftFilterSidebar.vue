<template>
  <div class="sidebar-detached sidebar-left">
    <div class="sidebar">
      <div
        class="sidebar-shop"
        :class="{'show': mqShallShowLeftSidebar}"
      >
        <b-row>
          <b-col cols="12">
            <h6 class="filter-heading d-none d-lg-block">
              Filters
            </h6>
          </b-col>
        </b-row>

        <!-- Filters' Card -->
        <b-card>

          <!-- Multi Range -->
          <div class="multi-range-price">
            <h6 class="filter-title mt-0">
              Multi Range
            </h6>
            <b-form-radio-group
              v-model="filters.priceRangeDefined"
              class="price-range-defined-radio-group"
              stacked
              :options="filterOptions.priceRangeDefined"
            />
          </div>

          <!-- Price Slider -->
          <div class="price-slider">
            <h6 class="filter-title">
              Price Range
            </h6>
            <vue-slider
              v-model="filters.priceRange"
              :direction="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            />
          </div>

          <!-- Categories -->
          <div class="product-categories">
            <h6 class="filter-title">
              Categories
            </h6>
            <b-form-radio-group
              v-model="filters.categories"
              class="categories-radio-group"
              stacked
              :options="filterOptions.categories"
            />
          </div>

          <!-- Brands -->
          <div class="brands">
            <h6 class="filter-title">
              Brands
            </h6>
            <b-form-radio-group
              v-model="filters.brands"
              class="brands-radio-group"
              stacked
              :options="filterOptions.brands"
            />
          </div>

          <!-- Ratings -->
          <div class="ratings">
            <h6 class="filter-title">
              Ratings
            </h6>
            <div
              v-for="rating in filterOptions.ratings"
              :key="rating.rating"
              class="ratings-list"
            >
              <b-link>
                <div class="d-flex">
                  <feather-icon
                    v-for="star in 5"
                    :key="star"
                    icon="StarIcon"
                    size="17"
                    :class="[{'fill-current': star <= rating.rating}, star <= rating.rating ? 'text-warning' : 'text-muted']"
                  />
                  <span class="ml-25">&amp; up</span>
                </div>
              </b-link>
              <div class="stars-received">
                <span>{{ rating.count }}</span>
              </div>
            </div>
          </div>
        </b-card>
      </div>
    </div>

    <div
      class="body-content-overlay"
      :class="{'show': mqShallShowLeftSidebar}"
      @click="$emit('update:mq-shall-show-left-sidebar', false)"
    />
  </div>
</template>

<script>
import {
  BRow, BCol, BCard, BFormRadioGroup, BLink,
} from 'bootstrap-vue'
import VueSlider from 'vue-slider-component'

export default {
  components: {
    BRow,
    BCol,
    BFormRadioGroup,
    BLink,
    BCard,

    // 3rd Party
    VueSlider,
  },
  props: {
    filters: {
      type: Object,
      required: true,
    },
    filterOptions: {
      type: Object,
      required: true,
    },
    mqShallShowLeftSidebar: {
      type: Boolean,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-slider.scss';
</style>

<style lang="scss" scoped>
.categories-radio-group,
.brands-radio-group,
.price-range-defined-radio-group {
    ::v-deep > .custom-control {
    margin-bottom: 0.75rem;
  }
}
</style>
