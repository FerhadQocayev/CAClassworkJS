// let counter = document.querySelector(".count");

// task 1

// let count = 1;
// let interval = setInterval(() => {
//   console.log(++count);
// }, 1000);
// setTimeout(() => {
//   clearInterval(interval);
// }, 4000);

// task 2

// let changeBTN = document.querySelector(".changeBtn");
// let textt = document.querySelector(".text");
// changeBTN.addEventListener("click", function () {
//   textt.innerText = "i am hacker";
//   textt.style.fontSize = "3rem";
//   textt.style.color = "yellow";
// });

// task 3

// let symbols = document.querySelectorAll(".ptext");
// symbols.forEach((symbol) => {
//   console.log(symbol.innerText);
// });

// task 4

// let text = "developer";
// let index = 0;

// function write() {
//   if (index < text.length) {
//     console.log(text[index]);
//     index++;
//     setTimeout(write, 1000);
//   }
// }

// write();

// let text = "Developer";
// let newText = "";

// for (let i = 1; i <= text.length; i++) {
//   newText += text.substring(0, i).toUpperCase() + text.substring(i);
//   console.log(newText);
//   newText = "";
// }

// let text = "Developer";
// let newText = "";
// console.log("developer");
// let i = 1;
// let interval = setInterval(() => {
//   newText += text.substring(0, i).toUpperCase() + text.substring(i);
//   console.log(newText);
//   newText = "";
//   i++;
//   if (i > text.length) {
//     clearInterval(interval);
//   }
// }, 1000);

// task 5

// let button = document.getElementById("colorButton");
// let intervalId;

// button.addEventListener("click", () => {
//   if (!intervalId) {
//     intervalId = setInterval(changeBackgroundColor, 1000);
//   } else {
//     clearInterval(intervalId);
//     intervalId = null;
//   }
// });

// function changeBackgroundColor() {
//   let letters = "0123456789ABCDEF";
//   let color = "#";
//   for (let i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   document.body.style.backgroundColor = color;
// }

let button = document.getElementById("colorButton");
let intervalId;
// let colors = ["red", "yellow", "black", "blue", "purple"];
// let a = colors[Math.floor(Math.random() * colors.length)];
button.addEventListener("click", () => {
  if (!intervalId) {
    intervalId = setInterval(() => {
      let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
      document.body.style.backgroundColor = randomColor;
    }, 500);
  } else {
    clearInterval(intervalId);
    intervalId = null;
  }
});
