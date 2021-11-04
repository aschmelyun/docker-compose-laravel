import mock from '@/@fake-db/mock'
/* eslint-disable global-require */
const data = {
  // blog list
  blogList: [
    {
      id: 1,
      img: require('@/assets/images/slider/02.jpg'),
      title: 'The Best Features Coming to iOS and Web design',
      avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
      userFullName: 'Ghani Pradita',
      blogPosted: 'Jan 10, 2020',
      tags: ['Quote', 'Fashion'],
      excerpt: 'Donut fruitcake soufflé apple pie candy canes jujubes croissant chocolate bar ice cream.',
      comment: 76,
    },
    {
      id: 2,
      img: require('@/assets/images/slider/06.jpg'),
      title: 'Latest Quirky Opening Sentence or Paragraph',
      avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
      userFullName: 'Jorge Griffin',
      blogPosted: 'Jan 10, 2020',
      tags: ['Gaming', 'Video'],
      excerpt: 'Apple pie caramels lemon drops halvah liquorice carrot cake. Tiramisu brownie lemon drops.',
      comment: 2100,
    },
    {
      id: 3,
      img: require('@/assets/images/slider/04.jpg'),
      title: 'Share an Amazing and Shocking Fact or Statistic',
      avatar: require('@/assets/images/portrait/small/avatar-s-3.jpg'),
      userFullName: 'Claudia Neal',
      blogPosted: 'Jan 10, 2020',
      tags: ['Gaming', 'Food'],
      excerpt: 'Tiramisu jelly-o chupa chups tootsie roll donut wafer marshmallow cheesecake topping.',
      comment: 243,
    },
    {
      id: 4,
      img: require('@/assets/images/slider/03.jpg'),
      title: 'Withhold a Compelling Piece of Information',
      avatar: require('@/assets/images/portrait/small/avatar-s-14.jpg'),
      userFullName: 'Fred Boone',
      blogPosted: 'Jan 10, 2020',
      tags: ['Video'],
      excerpt: 'Croissant apple pie lollipop gingerbread. Cookie jujubes chocolate cake icing cheesecake.',
      comment: 10,
    },
    {
      id: 5,
      img: require('@/assets/images/slider/09.jpg'),
      title: 'Unadvertised Bonus Opening: Share a Quote',
      avatar: require('@/assets/images/portrait/small/avatar-s-13.jpg'),
      userFullName: 'Billy French',
      blogPosted: 'Jan 10, 2020',
      tags: ['Quote', 'Fashion'],
      excerpt: 'Muffin liquorice candy soufflé bear claw apple pie icing halvah. Pie marshmallow jelly.',
      comment: 319,
    },
    {
      id: 6,
      img: require('@/assets/images/slider/10.jpg'),
      title: 'Ships at a distance have Every Man’s Wish on Board',
      avatar: require('@/assets/images/portrait/small/avatar-s-13.jpg'),
      userFullName: 'Helena Hunt',
      blogPosted: 'Jan 10, 2020',
      tags: ['Fashion', 'Video'],
      excerpt: 'A little personality goes a long way, especially on a business blog. So don’t be afraid to let loose.',
      comment: 1500,
    },
  ],

  // sidebar
  blogSidebar: {
    recentPosts: [
      {
        id: 7,
        img: require('@/assets/images/banner/banner-22.jpg'),
        title: 'Why Should Forget Facebook?',
        createdTime: 'Jan 14 2020',
      },
      {
        id: 8,
        img: require('@/assets/images/banner/banner-27.jpg'),
        title: 'Publish your passions, your way',
        createdTime: 'Mar 04 2020',
      },
      {
        id: 9,
        img: require('@/assets/images/banner/banner-39.jpg'),
        title: 'The Best Ways to Retain More',
        createdTime: 'Feb 18 2020',
      },
      {
        id: 10,
        img: require('@/assets/images/banner/banner-35.jpg'),
        title: 'Share a Shocking Fact or Statistic',
        createdTime: 'Oct 08 2020',
      },
    ],
    categories: [
      { category: 'Fashion', icon: 'WatchIcon' },
      { category: 'Food', icon: 'ShoppingCartIcon' },
      { category: 'Gaming', icon: 'CommandIcon' },
      { category: 'Quote', icon: 'HashIcon' },
      { category: 'Video', icon: 'VideoIcon' },
    ],
  },

  // detail
  blogDetail: {
    blog: {
      img: require('@/assets/images/banner/banner-12.jpg'),
      title: 'The Best Features Coming to iOS and Web design',
      avatar: require('@/assets/images/portrait/small/avatar-s-7.jpg'),
      userFullName: 'Ghani Pradita',
      createdTime: 'Jan 10, 2020',
      tags: ['Gaming', 'Video'],
      content:
        '<p>Before you get into the nitty-gritty of coming up with a perfect title, start with a rough draft: your working title. What is that, exactly? A lot of people confuse working titles with topics. Let\'s clear that Topics are very general and could yield several different blog posts. Think "raising healthy kids," or "kitchen storage." A writer might look at either of those topics and choose to take them in very, very different directions.A working title, on the other hand, is very specific and guides the creation of a single blog post. For example, from the topic "raising healthy kids," you could derive the following working title See how different and specific each of those is? That\'s what makes them working titles, instead of overarching topics.</p><h4>Unprecedented Challenge</h4><ul class="mb-2"><li>Preliminary thinking systems</li><li>Bandwidth efficient</li><li>Green space</li><li>Social impact</li><li>Thought partnership</li><li>Fully ethical life</li></ul>  ',
      comments: 19100,
      bookmarked: 139,
      UserComment: [
        {
          avatar: require('@/assets/images/portrait/small/avatar-s-6.jpg'),
          fullName: 'Willie Clark',
          comment:
            'Based in London, Uncode is a blog by Willie Clark. His posts explore modern design trends through photos and quotes by influential creatives and web designer around the world.',
        },
      ],
    },
    comments: [
      {
        avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
        userFullName: 'Chad Alexander',
        commentedAt: 'May 24, 2020',
        commentText:
          'A variation on the question technique above, the multiple-choice question great way to engage your reader.',
      },
    ],
  },

  // edit
  blogEdit: {
    avatar: require('@/assets/images/portrait/small/avatar-s-9.jpg'),
    userFullName: 'Chad Alexander',
    createdTime: 'May 24, 2020',
    blogTitle: 'The Best Features Coming to iOS and Web design',
    blogCategories: ['Fashion', 'Gaming'],
    slug: 'the-best-features-coming-to-ios-and-web-design',
    status: 'Published',
    excerpt:
      '<p>Cupcake ipsum dolor sit. Amet dessert donut candy chocolate bar cotton dessert candy chocolate. Candy muffin danish. Macaroon brownie jelly beans marzipan cheesecake oat cake. Carrot cake macaroon chocolate cake. Jelly brownie jelly. Marzipan pie sweet roll.</p><p><br></p><p>Liquorice dragée cake chupa chups pie cotton candy jujubes bear claw sesame snaps. Fruitcake chupa chups chocolate bonbon lemon drops croissant caramels lemon drops. Candy jelly cake marshmallow jelly beans dragée macaroon. Gummies sugar plum fruitcake. Candy canes candy cupcake caramels cotton candy jujubes fruitcake.</p>',
    featuredImage: require('@/assets/images/slider/03.jpg'),
  },
}
/* eslint-disable global-require */
mock.onGet('/blog/list/data').reply(() => [200, data.blogList])
mock.onGet('/blog/list/data/sidebar').reply(() => [200, data.blogSidebar])
mock.onGet('/blog/list/data/detail').reply(() => [200, data.blogDetail])
mock.onGet('/blog/list/data/edit').reply(() => [200, data.blogEdit])
