import React, { useState } from 'react';
import { FaLinux, FaDocker, FaRandom } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import styles from './QuizActions.module.css';

export default function QuizActions() {
  const [params, setParams] = useState({
    category: 'Random',
    difficulty: 'easy',
    limit: '10',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setParams({ ...params, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('quiz', { state: { params } });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <input
          type='radio'
          id='linux'
          name='category'
          value='Linux'
          checked={params.category === 'Linux'}
          onChange={handleChange}
        />
        <label htmlFor='linux'>
          <FaLinux /> <span>Linux</span>
        </label>
        <input
          type='radio'
          id='docker'
          name='category'
          value='Docker'
          checked={params.category === 'Docker'}
          onChange={handleChange}
        />
        <label htmlFor='docker'>
          <FaDocker /> <span>Docker</span>
        </label>
        <input
          type='radio'
          id='random'
          name='category'
          value='Random'
          checked={params.category === 'Random'}
          onChange={handleChange}
        />
        <label htmlFor='random'>
          <FaRandom /> <span>Random Quiz</span>
        </label>
      </div>

      <div>
        <input
          type='radio'
          id='easy'
          name='difficulty'
          value='easy'
          checked={params.difficulty === 'easy'}
          onChange={handleChange}
        />
        <label htmlFor='easy'>Easy</label>
        <input
          type='radio'
          id='medium'
          name='difficulty'
          value='medium'
          checked={params.difficulty === 'medium'}
          onChange={handleChange}
        />
        <label htmlFor='medium'>Medium</label>
        <input
          type='radio'
          id='hard'
          name='difficulty'
          value='hard'
          checked={params.difficulty === 'hard'}
          onChange={handleChange}
        />
        <label htmlFor='hard'>Hard</label>
      </div>

      <div>
        <input
          type='radio'
          id='limit10'
          name='limit'
          value='10'
          checked={params.limit === '10'}
          onChange={handleChange}
        />
        <label htmlFor='limit10'>10</label>
        <input
          type='radio'
          id='limit15'
          name='limit'
          value='15'
          checked={params.limit === '15'}
          onChange={handleChange}
        />
        <label htmlFor='limit15'>15</label>
        <input
          type='radio'
          id='limit20'
          name='limit'
          value='20'
          checked={params.limit === '20'}
          onChange={handleChange}
        />
        <label htmlFor='limit20'>20</label>
      </div>

      <button type='submit'>Start</button>
    </form>
  );
}
