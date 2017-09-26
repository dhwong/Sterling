import React from 'react';
import ReactDOM from 'react-dom';

const Details = React.createClass({
  render: function() {
    return (
      <div>
        <div>Contact Details</div>
        <div>{this.props.address}</div>
        <div>{this.props.email}</div>
        <div>{this.props.phone}</div>
        <div>{this.props.phonealt}</div>
      </div>
    )
  }
});

export default Details;
