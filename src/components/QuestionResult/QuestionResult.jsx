import React from 'react';

export default function QuestionResult({ quiz, isCorrect }) {
  const correctAnswers = Object.entries(quiz.correct_answers)
    .filter((answer) => answer[1] === 'true')
    .map((a) => a[0][7])
    .join(', ');
  return (
    <>
      {console.log(quiz)}
      <div>
        <span>{isCorrect ? 'Correct!' : 'Wrong!'}</span>
        <span>{`Correct Answer(s): ${correctAnswers}`}</span>
        <p>{quiz.explanation || 'There is no explanation.'}</p>
      </div>
    </>
  );
}
