import React from 'react';
import './App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Content from './content/Content';

const Page = React.createClass({
  getInitialState: function() {
    return {
      contentPage: "Home",
      galleryIndex: 0,
      testimonialIndex: 0,
      clientIndex: 0,

      enquireName: "",
      enquireEmail: "",
      enquireMessage: ""
    }
  },
  changeContentPage: function(val) {
    this.setState({contentPage: val});
  },
  changeGalleryIndex: function(val) {
    this.setState({galleryIndex: val});
  },
  changeTestimonialIndex: function(val) {
    this.setState({testimonialIndex: val});
  },
  changeClientIndex: function(val) {
    this.setState({clientIndex: val});
  },

  changeEnquireName: function(val) {
    this.setState({enquireName: val});
  },
  changeEnquireEmail: function(val) {
    this.setState({enquireEmail: val});
  },
  changeEnquireMessage: function(val) {
    this.setState({enquireMessage: val});
  },
  getContents: function() {
    var contents = {};
    if(this.state.contentPage === "Home") {
      contents.products = this.props.products;

      contents.galleryIndex = this.state.galleryIndex;
      contents.changeGalleryIndex = this.changeGalleryIndex;
      contents.galleryImages = this.props.galleryImages;
      contents.galleryDescriptions = this.props.galleryDescriptions;

      contents.testimonialIndex = this.state.testimonialIndex;
      contents.changeTestimonialIndex = this.changeTestimonialIndex;
      contents.testimonialImages = this.props.testimonialImages;
      contents.testimonialDescriptions = this.props.testimonialDescriptions;

      contents.clientIndex = this.state.clientIndex;
      contents.changeClientIndex = this.changeClientIndex;
      contents.clientImages = this.props.clientImages;
      contents.clientDescriptions = this.props.clientDescriptions;
    }
    if(this.state.contentPage === "About Us") {
      contents.about = this.props.about;
    }
    if(this.state.contentPage === "Products & Services") {
      contents.products = this.props.products;
    }
    if(this.state.contentPage === "Contact Us") {
      contents.enquireName = this.state.enquireName;
      contents.changeEnquireName = this.changeEnquireName;
      contents.enquireEmail = this.state.enquireEmail;
      contents.changeEnquireEmail = this.changeEnquireEmail;
      contents.enquireMessage = this.state.enquireMessage;
      contents.changeEnquireMessage = this.state.changeEnquireMessage;
      contents.company = {
        address: this.props.address,
        email: this.props.email,
        phone: this.props.phone,
        phonealt:this.props.phonealt
      }
    }
    return contents;
  },
  render: function() {
      return (
        <div>
          <Header
            phone={this.props.phone}
            email={this.props.email}
            changeContentPage={this.changeContentPage}
          />
          <Content
            contentPage={this.state.contentPage}
            changeContentPage={this.changeContentPage}
            contents={this.getContents()}
          />
          <Footer social={this.props.social}/>
        </div>
      );
    }
});

export default Page;
