import React from 'react';
import './App.css';
import Header from './shared/Header';
import Footer from './shared/Footer';
import Content from './content/Content';

const Page = React.createClass({
  getInitialState: function() {
    return {
      contentPage: "Home"
    }
  },
  changeContentPage: function(val) {
    this.setState({contentPage: val});
  },
  getContents: function() {
    var contents = {};
    if(this.state.contentPage === "Home" || this.state.contentPage === "Products & Services") {
      contents.products = [];
      for(let index in this.props.products) {
        contents.products[index] = this.props.products[index]
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
