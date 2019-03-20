import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [];
      currentItem: {text:'', key:''}
    }
  }
  render() {
    return (
      <div className="todo">
        <TodoList addItem={this.addItem} />
      </div>
    );
  }
}

class TodoList extends Component {
  render() {
    return (
      <div className="todo-list-main">
        <form className="input-task-wrapper"
        onSubmit={this.props.addItem}>
          <textarea className="todo__task-input" name="task-input" rows="6" placeholder="WRITE NEW TASK HERE"></textarea>
          <button type="submit" className="todo__add-task-btn">ADD TASK</button>
        </form>
        <section className="todo__tasks">
        </section>
      </div>
    )
  }
}

class Tasks extends Component {
  render() {
    let tasks = this.state.tasks;
      return (
        <div>{
          tasks.map((task, index) => (
          <div key={task.id} className="todo__task" onClick={()=>this.markAsDone(task.id)}>
            <input type="checkbox" id={task.id}/>
            <label className="todo__task-text" for={task.id}>{task.todo}</label>
          </div>
          ))
        }</div>
      );
  }
}

export default App;
