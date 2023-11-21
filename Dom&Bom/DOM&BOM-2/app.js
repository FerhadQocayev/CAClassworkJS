// task 1

// let changeBtn = document.querySelector(".change");
// changeBtn.addEventListener("click", function () {
//   changeBtn.parentElement.style.backgroundColor = "blue";
//   changeBtn.parentElement.style.width = "200px";
//   changeBtn.parentElement.style.height = "200px";
//   changeBtn.parentElement.style.position = "relative";
//   this.style.position = "absolute";
//   this.style.bottom = "20px";
//   this.style.right = "20px";
// });

// task 2

// document.querySelector(body);
// let changeBtn = document.querySelector(".change-bg");
// changeBtn.addEventListener("click", function () {
//   document.body.classList.contains("bg-blue")
//     ? document.body.classList.remove("bg-blue")
//     : document.body.classList.add("bg-blue");
// });

// 2.1

// changeBtn.addEventListener("click", function () {
//   document.body.classList.toggle("bg-blue");
// });

// task 3

// let divImage = document.querySelector(".image-div");
// let imgELem = document.createElement("img");
// imgELem.setAttribute(
//   "src",
//   "https://t4.ftcdn.net/jpg/05/25/92/85/240_F_525928536_hn5XAbUuEcSxkKSsVb967L5mef6GGss7.jpg"
// );
// divImage.append(imgELem);

// task 4
// const liArr = ["ganja", "baku", "shamkir", "goygol", "shaki"];
// let ulElem = document.querySelector(".list");
// ulElem.style.listStyle = "none";

// liArr.forEach((item) => {
//   let liElem = document.createElement("li");
//   liElem.innerText = item;
//   liElem.addEventListener("click", function () {
//     this.remove();
//   });

//   ulElem.append(liElem);
// });

// task 5

const headerElem = document.createElement("header");

document.body.append(headerElem);
headerElem.className = "header";

const navElem = document.createElement("nav");

headerElem.append(navElem);
navElem.append("nav");

const leftElem = document.createElement("div");

navElem.append(leftElem);
leftElem.className = "logo";

const ulDivElem = document.createElement("div");

navElem.append(ulDivElem);
rightElem.className = "ul-div";

const rightElem = document.createElement("div");

navElem.append(rightElem);
rightElem.className = "right";
