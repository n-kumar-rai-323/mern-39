import { AppConfig } from "./app.config";
import axios, { Axios, AxiosError, type AxiosResponse } from "axios";

const axiosInstance = axios.create({
    baseURL: AppConfig.baseURL,
    timeout: 10000,
    timeoutErrorMessage: "Server is taking too long to respond. Please try again later.",
    responseType: "json",
    headers: {
        "Content-Type": "application/json",
    },

})


// Interceptors 
axiosInstance.interceptors.request.use((config) => {
    if(localStorage.getItem("_at_39")){
        config.headers.Authorization= `Bearer ${localStorage.getItem("_at_39")}`;
    }
    return config;
})

axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response;
    },
    (exception:AxiosError) => {
        let errorResponse ={
            status:exception.status,
            error:exception?.response?.data || exception.message
        }
        throw errorResponse;
    }
)
    
export default axiosInstance