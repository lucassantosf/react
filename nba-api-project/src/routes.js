import React from 'react';

import { BrowserRouter, Switch , Route } from 'react-router-dom';

import Main from './pages/main';
import Game from './pages/game';

const Routes = ()=>(
	<BrowserRouter>
		<Switch>
			<Route exact path="/" component={Main} />
			<Route path="/games/:id" component={Game} />
		</Switch>
	</BrowserRouter>		
);

export default Routes;