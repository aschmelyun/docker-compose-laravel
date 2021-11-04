<template>
  <b-card-code title="Prevent closing">
    <b-card-text>
      <span>To prevent </span>
      <code>&lt;b-modal&gt;</code>
      <span> from closing (for example when validation fails). you can call the </span>
      <code>.preventDefault()</code>
      <span> method of the event object passed to your </span>
      <code>ok</code>
      <span> (OK button), </span>
      <code>cancel</code>
      <span> (Cancel button), </span>
      <code>close</code>
      <span> (modal header close button) and </span>
      <code>hide</code>
      <span> event handlers.</span>
    </b-card-text>

    <!-- button -->
    <b-button
      id="toggle-btn"
      v-ripple.400="'rgba(113, 102, 240, 0.15)'"
      v-b-modal.modal-prevent-closing
      variant="outline-primary"
    >
      Open Modal
    </b-button>

    <!-- modal data -->
    <div class="mt-2">
      <p>Submitted Names:</p>
      <div v-if="submittedNames.length === 0">
        --
      </div>
      <b-list-group
        v-else
      >
        <b-list-group-item
          v-for="(data,index) in submittedNames"
          :key="index"
        >
          {{ data }}
        </b-list-group-item>
      </b-list-group>
    </div>

    <!-- modal -->
    <b-modal
      id="modal-prevent-closing"
      ref="my-modal"
      title="Submit Your Name"
      ok-title="Submit"
      cancel-variant="outline-secondary"
      @show="resetModal"
      @hidden="resetModal"
      @ok="handleOk"
    >
      <form
        ref="form"
        @submit.stop.prevent="handleSubmit"
      >
        <b-form-group
          :state="nameState"
          label="Name"
          label-for="name-input"
          invalid-feedback="Name is required"
        >
          <b-form-input
            id="name-input"
            v-model="name"
            :state="nameState"
            required
          />
        </b-form-group>
      </form>
    </b-modal>

    <template #code>
      {{ codePrevent }}
    </template>
  </b-card-code>
</template>

<script>
import {
  BButton, BFormGroup, BFormInput, BModal, VBModal, BCardText, BListGroup, BListGroupItem,
} from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import Ripple from 'vue-ripple-directive'
import { codePrevent } from './code'

export default {
  components: {
    BCardCode,
    BButton,
    BFormGroup,
    BCardText,
    BFormInput,
    BListGroup,
    BListGroupItem,
    BModal,
  },
  directives: {
    'b-modal': VBModal,
    Ripple,
  },
  data() {
    return {
      codePrevent,
      name: '',
      nameState: null,
      submittedNames: [],
    }
  },
  methods: {
    checkFormValidity() {
      const valid = this.$refs.form.checkValidity()
      this.nameState = valid
      return valid
    },
    resetModal() {
      this.name = ''
      this.nameState = null
    },
    handleOk(bvModalEvt) {
      // Prevent modal from closing
      bvModalEvt.preventDefault()
      // Trigger submit handler
      this.handleSubmit()
    },
    handleSubmit() {
      // Exit when the form isn't valid
      if (!this.checkFormValidity()) {
        return
      }
      // Push the name to submitted names
      this.submittedNames.push(this.name)
      // Hide the modal manually
      this.$nextTick(() => {
        this.$refs['my-modal'].toggle('#toggle-btn')
      })
    },
  },
}
</script>
