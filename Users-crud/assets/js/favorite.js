const BASE_URL = `http://localhost:8000`;

// async function getAllData() {
//   try {
//     const response = await fetch(`${BASE_URL}/`);
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }

async function getAllData() {
  const response = await axios(`${BASE_URL}/users`);
  console.log(response.data);
}
getAllData();