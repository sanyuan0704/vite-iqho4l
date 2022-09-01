import * as React from 'react';
import { Button } from './Button';
import styles from './BlueButton.module.css';

export function BlueButton() {
  return <Button className={styles.blue}>I'm a blue button</Button>;
}
