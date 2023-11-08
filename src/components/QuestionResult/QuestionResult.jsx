import React from 'react';
import styles from './QuestionResult.module.css';

export default function QuestionResult({
  isCorrect,
  correctAnswers,
  explanation,
}) {
  return (
    <>
      <div className={styles.div}>
        <span className={styles.isCorrect}>
          {isCorrect ? 'Correct!' : 'Wrong!'}
        </span>
        <span>{`Correct Answer(s): ${correctAnswers}`}</span>
        <p>{explanation || 'There is no explanation.'}</p>
      </div>
    </>
  );
}
