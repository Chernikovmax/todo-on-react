import React from 'react';
import './todoItem.css';
import {Button} from '../components/button';
import {DeleteIcon, EditIcon, SaveIcon} from '../components/icons';

export class TodoItem extends React.Component {
  state = {edit: false};

  handleOnEdit = () => {
    this.setState({edit: true});
  };

  handleOnSave = () => {
    const {onEdit} = this.props;
    onEdit(this.textArea.value, this.props.index);
    this.setState({edit: false});
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
        <p className="todo-item__value">{this.props.children}</p>
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
        <textarea className="todo-item__input" autoFocus={true} rows="6" ref={this._getRef}
                  defaultValue={this.props.children}/>
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
