import React, {Component} from 'react';
import NavBarButton from './NavBarButton';

export default class NavBar extends Component {
	render() {
		return(
			<div className='NavBar'>
				<h1>Home!</h1>
				<NavBarButton text={'Home'} />
				<NavBarButton text={'Body'} />
				<NavBarButton text={'FAQ'} />
			</div>
			);
	}
}