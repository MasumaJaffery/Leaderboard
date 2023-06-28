const apiURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api';
const id = 'Zl4d7IVkemOBAWa2fUdz';
/*
 This function retrieves and sorts scores for a specific game from an API.
 The `addScores` function is returning an array of scores sorted in descending order based
 on the score value. */
const addScores = async () => {
  const response = await fetch(`${apiURL}/games/${id}/scores/`);
  const data = await response.json();
  const scores = data.result.sort((a, b) => b.score - a.score);
  return scores;
};

const displayScore = async (user, score) => {
    const response = await fetch(`${apiURL}/games/${id}/scores/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        user,
        score,
      }),
    });
    const data = await response.json();
    return data.result;
  };

export default { addScores,  displayScore };