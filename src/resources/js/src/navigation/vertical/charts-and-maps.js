export default [
  {
    header: 'Charts & Maps',
  },
  {
    title: 'Charts',
    icon: 'PieChartIcon',
    tag: '3',
    tagVariant: 'light-danger',
    children: [
      {
        title: 'Apex Chart',
        route: 'charts-apex-chart',
      },
      {
        title: 'Chartjs',
        route: 'charts-chartjs',
      },
      {
        title: 'Echart',
        route: 'charts-echart',
      },
    ],
  },
  {
    title: 'Leaflet',
    route: 'maps-leaflet',
    icon: 'MapIcon',
  },
]
