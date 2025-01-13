import axios from 'axios'
const baseURL = "https://wtsacademy.dedicateddevelopers.us/api";
const imageURL = "https://wtsacademy.dedicateddevelopers.us/uploads/product";
const profileImage = "https://wtsacademy.dedicateddevelopers.us/uploads/user/profile_pic";

export const getProfileImage = (image)=>{
    return `${profileImage}/${image}`
    }
    
const axiosInstance = axios.create({
    baseURL,

});


axiosInstance.interceptors.request.use(
    async function (config) {
        const token = localStorage.getItem('token')
        if (token !== null && token !== undefined) {
            config.headers["x-access-token"] = token;
        }
        return config;
    },
    function (err) {
        return Promise.reject(err);
    }
);
export const imagePath = (image) => {
    return `${imageURL}/${image}`;
}
export default axiosInstance





