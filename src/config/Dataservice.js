import axios from 'axios'

let baseURL = 'https://alanced.pythonanywhere.com/'

const DataService = axios.create({
    baseURL: baseURL
})



export default DataService;
