<template>
  <div class="list-view product-checkout">

    <!-- Left Card -->
    <b-card no-body>
      <b-card-header class="flex-column align-items-start">
        <b-card-title>Payment Options</b-card-title>
        <b-card-text class="text-muted mt-25">
          Be sure to click on correct payment option
        </b-card-text>
      </b-card-header>
      <b-card-body>
        <h6 class="card-holder-name my-75">
          John Doe
        </h6>

        <!-- Radios -->
        <b-form-group>
          <b-form-radio
            name="payment-method"
            value="john-doe-debit-card"
            checked="john-doe-debit-card"
          >
            US Unlocked Debit Card 12XX XXXX XXXX 0000
          </b-form-radio>
          <div class="d-flex flex-wrap align-items-center justify-content-start my-1">
            <label
              for="cvv"
              class="text-nowrap mr-1 mb-1"
            >
              Enter CVV:
            </label>
            <b-form-input
              id="cvv"
              v-model="paymentDetails.cvv"
              class="mr-1 mb-1"
              trim
            />
            <b-button
              variant="primary"
              class="mb-1"
            >
              Continue
            </b-button>
          </div>

          <hr class="mb-2 mt-1">

          <b-form-radio
            name="payment-method"
            value="debit-atm-credit-card"
          >
            Credit / Debit / ATM Card
          </b-form-radio>
          <b-form-radio
            name="payment-method"
            class="mt-1"
            value="net-banking"
          >
            Net Banking
          </b-form-radio>
          <b-form-radio
            name="payment-method"
            class="mt-1"
            value="emi"
          >
            EMI (Easy Installment)
          </b-form-radio>
          <b-form-radio
            name="payment-method"
            class="mt-1"
            value="cod"
          >
            Cash On Delivery
          </b-form-radio>
        </b-form-group>

        <hr class="my-2">

        <p class="cursor-pointer">
          <feather-icon
            icon="PlusCircleIcon"
            size="21"
            class="mr-75"
          />
          <span class="align-middle">Add Gift Card</span>
        </p>
      </b-card-body>
    </b-card>

    <!-- Right Card -->
    <div class="amount-payable checkout-options">
      <b-card title="Price Details">

        <ul class="list-unstyled price-details">
          <li class="price-detail">
            <div class="details-title">
              Price of 3 items
            </div>
            <div class="detail-amt">
              <strong>$699.30</strong>
            </div>
          </li>
          <li class="price-detail">
            <div class="details-title">
              Delivery Charges
            </div>
            <div class="detail-amt discount-amt text-success">
              Free
            </div>
          </li>
        </ul>
        <hr>
        <ul class="list-unstyled price-details">
          <li class="price-detail">
            <div class="details-title">
              Amount Payable
            </div>
            <div class="detail-amt font-weight-bolder">
              $699.30
            </div>
          </li>
        </ul>

      </b-card>
    </div>
  </div>
</template>

<script>
import {
  BCard, BCardHeader, BCardTitle, BCardText, BCardBody, BFormGroup, BFormRadio, BFormInput, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    // BSV
    BCard,
    BCardHeader,
    BCardTitle,
    BCardText,
    BCardBody,
    BFormGroup,
    BFormRadio,
    BFormInput,
    BButton,
  },
  props: {
    paymentDetails: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
#cvv {
  width: auto;
}
</style>
