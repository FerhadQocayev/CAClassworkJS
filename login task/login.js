let body = document.body;
let divElem = document.createElement("div");
let formElem = document.createElement("form");
let h1Elem = document.createElement("h1");
let inputElemEmail = document.createElement("input");
let inputElemPassword = document.createElement("input");
let btnSubmit = document.createElement("button");
let redText = document.createElement("p");

body.append(divElem);
divElem.append(formElem);

formElem.append(h1Elem);
formElem.append(inputElemEmail);
formElem.append(inputElemPassword);
formElem.append(btnSubmit);
formElem.append(redText);

inputElemEmail.setAttribute("placeholder", "Email");
inputElemPassword.setAttribute("placeholder", "Password");
inputElemEmail.setAttribute("type", "email");
inputElemPassword.setAttribute("type", "password");
btnSubmit.setAttribute("type", "submit");

inputElemEmail.className = "input";
inputElemPassword.className = "input";

divElem.style.display = "flex";
divElem.style.alignItems = "center";
divElem.style.justifyContent = "center";
divElem.style.height = "100vh";
divElem.style.backgroundColor = "blue";
formElem.style.display = "flex";
formElem.style.alignItems = "center";
formElem.style.justifyContent = "center";
formElem.style.flexDirection = "column";
formElem.style.rowGap = "6px";
formElem.style.backgroundColor = "white";
formElem.style.padding = "20px";
formElem.style.borderRadius = "6px";
inputElemEmail.style.padding = "6px";
inputElemEmail.style.borderRadius = "6px";
inputElemPassword.style.padding = "6px";
inputElemPassword.style.borderRadius = "6px";
btnSubmit.style.width = "185px";
btnSubmit.style.backgroundColor = "blue";
btnSubmit.style.color = "white";
btnSubmit.style.borderRadius = "6px";
btnSubmit.style.padding = "6px";
redText.style.color = "red";
redText.style.display = "none";

btnSubmit.innerText = "Login";
h1Elem.innerText = "Login";
redText.innerText = "username or password is not correct!!";
let allInputs = document.querySelectorAll(".input");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

formElem.addEventListener("submit", function (event) {
  event.preventDefault();

  let newUser = allUsers.find(
    (item) =>
      item.email === allInputs[0].value && item.password === allInputs[1].value
  );

  if (newUser) {
    localStorage.setItem("user", newUser.userName);
    window.location = "home.html";
    redText.style.display = "none";
  } else {
    redText.style.display = "block";
  }
});
