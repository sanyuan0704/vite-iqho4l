import * as React from 'react';
import { Button } from './Button';
import styles from './GreenButton.module.css';

export function GreenButton() {
  return <Button className={styles.green}>I'm a green button</Button>;
}
