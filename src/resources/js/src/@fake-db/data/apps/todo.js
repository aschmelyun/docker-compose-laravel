import mock from '@/@fake-db/mock'
// import { paginateArray, sortCompare } from '@/@fake-db/utils'

/* eslint-disable global-require */
const data = {
  tasks: [
    {
      id: 1,
      title: 'Entire change break our wife wide it daughter mention member.',
      dueDate: '2020-11-25',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Jacob Ramirez',
        avatar: require('@/assets/images/avatars/12.png'),
      },
      tags: ['update'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 2,
      title: 'Citizen stand administration step agency century.',
      dueDate: '2020-12-14',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Andrew Anderson',
        avatar: '',
      },
      tags: ['team', 'medium'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 3,
      title: 'Meet Jane and ask for coffee ❤️',
      dueDate: '2020-11-25',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Benjamin Jacobs',
        avatar: '',
      },
      tags: ['high'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 4,
      title: 'Answer the support tickets and close completed tickets. ',
      dueDate: '2020-11-20',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Curtis Schmidt',
        avatar: require('@/assets/images/avatars/9.png'),
      },
      tags: ['medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true,
    },
    {
      id: 5,
      title: 'Test functionality of apps developed by dev team for enhancements. ',
      dueDate: '2020-12-06',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Katherine Perkins',
        avatar: require('@/assets/images/avatars/9.png'),
      },
      tags: ['medium'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true,
    },
    {
      id: 6,
      title: 'Conduct a mini awareness meeting regarding health care. ',
      dueDate: '2020-12-06',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'David Murphy',
        avatar: '',
      },
      tags: ['high', 'medium'],
      isCompleted: true,
      isDeleted: true,
      isImportant: false,
    },
    {
      id: 7,
      title: 'Plan new dashboard design with design team for Google app store. ',
      dueDate: '2020-12-05',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Karina Miller',
        avatar: require('@/assets/images/avatars/1.png'),
      },
      tags: ['medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true,
    },
    {
      id: 8,
      title: 'Pick up Nats from her school and drop at dance class😁 ',
      dueDate: '2020-12-08',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Thomas Moses',
        avatar: require('@/assets/images/avatars/7.png'),
      },
      tags: ['low', 'medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 9,
      title: 'Finish documentation and make it live',
      dueDate: '2020-11-25',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Angel Morrow',
        avatar: '',
      },
      tags: ['high', 'update'],
      isCompleted: false,
      isDeleted: true,
      isImportant: false,
    },
    {
      id: 10,
      title: 'List out all the SEO resources and send it to new SEO team. ',
      dueDate: '2020-12-09',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Karen Carrillo',
        avatar: '',
      },
      tags: ['low'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 11,
      title: 'Refactor Code and fix the bugs and test it on server ',
      dueDate: '2020-12-01',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Timothy Brewer',
        avatar: require('@/assets/images/avatars/1.png'),
      },
      tags: ['low'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true,
    },
    {
      id: 12,
      title: 'Reminder to mail clients for holidays',
      dueDate: '2020-12-09',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Brian Barry',
        avatar: '',
      },
      tags: ['team'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 13,
      title: "Submit quotation for Abid's ecommerce website and admin project",
      dueDate: '2020-12-01',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Joshua Golden',
        avatar: require('@/assets/images/avatars/5.png'),
      },
      tags: ['team'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 14,
      title: 'Send PPT with real-time reports',
      dueDate: '2020-11-29',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Paula Hammond',
        avatar: require('@/assets/images/avatars/5.png'),
      },
      tags: ['medium'],
      isCompleted: true,
      isDeleted: false,
      isImportant: true,
    },
    {
      id: 15,
      title: 'Skype Tommy for project status & report',
      dueDate: '2020-11-29',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Tyler Garcia',
        avatar: '',
      },
      tags: ['medium'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 16,
      title: 'Hire 5 new Fresher or Experienced, frontend and backend developers ',
      dueDate: '2020-12-12',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Darlene Shields',
        avatar: require('@/assets/images/avatars/1.png'),
      },
      tags: ['low'],
      isCompleted: true,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 17,
      title: 'Plan a party for development team 🎁',
      dueDate: '2020-12-04',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Destiny Michael',
        avatar: '',
      },
      tags: ['medium', 'low'],
      isCompleted: false,
      isDeleted: false,
      isImportant: false,
    },
    {
      id: 18,
      title: 'Fix Responsiveness for new structure 💻',
      dueDate: '2020-11-18',
      description:
        '<p>Chocolate cake topping bonbon jujubes donut sweet wafer. Marzipan gingerbread powder brownie bear claw. Chocolate bonbon sesame snaps jelly caramels oat cake.</p>',
      assignee: {
        fullName: 'Danielle Anderson',
        avatar: require('@/assets/images/avatars/12.png'),
      },
      tags: ['low'],
      isCompleted: false,
      isDeleted: false,
      isImportant: true,
    },
  ],
}
/* eslint-enable */

// ------------------------------------------------
// GET: Return Tasks
// ------------------------------------------------
mock.onGet('/apps/todo/tasks').reply(config => {
  // eslint-disable-next-line object-curly-newline
  const { q = '', filter, tag, sortBy: sortByParam = 'latest' } = config.params
  /* eslint-enable */

  // ------------------------------------------------
  // Get Sort by and Sort Direction
  // ------------------------------------------------
  let sortDesc = true

  const sortBy = (() => {
    if (sortByParam === 'title-asc') {
      sortDesc = false
      return 'title'
    }
    if (sortByParam === 'title-desc') return 'title'
    if (sortByParam === 'assignee') {
      sortDesc = false
      return 'assignee'
    }
    if (sortByParam === 'due-date') {
      sortDesc = false
      return 'dueDate'
    }
    return 'id'
  })()

  // ------------------------------------------------
  // Filtering
  // ------------------------------------------------
  const queryLowered = q.toLowerCase()

  const hasFilter = task => {
    if (filter === 'important') return task.isImportant && !task.isDeleted
    if (filter === 'completed') return task.isCompleted && !task.isDeleted
    if (filter === 'deleted') return task.isDeleted
    return !task.isDeleted
  }
  /* eslint-disable no-confusing-arrow, implicit-arrow-linebreak, arrow-body-style */
  const filteredData = data.tasks.filter(task => {
    return task.title.toLowerCase().includes(queryLowered) && hasFilter(task) && (tag ? task.tags.includes(tag) : true)
  })
  /* eslint-enable  */

  // ------------------------------------------------
  // Perform sorting
  // ------------------------------------------------
  const sortTasks = key => (a, b) => {
    let fieldA
    let fieldB

    // If sorting is by dueDate => Convert data to date
    if (key === 'dueDate') {
      fieldA = new Date(a[key])
      fieldB = new Date(b[key])
      // eslint-disable-next-line brace-style
    }

    // If sorting is by assignee => Use `fullName` of assignee
    else if (key === 'assignee') {
      fieldA = a.assignee ? a.assignee.fullName : null
      fieldB = b.assignee ? b.assignee.fullName : null
    } else {
      fieldA = a[key]
      fieldB = b[key]
    }

    let comparison = 0

    if (fieldA === fieldB) {
      comparison = 0
    } else if (fieldA === null) {
      comparison = 1
    } else if (fieldB === null) {
      comparison = -1
    } else if (fieldA > fieldB) {
      comparison = 1
    } else if (fieldA < fieldB) {
      comparison = -1
    }

    return comparison
  }

  // Sort Data
  const sortedData = filteredData.sort(sortTasks(sortBy))
  if (sortDesc) sortedData.reverse()

  return [200, sortedData]
})

// ------------------------------------------------
// POST: Add new task
// ------------------------------------------------
mock.onPost('/apps/todo/tasks').reply(config => {
  // Get event from post data
  const { task } = JSON.parse(config.data)

  const { length } = data.tasks
  let lastIndex = 0
  if (length) {
    lastIndex = data.tasks[length - 1].id
  }
  task.id = lastIndex + 1

  data.tasks.push(task)

  return [201, { task }]
})

// ------------------------------------------------
// POST: Update Task
// ------------------------------------------------
mock.onPost(/\/apps\/todo\/tasks\/\d+/).reply(config => {
  const { task: taskData } = JSON.parse(config.data)

  // Convert Id to number
  taskData.id = Number(taskData.id)

  const task = data.tasks.find(e => e.id === Number(taskData.id))
  Object.assign(task, taskData)

  return [200, { task }]
})

// ------------------------------------------------
// DELETE: Remove Task
// ------------------------------------------------
mock.onDelete(/\/apps\/todo\/tasks\/\d+/).reply(config => {
  // Get task id from URL
  let taskId = config.url.substring(config.url.lastIndexOf('/') + 1)

  // Convert Id to number
  taskId = Number(taskId)

  const task = data.tasks.find(t => t.id === taskId)
  Object.assign(task, { isDeleted: true })
  return [200]
})
