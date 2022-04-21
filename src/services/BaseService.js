import axios from "axios";

const http = axios.create({
    baseURL: 'https://private-anon-92bdb9b584-carsapi1.apiary-mock.com'
})

http.interceptors.response.use((response) => response.data);



export default http