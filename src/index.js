import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: []
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.sortOutTasks = this.sortOutTasks.bind(this);
    this.addTask = this.addTask.bind(this);
  }

  addTask(text) {
    let arrOfTasks = this.state.tasks;
    arrOfTasks.push(text);
    this.setState({tasks: arrOfTasks});
  }

  deleteTask(i) {
    let arrOfTasks = this.state.tasks;
    arrOfTasks.splice(i, 1);
    this.setState({tasks: arrOfTasks});
  }

  editTask(text, i) {
    let arrOfTasks = this.state.tasks;
    arrOfTasks[i] = text;
    this.setState({tasks: arrOfTasks});
  }

  sortOutTasks(item, i) {
    return (
      <App key={i} index={i} edit={this.editTask} deleteTaskBlock={this.deleteTask}>
        {item}
      </App>
    );
  }

  render() {
    const textInput = document.get
    return (
      <div className="wrapper">
        <div className="input-task-wrapper">
          <textarea autofocus rows="2" ref="newText" placeholder="Write your task here"></textarea>
          <button onClick={this.addTask.bind(null, '')} className="btn new-task-btn">+</button>
        </div>
        {this.state.tasks.map(this.sortOutTasks)}
      </div>
    )
  }
}

ReactDOM.render(
  <Wrapper />
  , document.getElementById('root')
);
