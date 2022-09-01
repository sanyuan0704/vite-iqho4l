import * as React from 'react';
import styles from './Button.module.css';

export function Button({ children, className }) {
  return (
    <button className={`${styles.btn} ${className}`} type="button">
      {children}
    </button>
  );
}
