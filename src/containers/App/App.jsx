import React from "react";
import { TodoItem } from "../TodoItem";
import "./App.css";
import { Header } from "../Header";
import PropTypes from "prop-types";

class App extends React.Component {
  state = {
    tasks: []
  };

  deleteTask = index => {
    const { tasks } = this.state;
    let elementPosition;

    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].index === index) {
        elementPosition = i;
        break;
      }
    }
    this.setState({
      tasks: tasks.filter((x, position) => position !== elementPosition)
    });
  };

  editTask = (text, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    let elementPosition;

    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].index === index) {
        elementPosition = i;
        break;
      }
    }
    newTasks[elementPosition].val = text;
    this.setState({ tasks: newTasks });
  };

  toggleTaskStatus = index => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    let elementPosition;

    for (let i = 0; i < newTasks.length; i++) {
      if (newTasks[i].index === index) {
        elementPosition = i;
        break;
      }
    }
    newTasks[elementPosition].isDone = !newTasks[elementPosition].isDone;
    this.setState({ tasks: newTasks });
  };

  renderItem = (item, i) => {
    return (
      <TodoItem
        key={i}
        index={item.index}
        onEdit={this.editTask}
        onDelete={this.deleteTask}
        onCheck={this.toggleTaskStatus}
      >
        {item}
      </TodoItem>
    );
  };

  render() {
    const {
      tasks,
      allTasksDisplayed,
      todoTasksDisplayed,
      doneTasksDisplayed
    } = this.state;
    return (
      <div className="app">
        <Header />
        {(() => {
          switch (true) {
            case allTasksDisplayed:
              return tasks.map(this.renderItem);
            case todoTasksDisplayed:
              return tasks
                .filter(task => task.isDone === false)
                .map(this.renderItem);
            case doneTasksDisplayed:
              return tasks
                .filter(task => task.isDone === true)
                .map(this.renderItem);
            default:
          }
        })()}
      </div>
    );
  }
}

App.propTypes = {};

export default App;
