<template>

  <div class="checkout-items">
    <b-card
      v-for="product in products"
      :key="product.id"
      class="ecommerce-card"
      no-body
    >

      <!-- Product Image -->
      <div class="item-img">
        <b-link>
          <b-img
            :src="product.image"
            :alt="`${product.name}-${product.id}`"
          />
        </b-link>
      </div>

      <!-- Product Details: Card Body -->
      <b-card-body>
        <div class="item-name">
          <h6 class="mb-0">
            <b-link class="text-body">
              {{ product.name }}
            </b-link>
          </h6>
          <span class="item-company">By <b-link class="company-name">{{ product.brand }}</b-link></span>
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
        </div>
        <span class="text-success mb-1">In Stock</span>
        <div class="item-quantity">
          <span class="quantity-title">Qty:</span>
          <b-form-spinbutton
            v-model="product.qty"
            size="sm"
            class="ml-75"
            inline
          />
        </div>
        <span class="delivery-date text-muted">Delivery by {{ formatDate(product.shippingDate, { month: 'short', day: 'numeric', weekday: 'short' }) }}</span>
        <span class="text-success">{{ product.discountPercentage }}% off {{ product.offers }} offers Available</span>
      </b-card-body>

      <!-- Product Options/Actions -->
      <div class="item-options text-center">
        <div class="item-wrapper">
          <div class="item-cost">
            <h4 class="item-price">
              ${{ product.price }}
            </h4>
            <p
              v-if="product.hasFreeShipping"
              class="card-text shipping"
            >
              <b-badge
                pill
                variant="light-success"
              >
                Free Shipping
              </b-badge>
            </p>
          </div>
        </div>
        <b-button
          variant="light"
          class="mt-1 remove-wishlist"
          @click="removeProductFromCartClick(product)"
        >
          <feather-icon
            icon="XIcon"
            class="mr-50"
          />
          <span>Remove</span>
        </b-button>
        <b-button
          variant="primary"
          class="btn-cart move-cart"
          @click="toggleProductInWishlist(product)"
        >
          <feather-icon
            icon="HeartIcon"
            class="mr-50"
            :class="{'fill-current': product.isInWishlist}"
          />
          <span class="text-nowrap">Wishlist</span>
        </b-button>
      </div>
    </b-card>
  </div>

</template>

<script>
import {
  BCard, BCardBody, BLink, BImg, BButton, BBadge, BFormSpinbutton,
} from 'bootstrap-vue'
import store from '@/store'
import { ref } from '@vue/composition-api'
import { formatDate } from '@core/utils/filter'
import { useEcommerce, useEcommerceUi } from '../useEcommerce'

export default {
  components: {
    BCard, BCardBody, BLink, BImg, BButton, BBadge, BFormSpinbutton,
  },
  setup() {
    const products = ref([])

    const { toggleProductInWishlist } = useEcommerceUi()
    const { removeProductFromCart } = useEcommerce()
    const removeProductFromCartClick = product => {
      removeProductFromCart(product.id)
        .then(() => {
          const productIndex = products.value.findIndex(p => p.id === product.id)
          products.value.splice(productIndex, 1)

          store.commit('app-ecommerce/UPDATE_CART_ITEMS_COUNT', products.value.length)
        })
    }

    const fetchCartProducts = () => {
      store.dispatch('app-ecommerce/fetchCartProducts')
        .then(response => {
          products.value = response.data.products
        })
    }
    fetchCartProducts()

    return {
      products,

      // UI
      toggleProductInWishlist,
      removeProductFromCartClick,

      // Filter
      formatDate,
    }
  },
}
</script>

<style>

</style>
