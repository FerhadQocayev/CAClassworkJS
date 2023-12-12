let form = document.querySelector("form");
let allInputs = document.querySelectorAll(".input");

let users = JSON.parse(localStorage.getItem("Users")) || [];

form.addEventListener("submit", function (event) {
  event.preventDefault();

  let checkProses = users.some(
    (item) =>
      item.userName === allInputs[0].value || item.email === allInputs[1].value
  );

  if (!checkProses) {
    let userObj = {
      userName: allInputs[0].value,
      email: allInputs[1].value,
      password: allInputs[2].value,
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
