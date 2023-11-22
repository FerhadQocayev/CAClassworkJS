let start = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let increment = document.querySelector(".increment");
let decrement = document.querySelector(".decrement");
let countElem = document.querySelector(".count");
let bonusIncBtn = document.querySelector(".bonusInc");
let bonusDecBtn = document.querySelector(".bonusDec");
let inc = document.getElementById("inc");
let dec = document.querySelector("#dec");

start.style.backgroundColor = "green";
start.style.color = "white";
stopBtn.style.backgroundColor = "red";
stopBtn.style.color = "white";
reset.style.color = "white";
reset.style.backgroundColor = "red";
increment.style.backgroundColor = "teal";
decrement.style.backgroundColor = "teal";
increment.style.color = "white";
decrement.style.color = "white";
bonusIncBtn.style.backgroundColor = "yellow";
bonusDecBtn.style.backgroundColor = "yellow";

let countInterval;
let count = 0;

start.addEventListener("click", function () {
  this.setAttribute("disabled", "SALAM,F");
  stopBtn.removeAttribute("disabled");

  countInterval = setInterval(() => {
    count++;
    countElem.innerText = count;
  }, 100);
});

stopBtn.addEventListener("click", function () {
  clearInterval(countInterval);
  this.setAttribute("disabled", "SALAM,F");
  start.removeAttribute("disabled");
});

reset.addEventListener("click", function () {
  count = 0;
  countElem.innerText = count;
  clearInterval(countInterval);
  start.removeAttribute("disabled");
  stopBtn.removeAttribute("disabled");
});

increment.addEventListener("click", function () {
  count += 1;
  countElem.innerText = count;
});
decrement.addEventListener("click", function () {
  count -= 1;
  countElem.innerText = count;
});

bonusIncBtn.addEventListener("click", function () {
  count += +inc.value;
  countElem.innerText = count;
});
bonusDecBtn.addEventListener("click", function () {
  count -= +dec.value;
  countElem.innerText = count;
});
