<template>
  <section class="grid-view wishlist-items">
    <b-card
      v-for="product in products"
      :key="product.id"
      class="ecommerce-card"
      no-body
    >
      <div class="item-img text-center">
        <b-link :to="{ name: 'apps-e-commerce-product-details', params: { slug: product.slug } }">
          <b-img
            :alt="`${product.name}-${product.id}`"
            fluid
            class="card-img-top"
            :src="product.image"
          />
        </b-link>
      </div>

      <!-- Product Details -->
      <b-card-body>
        <div class="item-wrapper">
          <div class="item-rating">
            <ul class="unstyled-list list-inline">
              <li
                v-for="star in 5"
                :key="star"
                class="ratings-list-item"
                :class="{'ml-25': star-1}"
              >
                <feather-icon
                  icon="StarIcon"
                  size="16"
                  :class="[{'fill-current': star <= product.rating}, star <= product.rating ? 'text-warning' : 'text-muted']"
                />
              </li>
            </ul>
          </div>
          <div>
            <h6 class="item-price">
              ${{ product.price }}
            </h6>
          </div>
        </div>
        <h6 class="item-name">
          <b-link
            class="text-body"
            :to="{ name: 'apps-e-commerce-product-details', params: { slug: product.slug } }"
          >
            {{ product.name }}
          </b-link>
          <b-card-text class="item-company">
            By <b-link class="ml-25">
              {{ product.brand }}
            </b-link>
          </b-card-text>
        </h6>
        <b-card-text class="item-description">
          {{ product.description }}
        </b-card-text>
      </b-card-body>

      <!-- Action Buttons -->
      <div class="item-options text-center">
        <b-button
          variant="light"
          class="btn-wishlist remove-wishlist"
          @click="removeProductFromWishlistClick(product)"
        >
          <feather-icon icon="XIcon" />
          <span>Remove</span>
        </b-button>
        <b-button
          variant="primary"
          class="btn-cart move-cart"
          @click="handleWishlistCartActionClick(product, removeProductFromWishlistClick)"
        >
          <feather-icon
            icon="ShoppingCartIcon"
            class="mr-50"
          />
          <span>{{ product.isInCart ? 'View In Cart' : 'Move to Cart' }}</span>
        </b-button>
      </div>
    </b-card>
  </section>
</template>

<script>
import {
  BCard, BCardBody, BImg, BCardText, BLink, BButton,
} from 'bootstrap-vue'
import store from '@/store'
import { ref } from '@vue/composition-api'
import { useEcommerce, useEcommerceUi } from '../useEcommerce'

export default {
  components: {
    BCard, BCardBody, BImg, BCardText, BLink, BButton,
  },
  setup() {
    const { handleWishlistCartActionClick } = useEcommerceUi()

    const products = ref([])

    const { removeProductFromWishlist } = useEcommerce()
    const removeProductFromWishlistClick = product => {
      removeProductFromWishlist(product.id)
        .then(() => {
          const productIndex = products.value.findIndex(p => p.id === product.id)
          products.value.splice(productIndex, 1)
        })
    }

    const fetchWishlistProducts = () => {
      store.dispatch('app-ecommerce/fetchWishlistProducts')
        .then(response => {
          products.value = response.data.products
        })
    }

    fetchWishlistProducts()

    return {
      products,

      // UI
      handleWishlistCartActionClick,
      removeProductFromWishlistClick,
    }
  },
}
</script>

<style lang="scss">
@import "~@core/scss/base/pages/app-ecommerce.scss";
</style>
