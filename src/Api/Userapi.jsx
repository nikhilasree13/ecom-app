import Axiosapi from "./Axiosapi";

export const loginUser= (Credentials)=> {
    return Axiosapi.post ('/auth/login', Credentials)
}