import React from 'react';
import cx from 'classnames';

export const CheckboxIcon = ({fillingStatus}) => (
  <div className={cx('btn-aligner', 'checkbox-btn', fillingStatus && 'checkbox--filled')}>
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 507.2 507.2'>
      <circle cx='253.6' cy='253.6' r='253.6' fill='#32ba7c' />
      <path d='M188.8,368l130.4,130.4c108-28.8,188-127.2,188-244.8c0-2.4,0-4.8,0-7.2L404.8,152L188.8,368z'
        fill='#0aa06e' />
      <g fill='#fff'>
        <path d='M260,310.4c11.2,11.2,11.2,30.4,0,41.6l-23.2,23.2c-11.2,11.2-30.4,11.2-41.6,0L93.6,272.8 c-11.2-11.2-11.2-30.4,0-41.6l23.2-23.2c11.2-11.2,30.4-11.2,41.6,0L260,310.4z'
          />
        <path d='M348.8,133.6c11.2-11.2,30.4-11.2,41.6,0l23.2,23.2c11.2,11.2,11.2,30.4,0,41.6l-176,175.2 c-11.2,11.2-30.4,11.2-41.6,0l-23.2-23.2c-11.2-11.2-11.2-30.4,0-41.6L348.8,133.6z'
          />
      </g>
    </svg>
  </div>
);
