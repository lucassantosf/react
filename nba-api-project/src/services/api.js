import axios from 'axios';

const api = axios.create({
	baseURL:'https://free-nba.p.rapidapi.com' 
});

export default api;