import React, { Component } from 'react';

class Project extends Component {
  render() {
    return(
      <div className={this.props.class}>
        <a href={this.props.href} target="_blank" rel="noopener noreferrer">
          <img src={process.env.PUBLIC_URL + this.props.image} name={this.props.name} onMouseEnter={this.props.onHoverIn} onMouseLeave={this.props.onHoverOut} alt={this.props.alt}></img>
          <p>{this.props.description}</p>
        </a>
      </div>
    )
  }
}

export default Project;
