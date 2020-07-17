import React, { Component } from 'react';
import api from '../../services/api';
import './styles.css';

export default class Game extends Component{
	state = {
		game: {},
	};
	async componentDidMount(){
		const {id} = this.props.match.params;
		const response = await api.get(`games/${id}`);
		this.setState({game:response.data});		
	}
	render(){
		const { game } = this.state;
		return (
			<div className="game-info">
				<h1>{game.title}</h1>
				<p>description</p>
				<p>
				url: <a href="{game.url}">url</a>
				</p>
			</div>
		);
	}
};