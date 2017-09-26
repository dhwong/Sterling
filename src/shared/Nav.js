import React from 'react';
import ReactDOM from 'react-dom';

const homeUrl = "localhost:5000";

const Nav = React.createClass({
	getDefaultProps: function() {
		return {
			navbarItems: [
				{name: "Home", url: homeUrl},
				{name: "About Us", url: homeUrl+"/about-us" },
				{name: "Products & Services", url: homeUrl+"/productsservices" },
				{name: "Contact Us", url: homeUrl+"/contact"}
			]
		}
	},
	renderItems: function() {
		this.props.navbarItems.map(function(item) {
			return <NavItem text={item.name} url={item.url}/>
		});
	},
	render: function() {
		// return (
		// 	<div id="navbar" style={{style}}>
		// 		{this.renderItems()}
		// 	</div>
		// );
		return (
			<div id="navbar">
				<div id="logo"></div>
				<div id="navbarMenu">
					<NavItem text={this.props.navbarItems[3].name}  changeContentPage={this.props.changeContentPage}/>
					<NavItem text={this.props.navbarItems[2].name}  changeContentPage={this.props.changeContentPage}/>
					<NavItem text={this.props.navbarItems[1].name}  changeContentPage={this.props.changeContentPage}/>
					<NavItem text={this.props.navbarItems[0].name}  changeContentPage={this.props.changeContentPage}/>
				</div>
			</div>
		);
	}
});

const NavItem = React.createClass({
	getDefaultProps: function() {
		return({
			text: "",
			url: ""
		});
	},
	changeContentPage: function() {
		this.props.changeContentPage(this.props.text);
	},
	render: function() {
		return (
			<div className="navbarItem" onClick={this.changeContentPage}>
				<span>{this.props.text}</span>
			</div>
		)
	}
});

export default Nav;