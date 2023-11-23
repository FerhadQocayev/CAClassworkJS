let userElem = document.querySelector(".username");
let emailElem = document.querySelector(".email");
let passwordElem = document.querySelector(".password");
let submitElem = document.querySelector(".btn");
let form = document.querySelector("#userForm");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  let user = {
    username: userElem.value,
    email: emailElem.value,
    password: passwordElem.value,
  };
  console.log(user);
  emailElem.value = "";
  passwordElem.value = "";
  userElem.value = "";
});
