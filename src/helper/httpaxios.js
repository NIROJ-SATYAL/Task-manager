import axios from "axios";



const  httpaxios = axios.create({
    baseURL: "http://localhost:3000/api",
})

export default httpaxios;