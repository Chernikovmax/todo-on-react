import React, { Component } from "react";
import cx from "classnames";

export class TextInput extends Component {
  render() {
    const { onChange, onKeyDown, value, isError } = this.props;
    return (
      <input
        className={cx("todo-form_input", isError && "input--error")}
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
        autoFocus={true}
        required={true}
        placeholder="Enter new task here"
        type="text"
      />
    );
  }
}
