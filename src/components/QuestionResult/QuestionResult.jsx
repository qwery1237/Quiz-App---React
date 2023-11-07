import React from 'react';

export default function QuestionResult({
  isCorrect,
  correctAnswers,
  explanation,
}) {
  return (
    <>
      <div>
        <span>{isCorrect ? 'Correct!' : 'Wrong!'}</span>
        <span>{`Correct Answer(s): ${correctAnswers}`}</span>
        <p>{explanation || 'There is no explanation.'}</p>
      </div>
    </>
  );
}
