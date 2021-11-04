<template>
  <section class="invoice-add-wrapper">
    <!-- Alert: No item found -->
    <b-alert
      variant="danger"
      :show="invoiceData === undefined"
    >
      <h4 class="alert-heading">
        Error fetching invoice data
      </h4>
      <div class="alert-body">
        No invoice found with this invoice id. Check
        <b-link
          class="alert-link"
          :to="{ name: 'apps-invoice-list'}"
        >
          Invoice List
        </b-link>
        for other invoices.
      </div>
    </b-alert>

    <b-row
      v-if="invoiceData"
      class="invoice-add"
    >

      <!-- Col: Left (Invoice Container) -->
      <b-col
        cols="12"
        xl="9"
        md="8"
      >
        <b-form @submit.prevent>
          <b-card
            no-body
            class="invoice-preview-card"
          >
            <!-- Header -->
            <b-card-body class="invoice-padding pb-0">

              <div class="d-flex justify-content-between flex-md-row flex-column invoice-spacing mt-0">

                <!-- Header: Left Content -->
                <div>
                  <div class="logo-wrapper">
                    <logo />
                    <h3 class="text-primary invoice-logo">
                      Vuexy
                    </h3>
                  </div>
                  <b-card-text class="mb-25">
                    Office 149, 450 South Brand Brooklyn
                  </b-card-text>
                  <b-card-text class="mb-25">
                    San Diego County, CA 91905, USA
                  </b-card-text>
                  <b-card-text class="mb-0">
                    +1 (123) 456 7891, +44 (876) 543 2198
                  </b-card-text>
                </div>

                <!-- Header: Right Content -->
                <div class="invoice-number-date mt-md-0 mt-2">
                  <div class="d-flex align-items-center justify-content-md-end mb-1">
                    <h4 class="invoice-title">
                      Invoice
                    </h4>
                    <b-input-group class="input-group-merge invoice-edit-input-group disabled">
                      <b-input-group-prepend is-text>
                        <feather-icon icon="HashIcon" />
                      </b-input-group-prepend>
                      <b-form-input
                        id="invoice-data-id"
                        v-model="invoiceData.id"
                        disabled
                      />
                    </b-input-group>
                  </div>
                  <div class="d-flex align-items-center mb-1">
                    <span class="title">
                      Date:
                    </span>
                    <flat-pickr
                      v-model="invoiceData.issuedDate"
                      class="form-control invoice-edit-input"
                    />
                  </div>
                  <div class="d-flex align-items-center">
                    <span class="title">
                      Due Date:
                    </span>
                    <flat-pickr
                      v-model="invoiceData.dueDate"
                      class="form-control invoice-edit-input"
                    />
                  </div>
                </div>
              </div>
            </b-card-body>

            <!-- Spacer -->
            <hr class="invoice-spacing">

            <!-- Invoice Client & Payment Details -->
            <b-card-body
              class="invoice-padding pt-0"
            >
              <b-row class="invoice-spacing">

                <!-- Col: Invoice To -->
                <b-col
                  cols="12"
                  xl="6"
                  class="mb-lg-1"
                >
                  <h6 class="mb-2">
                    Invoice To:
                  </h6>

                  <!-- Selected Client -->
                  <div
                    v-if="invoiceData.client"
                    class="mt-1"
                  >
                    <h6 class="mb-25">
                      {{ invoiceData.client.name }}
                    </h6>
                    <b-card-text class="mb-25">
                      {{ invoiceData.client.company }}
                    </b-card-text>
                    <b-card-text class="mb-25">
                      {{ invoiceData.client.address }}, {{ invoiceData.client.country }}
                    </b-card-text>
                    <b-card-text class="mb-25">
                      {{ invoiceData.client.contact }}
                    </b-card-text>
                    <b-card-text class="mb-0">
                      {{ invoiceData.client.companyEmail }}
                    </b-card-text>
                  </div>
                </b-col>

                <!-- Col: Payment Details -->
                <b-col
                  xl="6"
                  cols="12"
                  class="mt-xl-0 mt-2 justify-content-end d-xl-flex d-block"
                >
                  <div>
                    <h6 class="mb-2">
                      Payment Details:
                    </h6>
                    <table>
                      <tbody>
                        <tr>
                          <td class="pr-1">
                            Total Due:
                          </td>
                          <td><span class="font-weight-bold">$12,110.55</span></td>
                        </tr>
                        <tr>
                          <td class="pr-1">
                            Bank name:
                          </td>
                          <td>American Bank</td>
                        </tr>
                        <tr>
                          <td class="pr-1">
                            Country:
                          </td>
                          <td>United States</td>
                        </tr>
                        <tr>
                          <td class="pr-1">
                            IBAN:
                          </td>
                          <td>ETD95476213874685</td>
                        </tr>
                        <tr>
                          <td class="pr-1">
                            SWIFT code:
                          </td>
                          <td>BR91905</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </b-col>
              </b-row>
            </b-card-body>

            <!-- Items Section -->
            <b-card-body class="invoice-padding form-item-section">
              <div
                ref="form"
                class="repeater-form"
                :style="{height: trHeight}"
              >
                <b-row
                  v-for="(item, index) in invoiceData.items"
                  :key="index"
                  ref="row"
                  class="pb-2"
                >

                  <!-- Item Form -->
                  <!-- ? This will be in loop => So consider below markup for single item -->
                  <b-col cols="12">

                    <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                    <div class="d-none d-lg-flex">
                      <b-row class="flex-grow-1 px-1">
                        <!-- Single Item Form Headers -->
                        <b-col
                          cols="12"
                          lg="5"
                        >
                          Item
                        </b-col>
                        <b-col
                          cols="12"
                          lg="3"
                        >
                          Cost
                        </b-col>
                        <b-col
                          cols="12"
                          lg="2"
                        >
                          Qty
                        </b-col>
                        <b-col
                          cols="12"
                          lg="2"
                        >
                          Price
                        </b-col>
                      </b-row>
                      <div class="form-item-action-col" />
                    </div>

                    <!-- Form Input Fields OR content inside bordered area  -->
                    <!-- ? Flex to keep separate width for XIcon and SettingsIcon -->
                    <div class="d-flex border rounded">
                      <b-row class="flex-grow-1 p-2">
                        <!-- Single Item Form Headers -->
                        <b-col
                          cols="12"
                          lg="5"
                        >
                          <label class="d-inline d-lg-none">Item</label>
                          <v-select
                            v-model="item.itemTitle"
                            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                            :options="itemsOptions"
                            label="itemTitle"
                            :clearable="false"
                            class="mb-2 item-selector-title"
                            placeholder="Select Item"
                            @input="val => updateItemForm(index, val)"
                          />
                        </b-col>
                        <b-col
                          cols="12"
                          lg="3"
                        >
                          <label class="d-inline d-lg-none">Cost</label>
                          <b-form-input
                            v-model="item.cost"
                            type="number"
                            class="mb-2"
                          />
                        </b-col>
                        <b-col
                          cols="12"
                          lg="2"
                        >
                          <label class="d-inline d-lg-none">Qty</label>
                          <b-form-input
                            v-model="item.qty"
                            type="number"
                            class="mb-2"
                          />
                        </b-col>
                        <b-col
                          cols="12"
                          lg="2"
                        >
                          <label class="d-inline d-lg-none">Price</label>
                          <p class="mb-1">
                            ${{ item.cost * item.qty }}
                          </p>
                        </b-col>
                        <b-col
                          cols="12"
                          lg="5"
                        >
                          <label class="d-inline d-lg-none">Description</label>
                          <b-form-textarea
                            v-model="item.description"
                            class="mb-2 mb-lg-0"
                          />
                        </b-col>
                        <b-col>
                          <p class="mb-0">
                            Discount: 0% 0% 0%
                          </p>
                        </b-col>
                      </b-row>
                      <div class="d-flex flex-column justify-content-between border-left py-50 px-25">
                        <feather-icon
                          size="16"
                          icon="XIcon"
                          class="cursor-pointer"
                          @click="removeItem(index)"
                        />
                        <feather-icon
                          :id="`form-item-settings-icon-${index}`"
                          size="16"
                          icon="SettingsIcon"
                          class="cursor-pointer"
                        />

                        <!-- Setting Item Form -->
                        <b-popover
                          :ref="`form-item-settings-popover-${index}`"
                          :target="`form-item-settings-icon-${index}`"
                          triggers="click"
                          placement="lefttop"
                        >
                          <b-form @submit.prevent>
                            <b-row>

                              <!-- Field: Discount -->
                              <b-col cols="12">
                                <b-form-group
                                  label="Discount(%)"
                                  :label-for="`setting-item-${index}-discount`"
                                >
                                  <b-form-input
                                    :id="`setting-item-${index}-discount`"
                                    :value="null"
                                    type="number"
                                  />
                                </b-form-group>
                              </b-col>

                              <!-- Field: Tax 1 -->
                              <b-col cols="6">
                                <b-form-group
                                  label="Tax 1"
                                  :label-for="`setting-item-${index}-tax-1`"
                                >
                                  <v-select
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :value="'10%'"
                                    :options="['0%', '1%', '10%', '14%', '18%']"
                                    :input-id="`setting-item-${index}-tax-1`"
                                    :clearable="false"
                                  />
                                </b-form-group>
                              </b-col>

                              <!-- Field: Tax 2 -->
                              <b-col cols="6">
                                <b-form-group
                                  label="Tax 2"
                                  :label-for="`setting-item-${index}-tax-2`"
                                >
                                  <v-select
                                    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                                    :value="'10%'"
                                    :options="['0%', '1%', '10%', '14%', '18%']"
                                    :input-id="`setting-item-${index}-tax-2`"
                                    :clearable="false"
                                  />
                                </b-form-group>
                              </b-col>

                              <b-col
                                cols="12"
                                class="d-flex justify-content-between mt-1"
                              >
                                <b-button
                                  variant="outline-primary"
                                  @click="() => {$refs[`form-item-settings-popover-${index}`][0].$emit('close')}"
                                >
                                  Apply
                                </b-button>
                                <b-button
                                  variant="outline-secondary"
                                  @click="() => {$refs[`form-item-settings-popover-${index}`][0].$emit('close')}"
                                >
                                  Cancel
                                </b-button>
                              </b-col>
                            </b-row>
                          </b-form>
                        </b-popover>
                      </div>
                    </div>
                  </b-col>
                </b-row>
              </div>
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                size="sm"
                variant="primary"
                @click="addNewItemInItemForm"
              >
                Add Item
              </b-button>
            </b-card-body>

            <!-- Invoice Description: Total -->
            <b-card-body class="invoice-padding pb-0">
              <b-row>

                <!-- Col: Sales Persion -->
                <b-col
                  cols="12"
                  md="6"
                  class="mt-md-0 mt-3 d-flex align-items-center"
                  order="2"
                  order-md="1"
                >
                  <label
                    for="invoice-data-sales-person"
                    class="text-nowrap mr-50"
                  >Sales Person:</label>
                  <b-form-input
                    id="invoice-data-sales-person"
                    v-model="invoiceData.salesPerson"
                    placeholder="Edward Crowley"
                  />
                </b-col>

                <!-- Col: Total -->
                <b-col
                  cols="12"
                  md="6"
                  class="mt-md-6 d-flex justify-content-end"
                  order="1"
                  order-md="2"
                >
                  <div class="invoice-total-wrapper">
                    <div class="invoice-total-item">
                      <p class="invoice-total-title">
                        Subtotal:
                      </p>
                      <p class="invoice-total-amount">
                        $1800
                      </p>
                    </div>
                    <div class="invoice-total-item">
                      <p class="invoice-total-title">
                        Discount:
                      </p>
                      <p class="invoice-total-amount">
                        $28
                      </p>
                    </div>
                    <div class="invoice-total-item">
                      <p class="invoice-total-title">
                        Tax:
                      </p>
                      <p class="invoice-total-amount">
                        21%
                      </p>
                    </div>
                    <hr class="my-50">
                    <div class="invoice-total-item">
                      <p class="invoice-total-title">
                        Total:
                      </p>
                      <p class="invoice-total-amount">
                        $1690
                      </p>
                    </div>
                  </div>
                </b-col>
              </b-row>
            </b-card-body>

            <!-- Spacer -->
            <hr class="invoice-spacing">

            <!-- Note -->
            <b-card-body class="invoice-padding pt-0">
              <span class="font-weight-bold">Note: </span>
              <b-form-textarea v-model="invoiceData.note" />
            </b-card-body>
          </b-card>
        </b-form>
      </b-col>

      <!-- Right Col: Card -->
      <b-col
        cols="12"
        md="4"
        xl="3"
        class="invoice-actions"
      >

        <!-- Action Buttons -->
        <b-card>

          <!-- Button: Send Invoice -->
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            v-b-toggle.sidebar-send-invoice
            variant="primary"
            class="mb-75"
            block
          >
            Send Invoice
          </b-button>

          <!-- Button: DOwnload -->
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            class="mb-75"
            block
          >
            Preview
          </b-button>

          <!-- Button: Print -->
          <b-button
            v-ripple.400="'rgba(113, 102, 240, 0.15)'"
            variant="outline-primary"
            block
          >
            Save
          </b-button>

          <!-- Button: Add Payment -->
          <b-button
            v-b-toggle.sidebar-invoice-add-payment
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="success"
            class="mb-75"
            block
          >
            Add Payment
          </b-button>
        </b-card>

        <!-- Payment Method -->
        <div class="mt-2">
          <b-form-group
            label="Accept Payment Via"
            label-for="payment-method"
          >
            <v-select
              v-model="invoiceData.paymentMethod"
              :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
              :options="paymentMethods"
              input-id="payment-method"
              class="payment-selector"
              :clearable="false"
            />
          </b-form-group>

          <!-- ? Below values are not adding invoiceData to keep invoiceData more generic and less confusing  -->

          <!-- Payment Terms -->
          <div class="d-flex justify-content-between align-items-center">
            <label for="patymentTerms">Payment Terms</label>
            <b-form-checkbox
              id="patymentTerms"
              :checked="true"
              switch
            />
          </div>

          <!-- Client Notes -->
          <div class="d-flex justify-content-between align-items-center my-1">
            <label for="clientNotes">Client Notes</label>
            <b-form-checkbox
              id="clientNotes"
              :checked="true"
              switch
            />
          </div>

          <!-- Payment Stub -->
          <div class="d-flex justify-content-between align-items-center">
            <label for="paymentStub">Payment Stub</label>
            <b-form-checkbox
              id="paymentStub"
              switch
            />
          </div>
        </div>
      </b-col>
    </b-row>

    <invoice-sidebar-send-invoice />
    <invoice-sidebar-add-payment />
  </section>
</template>

<script>
import Logo from '@core/layouts/components/Logo.vue'
import { ref, onUnmounted } from '@vue/composition-api'
import { heightTransition } from '@core/mixins/ui/transition'
import Ripple from 'vue-ripple-directive'
import store from '@/store'
import router from '@/router'
import {
  BRow,
  BCol,
  BCard,
  BCardBody,
  BButton,
  BCardText,
  BForm,
  BFormGroup,
  BFormInput,
  BInputGroup,
  BInputGroupPrepend,
  BFormTextarea,
  BFormCheckbox,
  BPopover,
  BAlert,
  BLink,
  VBToggle,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import flatPickr from 'vue-flatpickr-component'
import invoiceStoreModule from '../invoiceStoreModule'
import InvoiceSidebarSendInvoice from '../InvoiceSidebarSendInvoice.vue'
import InvoiceSidebarAddPayment from '../InvoiceSidebarAddPayment.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardBody,
    BButton,
    BCardText,
    BForm,
    BFormGroup,
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BFormTextarea,
    BFormCheckbox,
    BPopover,
    BAlert,
    BLink,
    flatPickr,
    vSelect,
    Logo,
    InvoiceSidebarSendInvoice,
    InvoiceSidebarAddPayment,
  },
  directives: {
    Ripple,
    'b-toggle': VBToggle,
  },
  mixins: [heightTransition],

  // Reset Tr Height if data changes
  watch: {
    // eslint-disable-next-line func-names
    'invoiceData.items': function () {
      this.initTrHeight()
    },
  },
  mounted() {
    this.initTrHeight()
  },
  created() {
    window.addEventListener('resize', this.initTrHeight)
  },
  destroyed() {
    window.removeEventListener('resize', this.initTrHeight)
  },
  methods: {
    addNewItemInItemForm() {
      this.$refs.form.style.overflow = 'hidden'
      this.invoiceData.items.push(JSON.parse(JSON.stringify(this.itemFormBlankItem)))

      this.$nextTick(() => {
        this.trAddHeight(this.$refs.row[0].offsetHeight)
        setTimeout(() => {
          this.$refs.form.style.overflow = null
        }, 350)
      })
    },
    removeItem(index) {
      this.invoiceData.items.splice(index, 1)
      this.trTrimHeight(this.$refs.row[0].offsetHeight)
    },
    initTrHeight() {
      this.trSetHeight(null)
      this.$nextTick(() => {
        this.trSetHeight(this.$refs.form ? this.$refs.form.scrollHeight : 0)
      })
    },
  },
  setup() {
    const INVOICE_APP_STORE_MODULE_NAME = 'app-invoice'

    // Register module
    if (!store.hasModule(INVOICE_APP_STORE_MODULE_NAME))
      store.registerModule(INVOICE_APP_STORE_MODULE_NAME, invoiceStoreModule)

    // UnRegister on leave
    onUnmounted(() => {
      if (store.hasModule(INVOICE_APP_STORE_MODULE_NAME)) store.unregisterModule(INVOICE_APP_STORE_MODULE_NAME)
    })

    const invoiceData = ref(null)
    const paymentDetails = ref({})

    store
      .dispatch('app-invoice/fetchInvoice', { id: router.currentRoute.params.id })
      .then(response => {
        invoiceData.value = response.data.invoice
        paymentDetails.value = response.data.paymentDetails

        // ? We are adding some extra data in response for data purpose
        // * Your response will contain this extra data
        // ? [Purpose is to make it more API friendly and less static as possible]
        invoiceData.value.items = [
          {
            itemTitle: 'App Design',
            cost: 24,
            qty: 2,
            description: 'Designed UI kit & app pages.',
          },
        ]
        invoiceData.value.note =
          'It was a pleasure working with you and your team. We hope you will keep us in mind for future freelance projects. Thank You!'
        invoiceData.value.paymentMethod = 'Bank Account'
      })
      .catch(error => {
        if (error.response.status === 404) {
          invoiceData.value = undefined
        }
      })

    const itemFormBlankItem = {
      item: null,
      cost: 0,
      qty: 0,
      description: '',
    }

    const itemsOptions = [
      {
        itemTitle: 'App Design',
        cost: 24,
        qty: 1,
        description: 'Designed UI kit & app pages.',
      },
      {
        itemTitle: 'App Customization',
        cost: 26,
        qty: 1,
        description: 'Customization & Bug Fixes.',
      },
      {
        itemTitle: 'ABC Template',
        cost: 28,
        qty: 1,
        description: 'Bootstrap 4 admin template.',
      },
      {
        itemTitle: 'App Development',
        cost: 32,
        qty: 1,
        description: 'Native App Development.',
      },
    ]

    const updateItemForm = (index, val) => {
      const { cost, qty, description } = val
      invoiceData.value.items[index].cost = cost
      invoiceData.value.items[index].qty = qty
      invoiceData.value.items[index].description = description
    }

    const paymentMethods = ['Bank Account', 'PayPal', 'UPI Transfer']

    return {
      invoiceData,
      itemsOptions,
      updateItemForm,
      itemFormBlankItem,
      paymentMethods,
    }
  },
}
</script>

<style lang="scss">
@import '~@core/scss/vue/libs/vue-select.scss';
@import '~@core/scss/vue/libs/vue-flatpicker.scss';
</style>

<style lang="scss" scoped>
@import '~@core/scss/base/pages/app-invoice.scss';

.form-item-section {
  background-color: $product-details-bg;
}

.form-item-action-col {
  width: 27px;
}

.repeater-form {
  // overflow: hidden;
  transition: 0.35s height;
}

.v-select {
  &.item-selector-title,
  &.payment-selector {
    background-color: #fff;

    .dark-layout & {
      background-color: unset;
    }
  }
}

.dark-layout {
  .form-item-section {
    background-color: $theme-dark-body-bg;

    .row .border {
      background-color: $theme-dark-card-bg;
    }
  }
}
</style>
