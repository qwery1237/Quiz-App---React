export function isCorrectAnswer(correctAnswer, userChoice) {
  const choice = Object.entries(userChoice)
    .filter((choice) => choice[1])
    .map((c) => c[0]);
  const numOfAnswer = getNumOfAnswer(correctAnswer);

  if (numOfAnswer !== choice.length) {
    return false;
  }
  if (numOfAnswer === 0 && choice.length === 0) {
    return true;
  }
  return !choice.some((c) => correctAnswer[c + '_correct'] === 'false');
}
export function isMultipleQuistion(correctAnswer) {
  return getNumOfAnswer(correctAnswer) !== 1;
}

export function updateUserChoice(
  updatedId,
  userChoice,
  isMultipleQuestion,
  updateFunction
) {
  const isChecked = !userChoice[updatedId];
  const updated = { ...userChoice, [updatedId]: isChecked };

  !isMultipleQuestion &&
    Object.keys(updated).forEach((key) => {
      if (key !== updatedId) {
        updated[key] = false;
      }
    });

  updateFunction(updated);
}
export function getCorrectAnswers(answers) {
  return Object.entries(answers)
    .filter((answer) => answer[1] === 'true')
    .map((a) => a[0][7])
    .join(', ');
}
function getNumOfAnswer(correctAnswer) {
  return Object.entries(correctAnswer).filter((answer) => answer[1] === 'true')
    .length;
}
