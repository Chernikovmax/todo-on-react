import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
    };
    this.edit = this.edit.bind(this);
    this.remove = this.remove.bind(this);
    this.save = this.save.bind(this);
    this.usualRender = this.usualRender.bind(this);
    this._getRef = this._getRef.bind(this);
  }

  edit() {
    this.setState({edit: true});
  }

  save() {
    this.props.edit(this.textArea.value, this.props.index);
    this.setState({edit: false});
  }

  _getRef(node) {
    this.textArea = node;
  }

  remove() {
    this.props.deleteTaskBlock(this.props.index)
  }

  usualRender() {
    return (
      <div className="box">
        <p className="text">{this.props.children}</p>
        <section className="buttons">
          <button onClick={this.edit} className="btn edit-btn">Edit</button>
          <button onClick={this.remove} className="btn remove-btn">Remove</button>
        </section>
      </div>
    )
  }
  renderOnEdit() {
    return (
      <div className="box">
        <textarea autoFocus={true} rows="6" ref={this._getRef} defaultValue={this.props.children}></textarea>
        <section className="buttons">
          <button onClick={this.save} className="btn save-btn">Save</button>
        </section>
      </div>
    )
  }

  render() {
    if (this.state.edit === false) {
      return this.usualRender();
    } else {
      return this.renderOnEdit();
    }
  }
}

export default App;
