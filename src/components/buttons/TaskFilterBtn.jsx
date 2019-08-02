import React from "react";
import cx from "classnames";
import "./buttons.css";

export const TaskFilterBtn = ({
  children,
  status,
  type = "button",
  styleType = "default",
  ...props
}) => (
  <button
    type={type}
    className={cx(
      "task-filter-btn",
      `btn--${styleType}`,
      status && "btn--active"
    )}
    {...props}
  >
    {children}
  </button>
);
