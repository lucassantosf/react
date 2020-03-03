import React, {Component} from 'react';
import api from '../../services/api';

const config = {
  headers: {
    "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
	"x-rapidapi-key": "9e272df5c9msh4b27f95cfd6e286p1e6ae1jsnd400d8b27a35"
  }
}

export default class Main extends Component{
	componentDidMount(){
		this.loadTeams();
	}
	loadTeams = async () => {
		const response = await api.get('/leagues') ;
		console.log(response);
	};
	render(){
		return <h1>Fut</h1>
	}
}