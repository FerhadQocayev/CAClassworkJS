const BASE_URL = `http://localhost:8000`;
let users = JSON.parse(localStorage.getItem("Users")) || [];

async function getAllData() {
  const response = await axios(`${BASE_URL}/users`);
  console.log(response.data);
  drawTable(response.data);
}

getAllData();

let tbody = document.querySelector(".tbody");

function drawTable(data) {
  tbody.innerHTML = " ";
  data.forEach((element) => {
    let trElemnt = document.createElement("tr");
    trElemnt.innerHTML = `
    <td>${element.id}</td> 
    <td><img src="${element.userphoto}" alt=""></td> 
    <td>${element.name}</td> 
    <td>${element.surname}</td> 
    <td>${element.email}</td> 
    <td>${element.date}</td> 
    <td> <a href="adduser.html?id=${element.id}" class="editBtn">Edit</a> 
    <button class="deleteBTN"  onclick=deleteLine(${element.id},this)>Delete</button> 
    <button class="favBTN"  onclick=favLine(${element.id},this)>Add Fav</button></td> `;

    tbody.append(trElemnt);
  });
}
let deleteBTN = document.querySelector(".deleteBTN");
let editBTN = document.querySelector(".editBtn");

async function deleteLine(id, btn) {
  if (confirm("Are you sure to delete this ??")) {
    btn.parentElement.parentElement.remove();
    await axios.delete(`${BASE_URL}/users/${id}`);
  }
}

async function favLine(id, btn) {
  console.log(id);
  const response = await axios(`${BASE_URL}/users/${id}`);
  console.log(response.data);

  let userObj = {
    name: response.data.name,
    surname: response.data.surname,
    email: response.data.email,
    userphoto: `${response.data.userphoto}`,
  };

  users.push(userObj);
  localStorage.setItem("Users", JSON.stringify(users));
}
