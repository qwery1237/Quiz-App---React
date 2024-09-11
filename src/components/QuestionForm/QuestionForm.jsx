import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionResult from '../QuestionResult/QuestionResult';
import QuestionOptions from '../QuestionOptions/QuestionOptions';
import {
  getCorrectAnswers,
  isCorrectAnswer,
  isMultipleQuistion,
} from '../../utils/quizLogic';
import styles from './QuestionForm.module.css';

export default function QuestionForm({
  quiz,
  quizIndex,
  setQuizIndex,
  isLastQuestion,
}) {
  const navigate = useNavigate();

  const [userChoice, setUserChoice] = useState({
    answer_a: false,
    answer_b: false,
    answer_c: false,
    answer_d: false,
    answer_e: false,
    answer_f: false,
  });
  const [score, setScore] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    setIsCorrect(isCorrectAnswer(quiz.correct_answers, userChoice));
  }, [userChoice, quiz.correct_answers]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(!isSubmitted);
    if (isCorrect) {
      setScore(score + 1);
    }
  };
  const goNext = (e) => {
    e.preventDefault();
    setQuizIndex(quizIndex + 1);
    setIsSubmitted(false);
    setUserChoice({
      answer_a: false,
      answer_b: false,
      answer_c: false,
      answer_d: false,
      answer_e: false,
      answer_f: false,
    });
  };
  const goResultPage = () => {
    navigate('result', { state: { score, totalNumOfQuiz: quizIndex + 1 } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.questionBox}>
        <p className={styles.question}>
          {`${quizIndex + 1}. ${quiz.question}`}
        </p>
        <QuestionOptions
          quiz={quiz}
          isSubmitted={isSubmitted}
          userChoice={userChoice}
          setUserChoice={setUserChoice}
          isMultipleQuestion={isMultipleQuistion(quiz.correct_answers)}
        />
        <div className={styles.buttonBox}>
          {!isSubmitted && <button className={styles.button}>submit</button>}
        </div>
      </div>
      {isSubmitted && (
        <div
          className={`${styles.result} ${
            isCorrect ? styles.correct : styles.wrong
          }`}
        >
          <QuestionResult
            isCorrect={isCorrect}
            correctAnswers={getCorrectAnswers(quiz.correct_answers)}
            explanation={quiz.explanation}
          />
          <div
            className={`${styles.buttonBox} ${
              isCorrect ? styles.correctBox : styles.wrongBox
            }`}
          >
            {isLastQuestion ? (
              <button className={styles.button} onClick={goResultPage}>
                Result
              </button>
            ) : (
              <button className={styles.button} onClick={goNext}>
                Next
              </button>
            )}
          </div>
        </div>
      )}
    </form>
  );
}
