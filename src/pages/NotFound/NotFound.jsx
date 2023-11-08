import React from 'react';
import styles from './NotFound.module.css';
import HomeButton from '../../components/HomeButton/HomeButton';

export default function NotFound() {
  return (
    <div className={styles.div}>
      <h2>Something went wrong!</h2>
      <HomeButton backgroundColor={'--color-error-dark'} />
    </div>
  );
}
