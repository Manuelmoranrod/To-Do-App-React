import React, { Component } from "react";
import ListCard from '../ListCard/ListCard'
import tasks from '../../preData'

class Main extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      data: {},
      "tasks": tasks
    }
  }
  addTask = (event)=>{
    event.preventDefault()
    const title = event.target.elements.title.value;
    const desc = event.target.elements.desc.value;
    const date = event.target.elements.date.value;
    
    if(title && desc && date){
      const task = { title,desc,date }
      this.setState({data: task})

      const newTask = task
      this.setState({ tasks:[...this.state.tasks, newTask]})
    }
  }

  resetTask = () => {
    this.setState({tasks: []})
  }

  removeAll = () => {
    this.setState({data: {}});
    this.setState({tasks: []})
  }

  removeOne = (i) => {
    const newList = this.state.tasks.filter((curr,x)=> x!==i )
    this.setState({ task: newList })
  }
  
  render() {
    return (
      <>
        <form onSubmit={this.addTask}>
          <label>
            Título:
          <input type="text" name="title"/>
          </label><br/>
          <label>
            Descripción:
          <input type="text" name="desc"/>
          </label><br/>
          <label>
            Fecha:
          <input type="date" name="date"/>
          </label><br/>
          <input type="submit" value="Submit" />
        </form><br/>
        <button onClick={this.resetTask}>Reset</button>
        <button onClick={this.removeAll}>Remove All</button>
        <section>
          <ListCard info={this.state.tasks}/>
        </section>
      </>
    );
  }
}

export default Main;
