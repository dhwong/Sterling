import React from 'react';
import ReactDOM from 'react-dom';

const Footer = React.createClass({
	getDefaultProps: function() {
		return {
			social: [
				{name:"facebook", url: ""},
				{name:"twitter", url: ""},
				{name:"youtube", url: ""},
				{name:"instagram", url: ""},
				{name:"pinterest", url: ""},
				{name:"linkedin", url: ""},
				{name:"skype", url: ""},
				{name:"paypal", url: ""},
			]
		}
	},
	renderSocial: function() {
		return this.props.social.map(function(item) {
			// if(!!item.url) {
				return <i key={item.name} class={"fa fa-"+item.name} aria-hidden="true"></i>
			// }

		});
	},
	render: function() {
		// return(
		// 	<div id="footer">
		// 		<div id="copyright">
		// 			Copyright © 2017 Sterling Products - Counter Security Solutions.
		// 		</div>
		// 		<div id="social">
		// 		</div>
		// 	</div>
		// );
		return(
			<div id="footer">
				<div id="copyright">
					Copyright © 2017 Sterling Products - Counter Security Solutions.
				</div>
				<div id="social">
					<i className={"fa fa-" + this.props.social[0].name}></i>
					<i className={"fa fa-" + this.props.social[1].name} aria-hidden="true"></i>
					<i className={"fa fa-" + this.props.social[2].name} aria-hidden="true"></i>
					<i className={"fa fa-" + this.props.social[3].name} aria-hidden="true"></i>
					<i className={"fa fa-" + this.props.social[4].name} aria-hidden="true"></i>
					<i className={"fa fa-" + this.props.social[5].name} aria-hidden="true"></i>
					<i className={"fa fa-" + this.props.social[6].name} aria-hidden="true"></i>
					<i className={"fa fa-" + this.props.social[7].name} aria-hidden="true"></i>
				</div>
			</div>
		);
	}
});

export default Footer;
