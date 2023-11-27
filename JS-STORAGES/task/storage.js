let inputs = document.querySelectorAll(".inputlar");
let form = document.querySelector("#form");

let allUsers = JSON.parse(localStorage.getItem("userInfo")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let userObj = {
    id: Date.now(),
    firstName: inputs[0].value,
    lastName: inputs[1].value,
    address: inputs[2].value,
  };

  allUsers.push(userObj);

  localStorage.setItem("userInfo", JSON.stringify(allUsers));
  console.log(allUsers);
});
