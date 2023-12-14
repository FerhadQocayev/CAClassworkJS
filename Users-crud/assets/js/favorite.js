const BASE_URL = `http://localhost:8000`;

async function getAllData() {
  const response = await axios(`${BASE_URL}/users`);
  console.log(response.data);
}

getAllData();
