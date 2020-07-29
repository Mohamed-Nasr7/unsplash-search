import axios from 'axios';

//axios.create is to make default values for axios
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 4C7AK-Jy80Rp7PpeNZKR6Me4BkVMSb29zsA5UXBjFTo'
    }
});
