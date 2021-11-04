export default [
  {
    path: '/page-layouts/collapsed-menu',
    name: 'page-layout-collapsed-menu',
    component: () => import('@/views/ui/page-layouts/CollapsedMenu.vue'),
    meta: {
      pageTitle: 'Layout Collapsed Menu',
      breadcrumb: [
        {
          text: 'Layouts',
        },
        {
          text: 'Collapsed Menu',
          active: true,
        },
      ],
    },
  },
  {
    path: '/page-layouts/boxed-layout',
    name: 'page-layout-boxed-layout',
    component: () => import('@/views/ui/page-layouts/BoxedLayout.vue'),
    meta: {
      pageTitle: 'Boxed Layout',
      breadcrumb: [
        {
          text: 'Layouts',
        },
        {
          text: 'Boxed Layout',
          active: true,
        },
      ],
    },
  },
  {
    path: '/page-layouts/without-menu',
    name: 'page-layout-without-menu',
    component: () => import('@/views/ui/page-layouts/WithoutMenu.vue'),
    meta: {
      pageTitle: 'Layout Without Menu',
      breadcrumb: [
        {
          text: 'Layouts',
        },
        {
          text: 'Layout Without Menu',
          active: true,
        },
      ],
    },
  },
  {
    path: '/page-layouts/layout-empty',
    name: 'page-layout-layout-empty',
    component: () => import('@/views/ui/page-layouts/LayoutEmpty.vue'),
    meta: {
      pageTitle: 'Layout Empty',
      breadcrumb: [
        {
          text: 'Layouts',
        },
        {
          text: 'Layout Empty',
          active: true,
        },
      ],
    },
  },
  {
    path: '/page-layouts/layout-blank',
    name: 'page-layout-layout-blank',
    component: () => import('@/views/ui/page-layouts/LayoutBlank.vue'),
    meta: {
      layout: 'full',
      pageTitle: 'Layout Blank',
    },
  },
]
