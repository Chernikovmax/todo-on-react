import React, { Component } from "react";
import cx from "classnames";
import uuid from "uuid";
import { Button } from "../../components/buttons";
import { PlusIcon } from "../../components/icons";
import "./AddingTaskForm.css";

export class AddingTaskForm extends Component {
  state = {
    task: {},
    isError: false
  };
  addTask = () => {
    const { value } = this.newTaskInputRef;
    if (value === "") {
      this.setState({ isError: true });
      return alert("You need to enter a task.");
    }

    this.setState({
      task: { id: uuid.v4(), title: value, completed: false },
      isError: false
    });
    this.newTaskInputRef.value = "";
  };

  addTaskOnEnter = event => {
    if (event.key !== "Enter") {
      return;
    }
    return this.addTask();
  };

  _getNewTaskRef = node => {
    this.newTaskInputRef = node;
  };

  render() {
    const { isError } = this.state;
    return (
      <form className="todo-form">
        <input
          className={cx("todo-form_input", isError && "todo-form_input--error")}
          autoFocus={true}
          ref={this._getNewTaskRef}
          onKeyDown={this.addTaskOnEnter}
          placeholder="Enter new task here"
        />
        <Button
          onClick={this.addTask}
          className="new-task__btn"
          styleType="blue"
        >
          <PlusIcon />
        </Button>
      </form>
    );
  }
}
