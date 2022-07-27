import axios from 'axios';
console.log(process.env)
const request = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
export const get = async (path, option = {}) => {
    const response = await request.get(path, option);
    return response.data;
};
export default request;
