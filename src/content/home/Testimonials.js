import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './Gallery.js';

const Testimonials = React.createClass({
	render: function() {
		return (
			<div className="testimonials">
				<div className="contentLabel">Testimonials</div>
				<div className="divider">
					<div className="leftDivider"></div>
					<i className="fa fa-comments" aria-hidden="true"></i>
					<div className="rightDivider"></div></div>
				<div className="contentBody">
					<Gallery />
				</div>
			</div>
		)
	}
})

export default Testimonials;