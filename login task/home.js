let pElem = document.createElement("p");
let username = localStorage.getItem("user");
pElem.innerText = `welcome ${username}`;
console.log(username);
document.body.append(pElem);
