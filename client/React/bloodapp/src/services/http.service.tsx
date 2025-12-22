import axiosInstance from "../config/axios.config";
abstract class HttpService {


    getRequest = async (url: string, config: any = {}) => await axiosInstance.get(url, config);

    postRequest = async (url: string, data: any = {}, config: any = {}) => await axiosInstance.post(url, data, config);

    putRequest = async (url: string, data: any = {}, config: any = {}) => await axiosInstance.put(url, data, config);

    patchRequest = async (url: string, data: any = {}, config: any = {}) => await axiosInstance.patch(url, data, config);

    deleteRequest = async (url: string, config: any = {}) => await axiosInstance.delete(url, config);
}
export default HttpService;

