let body = document.body;
let divElem = document.createElement("div");
let formElem = document.createElement("form");
let h1Elem = document.createElement("h1");
let inputElemUser = document.createElement("input");
let inputElemEmail = document.createElement("input");
let inputElemPassword = document.createElement("input");
let btnSubmit = document.createElement("button");

body.append(divElem);
divElem.append(formElem);

formElem.append(h1Elem);
formElem.append(inputElemUser);
formElem.append(inputElemEmail);
formElem.append(inputElemPassword);
formElem.append(btnSubmit);

inputElemUser.setAttribute("placeholder", "Enter username");
inputElemEmail.setAttribute("placeholder", "Enter email");
inputElemPassword.setAttribute("placeholder", "Create password");
inputElemUser.setAttribute("type", "text");
inputElemEmail.setAttribute("type", "email");
inputElemPassword.setAttribute("type", "password");
btnSubmit.setAttribute("type", "submit");

inputElemEmail.className = "input";
inputElemPassword.className = "input";
inputElemUser.className = "input";

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
inputElemUser.style.padding = "6px";
inputElemUser.style.borderRadius = "6px";
inputElemPassword.style.padding = "6px";
inputElemPassword.style.borderRadius = "6px";
btnSubmit.style.width = "185px";
btnSubmit.style.backgroundColor = "blue";
btnSubmit.style.color = "white";
btnSubmit.style.borderRadius = "6px";
btnSubmit.style.padding = "6px";

btnSubmit.innerText = "Signup";
h1Elem.innerText = "Signup";

// funksionalliq

let allInputs = document.querySelectorAll(".input");

let allUsers = JSON.parse(localStorage.getItem("allUsers")) || [];

formElem.addEventListener("submit", function (event) {
  event.preventDefault();

  let checking = allUsers.some(
    (item) =>
      item.userName === allInputs[0].value || item.email === allInputs[1].value
  );
  console.log(checking);

  if (!checking) {
    let userObj = {
      userName: allInputs[0].value,
      email: allInputs[1].value,
      password: allInputs[2].value,
      id: Date.now(),
    };

    allUsers.push(userObj);

    localStorage.setItem("allUsers", JSON.stringify(allUsers));
    window.location = "login.html";
  } else {
    window.alert("username or email already used!");
  }
  allInputs.forEach((item) => {
    item.value = "";
  });
});
