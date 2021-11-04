<template>
  <b-card
    no-body
    class="card-employee-task"
  >
    <b-card-header>
      <b-card-title>Employee Task</b-card-title>
      <feather-icon
        icon="MoreVerticalIcon"
        size="18"
        class="cursor-pointer"
      />
    </b-card-header>

    <!-- body -->
    <b-card-body>
      <div
        v-for="(employee,index) in employeeData"
        :key="employee.userFullName"
        class="employee-task d-flex justify-content-between align-items-center"
      >
        <b-media no-body>
          <b-media-aside class="mr-75">
            <b-avatar
              rounded
              size="42"
              :src="employee.avatar"
            />
          </b-media-aside>
          <b-media-body class="my-auto">
            <h6 class="mb-0">
              {{ employee.userFullName }}
            </h6>
            <small>{{ employee.designation }}</small>
          </b-media-body>
        </b-media>
        <div class="d-flex align-items-center">
          <small class="text-muted mr-75">{{ employee.duration }}</small>

          <!-- chart -->
          <vue-apex-charts
            type="radialBar"
            height="30"
            width="30"
            :options="chartData[index].options"
            :series="chartData[index].series"
          />
        </div>
      </div>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardTitle, BCardHeader, BCardBody, BMedia, BMediaAside, BAvatar, BMediaBody,
} from 'bootstrap-vue'
import VueApexCharts from 'vue-apexcharts'
import { $themeColors } from '@themeConfig'
/* eslint-disable global-require */
const $trackBgColor = '#e9ecef'
export default {
  components: {
    BCard,
    BCardTitle,
    BCardHeader,
    BCardBody,
    BMedia,
    BMediaAside,
    BMediaBody,
    BAvatar,
    VueApexCharts,
  },
  data() {
    return {
      chartData: [],
      chartColor: [$themeColors.primary, $themeColors.danger, $themeColors.success, $themeColors.secondary, $themeColors.warning, $themeColors.primary],
      chartSeries: [45, 65, 60, 35, 65, 80],
      employeeData: [
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
          userFullName: 'Ryan Harrington',
          designation: 'iOS Developer',
          duration: '9hr 20m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-20.jpg'),
          userFullName: 'Louisa Norton',
          designation: 'UI Designer',
          duration: '4hr 17m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-1.jpg'),
          userFullName: 'Jayden Duncan',
          designation: 'Java Developer',
          duration: '12hr 8m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-20.jpg'),
          userFullName: 'Cynthia Howell',
          designation: 'Anguler Developer',
          duration: '3hr 19m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-16.jpg'),
          userFullName: 'Helena Payne',
          designation: 'Marketing',
          duration: '9hr 50m',
        },
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-13.jpg'),
          userFullName: 'Troy Jensen',
          designation: 'iOS Developer',
          duration: '4hr 48m',
        },
      ],
      chart: {
        series: [65],
        options: {
          grid: {
            show: false,
            padding: {
              left: -15,
              right: -15,
              top: -12,
              bottom: -15,
            },
          },
          colors: [$themeColors.primary],
          plotOptions: {
            radialBar: {
              hollow: {
                size: '22%',
              },
              track: {
                background: $trackBgColor,
              },
              dataLabels: {
                showOn: 'always',
                name: {
                  show: false,
                },
                value: {
                  show: false,
                },
              },
            },
          },
          stroke: {
            lineCap: 'round',
          },
        },
      },
    }
  },
  created() {
    for (let i = 0; i < this.employeeData.length; i += 1) {
      const chartClone = JSON.parse(JSON.stringify(this.chart))
      chartClone.options.colors[0] = this.chartColor[i]
      chartClone.series[0] = this.chartSeries[i]
      this.chartData.push(chartClone)
    }
  },
}
/* eslint-disable global-require */
</script>
