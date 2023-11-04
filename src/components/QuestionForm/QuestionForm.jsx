import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function QuestionForm({
  quiz,
  quizIndex,
  setQuizIndex,
  score,
  setScore,
  lastIndex,
}) {
  const navigate = useNavigate();
  const [userChoice, setUserChoice] = useState(
    JSON.parse(localStorage.userChoice) || {
      answer_a: false,
      answer_b: false,
      answer_c: false,
      answer_d: false,
      answer_e: false,
      answer_f: false,
    }
  );
  const [isSubmitted, setIsSubmitted] = useState(localStorage.isSubmitted);

  const isMultipleQuestion = quiz.multiple_correct_answers === 'true';
  const isLastQuestion = quizIndex === lastIndex;

  const handleUserChoice = (e) => {
    if (isSubmitted) {
      return;
    }
    const id = e.target.id;
    const isChecked = !userChoice[id];
    const updated = { ...userChoice, [id]: isChecked };
    !isMultipleQuestion &&
      Object.keys(updated).forEach((key) => {
        if (key !== id) {
          updated[key] = false;
        }
      });
    setUserChoice(updated);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.isSubmitted = true;
    localStorage.userChoice = JSON.stringify(userChoice);
    setIsSubmitted(!isSubmitted);
    if (isCorrect()) {
      localStorage.score = score + 1;
      setScore(score + 1);
    }
  };
  const goNext = () => {
    localStorage.isSubmitted = false;
    localStorage.currentQuizIndex = quizIndex + 1;
    setQuizIndex(quizIndex + 1);
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
    navigate('result');
  };
  const showOptions = () => {
    return isMultipleQuestion
      ? Object.entries(quiz.answers).map((answer) => {
          const id = answer[0];
          const question = answer[1];
          return (
            answer[1] && (
              <div>
                <input
                  type='checkbox'
                  id={id}
                  checked={userChoice[id]}
                  onChange={handleUserChoice}
                />
                <label htmlFor={id}>{`${id.slice(-1)}. ${question}`}</label>
              </div>
            )
          );
        })
      : Object.entries(quiz.answers).map((answer) => {
          const id = answer[0];
          const question = answer[1];
          return (
            answer[1] && (
              <div>
                <input
                  type='radio'
                  id={id}
                  name='quiz'
                  checked={userChoice[id]}
                  onClick={handleUserChoice}
                />
                <label htmlFor={id}>{`${id.slice(-1)}. ${question}`}</label>
              </div>
            )
          );
        });
  };
  const showResult = () => {
    const correctAnswers = Object.entries(quiz.correct_answers)
      .filter((answer) => answer[1] === 'true')
      .map((a) => a[0][7])
      .join(', ');
    return (
      <>
        <div>
          <span>{isCorrect() ? 'Correct!' : 'Wrong!'}</span>
          <span>{`Correct Answer(s): ${correctAnswers}`}</span>
          <p>{quiz.explanation || 'There is no explanation.'}</p>
        </div>
        {isLastQuestion ? (
          <button onClick={goResultPage}>Result</button>
        ) : (
          <button onClick={goNext}>Next</button>
        )}
      </>
    );
  };
  const isCorrect = () => {
    const choice = Object.entries(userChoice)
      .filter((choice) => choice[1])
      .map((c) => c[0]);
    const numOfAnswer = Object.entries(quiz.correct_answers).filter(
      (answer) => answer[1] === 'true'
    ).length;

    if (numOfAnswer !== choice.length) {
      return false;
    }
    if (numOfAnswer === 0 && choice.length === 0) {
      return true;
    }
    return !choice.some(
      (c) => quiz.correct_answers[c + '_correct'] === 'false'
    );
  };
  return (
    <form onSubmit={handleSubmit}>
      <span>
        {quizIndex + 1}. {quiz.question}
      </span>
      {showOptions()}
      {!isSubmitted && <button>submit</button>}
      {isSubmitted && showResult()}
      <div>{score}</div>
    </form>
  );
}
