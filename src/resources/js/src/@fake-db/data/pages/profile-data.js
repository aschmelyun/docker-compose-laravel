import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  profileData: {
    header: {
      avatar: require('@/assets/images/portrait/small/avatar-s-2.jpg'),
      username: 'Kitty Allanson',
      designation: 'UI/UX Designer',
      coverImg: require('@/assets/images/profile/user-uploads/timeline.jpg'),
    },
    userAbout: {
      about: 'Tart I love sugar plum I love oat cake. Sweet ⭐️ roll caramels I love jujubes. Topping cake wafer.',
      joined: 'November 15, 2015',
      lives: 'New York, USA',
      email: 'bucketful@fiendhead.org',
      website: 'www.pixinvent.com',
    },
    suggestedPages: [
      {
        avatar: require('@/assets/images/avatars/12-small.png'),
        username: 'Peter Reed',
        subtitle: 'Company',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/1-small.png'),
        username: 'Harriett Adkins',
        subtitle: 'Company',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/10-small.png'),
        username: 'Juan Weaver',
        subtitle: 'Company',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/3-small.png'),
        username: 'Claudia Chandler',
        subtitle: 'Company',
        favorite: false,
      },
      {
        avatar: require('@/assets/images/avatars/5-small.png'),
        username: 'Earl Briggs',
        subtitle: 'Company',
        favorite: true,
      },
      {
        avatar: require('@/assets/images/avatars/6-small.png'),
        username: 'Jonathan Lyons',
        subtitle: 'Beauty Store',
        favorite: false,
      },
    ],
    twitterFeeds: [
      {
        imgUrl: require('@/assets/images/avatars/5-small.png'),
        title: 'Gertrude Stevens',
        id: 'tiana59 ',
        tags: '#design #fasion',
        desc: 'I love cookie chupa chups sweet tart apple pie ⭐️ chocolate bar.',
        favorite: false,
      },
      {
        imgUrl: require('@/assets/images/avatars/12-small.png'),
        title: 'Lura Jones',
        id: 'tiana59 ',
        tags: '#vuejs #code #coffeez',
        desc: 'Halvah I love powder jelly I love cheesecake cotton candy. 😍',
        favorite: true,
      },
      {
        imgUrl: require('@/assets/images/avatars/1-small.png'),
        title: 'Norman Gross',
        id: 'tiana59 ',
        tags: '#sketch #uiux #figma',
        desc: 'Candy jelly beans powder brownie biscuit. Jelly marzipan oat cake cake.',
        favorite: false,
      },
    ],
    post: [
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-18.jpg'),
        username: 'Leeanna Alvord',
        postTime: '12 Dec 2018 at 1:16 AM',
        postText:
          'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
        postImg: require('@/assets/images/profile/post-media/2.jpg'),
        likes: 1240,
        youLiked: true,
        comments: 1240,
        share: 1240,
        likedUsers: [
          { avatar: require('@/assets/images/portrait/small/avatar-s-1.jpg'), username: 'Trine Lynes' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-2.jpg'), username: 'Lilian Nenes' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-3.jpg'), username: 'Alberto Glotzbach' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-5.jpg'), username: 'George Nordic' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-4.jpg'), username: 'Vinnie Mostowy' },
        ],
        likedCount: 140,
        detailedComments: [
          {
            avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
            username: 'Kitty Allanson',
            comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
            commentsLikes: 34,
            youLiked: false,
          },
          {
            avatar: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
            username: 'Jackey Potter',
            comment: 'Unlimited color🖌 options allows you to set your application color as per your branding 🤪.',
            commentsLikes: 61,
            youLiked: true,
          },
        ],
      },
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-22.jpg'),
        username: 'Rosa Walters',
        postTime: '11 Dec 2019 at 1:16 AM',
        postText:
          'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
        postImg: require('@/assets/images/profile/post-media/25.jpg'),
        likes: 1240,
        youLiked: true,
        comments: 1240,
        share: 1240,
        likedUsers: [
          { avatar: require('@/assets/images/portrait/small/avatar-s-1.jpg'), username: 'Trine Lynes' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-2.jpg'), username: 'Lilian Nenes' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-3.jpg'), username: 'Alberto Glotzbach' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-5.jpg'), username: 'George Nordic' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-4.jpg'), username: 'Vinnie Mostowy' },
        ],
        likedCount: 271,
        detailedComments: [
          {
            avatar: require('@/assets/images/portrait/small/avatar-s-3.jpg'),
            username: 'Kitty Allanson',
            comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
            commentsLikes: 34,
            youLiked: false,
          },
        ],
      },
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-15.jpg'),
        username: 'Charles Watson',
        postTime: '12 Dec 2019 at 1:16 AM',
        postText:
          'Wonderful Machine· A well-written bio allows viewers to get to know a photographer beyond the work. This can make the difference when presenting to clients who are looking for the perfect fit.',
        postVid: 'https://www.youtube.com/embed/6stlCkUDG_s',
        likes: 1240,
        youLiked: true,
        comments: 1240,
        share: 1240,
        likedUsers: [
          { avatar: require('@/assets/images/portrait/small/avatar-s-1.jpg'), username: 'Trine Lynes' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-2.jpg'), username: 'Lilian Nenes' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-3.jpg'), username: 'Alberto Glotzbach' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-5.jpg'), username: 'George Nordic' },
          { avatar: require('@/assets/images/portrait/small/avatar-s-4.jpg'), username: 'Vinnie Mostowy' },
        ],
        likedCount: 264,
        detailedComments: [
          {
            avatar: require('@/assets/images/portrait/small/avatar-s-3.jpg'),
            username: 'Kitty Allanson',
            comment: 'Easy & smart fuzzy search🕵🏻 functionality which enables users to search quickly.',
            commentsLikes: 34,
            youLiked: false,
          },
        ],
      },
    ],
    latestPhotos: [
      { img: require('@/assets/images/profile/user-uploads/user-13.jpg') },
      { img: require('@/assets/images/profile/user-uploads/user-02.jpg') },
      { img: require('@/assets/images/profile/user-uploads/user-03.jpg') },
      { img: require('@/assets/images/profile/user-uploads/user-04.jpg') },
      { img: require('@/assets/images/profile/user-uploads/user-05.jpg') },
      { img: require('@/assets/images/profile/user-uploads/user-06.jpg') },
      { img: require('@/assets/images/profile/user-uploads/user-07.jpg') },
      { img: require('@/assets/images/profile/user-uploads/user-08.jpg') },
      { img: require('@/assets/images/profile/user-uploads/user-09.jpg') },
    ],
    suggestions: [
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
        name: 'Peter Reed',
        mutualFriend: '6 Mutual Friends',
      },
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
        name: 'Harriett Adkins',
        mutualFriend: '3 Mutual Friends',
      },
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
        name: 'Juan Weaver',
        mutualFriend: '1 Mutual Friends',
      },
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-8.jpg'),
        name: 'Claudia Chandler',
        mutualFriend: '16 Mutual Friends',
      },
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-1.jpg'),
        name: 'Earl Briggs',
        mutualFriend: '4 Mutual Friends',
      },
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-10.jpg'),
        name: 'Jonathan Lyons',
        mutualFriend: '25 Mutual Friends',
      },
    ],
    polls: [
      {
        name: 'RDJ',
        result: '82%',
        votedUser: [
          { img: require('@/assets/images/portrait/small/avatar-s-12.jpg'), username: 'Tonia Seabold' },
          { img: require('@/assets/images/portrait/small/avatar-s-5.jpg'), username: 'Carissa Dolle' },
          { img: require('@/assets/images/portrait/small/avatar-s-9.jpg'), username: 'Kelle Herrick' },
          { img: require('@/assets/images/portrait/small/avatar-s-10.jpg'), username: 'Len Bregantini' },
          { img: require('@/assets/images/portrait/small/avatar-s-11.jpg'), username: 'John Doe' },
        ],
      },
      {
        name: 'Chris Hemswort',
        result: '67%',
        votedUser: [
          { img: require('@/assets/images/portrait/small/avatar-s-9.jpg'), username: 'Tonia Seabold' },
          { img: require('@/assets/images/portrait/small/avatar-s-1.jpg'), username: 'Carissa Dolle' },
          { img: require('@/assets/images/portrait/small/avatar-s-8.jpg'), username: 'Jonathan Lyons' },
        ],
      },
    ],
  },
}
/* eslint-disable global-require */
mock.onGet('/profile/data').reply(() => [200, data.profileData])
