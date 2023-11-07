import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QuestionResult from '../QuestionResult/QuestionResult';
import QuestionOptions from '../QuestionOptions/QuestionOptions';
import {
  getCorrectAnswers,
  isCorrectAnswer,
  isMultipleQuistion,
} from '../../utils/quizLogic';

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
  }, [userChoice]);

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
    navigate('result', { state: { score } });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <span>{`${quizIndex + 1}. ${quiz.question}`}</span>
        <QuestionOptions
          quiz={quiz}
          isSubmitted={isSubmitted}
          userChoice={userChoice}
          setUserChoice={setUserChoice}
          isMultipleQuestion={isMultipleQuistion(quiz.correct_answers)}
        />
        {!isSubmitted && <button>submit</button>}
      </div>
      {isSubmitted && (
        <div>
          <QuestionResult
            isCorrect={isCorrect}
            correctAnswers={getCorrectAnswers(quiz.correct_answers)}
            explanation={quiz.explanation}
          />
          {isLastQuestion ? (
            <button onClick={goResultPage}>Result</button>
          ) : (
            <button onClick={goNext}>Next</button>
          )}
        </div>
      )}
    </form>
  );
}
