import React from 'react';
import QuizActions from '../../components/QuizActions/QuizActions';

export default function Home() {
  return (
    <>
      <header>
        <h2>Welcome to Quizzes</h2>
      </header>
      <main>
        <QuizActions />
      </main>
    </>
  );
}
