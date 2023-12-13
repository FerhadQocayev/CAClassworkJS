const BASE_URL = `http://localhost:8000`;

const id = new URLSearchParams(window.location.search).get("id");

const form = document.querySelector("form");
const allInput = document.querySelectorAll(".input");

async function getAllData() {
  const response = await axios(`${BASE_URL}/users`);
  console.log(response.data);
}
getAllData();

async function getNewData(obj) {
  await axios.post(`${BASE_URL}/users/${id}`);
}

async function getallInfo() {
  try {
    const response = await axios(`${BASE_URL}/users/${id}`);
    allInput[0].value = response.data.name;
    allInput[1].value = response.data.surname;
    allInput[2].value = response.data.email;
  } catch (error) {
    console.log(error);
  }
}

id && getallInfo();

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let date = new Date();
  let newData2 = {
    name: allInput[0].value,
    surname: allInput[1].value,
    email: allInput[2].value,
    userphoto: `assets/img/${allInput[3].value.split("\\")[2]}`,
  };
  let newData = {
    name: allInput[0].value,
    surname: allInput[1].value,
    email: allInput[2].value,
    date: date.toString(),
    userphoto: `assets/img/${allInput[3].value.split("\\")[2]}`,
  };
  if (!id) {
    addNewData(newData);
  } else {
    updateNewData(newData2);
  }
  allInput.forEach((item) => (item.value = ""));
});

async function addNewData(obj) {
  await axios.post(`${BASE_URL}/users`, obj);
  window.location = "home.html";
}
async function updateNewData(obj) {
  await axios.patch(`${BASE_URL}/users/${id}`, obj);
  window.location = "home.html";
}
let back = document.querySelector(".backBtn");
back.addEventListener("click", function () {
  window.location = "home.html";
});
