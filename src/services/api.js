import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: 'http://denbabinis.com:6000'
  })
}
