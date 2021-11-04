<template>
  <b-card-code
    title="Icons"
  >
    <b-card-text>
      <span>To add an icon before your content to create a list group with icons.</span>
    </b-card-text>

    <b-list-group>
      <b-list-group-item class="d-flex">
        <span class="mr-1">
          <feather-icon
            icon="InstagramIcon"
            size="16"
          />
        </span>
        <span>Cupcake sesame snaps dessert marzipan.</span>
      </b-list-group-item>

      <b-list-group-item class="d-flex">
        <span class="mr-1">
          <feather-icon
            icon="FacebookIcon"
            size="17"
          />
        </span>
        <span>Jelly beans jelly-o gummi bears chupa chups marshmallow.</span>
      </b-list-group-item>

      <b-list-group-item class="d-flex">
        <span class="mr-1">
          <feather-icon
            icon="TwitterIcon"
            size="16"
          />
        </span>
        <span>Bonbon macaroon gummies pie jelly</span>
      </b-list-group-item>
    </b-list-group>

    <template #code>
      {{ codeIcon }}
    </template>
  </b-card-code>
</template>

<script>
import { BListGroup, BListGroupItem, BCardText } from 'bootstrap-vue'
import BCardCode from '@core/components/b-card-code'
import { codeIcon } from './code'

export default {
  components: {
    BCardCode,
    BListGroup,
    BCardText,
    BListGroupItem,
  },
  data() {
    return {
      codeIcon,
    }
  },
}
</script>
