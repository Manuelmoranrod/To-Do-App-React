import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      
    }
  }
  
  render() {
    const {title,desc,date} = this.props.info
    return (
      <section>
        <h3>{title}</h3>
        <p>Descripcion: {desc}</p>
        <p>{date}</p>
        <button onClick={this.props.remove}>Done!</button>
      </section>
    );
  }
}

export default Card;
