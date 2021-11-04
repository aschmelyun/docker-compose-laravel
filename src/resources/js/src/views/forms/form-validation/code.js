export const codeSimple = `
<template>
  <!-- form -->
  <validation-observer ref="simpleRules">
    <b-form>
      <b-row>
        <b-col md="6">
          <b-form-group>
            <validation-provider
              #default="{ errors }"
              name="First Name"
              rules="required"
            >
              <b-form-input
                v-model="name"
                :state="errors.length > 0 ? false:null"
                placeholder="First Name"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <validation-provider
              #default="{ errors }"
              name="Email"
              rules="required|email"
            >
              <b-form-input
                v-model="emailValue"
                :state="errors.length > 0 ? false:null"
                type="email"
                placeholder="Email"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-button
            variant="primary"
            type="submit"
            @click.prevent="validationForm"
          >
            Submit
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,
} from 'bootstrap-vue'
import { required, email } from '@validations'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BCardText,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      emailValue: '',
      name: '',
      required,
      email,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>
`

export const codeMultiple = `
<template>
  <validation-observer ref="simpleRules">
    <b-form>
      <b-row>
        <b-col md="6">
          <b-form-group>
            <validation-provider
              #default="{ errors }"
              name="Name"
              rules="required"
            >
              <b-form-input
                v-model="name"
                :state="errors.length > 0 ? false:null"
                placeholder="Your Name"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <validation-provider
              #default="{ errors }"
              name="Email"
              rules="required|email"
            >
              <b-form-input
                v-model="emailValue"
                :state="errors.length > 0 ? false:null"
                type="email"
                placeholder="Your Email"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <validation-provider
              #default="{ errors }"
              name="Password"
              vid="Password"
              rules="required|password"
            >
              <b-form-input
                v-model="PasswordValue"
                type="password"
                :state="errors.length > 0 ? false:null"
                placeholder="Your Password"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>
        <b-col md="6">
          <b-form-group>
            <validation-provider
              #default="{ errors }"
              name="Password Confirm"
              rules="required|confirmed:Password"
            >
              <b-form-input
                v-model="passwordCon"
                :state="errors.length > 0 ? false:null"
                type="password"
                placeholder="Confirm Password"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- submit button -->
        <b-col>
          <b-button
            variant="primary"
            type="submit"
            @click.prevent="validationForm"
          >
            Submit
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton,
} from 'bootstrap-vue'
import {
  required, email, confirmed, password,
} from '@validations'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      emailValue: '',
      name: '',
      PasswordValue: '',
      passwordCon: '',
      required,
      password,
      email,
      confirmed,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>
`

export const codeType = `
<template>
  <validation-observer ref="simpleRules">
    <b-form>
      <b-row>

        <!--  This field is required-->
        <b-col md="6">
          <b-form-group>
            <label>This field is required</label>
            <validation-provider
              #default="{ errors }"
              rules="required"
              name="First Name"
            >
              <b-form-input
                v-model="name"
                :state="errors.length > 0 ? false:null"
                placeholder="Fist Name"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!--Enter Number between 10 & 20 -->
        <b-col md="6">
          <b-form-group>
            <label>Enter Number between 10 & 20</label>
            <validation-provider
              #default="{ errors }"
              rules="required|between:10,20"
              name="Number between"
            >
              <b-form-input
                v-model="numberRange"
                :state="errors.length > 0 ? false:null"
                placeholder="Enter Number between 10 & 20"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Must only consist of numbers-->
        <b-col md="6">
          <b-form-group>
            <label>Must only consist of numbers</label>
            <validation-provider
              #default="{ errors }"
              rules="required|integer"
              name="Number"
            >
              <b-form-input
                v-model="number"
                :state="errors.length > 0 ? false:null"
                placeholder="Enter Number Only"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Must match the specified regular expression : ^([0-9]+)$ - numbers only -->
        <b-col md="6">
          <b-form-group>
            <label>Must match the specified regular expression : ^([0-9]+)$ - numbers only</label>
            <validation-provider
              #default="{ errors }"
              rules="required|regex:^([0-9]+)$"
              name="Regex"
            >
              <b-form-input
                v-model="numberRegx"
                :state="errors.length > 0 ? false:null"
                placeholder="Enter Specified regular expression"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!--  Only alphabetic characters-->
        <b-col md="6">
          <b-form-group>
            <label>Only alphabetic characters</label>
            <validation-provider
              #default="{ errors }"
              rules="required|alpha"
              name="Alpha"
            >
              <b-form-input
                v-model="Alphabetic"
                :state="errors.length > 0 ? false:null"
                placeholder="Enter Character Only"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Length should not be less than the specified length : 3 -->
        <b-col md="6">
          <b-form-group>
            <label>Length should not be less than the specified length : 3</label>
            <validation-provider
              #default="{ errors }"
              rules="required|min:3"
              name="Min Character"
            >
              <b-form-input
                v-model="digitValue"
                :state="errors.length > 0 ? false:null"
                placeholder="Enter minimum 3 Characters"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!--Password Input Field -->
        <b-col md="6">
          <b-form-group>
            <label>Password Input Field</label>
            <validation-provider
              #default="{ errors }"
              rules="required|password"
              name="password"
              vid="password"
            >
              <b-form-input
                v-model="passwordValue"
                type="password"
                :state="errors.length > 0 ? false:null"
                placeholder="Password"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- The digits field must be numeric and exactly contain 3 digits -->
        <b-col md="6">
          <b-form-group>
            <label>The digits field must be numeric and exactly contain 3 digits</label>
            <validation-provider
              #default="{ errors }"
              rules="required|digits:3"
              name="Numeric"
            >
              <b-form-input
                v-model="digitValue2"
                :state="errors.length > 0 ? false:null"
                placeholder="Enter Exactyly 3 digit"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!--Repeat password must match  -->
        <b-col md="6">
          <b-form-group>
            <label>Repeat password must match</label>
            <validation-provider
              #default="{ errors }"
              rules="required|confirmed:password"
              name="Confirm Password"
            >
              <b-form-input
                v-model="passwordCon"
                type="password"
                :state="errors.length > 0 ? false:null"
                placeholder="Repeat Password"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!--Only alphabetic characters, numbers, dashes or underscores -->
        <b-col md="6">
          <b-form-group>
            <label>Only alphabetic characters, numbers, dashes or underscores</label>
            <validation-provider
              #default="{ errors }"
              rules="required|alpha-dash"
              name="All Character"
            >
              <b-form-input
                v-model="character"
                :state="errors.length > 0 ? false:null"
                placeholder="Enter Character, Numbers, Dash, Underscores"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- Must be a valid email -->
        <b-col md="6">
          <b-form-group>
            <label>Must be a valid email</label>
            <validation-provider
              #default="{ errors }"
              name="Email"
              rules="required|email"
            >
              <b-form-input
                v-model="emailValue"
                :state="errors.length > 0 ? false:null"
                placeholder="Email"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!--Must be a valid url  -->
        <b-col md="6">
          <b-form-group>
            <label>Must be a valid url</label>
            <validation-provider
              #default="{ errors }"
              name="URL"
              rules="required|url"
            >
              <b-form-input
                v-model="URL"
                :state="errors.length > 0 ? false:null"
                placeholder="Enter Valid URL"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- submit button -->
        <b-col cols="12">
          <b-button
            variant="primary"
            type="submit"
            @click.prevent="validationForm"
          >
            Submit
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton,
} from 'bootstrap-vue'
import {
  required, email, confirmed, url, between, alpha, integer, password, min, digits, alphaDash, length,
} from '@validations'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      name: '',
      passwordValue: '',
      passwordCon: '',
      emailValue: '',
      number: '',
      numberRange: '',
      numberRegx: '',
      URL: '',
      Alphabetic: '',
      digitValue: '',
      digitValue2: '',
      character: '',
      required,
      confirmed,
      password,
      email,
      min,
      integer,
      url,
      alpha,
      between,
      digits,
      length,
      alphaDash,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>
`

export const codePlaceholder = `
<template>
  <validation-observer ref="simpleRules">
    <b-form>
      <b-row>

        <!-- username -->
        <b-col cols="12">
          <b-form-group
            label="Username"
            label-for="username"
          >
            <validation-provider
              #default="{ errors }"
              name="Username"
              rules="required"
            >
              <b-form-input
                id="username"
                v-model="username"
                :state="errors.length > 0 ? false:null"
                placeholder="Username"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- password -->
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="password"
          >
            <validation-provider
              #default="{ errors }"
              name="Password"
              rules="required"
            >
              <b-form-input
                id="password"
                v-model="passValue"
                type="password"
                :state="errors.length > 0 ? false:null"
                placeholder="Password"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- login button -->
        <b-col cols="12">
          <b-button
            variant="primary"
            type="submit"
            @click.prevent="validationForm"
          >
            Login
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,} from 'bootstrap-vue'
import { required } from '@validations'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BCardText,
    BForm,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      passValue: '',
      username: '',
      required,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('login successfully')
        }
      })
    },
  },
}
</script>
`

export const codePlaceholderArgument = `
<template>
  <validation-observer ref="simpleRules">
    <b-form>
      <b-row>

        <!-- password -->
        <b-col cols="12">
          <b-form-group
            label="Password"
            label-for="a-password"
          >
            <validation-provider
              #default="{ errors }"
              name="Password"
              vid="Password"
              rules="required|min:8|password"
            >
              <b-form-input
                id="a-password"
                v-model="username"
                :state="errors.length > 0 ? false:null"
                type="password"
                placeholder="Password"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- confirm password -->
        <b-col cols="12">
          <b-form-group
            label="Confirm Password"
            label-for="ac-password"
          >
            <validation-provider
              #default="{ errors }"
              name="Confirm Password"
              rules="required|confirmed:Password"
            >

              <b-form-input
                id="ac-password"
                v-model="passValue"
                :state="errors.length > 0 ? false:null"
                type="password"
                placeholder="Confirm Password"
              />
              <small class="text-danger">{{ errors[0] }}</small>
            </validation-provider>
          </b-form-group>
        </b-col>

        <!-- reset button -->
        <b-col cols="12">
          <b-button
            variant="primary"
            type="submit"
            @click.prevent="validationForm"
          >
            Reset
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </validation-observer>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BRow, BCol, BButton, BCardText,
} from 'bootstrap-vue'
import {
  required, min, confirmed,
} from '@validations'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BCardText,
    BFormInput,
    BFormGroup,
    BForm,
    BRow,
    BCol,
    BButton,
  },
  data() {
    return {
      passValue: '',
      username: '',
      required,
      min,
      confirmed,
      codePlaceholderArgument,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
          // eslint-disable-next-line
          alert('password reset!')
        }
      })
    },
  },
}
</script>
`

export const codeLocale = `
<template>
  <validation-observer ref="form">
    <b-row>
      <b-col md="6">
        <b-form-group>
          <validation-provider
            #default="{ errors }"
            name="email"
            rules="required|email"
          >
            <b-form-input
              v-model="email"
              type="email"
              :state="errors.length > 0 ? false:null"
              placeholder="Email"
            />
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group>
          <validation-provider
            #default="{ errors }"
            name="password"
            rules="required|min:6"
          >
            <b-form-input
              v-model="passwordValue"
              type="password"
              :state="errors.length > 0 ? false:null"
              placeholder="Password"
            />
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
    </b-row>
  </validation-observer>
</template>

<script>
import {
  BFormInput, BFormGroup, BButton, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import { ValidationProvider, ValidationObserver, localize } from 'vee-validate'
import { password, required } from '@validations'

export default {
  components: {
    BFormInput,
    BFormGroup,
    BButton,
    BCardText,
    BRow,
    BCol,
    ValidationProvider,
    ValidationObserver,
  },
  data() {
    return {
      // ? Default locale for VeeValidate is 'en'
      locale: 'en',
      email: '',
      passwordValue: '',
      password,
      required,
    }
  },
  methods: {
    switchLoc() {
      // switch the locale.
      this.locale = this.locale === 'en' ? 'ar' : 'en'
      localize(this.locale)

      // re-validate to re-generate the messages.
      this.$refs.form.validate()
    },
  },
}
</script>
`

export const codeExtended = `
<template>
  <div>
    <b-row>

      <!-- code -->
      <b-col md="6">
        <prism
          language="javascript"
          class="rounded "
        >
          {{ codeCredit }}
        </prism>
      </b-col>

      <!-- ciode -->
      <b-col md="6">
        <prism
          language="javascript"
          class="rounded mb-2"
        >
          {{ codePositive }}
        </prism>
      </b-col>
    </b-row>

    <!-- form -->
    <validation-observer ref="simpleRules">
      <b-form>
        <b-row>
          <b-col md="6">
            <b-form-group label="Credit Card">
              <validation-provider
                #default="{ errors }"
                name="Credit Card"
                rules="required|credit-card"
              >
                <b-form-input
                  v-model="cardNUm"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Credit Card Number"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
          <b-col md="6">
            <b-form-group label="Enter Only Positive Number">
              <validation-provider
                #default="{ errors }"
                name="Number"
                rules="required|positive"
              >
                <b-form-input
                  v-model="posNum"
                  :state="errors.length > 0 ? false:null"
                  placeholder="Positive Number"
                />
                <small class="text-danger">{{ errors[0] }}</small>
              </validation-provider>
            </b-form-group>
          </b-col>
        </b-row>

        <!-- submit button -->
        <b-form-group>
          <b-button
            type="submit"
            variant="primary"
            @click.prevent="validationForm"
          >
            Submit
          </b-button>
        </b-form-group>
      </b-form>
    </validation-observer>
  </div>
</template>

<script>
import { ValidationProvider, ValidationObserver } from 'vee-validate'
import {
  BFormInput, BFormGroup, BForm, BButton, BRow, BCol, BCardText,
} from 'bootstrap-vue'
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import Prism from 'vue-prism-component'

export default {
  components: {
    ValidationProvider,
    ValidationObserver,
    BFormInput,
    BFormGroup,
    BCardText,
    BForm,
    BRow,
    BCol,
    BButton,
    Prism,
  },
  data() {
    return {
      cardNUm: '',
      posNum: '',
      codeCredit: \`export const credit = extend('credit', {
    validate: validatorCreditCard,
    message: 'Please enter positive number!',
  })

  export const validatorCreditCard = creditnum => {
  /* eslint-disable no-useless-escape */
  const cRegExp = /^(?:3[47][0-9]{13})$/
  /* eslint-enable no-useless-escape */
  const validCreditCard = cRegExp.test(creditnum)
  return validCreditCard
  }\`,
      codePositive: \`export const positive = extend('positive', {
  validate: validatorPositive,
  message: 'Please enter positive number!',
  })

  export const validatorPositive = value => {
  if (value >= 0) {
    return true
  }
  return false
  }
  \`,
    }
  },
  methods: {
    validationForm() {
      this.$refs.simpleRules.validate().then(success => {
        if (success) {
        // eslint-disable-next-line
          alert('form submitted!')
        }
      })
    },
  },
}
</script>
`
