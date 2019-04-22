import React from 'react';
import cx from 'classnames';
import './buttons.css';

export const StatusButton = ({
                         children,
                         status,
                         type = 'button',
                         styleType = 'default',
                         ...props
                       }) => (
  <button
    type={type}
    className={cx('task-status-btn', `task-status-btn--${styleType}`, status && 'task-status-btn--active')}
    {...props}
  >
    {children}
  </button>
);
