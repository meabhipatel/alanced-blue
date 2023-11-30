import axios from 'axios'

// let baseURL = 'https://alanced.pythonanywhere.com/'
let baseURL = 'http://51.21.1.122:8000/'

const DataService = axios.create({
    baseURL: baseURL
})



export default DataService;
