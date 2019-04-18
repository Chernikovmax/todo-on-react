import cx from 'classnames';
import React from 'react';
import './todoItem.css';
import {Button} from '../components/button';
import {DeleteIcon, EditIcon, SaveIcon, CheckboxIcon} from '../components/icons';

export class TodoItem extends React.Component {
  state = {edit: false};

  handleOnEdit = () => {
    this.setState({edit: true});
  };

  handleOnCheck = () => {
    const {onCheck} = this.props;
    onCheck(this.props.index);
  }

  handleOnSave = () => {
    const {onEdit} = this.props;
    onEdit(this.textArea.value, this.props.index);
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
    this.textArea = node;
  };

  renderItem() {
    return (
      <div className="todo-item">
        <input  type="checkbox"
                id={this.props.children.index}
                className="todo-item__checkbox"
                onClick={this.handleOnCheck}
        />
        <label  htmlFor={this.props.children.index}
                className={cx('todo-item__value', this.props.children.isDone && "task--done")}
        >
          <CheckboxIcon/>
          {this.props.children.val}
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
    return (
      <div className="todo-item">
        <input  className="todo-item__input"
                autoFocus={true}
                ref={this._getRef}
                defaultValue={this.props.children.val}
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
