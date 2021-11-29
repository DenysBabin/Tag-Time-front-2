import axios from 'axios'
export default () => {
  return axios.create({
    baseURL: 'http://denbabinis.com:4000'
    // headers: {
    //   'Content-Type': 'text/plain',
    //   'Sec-Fetch-Mode': 'no-cors'
    // }
  })
}
