import React from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRightSquare } from 'react-icons/bs';
import styles from './HomeButton.module.css';

export default function HomeButton({ backgroundColor }) {
  return (
    <Link
      className={styles.link}
      to={'/'}
      style={{ backgroundColor: `var(${backgroundColor})` }}
    >
      <BsArrowRightSquare className={styles.icon} />
      Go back to home page
    </Link>
  );
}
