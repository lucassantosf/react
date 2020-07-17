import React from 'react';
import logo from './logo.png'; 

import './styles.css';

const Header = () => (
	<header id="main-header">
		<img src={logo} className="logo" /> 
		<div className="divisorHeader"></div>
	</header>
	
);

export default Header;