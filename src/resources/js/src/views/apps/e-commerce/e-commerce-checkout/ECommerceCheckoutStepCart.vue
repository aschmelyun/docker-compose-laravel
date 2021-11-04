<template>
  <div class="list-view product-checkout mt-0">

    <!-- Products List -->
    <e-commerce-checkout-step-cart-products />

    <!-- Checkout Options -->
    <div class="checkout-options">
      <b-card>

        <label class="section-label mb-1">Options</label>
        <b-input-group class="input-group-merge coupons">
          <b-form-input placeholder="Coupons" />
          <b-input-group-append is-text>
            <span
              id="input-coupons"
              class="input-group-text text-primary cursor-pointer"
            >Apply</span>
          </b-input-group-append>
        </b-input-group>
        <hr>
        <div class="price-details">
          <h6 class="price-title">
            Price Details
          </h6>
          <ul class="list-unstyled">
            <li class="price-detail">
              <div class="detail-title">
                Total MRP
              </div>
              <div class="detail-amt">
                $598
              </div>
            </li>
            <li class="price-detail">
              <div class="detail-title">
                Bag Discount
              </div>
              <div class="detail-amt discount-amt text-success">
                -25$
              </div>
            </li>
            <li class="price-detail">
              <div class="detail-title">
                Estimated Tax
              </div>
              <div class="detail-amt">
                $1.3
              </div>
            </li>
            <li class="price-detail">
              <div class="detail-title">
                EMI Eligibility
              </div>
              <a
                href="javascript:void(0)"
                class="detail-amt text-primary"
              >Details</a>
            </li>
            <li class="price-detail">
              <div class="detail-title">
                Delivery Charges
              </div>
              <div class="detail-amt discount-amt text-success">
                Free
              </div>
            </li>
          </ul>
          <hr>
          <ul class="list-unstyled">
            <li class="price-detail">
              <div class="detail-title detail-total">
                Total
              </div>
              <div class="detail-amt font-weight-bolder">
                $574
              </div>
            </li>
          </ul>
          <b-button
            variant="primary"
            block
            @click="$emit('next-step')"
          >
            Place Order
          </b-button>
        </div>

      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BButton, BCard, BInputGroup, BFormInput, BInputGroupAppend,
} from 'bootstrap-vue'
import ECommerceCheckoutStepCartProducts from './ECommerceCheckoutStepCartProducts.vue'

export default {
  components: {
    // BSV
    BButton,
    BCard,
    BInputGroup,
    BFormInput,
    BInputGroupAppend,

    // SFC
    ECommerceCheckoutStepCartProducts,
  },
}
</script>
