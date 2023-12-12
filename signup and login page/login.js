let form = document.querySelector("form");
let text = document.querySelector("p");
text.innerText = "username or password is not correct!!";
let allInputs = document.querySelectorAll(".input");
let users = JSON.parse(localStorage.getItem("Users")) || [];
text.style.display = "none";
text.style.color = "red";
text.style.margin = "5px";
let pw = document.querySelector(".password");
let iElem = document.querySelector(".fa-solid");

iElem.addEventListener("click", function () {
  if (this.className === "fa-solid fa-eye-slash slash") {
    this.className = "fa-solid fa-eye";
    pw.type = "text";
  } else {
    this.className = "fa-solid fa-eye-slash slash";
    pw.type = "password";
  }
});

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let newUser = users.find(
    (item) =>
      item.userName === allInputs[0].value.trim() &&
      item.password === allInputs[1].value.trim()
  );

  if (newUser) {
    localStorage.setItem("user", newUser.userName);
    window.location = "home.html";
    text.style.display = "none";
  } else {
    text.style.display = "block";
  }
});
