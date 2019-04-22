import cx from 'classnames';
import React from 'react';
import uuid from "uuid";

import {TodoItem} from '../todoItem';
import {Button} from '../components/buttons';
import {StatusButton} from '../components/buttons';
import {PlusIcon} from '../components/icons';
import './app.css';

export class App extends React.Component {
  state = {
    tasks: [],
    isError: false,
    allTasksDisplayed: true,
    todoTasksDisplayed: false,
    doneTasksDisplayed: false
  };

  renderAllTasks = () => {
    this.setState({todoTasksDisplayed: false});
    this.setState({doneTasksDisplayed: false});
    this.setState({allTasksDisplayed: true});
  };
  renderToDoTasks = () => {
    this.setState({doneTasksDisplayed: false});
    this.setState({allTasksDisplayed: false});
    this.setState({todoTasksDisplayed: true});
  };
  renderDoneTasks = () => {
    this.setState({allTasksDisplayed: false});
    this.setState({todoTasksDisplayed: false});
    this.setState({doneTasksDisplayed: true});
  };

  addTask = () => {
    const {value} = this.newTaskInputRef;
    if (value === "") {
      this.setState({isError: true});
      return alert('You need to enter a task.');
    }
    const {tasks} = this.state;
    const newTasks = [...tasks, {val: value, index: uuid.v1(), isDone: false}];
    this.setState({tasks: newTasks, isError: false});
    this.newTaskInputRef.value = "";
  };

  addTaskOnEnter = (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    return this.addTask();
  };

  deleteTask = (index) => {
    const {tasks} = this.state;
    let elementPosition;

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].index === index) {
        elementPosition = i;
        break;
      }
    }
    this.setState({tasks: tasks.filter((x, position) => position !== elementPosition)});
  };

  editTask = (text, index) => {
    const {tasks} = this.state;
    const newTasks = [...tasks];
    let elementPosition;

    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].index === index) {
        elementPosition = i;
        break;
      }
    }
    newTasks[elementPosition].val =  text;
    this.setState({tasks: newTasks});
  };

  toggleTaskStatus = (index) => {
    const {tasks} = this.state;
    const newTasks = [...tasks];
    let elementPosition;

    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].index === index) {
        elementPosition = i;
        break;
      }
    }
    newTasks[elementPosition].isDone = !newTasks[elementPosition].isDone;
    this.setState({tasks: newTasks});
  };

  renderItem = (item, i) => {
    return (
      <TodoItem key={i} index={item.index}
                onEdit={this.editTask}
                onDelete={this.deleteTask}
                onCheck={this.toggleTaskStatus}
      >
        {item}
      </TodoItem>
    );
  };

  _getNewTaskRef = (node) => {
    this.newTaskInputRef = node;
  };

  render() {
    const {isError, tasks, allTasksDisplayed, todoTasksDisplayed,doneTasksDisplayed} = this.state;
    return (
      <div className="app">
        <div className="todo-input__container">
            <StatusButton
              status={allTasksDisplayed}
              onClick={this.renderAllTasks}
              styleType="all"
            >
              ALL
            </StatusButton>
            <StatusButton
              status={todoTasksDisplayed}
              onClick={this.renderToDoTasks}
              styleType="todo"
            >
              TO DO
            </StatusButton>
            <StatusButton
              status={doneTasksDisplayed}
              onClick={this.renderDoneTasks}
              styleType="done"
            >
              DONE
            </StatusButton>
          <input  className={cx('todo_input', isError && "todo_input--error")}
                  autoFocus={true}
                  ref={this._getNewTaskRef}
                  onKeyDown={this.addTaskOnEnter}
                  placeholder="Enter new task here"
          >
          </input>
          <Button
            onClick={this.addTask}
            className="new-task__btn"
            styleType='blue'
          >
            <PlusIcon />
          </Button>
        </div>

        { (() => {
            switch(true) {
                case allTasksDisplayed :
                  return tasks.map(this.renderItem);
                case todoTasksDisplayed :
                  return tasks.filter(task => task.isDone === false).map(this.renderItem);
                case doneTasksDisplayed :
                  return tasks.filter(task => task.isDone === true).map(this.renderItem);
                default:
            }
          })()
        }
      </div>
    )
  }
}
