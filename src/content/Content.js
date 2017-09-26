import React from 'react';
import ReactDOM from 'react-dom';

import Gallery from './home/Gallery.js';
import Catch from './home/Catch.js';
import Clients from './home/Clients.js';
import Testimonials from './home/Testimonials.js';
import Products from './home/Products.js';
import Close from './home/Close.js';

import About from './About.js';

import Contact from './contact/Contact.js';
import Details from './contact/Details.js';
import Map from './contact/Map.js';

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
					<Gallery
						images={this.props.contents.galleryImages}
						descriptions={this.props.contents.galleryDescriptions}
						currIndex={this.props.contents.galleryIndex}
						changeIndex={this.props.contents.changeGalleryIndex}
					/>
					<Catch />
					<Clients
						images={this.props.contents.clientImages}
						descriptions={this.props.contents.clientDescriptions}
						currIndex={this.props.contents.clientIndex}
						changeIndex={this.props.contents.changeClientIndex}
					/>
					<Testimonials
						images={this.props.contents.testimonialImages}
						descriptions={this.props.contents.testimonialDescriptions}
						currIndex={this.props.contents.testimonialIndex}
						changeIndex={this.props.contents.changeTestimonialIndex}
					/>
					<Products products={this.props.contents.products} />
					<Close />
			</div>
		);
	},
	renderAbout: function() {
		console.log(this.props)
		return (
			<div id="about_page">
				<About about={this.props.contents.about}/>
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
		console.log(this.props.contents)
		return (
			<div id="contact_page">
				<Contact
					enquireName={this.props.contents.enquireName}
					changeEnquireName={this.props.contents.changeEnquireName}
					enquireEmail={this.props.contents.enquireEmail}
					changeEnquireEmail={this.props.contents.changeEnquireEmail}
					enquireMessage={this.props.contents.enquireMessage}
					changeEnquireMessage={this.props.contents.changeEnquireMessage}
				/>
				<Details
					address={this.props.contents.company.address}
					email={this.props.contents.company.email}
					phone={this.props.contents.company.phone}
					phonealt={this.props.contents.company.phonealt}
				/>
				<Map />
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
