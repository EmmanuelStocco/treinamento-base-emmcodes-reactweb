import axios from 'axios'


export const API_URL="http://192.168.0.5:3001/" // local

const API = axios.create({
    baseURL: API_URL
})

export default API