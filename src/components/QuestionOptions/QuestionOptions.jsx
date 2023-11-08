import React from 'react';
import { updateUserChoice } from '../../utils/quizLogic';
import styles from './QuestionOptions.module.css';

export default function QuestionOptions({
  quiz,
  userChoice,
  setUserChoice,
  isSubmitted,
  isMultipleQuestion,
}) {
  const handleUserChoice = (e) => {
    if (isSubmitted) {
      return;
    }

    updateUserChoice(
      e.target.id,
      userChoice,
      isMultipleQuestion,
      setUserChoice
    );
  };
  return Object.entries(quiz.answers).map((answer) => {
    const id = answer[0];
    const question = answer[1];
    return (
      question && (
        <div key={id} className={styles.option}>
          <input
            className={styles.input}
            type={isMultipleQuestion ? 'checkbox' : 'radio'}
            id={id}
            name={isMultipleQuestion ? undefined : 'quiz'}
            checked={userChoice[id]}
            onChange={handleUserChoice}
          />
          <label htmlFor={id}>{`${id.slice(-1)}. ${question}`}</label>
        </div>
      )
    );
  });
}
