import cx from "classnames";
import React from "react";
import "./TodoItem.css";
import { Button } from "../../components/buttons";
import {
  DeleteIcon,
  EditIcon,
  SaveIcon,
  CheckboxIcon
} from "../../components/icons";

export class TodoItem extends React.Component {
  state = { edit: false, editedTaskTitle: "" };

  handleOnEdit = () => {
    this.setState({ edit: true });
  };

  handleOnCheck = () => {
    const { onCheck, id } = this.props;
    onCheck(id);
  };

  handleOnSave = () => {
    const { onEdit, id } = this.props;

    onEdit({ title: this.state.editedTaskTitle, id });
    this.setState({ edit: false, editedTaskTitle: "" });
  };

  OnChangeTask = event => {
    this.setState({ ...this.state, editedTaskTitle: event.target.value });
  };

  handleOnRemove = () => {
    const { onDelete, id } = this.props;
    onDelete(id);
  };

  renderItem() {
    const { id, title, isCompleted } = this.props;
    return (
      <div className="todo-item">
        <input type="checkbox" id={id} className="todo-item__checkbox" />
        <label
          htmlFor={id}
          className={cx("todo-item__value", isCompleted && "task--done")}
          onClick={this.handleOnCheck}
        >
          <CheckboxIcon fillingStatus={isCompleted} />
          {title}
        </label>
        <section className="todo-item__buttons-container">
          <Button onClick={this.handleOnEdit} styleType="yellow">
            <EditIcon />
          </Button>
          <Button onClick={this.handleOnRemove} styleType="pink">
            <DeleteIcon />
          </Button>
        </section>
      </div>
    );
  }

  renderOnEdit() {
    const { title } = this.props;
    return (
      <div className="todo-item">
        <input
          className="todo-item__input"
          autoFocus={true}
          defaultValue={title}
          onChange={this.OnChangeTask}
        />
        <section className="todo-item__buttons-container">
          <Button onClick={this.handleOnSave} styleType="green">
            <SaveIcon />
          </Button>
        </section>
      </div>
    );
  }

  render() {
    if (this.state.edit === false) {
      return this.renderItem();
    }

    return this.renderOnEdit();
  }
}
