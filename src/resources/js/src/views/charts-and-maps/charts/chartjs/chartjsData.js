import { $themeColors } from '@themeConfig'
// colors
const chartColors = {
  primaryColorShade: '#836AF9',
  yellowColor: '#ffe800',
  successColorShade: '#28dac6',
  warningColorShade: '#ffe802',
  warningLightColor: '#FDAC34',
  infoColorShade: '#299AFF',
  greyColor: '#4F5D70',
  blueColor: '#2c9aff',
  blueLightColor: '#84D0FF',
  greyLightColor: '#EDF1F4',
  tooltipShadow: 'rgba(0, 0, 0, 0.25)',
  lineChartPrimary: '#666ee8',
  lineChartDanger: '#ff4961',
  labelColor: '#6e6b7b',
  grid_line_color: 'rgba(200, 200, 200, 0.2)',
}

export default {
  latestBarChart: {
    data: {
      labels: ['7/12', '8/12', '9/12', '10/12', '11/12', '12/12', '13/12', '14/12', '15/12', '16/12', '17/12'],
      datasets: [
        {
          data: [275, 90, 190, 205, 125, 85, 55, 87, 127, 150, 230, 280, 190],
          backgroundColor: chartColors.successColorShade,
          borderColor: 'transparent',
        },
      ],
    },
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'bottom',
        },
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false,
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.light,
        titleFontColor: $themeColors.dark,
        bodyFontColor: $themeColors.dark,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: false,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
  },
  horizontalBarChart: {
    options: {
      elements: {
        rectangle: {
          borderWidth: 2,
          borderSkipped: 'top',
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.light,
        titleFontColor: $themeColors.dark,
        bodyFontColor: $themeColors.dark,
      },
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        display: false,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              zeroLineColor: chartColors.grid_line_color,
              borderColor: 'transparent',
              color: chartColors.grid_line_color,
              drawTicks: false,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              min: 0,
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: false,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
    },
    data: {
      labels: ['MON', 'TUE', 'WED ', 'THU', 'FRI', 'SAT', 'SUN'],
      datasets: [
        {
          data: [710, 350, 470, 580, 230, 460, 120],
          backgroundColor: $themeColors.info,
          borderColor: 'transparent',
          barThickness: 15,
        },
      ],
    },
  },
  lineChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      backgroundColor: false,
      hover: {
        mode: 'label',
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.white,
        titleFontColor: $themeColors.black,
        bodyFontColor: $themeColors.black,
      },
      layout: {
        padding: {
          top: -15,
          bottom: -25,
          left: -15,
        },
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: chartColors.labelColor,
            },
            gridLines: {
              display: true,
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
          },
        ],
      },
      legend: {
        position: 'top',
        align: 'start',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 9,
        },
      },
    },
    data: {
      labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140],
      datasets: [
        {
          data: [80, 150, 180, 270, 210, 160, 160, 202, 265, 210, 270, 255, 290, 360, 375],
          label: 'Europe',
          borderColor: chartColors.lineChartDanger,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: chartColors.lineChartDanger,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: $themeColors.white,
          pointHoverBackgroundColor: chartColors.lineChartDanger,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: chartColors.tooltipShadow,
        },
        {
          data: [80, 125, 105, 130, 215, 195, 140, 160, 230, 300, 220, 170, 210, 200, 280],
          label: 'Asia',
          borderColor: chartColors.lineChartPrimary,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: chartColors.lineChartPrimary,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: $themeColors.white,
          pointHoverBackgroundColor: chartColors.lineChartPrimary,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: chartColors.tooltipShadow,
        },
        {
          data: [80, 99, 82, 90, 115, 115, 74, 75, 130, 155, 125, 90, 140, 130, 180],
          label: 'Africa',
          borderColor: chartColors.warningColorShade,
          lineTension: 0.5,
          pointStyle: 'circle',
          backgroundColor: chartColors.warningColorShade,
          fill: false,
          pointRadius: 1,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBorderColor: $themeColors.white,
          pointHoverBackgroundColor: chartColors.warningColorShade,
          pointShadowOffsetX: 1,
          pointShadowOffsetY: 1,
          pointShadowBlur: 5,
          pointShadowColor: chartColors.tooltipShadow,
        },
      ],
    },
  },
  radarChart: {
    data: {
      labels: ['STA', 'STR', 'AGI', 'VIT', 'CHA', 'INT'],
      datasets: [
        {
          label: 'Donté Panlin',
          data: [25, 59, 90, 81, 60, 82],
          fill: true,
          backgroundColor: 'rgba(255,161,161, 0.9)',
          borderColor: 'transparent',
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
        },
        {
          label: 'Mireska Sunbreeze',
          data: [40, 100, 40, 90, 40, 90],
          fill: true,
          backgroundColor: 'rgba(155,136,250, 0.9)',
          borderColor: 'transparent',
          pointBackgroundColor: 'transparent',
          pointBorderColor: 'transparent',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'top',
        labels: {
          padding: 25,
          fontColor: chartColors.labelColor,
        },
      },
      tooltips: {
        enabled: false,
        custom(tooltip) {
          const tooltipEl = document.getElementById('tooltip')
          if (tooltip.body) {
            tooltipEl.style.display = 'block'
            if (tooltip.body[0].lines && tooltip.body[0].lines[0]) {
              // eslint-disable-next-line prefer-destructuring
              tooltipEl.innerHTML = tooltip.body[0].lines[0]
            }
          } else {
            setTimeout(() => {
              tooltipEl.style.display = 'none'
            }, 500)
          }
        },
      },
      gridLines: {
        display: false,
      },
      scale: {
        ticks: {
          maxTicksLimit: 1,
          display: false,
          fontColor: chartColors.labelColor,
        },
        gridLines: {
          color: chartColors.grid_line_color,
        },
        angleLines: { color: chartColors.grid_line_color },
      },
    },
  },
  polarChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      legend: {
        position: 'right',
        labels: {
          usePointStyle: true,
          padding: 25,
          boxWidth: 10,
          fontColor: chartColors.labelColor,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.light,
        titleFontColor: $themeColors.dark,
        bodyFontColor: $themeColors.dark,
      },
      scale: {
        scaleShowLine: true,
        scaleLineWidth: 1,
        ticks: {
          display: false,
          fontColor: chartColors.labelColor,
        },
        reverse: false,
        gridLines: {
          display: false,
        },
      },
      animation: {
        animateRotate: false,
      },
    },
    data: {
      labels: ['Africa', 'Asia', 'Europe', 'America', 'Antarctica', 'Australia'],
      datasets: [
        {
          label: 'Population (millions)',
          backgroundColor: [
            chartColors.primaryColorShade,
            chartColors.warningColorShade,
            $themeColors.primary,
            chartColors.infoColorShade,
            chartColors.greyColor,
            chartColors.successColorShade,
          ],
          data: [19, 17.5, 15, 13.5, 11, 9],
          borderWidth: 0,
        },
      ],
    },
  },
  bubbleChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 10,
              min: 0,
              max: 140,
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.light,
        titleFontColor: $themeColors.dark,
        bodyFontColor: $themeColors.dark,
      },
    },
    data: {
      animation: {
        duration: 10000,
      },
      datasets: [
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 20,
              y: 74,
              r: 10,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 30,
              y: 72,
              r: 5,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 10,
              y: 110,
              r: 5,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 40,
              y: 110,
              r: 7,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 20,
              y: 135,
              r: 6,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 10,
              y: 160,
              r: 12,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 30,
              y: 165,
              r: 7,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 40,
              y: 200,
              r: 20,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 90,
              y: 185,
              r: 7,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 50,
              y: 240,
              r: 7,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 60,
              y: 275,
              r: 10,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 70,
              y: 305,
              r: 5,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 80,
              y: 325,
              r: 4,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 50,
              y: 285,
              r: 5,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 60,
              y: 235,
              r: 5,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 70,
              y: 275,
              r: 7,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 80,
              y: 290,
              r: 4,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 90,
              y: 250,
              r: 10,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 100,
              y: 220,
              r: 7,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 120,
              y: 230,
              r: 4,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 110,
              y: 320,
              r: 15,
            },
          ],
        },
        {
          backgroundColor: chartColors.warningColorShade,
          borderColor: chartColors.warningColorShade,
          data: [
            {
              x: 130,
              y: 330,
              r: 7,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 100,
              y: 310,
              r: 5,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 110,
              y: 240,
              r: 5,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 120,
              y: 270,
              r: 7,
            },
          ],
        },
        {
          backgroundColor: chartColors.primaryColorShade,
          borderColor: chartColors.primaryColorShade,
          data: [
            {
              x: 130,
              y: 300,
              r: 6,
            },
          ],
        },
      ],
    },
  },
  doughnutChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      cutoutPercentage: 60,
      legend: { display: false },
      tooltips: {
        callbacks: {
          label(tooltipItem, data) {
            const label = data.datasets[0].labels[tooltipItem.index] || ''
            const value = data.datasets[0].data[tooltipItem.index]
            const output = ` ${label} : ${value} %`
            return output
          },
        },
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.light,
        titleFontColor: $themeColors.dark,
        bodyFontColor: $themeColors.dark,
      },
    },
    data: {
      datasets: [
        {
          labels: ['Tablet', 'Mobile', 'Desktop'],
          data: [10, 10, 80],
          backgroundColor: [chartColors.successColorShade, chartColors.warningLightColor, $themeColors.primary],
          borderWidth: 0,
          pointStyle: 'rectRounded',
        },
      ],
    },
  },
  scatterChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      responsiveAnimationDuration: 800,
      title: {
        display: false,
        text: 'Chart.js Scatter Chart',
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.light,
        titleFontColor: $themeColors.dark,
        bodyFontColor: $themeColors.dark,
      },
      scales: {
        xAxes: [
          {
            gridLines: {
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 10,
              min: 0,
              max: 140,
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            gridLines: {
              color: chartColors.grid_line_color,
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: chartColors.labelColor,
            },
          },
        ],
      },
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 7,
        },
      },
    },
    data: {
      datasets: [
        {
          label: 'iPhone',
          data: [
            {
              x: 72,
              y: 225,
            },
            {
              x: 81,
              y: 270,
            },
            {
              x: 90,
              y: 230,
            },
            {
              x: 103,
              y: 305,
            },
            {
              x: 103,
              y: 245,
            },
            {
              x: 108,
              y: 275,
            },
            {
              x: 110,
              y: 290,
            },
            {
              x: 111,
              y: 315,
            },
            {
              x: 109,
              y: 350,
            },
            {
              x: 116,
              y: 340,
            },
            {
              x: 113,
              y: 260,
            },
            {
              x: 117,
              y: 275,
            },
            {
              x: 117,
              y: 295,
            },
            {
              x: 126,
              y: 280,
            },
            {
              x: 127,
              y: 340,
            },
            {
              x: 133,
              y: 330,
            },
          ],
          backgroundColor: $themeColors.primary,
          borderColor: 'transparent',
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
        },
        {
          label: 'Samsung Note',
          data: [
            {
              x: 13,
              y: 95,
            },
            {
              x: 22,
              y: 105,
            },
            {
              x: 17,
              y: 115,
            },
            {
              x: 19,
              y: 130,
            },
            {
              x: 21,
              y: 125,
            },
            {
              x: 35,
              y: 125,
            },
            {
              x: 13,
              y: 155,
            },
            {
              x: 21,
              y: 165,
            },
            {
              x: 25,
              y: 155,
            },
            {
              x: 18,
              y: 190,
            },
            {
              x: 26,
              y: 180,
            },
            {
              x: 43,
              y: 180,
            },
            {
              x: 53,
              y: 202,
            },
            {
              x: 61,
              y: 165,
            },
            {
              x: 67,
              y: 225,
            },
          ],
          backgroundColor: chartColors.yellowColor,
          borderColor: 'transparent',
          pointRadius: 5,
        },
        {
          label: 'OnePlus',
          data: [
            {
              x: 70,
              y: 195,
            },
            {
              x: 72,
              y: 270,
            },
            {
              x: 98,
              y: 255,
            },
            {
              x: 100,
              y: 215,
            },
            {
              x: 87,
              y: 240,
            },
            {
              x: 94,
              y: 280,
            },
            {
              x: 99,
              y: 300,
            },
            {
              x: 102,
              y: 290,
            },
            {
              x: 110,
              y: 275,
            },
            {
              x: 111,
              y: 250,
            },
            {
              x: 94,
              y: 280,
            },
            {
              x: 92,
              y: 340,
            },
            {
              x: 100,
              y: 335,
            },
            {
              x: 108,
              y: 330,
            },
          ],
          backgroundColor: chartColors.successColorShade,
          borderColor: 'transparent',
          pointBorderWidth: 2,
          pointHoverBorderWidth: 2,
          pointRadius: 5,
        },
      ],
    },
  },
  lineAreaChart: {
    options: {
      responsive: true,
      maintainAspectRatio: false,
      legend: {
        position: 'top',
        align: 'start',
        display: true,
        labels: {
          usePointStyle: true,
          padding: 15,
          boxWidth: 8,
        },
      },
      tooltips: {
        // Updated default tooltip UI
        shadowOffsetX: 1,
        shadowOffsetY: 1,
        shadowBlur: 8,
        shadowColor: chartColors.tooltipShadow,
        backgroundColor: $themeColors.light,
        titleFontColor: $themeColors.dark,
        bodyFontColor: $themeColors.dark,
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            scaleLabel: {
              display: true,
            },
            ticks: {
              fontColor: chartColors.labelColor,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              color: 'transparent',
              zeroLineColor: chartColors.grid_line_color,
            },
            ticks: {
              stepSize: 100,
              min: 0,
              max: 400,
              fontColor: chartColors.labelColor,
            },
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
    data: {
      labels: [
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
        '',
      ],
      datasets: [
        {
          label: 'Africa',
          data: [40, 55, 45, 75, 65, 55, 70, 60, 100, 98, 90, 120, 125, 140, 155],
          lineTension: 0,
          backgroundColor: chartColors.blueColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueColor,
          pointHoverBorderColor: $themeColors.light,
        },
        {
          label: 'Asia',
          data: [70, 85, 75, 150, 100, 140, 110, 105, 160, 150, 125, 190, 200, 240, 275],
          lineTension: 0,
          backgroundColor: chartColors.blueLightColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.blueLightColor,
          pointHoverBorderColor: $themeColors.light,
        },
        {
          label: 'Europe',
          data: [240, 195, 160, 215, 185, 215, 185, 200, 250, 210, 195, 250, 235, 300, 315],
          lineTension: 0,
          backgroundColor: chartColors.greyLightColor,
          pointStyle: 'circle',
          borderColor: 'transparent',
          pointRadius: 0.5,
          pointHoverRadius: 5,
          pointHoverBorderWidth: 5,
          pointBorderColor: 'transparent',
          pointHoverBackgroundColor: chartColors.greyLightColor,
          pointHoverBorderColor: $themeColors.light,
        },
      ],
    },
  },
}
