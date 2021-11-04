export default [
  {
    path: '/forms/form-element/form-select',
    name: 'forms-element-select',
    component: () => import('@/views/forms/form-element/form-select/FormSelect.vue'),
    meta: {
      pageTitle: 'Select',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Select',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/switch',
    name: 'forms-element-switch',
    component: () => import('@/views/forms/form-element/form-switch/Switch.vue'),
    meta: {
      pageTitle: 'Switch',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Switch',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/checkbox',
    name: 'forms-element-checkbox',
    component: () => import('@/views/forms/form-element/form-checkbox/FormCheckbox.vue'),
    meta: {
      pageTitle: 'Checkbox',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Checkbox',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/radio',
    name: 'forms-element-radio',
    component: () => import('@/views/forms/form-element/form-radio/FormRadio.vue'),
    meta: {
      pageTitle: 'Radio',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Radio',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/input',
    name: 'forms-element-input',
    component: () => import('@/views/forms/form-element/form-input/FormInput.vue'),
    meta: {
      pageTitle: 'Input',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Input',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/textarea',
    name: 'forms-element-textarea',
    component: () => import('@/views/forms/form-element/form-textarea/FormTextArea.vue'),
    meta: {
      pageTitle: 'Textarea',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Textarea',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/spinbutton',
    name: 'forms-element-spinbutton',
    component: () => import('@/views/forms/form-element/form-spinbutton/FormSpinbutton.vue'),
    meta: {
      pageTitle: 'Spinbutton',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Spinbutton',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/input-group',
    name: 'forms-element-input-group',
    component: () => import('@/views/forms/form-element/form-input-group/FormInputGroup.vue'),
    meta: {
      pageTitle: 'Input Group',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Input Group',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/rating',
    name: 'forms-element-rating',
    component: () => import('@/views/forms/form-element/form-rating/FormRating.vue'),
    meta: {
      pageTitle: 'Form Rating',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Form Rating',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/tag',
    name: 'forms-element-tag',
    component: () => import('@/views/forms/form-element/form-tag/FormTag.vue'),
    meta: {
      pageTitle: 'Form Tag',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Form Tag',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/datepicker',
    name: 'forms-element-datepicker',
    component: () => import('@/views/forms/form-element/form-datepicker/FormDatepicker.vue'),
    meta: {
      pageTitle: 'Form Datepicker',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Form Datepicker',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/timepicker',
    name: 'forms-element-timepicker',
    component: () => import('@/views/forms/form-element/form-timepicker/FormTimepicker.vue'),
    meta: {
      pageTitle: 'Form Timepicker',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Form Timepicker',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/file-input',
    name: 'forms-element-file-input',
    component: () => import('@/views/forms/form-element/form-file-input/FileInput.vue'),
    meta: {
      pageTitle: 'File Input',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'File Input',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/auto-suggest',
    name: 'extensions-auto-suggest',
    component: () => import('@/views/forms/form-element/autosuggest/AutoSuggest.vue'),
    meta: {
      pageTitle: 'Auto Suggest',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Auto Suggest',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/vue-select',
    name: 'extensions-vue-select',
    component: () => import('@/views/forms/form-element/vue-select/VueSelect.vue'),
    meta: {
      pageTitle: 'Vue Select',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Vue Select',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/quill-editor',
    name: 'extensions-quill-editor',
    component: () => import('@/views/forms/form-element/quill-editor/QuillEditor.vue'),
    meta: {
      pageTitle: 'Quill Editor',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Quill Editor',
          active: true,
        },
      ],
    },
  },

  {
    path: '/forms/form-element/date-time-picker',
    name: 'extensions-date-time-picker',
    component: () => import('@/views/forms/form-element/date-time-picker/DateTimePicker.vue'),
    meta: {
      pageTitle: 'Date Time Picker',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Date Time Picker',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-element/form-input-mask',
    name: 'forms-element-input-mask',
    component: () => import('@/views/forms/form-element/form-input-mask/FormInputMask.vue'),
    meta: {
      pageTitle: 'Input Mask',
      breadcrumb: [
        {
          text: 'Form Elements',
        },
        {
          text: 'Input Mask',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-layout',
    name: 'form-layout',
    component: () => import('@/views/forms/form-layout/FormLayout.vue'),
    meta: {
      pageTitle: 'Form Layout',
      breadcrumb: [
        {
          text: 'Forms',
        },
        {
          text: 'Form Layout',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-wizard',
    name: 'form-wizard',
    component: () => import('@/views/forms/form-wizard/FormWizard.vue'),
    meta: {
      pageTitle: 'Form Wizard',
      breadcrumb: [
        {
          text: 'Forms',
        },
        {
          text: 'Form Wizard',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-validation',
    name: 'form-validation',
    component: () => import('@/views/forms/form-validation/FormValidation.vue'),
    meta: {
      pageTitle: 'Form Validation',
      breadcrumb: [
        {
          text: 'Forms',
        },
        {
          text: 'Form Validation',
          active: true,
        },
      ],
    },
  },
  {
    path: '/forms/form-repeater',
    name: 'form-repeater',
    component: () => import('@/views/forms/form-repeater/FormRepeater.vue'),
    meta: {
      pageTitle: 'Form Repeater',
      breadcrumb: [
        {
          text: 'Forms',
        },
        {
          text: 'Form Repeater',
          active: true,
        },
      ],
    },
  },
  {
    path: '/table/bs-table',
    name: 'table-bs-table',
    component: () => import('@/views/table/bs-table/Table.vue'),
    meta: {
      pageTitle: 'BS Table',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'BS Table',
          active: true,
        },
      ],
    },
  },
  {
    path: '/table/vue-good-table',
    name: 'table-good-table',
    component: () => import('@/views/table/vue-good-table/GoodTable.vue'),
    meta: {
      pageTitle: 'Good Table',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'Good Table',
          active: true,
        },
      ],
    },
  },
]
