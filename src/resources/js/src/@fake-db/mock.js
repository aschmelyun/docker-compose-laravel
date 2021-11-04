import axios from '@axios'
import MockAdapter from 'axios-mock-adapter'

// This sets the mock adapter on the axios instance
const mock = new MockAdapter(axios)

export default mock
