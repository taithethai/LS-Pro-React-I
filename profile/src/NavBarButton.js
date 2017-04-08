import React, {Component} from 'react';

export default class NavBarButton extends Component {
	render() {
		return(
		<button className="NavBarButton">
			{this.props.text} 
		</button>
		);
	}
}