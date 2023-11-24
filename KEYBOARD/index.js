// let keysAdada = document.querySelector(".key");
let text = document.querySelector(".words");

// window.addEventListener("keydown", function (e) {
//   keysAdada.forEach((item, i) => {
//     if (item.innerText == e.key) {
//       console.log(e.key);
//       keys.style.backgroundColor = "yellow";
//     }
//   });
// });

// window.addEventListener("keyup", function (e) {
//   if (item.innerText == e.key) {
//     console.log(e.key);
//     keysAdada.style.backgroundColor = "darkcyan";
//   }
// });

let keysAdada = document.querySelectorAll(".key");

window.addEventListener("keydown", function (e) {
  e.preventDefault();
  if (text.innerText.length > 95) {
    text.innerText = "";
  }
  if (e.key === "Backspace") {
    text.innerText = text.innerText.slice(0, -1);
  }
  if (e.key === " ") {
    text.innerText += " ";
    return;
  }
  keysAdada.forEach((item) => {
    if (item.innerText == e.key) {
      console.log(e.key);
      item.style.backgroundColor = "red";
      item.style.color = "white";
      item.style.scale = 0.7;
      item.style.opacity = 0.7;
      text.innerText += `${item.innerText}`;
    }
  });
});

window.addEventListener("keyup", function (e) {
  keysAdada.forEach((item) => {
    if (item.innerText == e.key) {
      console.log(e.key);
      item.style.backgroundColor = "darkcyan";
      item.style.scale = 1;
      item.style.color = "black";
      item.style.opacity = 1;
    }
  });
});
