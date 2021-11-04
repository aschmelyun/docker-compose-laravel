import { ref, nextTick } from '@vue/composition-api'

// ===========================================================
// ! This is coupled with "veeValidate" plugin
// ===========================================================

export default function formValidation(resetFormData, clearFormData = () => {}) {
  // ------------------------------------------------
  // refFormObserver
  // ! This is for veeValidate Observer
  // * Used for veeValidate form observer
  // ------------------------------------------------
  const refFormObserver = ref(null)

  // ------------------------------------------------
  // resetObserver
  // ! This function is coupled with veeValidate
  // * It resets form observer
  // ------------------------------------------------
  const resetObserver = () => {
    refFormObserver.value.reset()
  }

  // ------------------------------------------------
  // getValidationState
  // ! This function is coupled with veeValidate
  // * It returns true/false based on validation
  // ------------------------------------------------
  // eslint-disable-next-line object-curly-newline
  const getValidationState = ({ dirty, validated, required: fieldRequired, changed, valid = null }) => {
    const result = dirty || validated ? valid : null
    return !fieldRequired && !changed ? null : result
  }

  // ------------------------------------------------
  // resetForm
  // ! This function is coupled with veeValidate
  // * This uses resetFormData arg to reset form data
  // ------------------------------------------------
  const resetForm = () => {
    resetFormData()
    nextTick(() => {
      resetObserver()
    })
  }

  // ------------------------------------------------
  // clearForm
  // ! This function is coupled with veeValidate
  // * This uses clearFormData arg to reset form data
  // ------------------------------------------------
  const clearForm = () => {
    clearFormData()
    nextTick(() => {
      resetObserver()
    })
  }

  return {
    refFormObserver,
    resetObserver,
    getValidationState,
    resetForm,
    clearForm,
  }
}
