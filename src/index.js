import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';

class Wrapper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasks: [],
      classForNotFilledTask: ""
    };
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
    this.sortOutTasks = this.sortOutTasks.bind(this);
    this.addTask = this.addTask.bind(this);
    this._getNewTaskRef = this._getNewTaskRef.bind(this);
  }

  addTask() {
    let text = this.newTaskInputRef.value;
    if (text === "") {
      this.setState({classForNotFilledTask: "task-input--error"});
      return alert('You need to enter a task.');
    } else {
      this.setState({classForNotFilledTask: ""});
    }
    let arrOfTasks = this.state.tasks;
    arrOfTasks.push(text);
    this.setState({tasks: arrOfTasks});
    this.newTaskInputRef.value = "";
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

  _getNewTaskRef(node) {
    this.newTaskInputRef = node;
  }

  render() {
    return (
      <div className="wrapper">
        <div className="input-task-wrapper">
          <textarea className={`task-input ${this.state.classForNotFilledTask}`} autoFocus={true} rows="2" ref={this._getNewTaskRef}
            placeholder="Enter new task here">
          </textarea>
          <button onClick={this.addTask} className="btn new-task-btn">
            +
          </button>
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
