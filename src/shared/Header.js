import React from 'react';
import ReactDOM from 'react-dom';

import Nav from './Nav.js';

const Header = React.createClass({
	getDefaultProps: function() {
		return {
			phone: "0 732 903 511",
			email: "info@sterlingproducts.com.au"
		}
	},
	renderLogo: function() {
		return <div id="logo"></div>
	},
	renderContact: function() {
		return (
			<div id="contact">
				<div id="phone">{this.props.phone}</div>
				<div id="email">{this.props.email}</div>
			</div>
		);
	},
	render: function() {
		return (
			<div id="header">
				{this.renderContact()}
				<Nav changeContentPage={this.props.changeContentPage} />
			</div>
			)
	}
});

export default Header;