let addBtn = document.querySelector(".add");
let ullElem = document.querySelector(".list");
let input = document.getElementById("inp");

let count = 0;

addBtn.addEventListener("click", function () {
  if (input.value !== "") {
    count++
    
    let liElem = document.createElement("li");
    let spanElem = document.createElement("span");
    let buttonElem = document.createElement("button");
    
    spanElem.innerText = input.value;
    buttonElem.innerText = "DELETE";
    input.value = "";
    
    liElem.append(`${count}`, spanElem, buttonElem);
    ullElem.append(liElem);

    buttonElem.addEventListener("click", function () {
      this.parentElement.remove();
    });
  } else {
    alert("input can't be empty");
  }
});
