<template>
  <b-row>
    <b-col cols="12">
      <button-filled />
      <button-border />
      <button-flat />
      <button-gradient />
      <button-relief />
      <button-rounded />
      <button-icons />
      <button-icons-only />
      <button-size />
      <button-checkbox-radio />
      <button-router />
      <button-link />
      <button-block />
    </b-col>
  </b-row>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'
import ButtonFilled from './ButtonFilled.vue'
import ButtonBorder from './ButtonBorder.vue'
import ButtonFlat from './ButtonFlat.vue'
import ButtonBlock from './ButtonBlock.vue'
import ButtonSize from './ButtonSize.vue'
import ButtonRelief from './ButtonRelief.vue'
import ButtonIcons from './ButtonIcons.vue'
import ButtonIconsOnly from './ButtonIconOnly.vue'
import ButtonGradient from './ButtonGradient.vue'
import ButtonRounded from './ButtonRounded.vue'
import ButtonRouter from './ButtonRouter.vue'
import ButtonLink from './ButtonLink.vue'
import ButtonCheckboxRadio from './ButtonCheckboxRadio.vue'

export default {
  components: {
    BRow,
    BCol,

    ButtonFilled,
    ButtonFlat,
    ButtonBlock,
    ButtonSize,
    ButtonRelief,
    ButtonIcons,
    ButtonIconsOnly,
    ButtonBorder,
    ButtonGradient,
    ButtonRounded,
    ButtonRouter,
    ButtonLink,
    ButtonCheckboxRadio,
  },
}
</script>
