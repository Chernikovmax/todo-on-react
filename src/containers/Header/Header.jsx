import React from "react";
import { NavLink } from "react-router-dom";
import { AddingTaskForm } from "../AddingTaskForm";

import "./Header.css";

export function Header() {
  return (
    <div className="header-container">
      <NavLink to={"/"} className="task-filter-btn btn--all">
        All tasks
      </NavLink>
      <NavLink to={"/active-tasks"} className="task-filter-btn btn--todo">
        Active tasks
      </NavLink>
      <NavLink to={"/done-tasks"} className="task-filter-btn btn--done">
        Done tasks
      </NavLink>
      <AddingTaskForm />
    </div>
  );
}
