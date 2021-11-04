export const codeAddons = `
<template>
  <b-row>
    <b-col
      md="6"
      class="mb-1"
    >
      <b-input-group>
        <b-input-group-prepend>
          <b-input-group-text>$</b-input-group-text>
          <b-input-group-text>
            <b-form-checkbox
              name="checkbox-input"
              plain
              class="vs-checkbox-con pl-0"
            >
              <span class="vs-checkbox">
                <span class="vs-checkbox--check">
                  <i class="vs-icon feather icon-check" />
                </span>
              </span>
            </b-form-checkbox>
          </b-input-group-text>
        </b-input-group-prepend>
        <b-form-input />
      </b-input-group>
    </b-col>
    <b-col
      md="6"
    >
      <b-input-group>
        <b-form-input />
        <b-input-group-append>
          <b-input-group-text>$</b-input-group-text>
          <b-input-group-text>
            <b-form-radio
              class="vs-radio-con"
              name="radio-input"
              plain
            >
              <span class="vs-radio">
                <span class="vs-radio--border" />
                <span class="vs-radio--circle" />
              </span>
            </b-form-radio>
          </b-input-group-text>
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import {
  BInputGroup, BFormInput, BInputGroupPrepend, BInputGroupAppend, BRow, BCol, BFormCheckbox, BInputGroupText, BFormRadio,
} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,
    BFormCheckbox,
    BFormRadio,
    BInputGroupText,
    BRow,
    BCol,
  },
}
</script>
`

export const codeBasic = `
<template>
  <div class="demo-vertical-spacing">
    <!-- basic search -->
    <b-input-group>
      <b-input-group-prepend is-text>
        <feather-icon icon="SearchIcon" />
      </b-input-group-prepend>
      <b-form-input placeholder="Search" />
    </b-input-group>

    <!-- password -->
    <b-form-group>
      <label for="basic-password">Password</label>
      <b-input-group>
        <b-form-input
          id="basic-password"
          :type="passwordFieldType"
          placeholder="Your Password"
        />
        <b-input-group-append is-text>
          <feather-icon
            :icon="passwordToggleIcon"
            class="cursor-pointer"
            @click="togglePasswordVisibility"
          />
        </b-input-group-append>
      </b-input-group>
    </b-form-group>

    <!-- with prop prepend  -->
    <b-input-group prepend="@">
      <b-form-input placeholder="Username" />
    </b-input-group>

    <!-- with prop append -->
    <b-input-group append="@example.com">
      <b-form-input placeholder="Recipient's username" />
    </b-input-group>

    <b-input-group prepend="https://example.com/users/">
      <b-form-input />
    </b-input-group>

    <!-- append and pepend -->
    <b-input-group
      prepend="$"
      append=".00"
    >
      <b-form-input placeholder="100" />
    </b-input-group>

    <!-- textarea -->
    <b-input-group prepend="With textarea">
      <b-form-textarea />
    </b-input-group>
  </div>
</template>

<script>
import {
  BInputGroup, BFormInput, BInputGroupPrepend, BInputGroupAppend, BFormGroup, BFormTextarea,
} from 'bootstrap-vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  components: {
    BFormTextarea,
    BInputGroup,
    BFormGroup,
    BFormInput,
    BInputGroupPrepend,
    BInputGroupAppend,
  },
  mixins: [togglePasswordVisibility],
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
}
</script>
`

export const codeButton = `
<template>
  <b-row>
    <b-col
      lg="6"
      class="mb-1"
    >
      <!-- button on right -->
      <b-input-group>
        <b-form-input placeholder="Button on right" />
        <b-input-group-append>
          <b-button variant="outline-primary">
            GO
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
    <b-col lg="6">
      <!-- button on both side -->
      <b-input-group>
        <b-input-group-prepend>
          <b-button variant="outline-primary">
            <feather-icon icon="SearchIcon" />
          </b-button>
        </b-input-group-prepend>
        <b-form-input placeholder="Button on both side" />
        <b-input-group-append>
          <b-button variant="outline-primary">
            Search !
          </b-button>
        </b-input-group-append>
      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import {BInputGroup, BFormInput, BInputGroupAppend, BInputGroupPrepend, BRow, BCol, BButton} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupAppend,
    BInputGroupPrepend,
    BRow,
    BCol,
    BButton,
  },
}
</script>
`

export const codeCheckboxRadio = `
<template>
  <b-row>
    <!-- checkbox -->
    <b-col md="6">
      <b-form-group>
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-form-checkbox
              plain
              name="checkbox-input"
            />
          </b-input-group-prepend>
          <b-form-input placeholder="Message" />
        </b-input-group>
      </b-form-group>
    </b-col>

    <!-- radio -->
    <b-col md="6">
      <b-form-group>
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-form-radio
              v-model="radio1"
              value="radio2"
              plain
              name="radio-input1"
            />
          </b-input-group-prepend>
          <b-form-input placeholder="Message" />
        </b-input-group>
      </b-form-group>
    </b-col>

    <!-- custome checkbox and radio -->
    <b-col
      cols="12"
      class=" my-1"
    >
      <small class="font-weight-semibold">Custom checkbox and radio</small>
    </b-col>
    <b-col md="6">
      <b-form-group>
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-form-checkbox
              name="checkbox-input"
            />
          </b-input-group-prepend>
          <b-form-input placeholder="Message" />
        </b-input-group>
      </b-form-group>
    </b-col>

    <!-- radio -->
    <b-col md="6">
      <b-form-group>
        <b-input-group>
          <b-input-group-prepend is-text>
            <b-form-radio
              v-model="radio1"
              value="radio2"
              name="radio-input1"
            />
          </b-input-group-prepend>
          <b-form-input placeholder="Message" />
        </b-input-group>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script>
import {BInputGroup, BFormInput, BInputGroupPrepend, BRow, BCol, BFormCheckbox, BFormRadio, BFormGroup} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BRow,
    BCol,
    BFormCheckbox,
    BFormRadio,
    BFormGroup,
  },
  data() {
    return {
      radio1: 'radio2',
    }
  },
}
</script>
`

export const codeDropdown = `
<template>
  <b-row>
    <b-col
      lg="6"
      class="mb-1"
    >
      <!-- dropdown in right side -->
      <b-input-group>
        <b-input-group-prepend>
          <b-dropdown
            text="Action"
            variant="outline-primary"
          >
            <b-dropdown-item>Action </b-dropdown-item>
            <b-dropdown-item>Another Action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item>Separated link</b-dropdown-item>
          </b-dropdown>
        </b-input-group-prepend>
        <b-form-input placeholder="Dropdown on left" />
      </b-input-group>
    </b-col>
    <b-col lg="6">

      <!-- dropdown in both side -->
      <b-input-group>
        <b-input-group-prepend>
          <b-dropdown variant="outline-primary">
            <template #button-content>
              <feather-icon icon="Edit2Icon" />
            </template>
            <b-dropdown-item>Action </b-dropdown-item>
            <b-dropdown-item>Another Action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item>Separated link</b-dropdown-item>
          </b-dropdown>
        </b-input-group-prepend>
        <b-form-input placeholder="Dropdown on both side" />
        <b-input-group-append>
          <b-dropdown
            text="Action"
            variant="outline-primary"
            right
          >
            <b-dropdown-item>Action </b-dropdown-item>
            <b-dropdown-item>Another Action</b-dropdown-item>
            <b-dropdown-item>Something else here</b-dropdown-item>
            <b-dropdown-divider />
            <b-dropdown-item>Separated link</b-dropdown-item>
          </b-dropdown>
        </b-input-group-append>

      </b-input-group>
    </b-col>
  </b-row>
</template>

<script>
import {
  BInputGroup,
  BFormInput,
  BInputGroupPrepend,
  BInputGroupAppend,
  BDropdown,
  BDropdownItem,
  BDropdownDivider,
  BRow,
  BCol,
} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
    BInputGroupPrepend,
    BInputGroupAppend,
    BDropdownDivider,
    BDropdown,
    BDropdownItem,
    BRow,
    BCol,
  },
}
</script>
`

export const codeSize = `
<template>
  <div class="demo-vertical-spacing">

    <!-- large -->
    <b-input-group
      prepend="@"
      size="lg"
    >
      <b-form-input placeholder="Username" />
    </b-input-group>

    <!-- default -->
    <b-input-group
      prepend="@"
    >
      <b-form-input placeholder="Username" />
    </b-input-group>

    <!-- small -->
    <b-input-group
      size="sm"
      prepend="@"
    >
      <b-form-input placeholder="Username" />
    </b-input-group>
  </div>
</template>

<script>
import {BInputGroup, BFormInput} from 'bootstrap-vue'

export default {
  components: {
    BFormInput,
    BInputGroup,
  },
}
</script>
`

export const codeMerged = `
<template>
  <div class="demo-vertical-spacing">
    <!-- basic search -->
    <b-input-group class="input-group-merge">
      <b-input-group-prepend is-text>
        <feather-icon icon="SearchIcon" />
      </b-input-group-prepend>
      <b-form-input placeholder="Search" />
    </b-input-group>

    <!-- password -->
    <b-form-group>
      <label for="basic-password1">Password</label>
      <b-input-group class="input-group-merge">
        <b-form-input
          id="basic-password1"
          :type="passwordFieldType"
          placeholder="Your Password"
        />
        <b-input-group-append is-text>
          <feather-icon
            :icon="passwordToggleIcon"
            class="cursor-pointer"
            @click="togglePasswordVisibility"
          />
        </b-input-group-append>
      </b-input-group>
    </b-form-group>

    <!-- with prop prepend  -->
    <b-input-group
      prepend="@"
      class="input-group-merge"
    >
      <b-form-input placeholder="Username" />
    </b-input-group>

    <!-- with prop append -->
    <b-input-group
      append="@example.com"
      class="input-group-merge"
    >
      <b-form-input placeholder="Recipient's username" />
    </b-input-group>

    <b-input-group
      prepend="https://example.com/users/"
      class="input-group-merge"
    >
      <b-form-input />
    </b-input-group>

    <!-- append and pepend -->
    <b-input-group
      prepend="$"
      append=".00"
      class="input-group-merge"
    >
      <b-form-input placeholder="100" />
    </b-input-group>

    <!-- textarea -->
    <b-input-group
      prepend="With textarea"
      class="input-group-merge"
    >
      <b-form-textarea />
    </b-input-group>
  </div>
</template>

<script>
import {BInputGroup, BFormInput, BInputGroupPrepend, BInputGroupAppend, BFormGroup, BFormTextarea} from 'bootstrap-vue'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'

export default {
  components: {
    BFormTextarea,
    BInputGroup,
    BFormGroup,
    BFormInput,
    BInputGroupPrepend,
    BInputGroupAppend,
  },
  mixins: [togglePasswordVisibility],
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
  },
}
</script>
`
