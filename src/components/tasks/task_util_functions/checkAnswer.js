/* eslint-disable import/no-cycle */
/* eslint-disable no-undef */
/*
*This function cheks answer of users*
*If typeOfTask is 'math' we compare a right answer with an user answer by "==="*
*If typeOfTask is undefined we search a user answer in an answer-substring*
*/

export default function checkAnswer(event, button, typeOfTask) {
  event.preventDefault();
  const element = document.getElementsByClassName(`${button}__expression`)[0];
  const answer = element.getAttribute('data-answer');
  const userAnswer = event.target.previousElementSibling.value;

  if (typeOfTask === 'math') {
    if (userAnswer === answer) {
      return true;
    }
  } else if (answer.indexOf(userAnswer) !== -1 && userAnswer !== '') {
    return true;
  }
  return false;
}
