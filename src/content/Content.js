import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './home/Gallery.js';
import Catch from './home/Catch.js';
import Clients from './home/Clients.js';
import Testimonials from './home/Testimonials.js';
import Products from './home/Products.js';
import Close from './home/Close.js';

import Intro from './about/Intro.js';
import Mission from './about/Mission.js';
import Vision from './about/Vision.js';
import Values from './about/Values.js';

const Content = React.createClass({
	getDefaultProps: function() {
		return {
			contentPage: "",
			images: [],
			descriptions: [],
			products: []
		}
	},
	renderContent: function() {
		const contentPage = this.props.contentPage.toLowerCase();
		if(contentPage.indexOf("about") > -1) {
			return this.renderAbout();
		} else if(contentPage.indexOf("products") > -1) {
			return this.renderProducts();
		} else if(contentPage.indexOf("contact") > -1) {
			return this.renderContact();
		}

		return this.renderHome();
	},
	renderHome: function() {
		return (
			<div id="home_page">
				<Gallery />
				<Catch />
				<Clients />
				<Testimonials />
				<Products products={this.props.contents.products} />
				<Close />
			</div>
		);
	},
	renderAbout: function() {
		return (
			<div id="about_page">
				<Intro />
				<Mission />
				<Vision />
				<Values />
			</div>
		);
	},
	renderProducts: function() {
		return (
			<div id="product_page">
				<Products products={this.props.contents.products} />
			</div>
		);
	},
	renderContact: function() {
		return (
			<div id="contact_page">
				placeholder for contact
			</div>
		);
	},
	render: function() {
		return (
			<div id="content">
				{this.renderContent()}
			</div>
		);
	}
});

export default Content;