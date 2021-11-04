<template>
  <b-card-code title="Rounded corners">
    <b-card-text class="mb-0">
      <span>You can control which corners are rounded by setting the rounded prop to one of the following values:</span>
      <code>true,false,top,right,bottom,left,circle,0</code>
    </b-card-text>

    <div class="demo-inline-spacing">
      <b-img
        v-bind="mainProps"
        rounded
        alt="Rounded image"
        class="d-inline-block"
      />
      <b-img
        v-bind="mainProps"
        rounded="top"
        alt="Top-rounded image"
        class="d-inline-block"
      />
      <b-img
        v-bind="mainProps"
        rounded="right"
        alt="Right-rounded image"
        class="d-inline-block"
      />
      <b-img
        v-bind="mainProps"
        rounded="bottom"
        alt="Bottom-rounded image"
        class="d-inline-block"
      />
      <b-img
        v-bind="mainProps"
        rounded="left"
        alt="Left-rounded image"
        class="d-inline-block"
      />
      <b-img
        v-bind="mainProps"
        rounded="circle"
        alt="Circle image"
        class="d-inline-block"
      />
      <b-img
        v-bind="mainProps"
        rounded="0"
        alt="Not rounded image"
        class="d-inline-block"
      />
    </div>

    <template #code>
      {{ codeRoundedCorner }}
    </template>
  </b-card-code>
</template>

<script>
import BCardCode from '@core/components/b-card-code'
import { BImg, BCardText } from 'bootstrap-vue'
import { codeRoundedCorner } from './code'

export default {
  components: {
    BCardCode,
    BImg,
    BCardText,
  },
  data() {
    return {
      mainProps: {
        blank: true,
        blankColor: '#777',
        width: 75,
        height: 75,
        class: 'm1',
      },
      codeRoundedCorner,
    }
  },
}
</script>
