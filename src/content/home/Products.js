import React from 'react';
import ReactDOM from 'react-dom';

const Products = React.createClass({
	renderProductItems: function() {
		if(!this.props.products) return;

		const products = this.props.products;
		return products.map(function(product, index) {
			return <ProductItem
								key={index}
								src={product.src}
								label={product.label}
								description={product.description}
								isShort={this.props.contentPage!=="Home"}
							/>;
		}.bind(this));
	},
	render: function() {
		return (
			<div className="products">
				<div className="contentLabel">Products & Services</div>
				<div className="divider">
					<div className="leftDivider"></div>
					<i className="fa fa-handshake-o" aria-hidden="true"></i>
					<div className="rightDivider"></div></div>
				<div className="contentBody">{this.renderProductItems()}</div>
			</div>
		)
	}
});

const ProductItem = React.createClass({
	getDescription: function() {
		if(this.props.description.length > 300 && this.props.isShort)
			return this.props.description.substring(0, 297) + "..."
		return this.props.description
	},
	render: function() {
		return(
			<div className='productItem'>
				<img className='productImage' src={this.props.src}/>
				<div className='productLabel'>{this.props.label}</div>
				<div className='productDescription'>{this.getDescription()}</div>
				<div className='productHook'>Enquire</div>
			</div>
		);
	}
});

export default Products;
