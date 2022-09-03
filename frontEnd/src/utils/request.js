import axios from 'axios';

const request = axios.create({
  baseURL:'http://localhost:8090/',
  timeout:5000
})

request.interceptors.response.use(
  (response) => {
    if(response.data.status === 0)return response.data.data
    return response.data
  },
  (err) => Promise.reject(err)
)

export default request
