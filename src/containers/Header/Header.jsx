import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import AddingTaskForm from "../AddingTaskForm/AddingTaskForm";

import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <div className="header-container">
        <NavLink
          to={"/"}
          activeClassName="link--selected"
          className="task-filter-btn btn--all"
          exact
        >
          All tasks
        </NavLink>
        <NavLink
          to={"/active-tasks"}
          activeClassName="link--selected"
          className="task-filter-btn btn--todo"
        >
          Active tasks
        </NavLink>
        <NavLink
          to={"/done-tasks"}
          activeClassName="link--selected"
          className="task-filter-btn btn--done"
        >
          Done tasks
        </NavLink>
        <AddingTaskForm />
      </div>
    );
  }
}
