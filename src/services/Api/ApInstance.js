import axios from "axios";
import { baseURL } from "./APiconfig";

export const axiosInstances = axios.create({
  baseURL,
});
export const PrivateaxiosInstances = axios.create({
  baseURL,
});
PrivateaxiosInstances.interceptors.request.use((config)=>{
  const token =localStorage.getItem("token")
  if(token){
    config.headers.Authorization =` Bearer ${token}`;
  } 
  return config;
},
(error) => {
    return Promise.reject(error);
  }

) 



