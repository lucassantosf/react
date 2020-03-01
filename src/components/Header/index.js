import React from 'react';
import ball from './ball.png';
import back from './background.JPG';

import './styles.css';

const Header = () => (
	<header id="main-header">
		<img src={ball} className="ball" />
		FootStats
	</header>
);

export default Header;