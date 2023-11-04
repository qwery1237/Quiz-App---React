import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getQuiz } from '../../apis/quiz';
import styles from './Quiz.module.css';
import QuestionForm from '../../components/QuestionForm/QuestionForm';

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  const key = location.key;
  const {
    state: { params },
  } = useLocation();
  useEffect(() => {
    const data = localStorage.getItem(['quiz', key]);
    if (data) {
      console.log(JSON.parse(data));
      setQuizzes(JSON.parse(data));
      setCurrentQuizIndex(+localStorage.currentQuizIndex);
      setScore(+localStorage.score);
      setIsLoading(false);
      return;
    }

    getQuiz(params, key).then((res) => {
      setQuizzes(res);
      setIsLoading(false);
      localStorage.score = 0;
      localStorage.currentQuizIndex = 0;
      if (localStorage.isSubmitted) {
        localStorage.removeItem('isSubmitted');
        localStorage.removeItem('userChoice');
      }
    });
  }, []);
  return (
    <>
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
            score={score}
            setScore={setScore}
            quizKey={key}
            lastIndex={quizzes.length - 1}
          />
        )}
      </main>
    </>
  );
}
