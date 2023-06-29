import './style.css';
const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4d7IVkemOBAWa2fUdm/scores/';
const refresh = document.getElementById('refresh');
const submit = document.getElementById('submit');

const addScores = async () => {
  const response = await fetch(apiURL);
  const data = await response.json();
  const scores = data.result.sort((a, b) => b.score - a.score);
  scores.forEach((score) => {
    scoreTable(score.user, score.score);
  });
};

submit.addEventListener('click', async (event) => {
  event.preventDefault();
  const user = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  await displayScore(user, score);
});

const displayScore = async (user, score) => {
  const response = await fetch(apiURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  });

  if (response.ok) {
    // Successful response
    scoreTable(user, score);
  } else {
    // Handle error response
    const errorMessage = await response.text();
    console.error('Error:', response.status, errorMessage);
  }
};

const scoreTable = (user, score) => {
  const tb = document.getElementById('table-body');
  const row = document.createElement('tr');
  row.innerHTML = `<td>${user}</td><td>${score}</td>`;
  tb.appendChild(row);
};

refresh.addEventListener('click', async () => {
  const tb = document.getElementById('table-body');
  tb.innerHTML = ''; // Clear the existing table body content
  await addScores();
});

document.addEventListener('DOMContentLoaded', async () => {
  await addScores();
});