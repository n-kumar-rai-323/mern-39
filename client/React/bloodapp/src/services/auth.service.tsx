import type { ICredentials } from "../pages/auth/auth.contract";
import HttpService from "./http.service";
import Cookies from "js-cookie";
class AuthService extends HttpService {

    getLoggedInUser= async()=>{
        try{
            const response = await this.getRequest("/api/auth/me");
            return response.data;
        }catch(exception){
            
            throw exception;
        }
    }

    login = async (credentials: ICredentials) => {
        try {
            const response = await this.postRequest("/api/auth/login", credentials)
            // Cookies.set("_at_39", response.data.data.accessToken, {expires:1, secure:true, sameSite:"Strict"});
            // Cookies.get("_at_39");
            // Cookies.remove("_at_39");

            localStorage.setItem("_at_39", response.data.data.accessToken);
            localStorage.setItem("_rt_39", response.data.data.refreshToken);

            let userDetail = await this.getLoggedInUser();
            return userDetail;
            // sessionStorage.setItem("_at_39", response.data.data.accessToken);
            // sessionStorage.setItem("_rt_39", response.data.data.refreshToken);
            console.log("Full login response:", response.data.data.accessToken);

            

        } catch (exception) {
            console.error
            throw exception;
        }
    }
}
const authSvc = new AuthService();
export default authSvc;

