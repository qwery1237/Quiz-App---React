import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getQuiz } from '../../apis/quiz';
import styles from './Quiz.module.css';
import QuestionForm from '../../components/QuestionForm/QuestionForm';

export default function Quiz() {
  const [quizzes, setQuizzes] = useState();
  const [quizIndex, setQuizIndex] = useState(0);

  const {
    state: { params },
  } = useLocation();

  useEffect(() => {
    getQuiz(params).then((res) => {
      setQuizzes(res);
    });
  }, []);

  return (
    quizzes && (
      <>
        <header className={styles.header}>
          <h1 className={styles.category}>{params.category} Quiz</h1>
          <h3 className={styles.difficulty}>{params.difficulty}</h3>
        </header>
        <main>
          <QuestionForm
            quiz={quizzes[quizIndex]}
            quizIndex={quizIndex}
            setQuizIndex={setQuizIndex}
            isLastQuestion={quizIndex === quizzes.length - 1}
          />
        </main>
      </>
    )
  );
}
