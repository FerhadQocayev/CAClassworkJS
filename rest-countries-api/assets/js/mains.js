const BASE_URL = `http://localhost:8000`;
let users = JSON.parse(localStorage.getItem("Users")) || [];

async function getAllData() {
  const response = await axios(`${BASE_URL}/users`);
  console.log(response.data);
}
