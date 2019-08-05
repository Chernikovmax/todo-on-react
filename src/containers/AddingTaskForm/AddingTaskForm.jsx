import React, { Component } from "react";
import { connect } from "react-redux";
import { addTaskAction } from "../../Redux/todoList";
import cx from "classnames";
import uuid from "uuid";
import { Button } from "../../components/buttons";
import { PlusIcon } from "../../components/icons";
import { TextInput } from "./";
import "./AddingTaskForm.css";

class AddingTaskForm extends Component {
  state = {
    inputValue: "",
    isError: false
  };

  textToState = event => {
    this.setState({ ...this.state, inputValue: event.target.value });
  };

  addTask = () => {
    if (!this.state.inputValue.trim()) {
      this.setState({ ...this.state, isError: true });
      return;
    }

    const { addTaskToStore } = this.props;
    const task = {
      title: this.state.inputValue,
      id: `${uuid.v1()}`,
      completed: false
    };
    addTaskToStore(task);
    this.setState({ ...this.state, inputValue: "", isError: false });
  };

  addTaskOnEnter = event => {
    if (event.key !== "Enter") {
      return;
    }
    event.preventDefault();
    return this.addTask();
  };

  render() {
    return (
      <form className="todo-form">
        <TextInput
          onChange={this.textToState}
          onKeyDown={this.addTaskOnEnter}
          value={this.state.inputValue}
          isError={this.state.isError}
        />
        <div
          className={cx("error-message", this.state.isError && "error--active")}
        >
          <span>You need to enter some value!</span>
        </div>
        <Button
          onClick={this.addTask}
          className="new-task__btn"
          styleType="blue"
          type="button"
        >
          <PlusIcon />
        </Button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addTaskToStore: object => dispatch(addTaskAction(object))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddingTaskForm);
