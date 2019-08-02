import React, { Component } from "react";
import { AddingTaskForm } from "../AddingTaskForm";
import { TaskFilterBtn } from "../../components/buttons";
import "./Header.css";

export class Header extends Component {
  state = {
    allTasksDisplayed: true,
    activeTasksDisplayed: false,
    doneTasksDisplayed: false
  };
  renderAllTasks = () => {
    this.setState({ activeTasksDisplayed: false });
    this.setState({ doneTasksDisplayed: false });
    this.setState({ allTasksDisplayed: true });
  };
  renderToDoTasks = () => {
    this.setState({ doneTasksDisplayed: false });
    this.setState({ allTasksDisplayed: false });
    this.setState({ activeTasksDisplayed: true });
  };
  renderDoneTasks = () => {
    this.setState({ allTasksDisplayed: false });
    this.setState({ activeTasksDisplayed: false });
    this.setState({ doneTasksDisplayed: true });
  };

  render() {
    const {
      allTasksDisplayed,
      activeTasksDisplayed,
      doneTasksDisplayed
    } = this.state;
    return (
      <div className="header-container">
        <TaskFilterBtn
          status={allTasksDisplayed}
          onClick={this.renderAllTasks}
          styleType="all"
        >
          ALL
        </TaskFilterBtn>
        <TaskFilterBtn
          status={activeTasksDisplayed}
          onClick={this.renderToDoTasks}
          styleType="todo"
        >
          TO DO
        </TaskFilterBtn>
        <TaskFilterBtn
          status={doneTasksDisplayed}
          onClick={this.renderDoneTasks}
          styleType="done"
        >
          DONE
        </TaskFilterBtn>
        <AddingTaskForm />
      </div>
    );
  }
}
