import axios from 'axios';

export const axiosCreate=axios.create({
    baseURL:'https://api.themoviedb.org/3'
})