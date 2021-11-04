export default [
  {
    header: 'Others',
    icon: 'MoreHorizontalIcon',
    children: [
      {
        title: 'Access Control',
        route: 'access-control',
        icon: 'ShieldIcon',
        // acl: {
        action: 'read',
        resource: 'ACL',
        // },
      },
      {
        title: 'Menu Levels',
        icon: 'MenuIcon',
        children: [
          {
            title: 'Menu Level 2.1',
            route: null,
          },
          {
            title: 'Menu Level 2.2',
            children: [
              {
                title: 'Menu Level 3.1',
                route: null,
              },
              {
                title: 'Menu Level 3.2',
                route: null,
              },
            ],
          },
        ],
      },
      {
        title: 'Disabled Menu',
        route: null,
        icon: 'EyeOffIcon',
        disabled: true,
      },
      {
        title: 'Raise Support',
        href: 'https://pixinvent.ticksy.com/',
        icon: 'LifeBuoyIcon',
      },
      {
        title: 'Documentation',
        href: 'https://pixinvent.com/demo/vuexy-vuejs-admin-dashboard-template/documentation',
        icon: 'FileTextIcon',
      },
    ],
  },
]
