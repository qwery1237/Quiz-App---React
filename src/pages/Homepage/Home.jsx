import React from 'react';
import QuizActions from '../../components/QuizActions/QuizActions';
import styles from './Home.module.css';

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>Welcome to Quizzes</h1>
      </header>
      <main className={styles.main}>
        <QuizActions />
      </main>
    </>
  );
}
