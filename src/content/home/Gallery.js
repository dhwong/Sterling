import React from 'react';
import ReactDOM from 'react-dom';


const Gallery = React.createClass({
	getDefaultProps: function() {
		return {
			currIndex: 0
		}
	},
	cycleIndex: function(val) {
    if(val < 0) {
      return this.props.images.length-1;
    } else if(val > this.props.images.length-1) {
			return 0;
		} else {
			return val;
		}
  },
	nextIndex: function() {
		this.props.changeIndex(
			this.cycleIndex(this.props.currIndex+1)
		);
	},
	prevIndex: function() {
		this.props.changeIndex(
			this.cycleIndex(this.props.currIndex-1)
		);
	},
	render: function() {
		return (
			<div className="galleryDisplay">
				<GalleryArrows
					direction="<"
					index={this.props.currIndex}
					changeIndex={this.prevIndex}
				/>
				<div className="galleryCenter">
					<div>{this.props.images[this.props.currIndex]}</div>
					<div>{this.props.descriptions[this.props.currIndex]}</div>
					<GalleryNav
						index={this.props.currIndex}
						count={this.props.images.length}
						changeIndex={this.props.changeIndex}
					/>
				</div>
				<GalleryArrows
					direction=">"
					changeIndex={this.nextIndex}
					index={this.props.currIndex}
				/>
			</div>
		);
	}
});

const GalleryArrows = React.createClass({
	changeIndex: function() {
		this.props.changeIndex(this.props.index);
	},
	render: function() {
		return <div className="galleryArrow" onClick={this.changeIndex}>{this.props.direction}</div>
	}
});

const GalleryContent = React.createClass({
	render: function() {
		return (
			<div>
				<div>{this.props.images[this.props.index]}</div>
				<div>{this.props.descriptions[this.props.index]}</div>
			</div>
		)
	}
});

const GalleryNav = React.createClass({
	renderDots: function() {
		let content = [];
		for(var i=0; i<this.props.count; i++) {
			content.push(
				<GalleryNavItem
					index={i}
					selected={i===this.props.index}
					changeIndex={this.props.changeIndex}
				/>
			);
		}
		return content;
	},
	render: function() {
		return <div className="galleryNav">{this.renderDots()}</div>
	}
});

const GalleryNavItem = React.createClass({
	changeIndex: function() {
		this.props.changeIndex(this.props.index);
	},
	render: function() {
		if(this.props.selected) {
			return <div className="selected" onClick={this.changeIndex}>+</div>
		}
		return <div onClick={this.changeIndex}>+</div>
	}
});

export default Gallery;
