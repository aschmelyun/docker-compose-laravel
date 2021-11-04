import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  dataSuggest: [
    {
      // developers
      developers: [
        {
          img: require('@/assets/images/portrait/small/avatar-s-4.jpg'),
          name: 'Rena Brant',
          email: 'nephrod@preany.co.uk',
          time: '21/05/2019',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
          name: 'Mariano Packard',
          email: 'seek@sparaxis.org',
          time: '14/01/2018',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-24.jpg'),
          name: 'Risa Montufar',
          email: 'vagary@unblist.org',
          time: '10/08/2019',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-15.jpg'),
          name: 'Maragaret Cimo',
          email: 'designed@insanely.net',
          time: '01/12/2019',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
          name: 'Jona Prattis',
          email: 'unwieldable@unblist.org',
          time: '21/05/2019',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-5.jpg'),
          name: 'Edmond Chicon',
          email: 'museist@anaphyte.co.uk',
          time: '15/11/2019',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-25.jpg'),
          name: 'Abbey Darden',
          email: 'astema@defectively.co.uk',
          time: '07/05/2019',
        },
      ],

      // designers
      designers: [
        {
          img: require('@/assets/images/portrait/small/avatar-s-10.jpg'),
          name: 'Seema Moallankamp',
          email: 'fernando@storkish.co.uk',
          time: '13/08/2017',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
          name: 'Charleen Warmington',
          email: 'furphy@cannibal.net',
          time: '11/08/1891',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-25.jpg'),
          name: 'Geri Linch',
          email: 'insignia@markab.org',
          time: '18/01/2015',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-23.jpg'),
          name: 'Shellie Muster',
          email: 'maxillary@equalize.co.uk',
          time: '26/07/2019',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-20.jpg'),
          name: 'Jesenia Vanbramer',
          email: 'hypotony@phonetist.net',
          time: '12/09/2017',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-23.jpg'),
          name: 'Mardell Channey',
          email: 'peseta@myrica.com',
          time: '11/11/2019',
        },
        {
          img: require('@/assets/images/portrait/small/avatar-s-24.jpg'),
          name: 'Lilliana Stroman',
          email: 'lilliana@stroman.com',
          time: '12/11/2020',
        },
      ],

      // pages
      pages: [
        { icon: 'MailIcon', name: 'Email' },
        { icon: 'MessageSquareIcon', name: 'Chat' },
        { icon: 'CheckSquareIcon', name: 'Todo' },
        { icon: 'CalendarIcon', name: 'Calendar' },
        { icon: 'GridIcon', name: 'Kanban' },
        { icon: 'FileTextIcon', name: 'Invoice' },
        { icon: 'SaveIcon', name: 'File Manager' },
        { icon: 'ShoppingCartIcon', name: 'ECommerce' },
      ],
    },
  ],
}
/* eslint-disable global-require */

mock.onGet('/autosuggest/data').reply(() => [200, data.dataSuggest])
