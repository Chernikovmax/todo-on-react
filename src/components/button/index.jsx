import React from 'react';
import cx from 'classnames';
import './button.css';

export const Button = ({
                         children,
                         className,
                         type = 'button',
                         styleType = 'default',
                         ...props
                       }) => (
  <button
    type={type}
    className={cx('btn', `btn--${styleType}`, className)}
    {...props}
  >
    {children}
  </button>
);