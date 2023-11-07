import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Result() {
  const {
    state: { score, totalNumOfQuiz },
  } = useLocation();
  return (
    <main>
      <h2>Congratulation!</h2>
      <span>{`You got ${score} out of ${totalNumOfQuiz}`}</span>
      <Link to={'/'}>Go back to home page</Link>
    </main>
  );
}
