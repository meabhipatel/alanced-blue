import axios from 'axios'

let baseURL = 'https://aparnawiz91.pythonanywhere.com/'

const DataService = axios.create({
    baseURL: baseURL
})



export default DataService;
