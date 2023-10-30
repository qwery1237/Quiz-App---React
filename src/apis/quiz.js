import axios from 'axios';

export async function getQuiz(params) {
  const { category, difficulty, limit } = params;
  return axios
    .get('https://quizapi.io/api/v1/questions', {
      params: {
        apiKey: 'xz5Cw879MvkPKzwdg5bTaB6GdCiU3bTZ2YJncHjx',
        category: category === 'Random' ? null : category,
        difficulty,
        limit,
      },
    })
    .then((res) => res.data);
}
