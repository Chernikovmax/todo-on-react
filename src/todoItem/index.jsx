import cx from 'classnames';
import React from 'react';
import './todoItem.css';
import {Button} from '../components/buttons';
import {DeleteIcon, EditIcon, SaveIcon, CheckboxIcon} from '../components/icons';

export class TodoItem extends React.Component {
  state = {edit: false};

  handleOnEdit = () => {
    this.setState({edit: true});
  };

  handleOnCheck = () => {
    const {onCheck, index} = this.props;
    onCheck(index);
  }

  handleOnSave = () => {
    const {onEdit, index} = this.props;
    onEdit(this.input.value, index);
    this.setState({edit: false});
  };

  saveTaskOnEnter = (event) => {
    if (event.key !== 'Enter') {
      return;
    }
    return this.handleOnSave();
  };

  handleOnRemove = () => {
    const {onDelete, index} = this.props;
    onDelete(index);
  };

  _getRef = (node) => {
    this.input = node;
  };

  renderItem() {
    const {index, isDone, val} = this.props.children;
    return (
      <div className="todo-item">
        <input  type="checkbox"
                id={index}
                className="todo-item__checkbox"
        />
        <label  htmlFor={index}
                className={cx('todo-item__value', isDone && "task--done")}
                onClick={this.handleOnCheck}
        >
          <CheckboxIcon fillingStatus={isDone} />
          {val}
        </label>
        <section className="todo-item__buttons-container">
          <Button onClick={this.handleOnEdit} styleType="yellow">
            <EditIcon/>
          </Button>
          <Button onClick={this.handleOnRemove} styleType="pink">
            <DeleteIcon/>
          </Button>
        </section>
      </div>
    )
  }

  renderOnEdit() {
    const {val} = this.props.children;
    return (
      <div className="todo-item">
        <input  className="todo-item__input"
                autoFocus={true}
                ref={this._getRef}
                defaultValue={val}
                onKeyDown={this.saveTaskOnEnter}
        />
        <section className="todo-item__buttons-container">
          <Button onClick={this.handleOnSave} styleType="green">
            <SaveIcon/>
          </Button>
        </section>
      </div>
    )
  }

  render() {
    if (this.state.edit === false) {
      return this.renderItem();
    }

    return this.renderOnEdit();
  }
}
