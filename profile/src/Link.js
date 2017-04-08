import React, {Component} from 'react';

export default class Link extends Component {
	render() {
		return(
			<div className="Link">
				<a href={this.props.link}>{this.props.text}</a>
			</div>
			);
	}
}