export default [
  {
    path: '/charts-and-maps/charts/apex-chart',
    name: 'charts-apex-chart',
    component: () => import('@/views/charts-and-maps/charts/apex-chart/ApexChart.vue'),
    meta: {
      pageTitle: 'Apex Chart',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Apex Chart',
          active: true,
        },
      ],
    },
  },
  {
    path: '/charts-and-maps/charts/chartjs',
    name: 'charts-chartjs',
    component: () => import('@/views/charts-and-maps/charts/chartjs/Chartjs.vue'),
    meta: {
      pageTitle: 'Chartjs',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Chartjs',
          active: true,
        },
      ],
    },
  },
  {
    path: '/charts-and-maps/charts/echart',
    name: 'charts-echart',
    component: () => import('@/views/charts-and-maps/charts/echart/Echart.vue'),
    meta: {
      pageTitle: 'Echart',
      breadcrumb: [
        {
          text: 'Extensions',
        },
        {
          text: 'Echart',
          active: true,
        },
      ],
    },
  },
  {
    path: '/maps/leaflet',
    name: 'maps-leaflet',
    component: () => import('@/views/charts-and-maps/maps/leaflet/Leaflet.vue'),
    meta: {
      pageTitle: 'Leaflet',
      breadcrumb: [
        {
          text: 'Table',
        },
        {
          text: 'Leaflet',
          active: true,
        },
      ],
    },
  },
]
