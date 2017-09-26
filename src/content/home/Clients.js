import React from 'react';
import ReactDOM from 'react-dom';

const Clients = React.createClass({
	render: function() {
		return (
			<div className="clients">
				<div className="contentLabel">Clients</div>
				<div className="divider">
					<div className="leftDivider"></div>
					<i className="fa fa-users" aria-hidden="true"></i>
					<div className="rightDivider"></div></div>
				<div className="contentBody">
					<div className="imageWrapper">
						<div className="image"></div>
					</div>
				</div>
			</div>
		);
	}
})

export default Clients;