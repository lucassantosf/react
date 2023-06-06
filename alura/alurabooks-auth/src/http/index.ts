import axios,{AxiosError} from "axios";
import { history } from "../App";

const http = axios.create({
    baseURL: 'http://localhost:8000',
    headers: {
        Accept: 'application/json',
        Content: 'application/json' 
    }
})

//intercept request
http.interceptors.request.use(function(config){
    const token = sessionStorage.getItem('token')
    if(token && config.headers){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config;
},function(error){
    console.log('interceptor http ',error)
    return Promise.reject(error)
})

//intercept response
http.interceptors.response.use(function (response) {
    return response;
}, function (error: AxiosError) {
    if (error.response?.status === 401) {
      history.push('/') // aqui estamos navegando de forma progamática, enviando o usuário para onde queremos.
      return Promise.reject()
    }
    return Promise.reject(error);
});

export default http