import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getQuiz } from '../../apis/quiz';
import styles from './Quiz.module.css';

export default function Quiz() {
  const [quizzes, setQuizzes] = useState([]);
  const {
    state: { params },
  } = useLocation();

  useEffect(() => {
    getQuiz(params).then((res) => {
      setQuizzes(res);
    });
  }, []);
  return (
    <main>
      {console.log(quizzes)}
      <header>
        <h2>{params.category} Quiz</h2>
        <h4 className={styles.difficulty}>{params.difficulty}</h4>
      </header>
      {quizzes.map((p, i, arr) => (
        <div>
          <div>
            <span>{`${i + 1}. ${p.question}`}</span>
            <ul>
              {Object.values(p.answers)
                .filter((a) => !!a)
                .map((a, i) => (
                  <li>{`${i + 1}. ${a}`}</li>
                ))}
            </ul>
          </div>
          <span>{`${i + 1}/${arr.length}`}</span>
        </div>
      ))}
    </main>
  );
}
