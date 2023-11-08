import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Result.module.css';
import { BsArrowRightSquare } from 'react-icons/bs';

export default function Result() {
  const {
    state: { score, totalNumOfQuiz },
  } = useLocation();
  return (
    <>
      <header>
        <h1>Congratulation!</h1>
      </header>
      <main className={styles.main}>
        <h2>{`You got ${score} out of ${totalNumOfQuiz}`}</h2>
        <Link className={styles.link} to={'/'}>
          <BsArrowRightSquare className={styles.icon} />
          Go back to home page
        </Link>
      </main>
    </>
  );
}
