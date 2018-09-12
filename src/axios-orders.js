import axios from 'axios';

const instance = axios.create({
    baseURL: "https://burgerbuildermost.firebaseio.com/"
});

export default instance;