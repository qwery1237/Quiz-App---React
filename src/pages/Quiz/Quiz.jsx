import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getQuiz } from '../../apis/quiz';
import styles from './Quiz.module.css';
import QuestionForm from '../../components/QuestionForm/QuestionForm';

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const {
    state: { params },
  } = useLocation();

  useEffect(() => {
    getQuiz(params).then((res) => {
      setQuizzes(res);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      {console.log(quizzes)}
      <header>
        <h2>{params.category} Quiz</h2>
        <h4 className={styles.difficulty}>{params.difficulty}</h4>
      </header>
      <main>
        {!isLoading && (
          <QuestionForm
            quiz={quizzes[currentQuizIndex]}
            quizIndex={currentQuizIndex}
            setQuizIndex={setCurrentQuizIndex}
            lastIndex={quizzes.length - 1}
          />
        )}
      </main>
    </>
  );
}
