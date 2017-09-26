import React from 'react';
import ReactDOM from 'react-dom';

const Contact = React.createClass({
  changeEnquireName: function(e) {
    this.props.changeEnquireName(e.target.value);
  },
  changeEnquireEmail: function(e) {
    this.props.changeEnquireEmail(e.target.value);
  },
  changeEnquireMessage: function(e) {
    this.props.changeEnquireMessage(e.target.value);
  },
  render: function() {
    return (
      <div>
        <div>Get In Touch</div>
        <div>Tell us about your enquires or just say hello</div>
        <input id="enquireName" value={this.props.enquireName} onChange={this.changeEnquireName}/>
        <input id="enquireEmail" value={this.props.enquireEmail} onChange={this.changeEnquireEmail}/>
        <input id="enquireMessage" value={this.props.enquireMessage} onChange={this.changeEnquireMessage}/>
        <div>Submit</div>
      </div>
    );
  }
});

export default Contact;
