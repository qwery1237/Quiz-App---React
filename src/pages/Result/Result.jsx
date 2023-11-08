import React from 'react';
import { useLocation } from 'react-router-dom';
import styles from './Result.module.css';
import HomeButton from '../../components/HomeButton/HomeButton';

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
        <HomeButton backgroundColor={'--color-primary'} />
      </main>
    </>
  );
}
