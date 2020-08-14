export async function newQuestion() {
  //use of "proxy": "http://localhost:3001/" on package.json to call directly the backend
  const response = await fetch("/api/question");
  const result = await response.json();

  if (response.status !== 200) throw Error(result.message);
  return result;
}

export async function checkQuestionResult(actorId, movieId) {
  const response = await fetch("/api/question/answer", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      movieId,
      actorId,
    }),
  });
  const result = await response.json();
  if (response.status !== 200) throw Error(result.message);

  return result;
}
