import axios from 'axios'
import {Url} from '../others/ApiLinks'

export default {
    login:()=>{
        window.location.href =`${Url}/auth/google`
        // return axios.get(`${Url}/auth/google/redirect`).then(res=>{
        //     if(res.status!==401){//passport returns 401 when user is not authenticated
        //         return res.data
        //     }else{
        //         return {isAuthenticated:false,user:null}
        //     }
        // })
    },
    isAuthenticated:()=>{

        return axios.get(`http://localhost:8000/auth/user`,{withCredentials: true,crossdomain: true}).then(res=>{
            if(res.status===200){//passport returns 401 when user is not authenticated
                return res.data
            }
        }).catch(err=>{
            if(err.status===401){//passport returns 401 when user is not authenticated
                 return {isAuthenticated:false,user:null}
            }
        })
    },
    userData :()=>{
           return axios
              .get(`${Url}/user/`, { withCredentials: true, crossdomain: true })
              .then((data) => {
                  console.log(data.data)
                return data.data;
              });
    },
    saveAlerts:(alertData)=>{
        axios(`${Url}/alerts/alertSave`,{method:"put",data:{alertData}, withCredentials: true, crossdomain: true })
        .then((data) => {
            console.log(data.data.msg);
        });
    },
    getAlerts:()=>{
       return axios
        .get(`${Url}/alerts/alertData`, { withCredentials: true, crossdomain: true })
        .then((data) => {
            return data.data;
        });
    },
    getAlertHistory:()=>{
       return axios
        .get(`${Url}/alerts/alertHistory`, { withCredentials: true, crossdomain: true })
        .then((data) => {
            return data.data;
        });
    }
}