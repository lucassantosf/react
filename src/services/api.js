import axios from 'axios';

const api = axios.create({
	baseURL:'https://api-football-v1.p.rapidapi.com/v2' 
});

export default api;