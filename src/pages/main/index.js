import React, {Component} from 'react';
import api from '../../services/api';
import './styles.css';
import { Link } from 'react-router-dom';

const config = {
  headers: {
    "x-rapidapi-host": "free-nba.p.rapidapi.com",
	"x-rapidapi-key": "9e272df5c9msh4b27f95cfd6e286p1e6ae1jsnd400d8b27a35"
  }
}

export default class Main extends Component{
	state = {
		games: [],
		gameInfo: {},
		page : 1,
	};
	componentDidMount(){
		this.loadGames();
	}

	loadGames = async (page = 1) => {
		const response = await api.get(`/games?page=${page}`,config);      

		const { data, ...gameInfo } = response.data;

		this.setState({ games : data, gameInfo , page });
	};

	prevPage = () => { 
		const { page, gameInfo } = this.state;
		 
		if(page === 1) return;

		const pageNumber = page - 1 ;

		this.loadGames(pageNumber); 
	}
	
	nextPage = () => {
		const { page, gameInfo } = this.state;
		 
		if(page === gameInfo.meta.total_pages) return;

		const pageNumber = page + 1 ;

		this.loadGames(pageNumber);
	};
	
	render(){ 

		const { games , page, ...gameInfo} = this.state; 
		 
		return (
			<div className="games-list">  
				{games.map(game => (
					<Link to={`/games/${game.id}`}>
					<article className="row">    
						<div className="col-4 text-right"><a href="#" key="game.id">{game.home_team.full_name}</a></div>
						<div className="col-1 text-center">{game.home_team_score}</div>
						<div className="col-1 text-center">X</div>
						<div className="col-1 text-left">{game.visitor_team_score}</div>
						<div className="col-4"><a href="#" key="game.id">{game.visitor_team.full_name}</a></div> 
						<div className="col-1 text-center"></div> 
						<div className="col-5 text-center mt-3">Season {game.season}, {game.home_team.city}</div>  
					</article>
					</Link>
				))}
				<div className="actions">
					<button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
					<button disabled={page === 199} onClick={this.nextPage}>Próximo</button>
				</div>
			</div>
		);
	}
}