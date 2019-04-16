import cx from 'classnames';
import React from 'react';

import {TodoItem} from '../todoItem';
import {Button} from '../components/button';
import {PlusIcon} from '../components/icons/plusIcon.jsx';
import './app.css';

export class App extends React.Component {
  state = {
    tasks: [],
    isError: false
  };

  addTask = () => {
    const {value} = this.newTaskInputRef;
    if (value === "") {
      this.setState({isError: true});
      return alert('You need to enter a task.');
    }
    const {tasks} = this.state;
    const newTasks = [...tasks, value];
    this.setState({tasks: newTasks, isError: false});
    this.newTaskInputRef.value = "";
  };

  deleteTask = (elementPosition) => {
    const {tasks} = this.state;
    this.setState({tasks: tasks.filter((x, position) => position !== elementPosition)});
  };

  editTask = (text, i) => {
    const {tasks} = this.state;
    const newTasks = [...tasks];
    newTasks[i] = text;
    this.setState({tasks: newTasks});
  };

  renderItem = (item, i) => {
    return (
      <TodoItem key={i} index={i} onEdit={this.editTask} onDelete={this.deleteTask}>
        {item}
      </TodoItem>
    );
  };

  _getNewTaskRef = (node) => {
    this.newTaskInputRef = node;
  };

  render() {
    const {isError, tasks} = this.state;
    return (
      <div className="app">
        <div className="todo-input__container">
          <textarea className={cx('todo_input', isError && "todo_input--error")} autoFocus={true} rows="2"
                    ref={this._getNewTaskRef}
                    placeholder="Enter new task here">
          </textarea>
          <Button
            onClick={this.addTask}
            className="new-task__btn"
            styleType='yellow'
          >
            <PlusIcon />
          </Button>
        </div>
        {tasks.map(this.renderItem)}
      </div>
    )
  }
}
