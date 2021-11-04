import { $themeColors } from '@themeConfig'

// heat chart data generator
function generateDataHeatMap(count, yrange) {
  let i = 0
  const series = []
  while (i < count) {
    const x = `w${(i + 1).toString()}`
    const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min

    series.push({
      x,
      y,
    })
    // eslint-disable-next-line no-plusplus
    i++
  }
  return series
}

// colors
const chartColors = {
  column: {
    series1: '#826af9',
    series2: '#d2b0ff',
    bg: '#f8d3ff',
  },
  success: {
    shade_100: '#7eefc7',
    shade_200: '#06774f',
  },
  donut: {
    series1: '#ffe700',
    series2: '#00d4bd',
    series3: '#826bf8',
    series4: '#2b9bf4',
    series5: '#FFA1A1',
  },
  area: {
    series3: '#a4f8cd',
    series2: '#60f2ca',
    series1: '#2bdac7',
  },
}

export default {
  lineChartSimple: {
    series: [
      {
        data: [280, 200, 220, 180, 270, 250, 70, 90, 200, 150, 160, 100, 150, 100, 50],
      },
    ],
    chartOptions: {
      chart: {
        zoom: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      markers: {
        strokeWidth: 7,
        strokeOpacity: 1,
        strokeColors: [$themeColors.light],
        colors: [$themeColors.warning],
      },
      colors: [$themeColors.warning],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      tooltip: {
        custom(data) {
          return `${'<div class="px-1 py-50"><span>'}${
            data.series[data.seriesIndex][data.dataPointIndex]
          }%</span></div>`
        },
      },
      xaxis: {
        categories: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12',
          '20/12',
          '21/12',
        ],
      },
      yaxis: {
        // opposite: isRtl,
      },
    },
  },

  lineAreaChartSpline: {
    series: [
      {
        name: 'Visits',
        data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375],
      },
      {
        name: 'Clicks',
        data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
      },
      {
        name: 'Sales',
        data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
      },
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: false,
        curve: 'straight',
      },
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: [
          '7/12',
          '8/12',
          '9/12',
          '10/12',
          '11/12',
          '12/12',
          '13/12',
          '14/12',
          '15/12',
          '16/12',
          '17/12',
          '18/12',
          '19/12',
          '20/12',
        ],
      },
      yaxis: {
        // opposite: isRtl
      },
      fill: {
        opacity: 1,
        type: 'solid',
      },
      tooltip: {
        shared: false,
      },
      colors: [chartColors.area.series3, chartColors.area.series2, chartColors.area.series1],
    },
  },

  columnChart: {
    series: [
      {
        name: 'Apple',
        data: [90, 120, 55, 100, 80, 125, 175, 70, 88, 180],
      },
      {
        name: 'Samsung',
        data: [85, 100, 30, 40, 95, 90, 30, 110, 62, 20],
      },
    ],
    chartOptions: {
      chart: {
        stacked: true,
        toolbar: {
          show: false,
        },
      },
      colors: [chartColors.column.series1, chartColors.column.series2],
      plotOptions: {
        bar: {
          columnWidth: '15%',
          colors: {
            backgroundBarColors: [
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg,
              chartColors.column.bg,
            ],
            backgroundBarRadius: 10,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'top',
        fontSize: '14px',
        fontFamily: 'Montserrat',
        horizontalAlign: 'left',
      },
      stroke: {
        show: true,
        colors: ['transparent'],
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      xaxis: {
        categories: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12'],
      },
      yaxis: {
        // opposite: isRtl,
      },
      fill: {
        opacity: 1,
      },
    },
  },

  barChart: {
    series: [
      {
        data: [700, 350, 480, 600, 210, 550, 150],
      },
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      colors: $themeColors.info,
      plotOptions: {
        bar: {
          horizontal: true,
          barHeight: '30%',
          endingShape: 'rounded',
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: false,
          },
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ['MON, 11', 'THU, 14', 'FRI, 15', 'MON, 18', 'WED, 20', 'FRI, 21', 'MON, 23'],
      },
      yaxis: {
        // opposite: isRtl,
      },
    },
  },

  candlestickChart: {
    series: [
      {
        data: [
          {
            x: new Date(1538778600000),
            y: [150, 170, 50, 100],
          },
          {
            x: new Date(1538780400000),
            y: [200, 400, 170, 330],
          },
          {
            x: new Date(1538782200000),
            y: [330, 340, 250, 280],
          },
          {
            x: new Date(1538784000000),
            y: [300, 330, 200, 320],
          },
          {
            x: new Date(1538785800000),
            y: [320, 450, 280, 350],
          },
          {
            x: new Date(1538787600000),
            y: [300, 350, 80, 250],
          },
          {
            x: new Date(1538789400000),
            y: [200, 330, 170, 300],
          },
          {
            x: new Date(1538791200000),
            y: [200, 220, 70, 130],
          },
          {
            x: new Date(1538793000000),
            y: [220, 270, 180, 250],
          },
          {
            x: new Date(1538794800000),
            y: [200, 250, 80, 100],
          },
          {
            x: new Date(1538796600000),
            y: [150, 170, 50, 120],
          },
          {
            x: new Date(1538798400000),
            y: [110, 450, 10, 420],
          },
          {
            x: new Date(1538800200000),
            y: [400, 480, 300, 320],
          },
          {
            x: new Date(1538802000000),
            y: [380, 480, 350, 450],
          },
        ],
      },
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      xaxis: {
        type: 'datetime',
      },
      yaxis: {
        tooltip: {
          enabled: true,
        },
        // opposite: isRtl,
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      legend: {
        show: false,
      },
      plotOptions: {
        candlestick: {
          colors: {
            upward: $themeColors.success,
            downward: $themeColors.danger,
          },
        },
        bar: {
          columnWidth: '40%',
        },
      },
    },
  },

  scatterChart: {
    series: [
      {
        name: 'Angular',
        data: [
          [5.4, 170],
          [5.4, 100],
          [6.3, 170],
          [5.7, 140],
          [5.9, 130],
          [7.0, 150],
          [8.0, 120],
          [9.0, 170],
          [10.0, 190],
          [11.0, 220],
          [12.0, 170],
          [13.0, 230],
        ],
      },
      {
        name: 'Vue',
        data: [
          [14.0, 220],
          [15.0, 280],
          [16.0, 230],
          [18.0, 320],
          [17.5, 280],
          [19.0, 250],
          [20.0, 350],
          [20.5, 320],
          [20.0, 320],
          [19.0, 280],
          [17.0, 280],
          [22.0, 300],
          [18.0, 120],
        ],
      },
      {
        name: 'React',
        data: [
          [14.0, 290],
          [13.0, 190],
          [20.0, 220],
          [21.0, 350],
          [21.5, 290],
          [22.0, 220],
          [23.0, 140],
          [19.0, 400],
          [20.0, 200],
          [22.0, 90],
          [20.0, 120],
        ],
      },
    ],
    chartOptions: {
      chart: {
        zoom: {
          enabled: true,
          type: 'xy',
        },
        toolbar: {
          show: false,
        },
      },
      grid: {
        xaxis: {
          lines: {
            show: true,
          },
        },
      },
      colors: [$themeColors.warning, $themeColors.primary, $themeColors.success],
      legend: {
        show: true,
        position: 'top',
        horizontalAlign: 'left',
      },
      xaxis: {
        tickAmount: 10,
        labels: {
          formatter(val) {
            return parseFloat(val).toFixed(1)
          },
        },
      },
      yaxis: {
        // opposite: isRtl,
      },
    },
  },

  heatMapChart: {
    series: [
      {
        name: 'SUN',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'MON',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'TUE',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'WED',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'THU',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'FRI',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
      {
        name: 'SAT',
        data: generateDataHeatMap(24, {
          min: 0,
          max: 60,
        }),
      },
    ],
    chartOptions: {
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: true,
        position: 'bottom',
      },
      colors: ['#7367F0'],
      plotOptions: {
        heatmap: {
          enableShades: false,

          colorScale: {
            ranges: [
              {
                from: 0,
                to: 10,
                name: '0-10',
                color: '#b9b3f8',
              },
              {
                from: 11,
                to: 20,
                name: '10-20',
                color: '#aba4f6',
              },
              {
                from: 21,
                to: 30,
                name: '20-30',
                color: '#9d95f5',
              },
              {
                from: 31,
                to: 40,
                name: '30-40',
                color: '#8f85f3',
              },
              {
                from: 41,
                to: 50,
                name: '40-50',
                color: '#8176f2',
              },
              {
                from: 51,
                to: 60,
                name: '50-60',
                color: '#7367f0',
              },
            ],
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      chart: {
        height: 350,
        type: 'heatmap',
        toolbar: {
          show: false,
        },
      },
    },
  },

  donutChart: {
    series: [85, 16, 50, 50],
    chartOptions: {
      legend: {
        show: true,
        position: 'bottom',
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
      colors: [
        chartColors.donut.series1,
        chartColors.donut.series5,
        chartColors.donut.series3,
        chartColors.donut.series2,
      ],
      dataLabels: {
        enabled: true,
        formatter(val) {
          // eslint-disable-next-line radix
          return `${parseInt(val)}%`
        },
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
              name: {
                fontSize: '2rem',
                fontFamily: 'Montserrat',
              },
              value: {
                fontSize: '1rem',
                fontFamily: 'Montserrat',
                formatter(val) {
                  // eslint-disable-next-line radix
                  return `${parseInt(val)}%`
                },
              },
              total: {
                show: true,
                fontSize: '1.5rem',
                label: 'Operational',
                formatter() {
                  return '31%'
                },
              },
            },
          },
        },
      },
      labels: ['Operational', 'Networking', 'Hiring', 'R&D'],
      responsive: [
        {
          breakpoint: 992,
          options: {
            chart: {
              height: 380,
            },
            legend: {
              position: 'bottom',
            },
          },
        },
        {
          breakpoint: 576,
          options: {
            chart: {
              height: 320,
            },
            plotOptions: {
              pie: {
                donut: {
                  labels: {
                    show: true,
                    name: {
                      fontSize: '1.5rem',
                    },
                    value: {
                      fontSize: '1rem',
                    },
                    total: {
                      fontSize: '1.5rem',
                    },
                  },
                },
              },
            },
            legend: {
              show: true,
            },
          },
        },
      ],
    },
  },

  radialBarChart: {
    series: [80, 50, 35],
    chartOptions: {
      colors: [chartColors.donut.series1, chartColors.donut.series2, chartColors.donut.series4],
      plotOptions: {
        radialBar: {
          size: 185,
          hollow: {
            size: '25%',
          },
          track: {
            margin: 15,
          },
          dataLabels: {
            name: {
              fontSize: '2rem',
              fontFamily: 'Montserrat',
            },
            value: {
              fontSize: '1rem',
              fontFamily: 'Montserrat',
            },
            total: {
              show: true,
              fontSize: '1rem',
              label: 'Comments',
              formatter() {
                return '80%'
              },
            },
          },
        },
      },
      legend: {
        show: true,
        position: 'bottom',
        horizontalAlign: 'center',
      },
      stroke: {
        lineCap: 'round',
      },
      labels: ['Comments', 'Replies', 'Shares'],
    },
  },

  radarChart: {
    series: [
      {
        name: 'iPhone 11',
        data: [41, 64, 81, 60, 42, 42, 33, 23],
      },
      {
        name: 'Samsung s20',
        data: [65, 46, 42, 25, 58, 63, 76, 43],
      },
    ],
    chartOptions: {
      chart: {
        toolbar: {
          show: false,
        },
        dropShadow: {
          enabled: false,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2,
        },
      },
      legend: {
        show: true,
        fontSize: '14px',
        fontFamily: 'Montserrat',
      },
      yaxis: {
        show: false,
      },
      colors: [chartColors.donut.series1, chartColors.donut.series3],
      xaxis: {
        categories: ['Battery', 'Brand', 'Camera', 'Memory', 'Storage', 'Display', 'OS', 'Price'],
      },
      fill: {
        opacity: [1, 0.8],
      },
      stroke: {
        show: false,
        width: 0,
      },
      markers: {
        size: 0,
      },
      grid: {
        show: false,
      },
    },
  },
}
