import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  accountSetting: {
    general: {
      avatar: require('@/assets/images/portrait/small/avatar-s-11.jpg'),
      username: 'johndoe',
      fullName: 'John Doe',
      email: 'granger007@hogward.com',
      company: 'Crystal Technologies',
    },
    info: {
      bio: '',
      dob: null,
      country: 'USA',
      website: '',
      phone: 6562542568,
    },
    social: {
      socialLinks: {
        twitter: 'https://www.twitter.com',
        facebook: '',
        google: '',
        linkedIn: 'https://www.linkedin.com',
        instagram: '',
        quora: '',
      },
      connections: {
        twitter: {
          profileImg: require('@/assets/images/avatars/11-small.png'),
          id: 'johndoe',
        },
        google: {
          profileImg: require('@/assets/images/avatars/3-small.png'),
          id: 'luraweber',
        },
        facebook: {},
        github: {},
      },
    },
    notification: {
      commentOnArticle: true,
      AnswerOnForm: true,
      followMe: false,
      newAnnouncements: true,
      productUpdates: true,
      blogDigest: false,
    },
  },
}
/* eslint-disable global-require */
mock.onGet('/account-setting/data').reply(() => [200, data.accountSetting])
