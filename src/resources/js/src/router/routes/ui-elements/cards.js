export default [
  {
    path: '/card/card-basic',
    name: 'card-basic',
    component: () => import('@/views/card/card-basic/CardBasic.vue'),
    meta: {
      pageTitle: 'Basic Card',
      breadcrumb: [
        {
          text: 'Card',
        },
        {
          text: 'Basic Card',
          active: true,
        },
      ],
    },
  },
  {
    path: '/card/card-advance',
    name: 'card-advance',
    component: () => import('@/views/card/card-advance/CardAdvance.vue'),
    meta: {
      pageTitle: 'Advance Card',
      breadcrumb: [
        {
          text: 'Card',
        },
        {
          text: 'Advance Card',
          active: true,
        },
      ],
    },
  },
  {
    path: '/card/statistic',
    name: 'card-statistic',
    component: () => import('@/views/card/card-statistic/CardStatistic.vue'),
    meta: {
      pageTitle: 'Statistics Cards',
      breadcrumb: [
        {
          text: 'Card',
        },
        {
          text: 'Statistics Cards',
          active: true,
        },
      ],
    },
  },
  {
    path: '/card/analytic',
    name: 'card-analytic',
    component: () => import('@/views/card/card-analytic/CardAnalytic.vue'),
    meta: {
      pageTitle: 'Analytics Cards',
      breadcrumb: [
        {
          text: 'Card',
        },
        {
          text: 'Analytics Cards',
          active: true,
        },
      ],
    },
  },
  {
    path: '/card/action',
    name: 'card-action',
    component: () => import('@/views/card/card-action/CardAction.vue'),
    meta: {
      pageTitle: 'Card Actions',
      breadcrumb: [
        {
          text: 'Card',
        },
        {
          text: 'Card Actions',
          active: true,
        },
      ],
    },
  },
]
