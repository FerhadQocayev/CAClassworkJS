let fullName = "Ferhad Qocayev";
let age = 45;
let skills = ["read", "sleep", "practise"];

localStorage.setItem("fullName", fullName);
localStorage.setItem("age", age);
localStorage.setItem("skills", JSON.stringify(skills));

console.log(localStorage.getItem("fullName"));
console.log(localStorage.getItem("age"));
console.log(localStorage.getItem("skills"));
