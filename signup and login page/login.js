let form = document.querySelector("form");

let allInputs = document.querySelectorAll(".input");
let users = JSON.parse(localStorage.getItem("Users")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let newUser = users.find(
    (item) =>
      item.userName === allInputs[0].value &&
      item.password === allInputs[1].value
  );

  if (newUser) {
    localStorage.setItem("user", newUser.userName);
    window.location = "home.html";
  }
});
