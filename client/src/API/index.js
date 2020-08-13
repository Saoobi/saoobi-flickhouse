export async function newQuestion() {
  //use of "proxy": "http://localhost:3001/" on package.json to call directly the backend
  const response = await fetch("/api/question");
  const result = await response.json();

  if (response.status !== 200) throw Error(result.message);
  return result;
}
