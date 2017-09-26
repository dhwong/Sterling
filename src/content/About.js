import React from 'react';
import ReactDOM from 'react-dom';

const About = React.createClass({
  renderSections: function() {
    return this.props.about.map(function(item, index) {
      return <AboutItem
                section={item.section}
                text={item.text}
              />
    })
  },
  render: function() {
    return <div>
      {this.renderSections()}
      </div>
  }
});

const AboutItem = React.createClass({
  render: function() {
    return (
      <div>
        <div>{this.props.section}</div>
        <div>{this.props.text}</div>
      </div>
    )
  }
});

export default About;
