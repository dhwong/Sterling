import React from 'react';
import ReactDOM from 'react-dom';

const Close = React.createClass({
	render: function() {
		return (
			<div id="close">
				<div className="contentLabel">Why choose us?</div>
				<div className="divider"></div>
				<div className="contentBody">
				Being the best in our field means that we are committed to every project, we have ingenious ideas
that become reality and we make every client happy.
				</div>
			</div>
		);
	}
});

export default Close;