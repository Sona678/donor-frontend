import api from "../api/axios"

const USER_URL = "/user";

const authService={
register:async(data)=>{
 const response=await api.post(`${USER_URL}/register`,data)
 return response.data
},

login:async(data)=>{
        const response=await api.post(`${USER_URL}/login`,data)
        return response.data
},

logout:async()=>{
        const response=await api.post(`${USER_URL}/logout`)
        return response.data
},
refreshToken:async()=>{
        const response=await api.post(`${USER_URL}/refresh-token`)
        return response.data
},
getCurrentUser:async()=>{
        const response=await api.get(`${USER_URL}/me`)
        return response.data
},
changePassword:async(data)=>{
        const response=await api.post(`${USER_URL}/change-password`,data)
        return response.data
},
updateUserAccount:async(data)=>{
        const response=await api.patch(`${USER_URL}/update-account`,data)
        return response.data
},
updateProfileImg:async(data)=>{
        const response=await api.patch(`${USER_URL}/update-profile-image`,data)
        return response.data
}
}
export default authService