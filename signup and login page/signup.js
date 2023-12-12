let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".input");
let pw = document.querySelector(".pw");
let users = JSON.parse(localStorage.getItem("Users")) || [];

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

  let checkProses = users.some(
    (item) =>
      item.userName === allInputs[0].value || item.email === allInputs[1].value
  );

  if (!checkProses) {
    let userObj = {
      userName: allInputs[0].value.trim(),
      email: allInputs[1].value.trim(),
      password: allInputs[2].value.trim(),
      id: Date.now(),
    };

    users.push(userObj);

    localStorage.setItem("Users", JSON.stringify(users));
    window.location = "login.html";
  } else {
    window.alert("Already used!");
  }
  allInputs.forEach((item) => {
    item.value = "";
  });
});
