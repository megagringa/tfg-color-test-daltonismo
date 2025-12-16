const API_URL = "http://localhost:8080/api/results";

export async function saveResult(result) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result),
  });

  return response.json();
}

export async function getResults() {
  const response = await fetch(API_URL);
  return response.json();
}
