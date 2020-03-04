import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';

const config = {
  headers: {
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
	"x-rapidapi-key": "9e272df5c9msh4b27f95cfd6e286p1e6ae1jsnd400d8b27a35"
  }
}

export default class Main extends Component{
	state = {
		games: []
	};
	componentDidMount(){
		this.loadGames();
	}
	loadGames = async () => {
		const response = await api.get('/games',config) ;
		this.setState({ games : response.data.data });
		console.log(response.data);
	};
	render(){
		const { games } = this.state;
		return (
			<div className="games-list">  
				{games.map(game => (
					<article className="row">    
						<div className="col-4 text-right"><a href="#" key="game.id">{game.home_team.full_name}</a></div>
						<div className="col-1 text-center">{game.home_team_score}</div>
						<div className="col-1 text-center">X</div>
						<div className="col-1 text-left">{game.visitor_team_score}</div>
						<div className="col-4"><a href="#" key="game.id">{game.visitor_team.full_name}</a></div> 
						<div className="col-1 text-center"></div> 
						<div className="col-5 text-center mt-3">Season {game.season}, {game.home_team.city}</div>  
					</article>
				))}
			</div>
		);
	}
}