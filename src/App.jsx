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
  }

  edit() {
    this.setState({edit: true});
  }

  save() {
    this.props.edit(this.refs.newText.value, this.props.index);
    this.setState({edit: false});
  }

  remove() {
    this.props.deleteTaskBlock(this.props.index)
  }

  usualRender() {
    return (
      <div className="box">
        <span className="text">{this.props.children}</span>
        <section className="buttons">
          <button onClick={this.edit} className="btn light">Edit</button>
          <button onClick={this.remove} className="btn red">Remove</button>
        </section>
      </div>
    )
  }
  renderOnEdit() {
    return (
      <div className="box">
        <textarea autofocus rows="6" ref="newText" defaultValue={this.props.children}></textarea>
        <section className="buttons">
          <button onClick={this.save} className="btn success">Save</button>
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
