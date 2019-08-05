import React, { Component } from "react";
import { TodoItem } from "../TodoItem";
import "./TodoList.css";

export class TodoList extends Component {
  render() {
    const { taskList, onEdit, onDelete, onCheck } = this.props;
    return (
      <ul className="tasks-list">
        {taskList.map(task => (
          <TodoItem
            key={task.id}
            id={task.id}
            title={task.title}
            isCompleted={task.completed}
            onEdit={onEdit}
            onDelete={onDelete}
            onCheck={onCheck}
          />
        ))}
      </ul>
    );
  }
}
