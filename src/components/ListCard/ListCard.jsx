import React, { Component } from "react";
import Card from '../Card/Card'

class ListCard extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: this.props.info
    
    }
  }

  paintTasks = () => {
    console.log(this.props.info)
    return this.props.info.map((task, i) => <Card info={task} key={i} remove={()=>this.props.removeTask(i)}/>)
  }

  render() {
    return (
      <section>
        <h1>Lista de Tareas:</h1>
        <article>
          {this.paintTasks()}
        </article>
      </section>
    );
  }
}

export default ListCard;
