import mock from '@/@fake-db/mock'

const data = {
  supportTracker: {
    title: 'Support Tracker',
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    totalTicket: 163,
    newTicket: 29,
    openTicket: 63,
    responseTime: 1,
  },
  avgSessions: {
    sessions: 2700,
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    growth: '+5.2%',
    goal: 100000,
    users: 100000,
    retention: 90,
    duration: 1,
  },
  revenueReport: {
    years: ['2020', '2019', '2018'],
    price: '25,852',
    budget: '56,800',
  },
  goalOverview: {
    completed: '786,617',
    inProgress: '13,561',
  },
  revenue: {
    thisMonth: '86,589',
    lastMonth: '73,683',
  },
  productOrders: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    chartInfo: { finished: 23043, pending: 14658, rejected: 4758 },
  },
  sessionsDevice: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    chartInfo: [
      {
        icon: 'MonitorIcon',
        name: 'Desktop',
        iconColor: 'text-primary',
        usage: 58.6,
        upDown: 2,
      },
      {
        icon: 'TabletIcon',
        name: 'Mobile',
        iconColor: 'text-warning',
        usage: 34.9,
        upDown: 8,
      },
      {
        icon: 'TabletIcon',
        name: 'Tablet',
        iconColor: 'text-danger',
        usage: 6.5,
        upDown: -5,
      },
    ],
  },
  customers: {
    lastDays: ['Last 28 Days', 'Last Month', 'Last Year'],
    listData: [
      {
        icon: 'CircleIcon',
        iconColor: 'text-primary',
        text: 'New',
        result: 890,
      },
      {
        icon: 'CircleIcon',
        iconColor: 'text-warning',
        text: 'Returning',
        result: 258,
      },
      {
        icon: 'CircleIcon',
        iconColor: 'text-danger',
        text: 'Referrals',
        result: 149,
      },
    ],
  },
}

mock.onGet('/card/card-analytics/support-tracker').reply(() => [200, data.supportTracker])
mock.onGet('/card/card-analytics/avg-sessions').reply(() => [200, data.avgSessions])
mock.onGet('/card/card-analytics/revenue-report').reply(() => [200, data.revenueReport])
mock.onGet('/card/card-analytics/goal-overview').reply(() => [200, data.goalOverview])
mock.onGet('/card/card-analytics/revenue').reply(() => [200, data.revenue])
mock.onGet('/card/card-analytics/product-orders').reply(() => [200, data.productOrders])
mock.onGet('/card/card-analytics/sessions-device').reply(() => [200, data.sessionsDevice])
mock.onGet('/card/card-analytics/customers').reply(() => [200, data.customers])
