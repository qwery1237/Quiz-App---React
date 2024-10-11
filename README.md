# Code Crack

### Coding Quiz App

Code Crack is a coding quiz app that allows users to solve coding quizzes, review detailed explanations for each question, and track their score.

## Motivation

I built this app as part of my React midterm project. The assignment gave me a choice between building a news page or a quiz app. Since I was more interested in React and wanted to challenge myself, I chose the quiz app. I found the quiz app to be more dynamic, as it presents various outcomes based on user input, which allowed for more complexity and variability in development.

## Challenges I Faced

During the development of Code Crack, I encountered several challenges:

- **API Data Handling**: The external API did not provide information on whether a question was single-answer or multiple-answer. To address this, I created a utility function in `util.js` to determine the type based on the number of correct answers. Depending on this, I adjusted the form's structure to handle both types of questions.
- **Preventing Post-Submission Edits**: It was challenging to prevent users from changing their answers after submitting a question. I solved this by removing the submit button once a question was submitted. Additionally, if a user tried to select an option after submission, the form would immediately return, preventing any further changes.

## What I Learned

Through this project, I gained experience in:
- React state management.
- Fetching data from external APIs using Axios.
- Setting up routing with React Router.

## Tech Stack & Tools

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML) [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS) [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) [![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/) [![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)


## Key Features

- **Homepage**: Users can select the quiz genre, difficulty level, and the number of questions.
- **Quiz Page**: The quiz includes both single and multiple-answer questions. After submission, users can see whether their answer was correct, view the correct answer, and read an explanation if available.
- **Result Page**: Users can view the total number of correct answers.

## Portfolio & GitHub Page

You can view this project as part of my portfolio and access the GitHub repository through [this link](https://qwery1237.github.io/portfolio/).
