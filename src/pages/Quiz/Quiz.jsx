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
    <>
      <header>
        <h2>{params.category} Quiz</h2>
        <h4 className={styles.difficulty}>{params.difficulty}</h4>
      </header>
      <main>
        {quizzes && (
          <QuestionForm
            quiz={quizzes[quizIndex]}
            quizIndex={quizIndex}
            setQuizIndex={setQuizIndex}
            isLastQuestion={quizIndex === quizzes.length - 1}
          />
        )}
      </main>
    </>
  );
}
