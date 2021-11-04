export const codeFeedbackHelper = `
<template>
  <b-form @submit.prevent>
    <b-row>
      <!-- username -->
      <b-col cols="12">
        <b-form-group
          label="Username"
          label-for="fh-usename"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="UserIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="fh-usename"
              placeholder="Username"
            />
          </b-input-group>
        </b-form-group>
      </b-col>

      <!-- email -->
      <b-col cols="12">
        <b-form-group
          label="Email"
          label-for="fh-email"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="MailIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="fh-email"
              type="email"
              placeholder="Email"
            />
          </b-input-group>
          <b-form-text class="text-danger">
            Enter a Valid Email
          </b-form-text>
        </b-form-group>
      </b-col>

      <!-- password -->
      <b-col cols="12">
        <b-form-group
          label="Password"
          label-for="fh-password"
        >
          <b-input-group
            class="input-group-merge"
            :class="validation ? 'is-valid' : 'is-invalid'"
          >
            <b-input-group-prepend is-text>
              <feather-icon icon="LockIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="fh-password"
              v-model="userId"
              type="password"
              :state="validation"
              placeholder="Password"
            />
          </b-input-group>
          <b-form-invalid-feedback :state="validation">
            Your password must be 8-20 characters long.
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validation">
            Looks Good.
          </b-form-valid-feedback>
        </b-form-group>
      </b-col>

      <!-- occupation -->
      <b-col cols="12">
        <b-form-group label="Occupation">
          <b-input-group
            class="input-group-merge"
            :class="validationOccupation ? 'is-valid' : 'is-invalid'"
          >
            <b-input-group-prepend is-text>
              <feather-icon icon="LockIcon" />
            </b-input-group-prepend>
            <b-form-input
              v-model="occupationID"
              list="input-list"
              placeholder="Occupation"
              :state="validationOccupation"
            />
          </b-input-group>
          <b-form-datalist
            id="input-list"
            :options="options"
          />
        </b-form-group>
      </b-col>

      <!-- checkbox -->
      <b-col cols="12">
        <b-form-group>
          <b-form-checkbox
            id="checkbox-8"
            name="checkbox-8"
            value="Remember_me"
          >
            Remember me
          </b-form-checkbox>
        </b-form-group>
      </b-col>

      <!-- submit and reset -->
      <b-col>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
          @click="reset"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BFormText,
  BFormDatalist,
  BFormInvalidFeedback,
  BInputGroup,
  BInputGroupPrepend,
  BFormValidFeedback,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BInputGroup,
    BInputGroupPrepend,
    BFormInput,
    BFormCheckbox,
    BForm,
    BFormText,
    BButton,
    BFormDatalist,
    BFormInvalidFeedback,
    BFormValidFeedback,
  },
 directives: {
    Ripple,
  },
  data() {
    return {
      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],
      userId: '',
      occupationID: '',
    }
  },
  computed: {
    validation() {
      return this.userId.length > 4 && this.userId.length < 13
    },
    validationOccupation() {
      return this.occupationID.length > 1
    },
  },
  methods: {
    reset() {
      this.userId = ''
      this.occupationID = ''
    },
  },
}
</script>
`

export const codeHelper = `
<template>
  <b-form @submit.prevent>
    <b-row>

      <!-- username -->
      <b-col cols="12">
        <b-form-group
          label="Username"
          label-for="h-username"
        >
          <b-form-input
            id="h-username"
            placeholder="Username"
          />
        </b-form-group>
      </b-col>

      <!-- email -->
      <b-col cols="12">
        <b-form-group
          label="Email"
          label-for="d-email"
        >
          <b-form-input
            id="d-email"
            type="email"
            placeholder="Email"
          />
          <b-form-text>Enter a Valid Email</b-form-text>
        </b-form-group>
      </b-col>

      <!-- password -->
      <b-col cols="12">
        <b-form-group
          label="Password"
          label-for="d-password"
        >
          <b-form-input
            id="d-password"
            type="password"
            placeholder="Password"
          />
          <b-form-text>Your password must be 8-20 characters long.</b-form-text>
        </b-form-group>
      </b-col>

      <!-- occupation -->
      <b-col cols="12">
        <b-form-group
          label="Occupation"
          label-for="h-occupation"
        >
          <b-form-input
            id="h-occupation"
            list="input-list"
            placeholder="Occupation"
          />
          <b-form-datalist
            id="input-list"
            :options="options"
          />
        </b-form-group>
      </b-col>

      <!-- checkbox -->
      <b-col cols="12">
        <b-form-group>
          <b-form-checkbox
            id="checkbox-9"
            name="checkbox-9"
            value="Remember_me"
          >
            Remember me
          </b-form-checkbox>
        </b-form-group>
      </b-col>

      <!-- submit and reset -->
      <b-col>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormCheckbox,
  BForm,
  BButton,
  BFormText,
  BFormDatalist,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BFormText,
    BButton,
    BFormDatalist,
  },
   directives: {
    Ripple,
  },
  data() {
    return {
      options: ['Devloper', 'Manager', 'CEO', 'CTO', 'Full Stack Devloper'],
    }
  },
}
</script>
`

export const codeHorizontal = `
<template>
  <b-form @submit.prevent>
    <b-row>
      <b-col cols="12">
        <b-form-group
          label="First Name"
          label-for="h-first-name"
          label-cols-md="4"
        >
          <b-form-input
            id="h-first-name"
            placeholder="First Name"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          label="Email"
          label-for="h-email"
          label-cols-md="4"
        >
          <b-form-input
            id="h-email"
            type="email"
            placeholder="Email"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          label="Mobile"
          label-for="h-number"
          label-cols-md="4"
        >
          <b-form-input
            id="h-number"
            type="number"
            placeholder="Mobile"
          />
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          label="Password"
          label-for="h-password"
          label-cols-md="4"
        >
          <b-form-input
            id="h-password"
            type="password"
            placeholder="Password"
          />
        </b-form-group>
      </b-col>
      <b-col
        md="8"
        offset-md="4"
      >
        <b-form-group>
          <b-form-checkbox
            id="checkbox-2"
            name="checkbox-2"
            value="Remember_me"
          >
            Remember me
          </b-form-checkbox>
        </b-form-group>
      </b-col>

      <!-- submit and reset -->
      <b-col offset-md="4">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>

  </b-form>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeHorizontalIcon = `
<template>
  <b-form @submit.prevent>
    <b-row>
      <b-col cols="12">
        <b-form-group
          label="First Name"
          label-for="hi-first-name"
          label-cols-md="4"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="UserIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="hi-first-name"
              placeholder="First Name"
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          label="Email"
          label-for="hi-email"
          label-cols-md="4"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="MailIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="hi-email"
              type="email"
              placeholder="Email"
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          label="Mobile"
          label-for="hi-number"
          label-cols-md="4"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="SmartphoneIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="hi-number"
              type="number"
              placeholder="Mobile"
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col cols="12">
        <b-form-group
          label="Password"
          label-for="hi-password"
          label-cols-md="4"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="LockIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="hi-password"
              type="password"
              placeholder="Password"
            />
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col
        md="8"
        offset-md="4"
      >
        <b-form-group>
          <b-form-checkbox
            id="checkbox-1"
            name="checkbox-1"
            value="Remember_me"
          >
            Remember me
          </b-form-checkbox>
        </b-form-group>
      </b-col>

      <!-- submit and reset -->
      <b-col offset-md="4">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>

  </b-form>
</template>

<script>
import {
  BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend, BRow, BCol,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BInputGroup,
    BInputGroupPrepend,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeMultipleColumn = `
<template>
  <b-form @submit.prevent>
    <b-row>
      <b-col md="6">
        <b-form-group
          label="First Name"
          label-for="mc-first-name"
        >
          <b-form-input
            id="mc-first-name"
            placeholder="First Name"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Last Name"
          label-for="mc-last-name"
        >
          <b-form-input
            id="mc-last-name"
            placeholder="Last Name"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="City"
          label-for="mc-city"
        >
          <b-form-input
            id="mc-city"
            placeholder="City"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Country"
          label-for="mc-country"
        >
          <b-form-input
            id="mc-country"
            placeholder="Country"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Company"
          label-for="mc-company"
        >
          <div class="form-label-group">
            <b-form-input
              id="mc-company"
              placeholder="Company"
            />
          </div>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label-for="mc-email"
          label="Email"
        >
          <div class="form-label-group">
            <b-form-input
              id="mc-email"
              type="email"
              placeholder="Email"
            />
          </div>
        </b-form-group>
      </b-col>

      <b-col cols="12">
        <b-form-group>
          <b-form-checkbox
            id="checkbox-10"
            name="checkbox-10"
            value="Remember_me"
          >
            Remember me
          </b-form-checkbox>
        </b-form-group>
      </b-col>

      <!-- submit and reset -->
      <b-col>
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>


<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeVertical = `
<template>
  <b-form @submit.prevent>
    <b-row>

      <!-- first name -->
      <b-col cols="12">
        <b-form-group
          label="First Name"
          label-for="v-first-name"
        >
          <b-form-input
            id="v-first-name"
            placeholder="First Name"
          />
        </b-form-group>
      </b-col>

      <!-- email -->
      <b-col cols="12">
        <b-form-group
          label="Email"
          label-for="v-email"
        >
          <b-form-input
            id="v-email"
            type="email"
            placeholder="Email"
          />
        </b-form-group>
      </b-col>

      <!-- mobile -->
      <b-col cols="12">
        <b-form-group
          label="Mobile"
          label-for="v-mobile"
        >
          <b-form-input
            id="v-mobile"
            type="number"
            placeholder="Mobile"
          />
        </b-form-group>
      </b-col>

      <!-- password -->
      <b-col cols="12">
        <b-form-group
          label="Password"
          label-for="v-password"
        >
          <b-form-input
            id="v-password"
            type="password"
            placeholder="Password"
          />
        </b-form-group>
      </b-col>

      <!-- checkbox -->
      <b-col cols="12">
        <b-form-group>
          <b-form-checkbox
            id="checkbox-3"
            name="checkbox-3"
            value="Remember_me"
          >
            Remember me
          </b-form-checkbox>
        </b-form-group>
      </b-col>

      <!-- submit and reset -->
      <b-col cols="12">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`

export const codeVerticalIcon = `
<template>
  <b-form @submit.prevent>
    <b-row>

      <!-- first name -->
      <b-col cols="12">
        <b-form-group
          label="First Name"
          label-for="vi-first-name"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="UserIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="vi-first-name"
              placeholder="First Name"
            />
          </b-input-group>
        </b-form-group>
      </b-col>

      <!-- email -->
      <b-col cols="12">
        <b-form-group
          label="Email"
          label-for="vi-email"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="MailIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="vi-email"
              type="email"
              placeholder="Email"
            />
          </b-input-group>
        </b-form-group>
      </b-col>

      <!-- mobile -->
      <b-col cols="12">
        <b-form-group
          label="Mobile"
          label-for="vi-mobile"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="SmartphoneIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="vi-mobile"
              type="number"
              placeholder="Mobile"
            />
          </b-input-group>
        </b-form-group>
      </b-col>

      <!-- password -->
      <b-col cols="12">
        <b-form-group
          label="Password"
          label-for="vi-password"
        >
          <b-input-group class="input-group-merge">
            <b-input-group-prepend is-text>
              <feather-icon icon="LockIcon" />
            </b-input-group-prepend>
            <b-form-input
              id="vi-password"
              type="password"
              placeholder="Password"
            />
          </b-input-group>
        </b-form-group>
      </b-col>

      <!-- checkbox -->
      <b-col cols="12">
        <b-form-group>
          <b-form-checkbox
            id="checkbox-4"
            name="checkbox-4"
            value="Remember_me"
          >
            Remember me
          </b-form-checkbox>
        </b-form-group>
      </b-col>

      <!-- reset and submit -->
      <b-col cols="12">
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          type="submit"
          variant="primary"
          class="mr-1"
        >
          Submit
        </b-button>
        <b-button
          v-ripple.400="'rgba(186, 191, 199, 0.15)'"
          type="reset"
          variant="outline-secondary"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BRow, BCol, BFormGroup, BFormInput, BFormCheckbox, BForm, BButton, BInputGroup, BInputGroupPrepend,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormCheckbox,
    BInputGroup,
    BInputGroupPrepend,
    BForm,
    BButton,
  },
  directives: {
    Ripple,
  },
}
</script>
`
