let modeButton = document.getElementById("modeButton");
let body = document.body;

window.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("dark") == "true") {
    body.classList.add("dark-mode");
  }
});
modeButton.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
  if (localStorage.getItem("dark") == "true") {
    localStorage.setItem("dark", false);
  } else {
    localStorage.setItem("dark", true);
  }
});
