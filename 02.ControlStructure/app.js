//task 1

let weather = 32;
if (weather >= 22) {
  console.log("Nazik geyin");
} else if (weather >= 15) {
  console.log("Pencek geyin");
} else {
  console.log("Qalin geyin ");
}

//task 2

let word = "b";
// if (word == "a") {
//   console.log("Sait");
// } else if (word == "i") {
//   console.log("Sait");
// } else if (word == "e") {
//   console.log("Sait");
// } else if (word == "o") {
//   console.log("Sait");
// } else if (word == "u") {
//   console.log("Sait");
// } else {
//   console.log("Samit");
// }
if (word == "a" || word == "i" || word == "e" || word == "o" || word == "u") {
  console.log("Sait");
} else {
  console.log("Samit");
}

// task 3

let a = 25;
let b = 52;
let c = 88;
if (a > b && a > c) {
  console.log("a is greater");
} else if (b > a && b > c) {
  console.log("b is greater");
} else if (c > b && c > a) {
  console.log("c is greater");
}

// task 4

let exam_result = 45;
if (exam_result >= 90) {
  console.log("Exam grade : A");
} else if (exam_result >= 80) {
  console.log("Exam grade : B");
} else if (exam_result >= 70) {
  console.log("Exam grade : C");
} else if (exam_result >= 60) {
  console.log("Exam grade : D");
} else if (exam_result >= 50) {
  console.log("Exam grade : F");
} else {
  console.log("Exam grade :E ");
}

// task 5

let username = "samir";
console.log(username.length);
if (username.length <= 5) {
  console.log("Salam ," + username + "." + "Qisa adiniz var.");
} else if (username.length >= 5 && username.length <= 10) {
  console.log("Salam ," + username + "." + "Orta uzunluqlu adiniz var.");
} else {
  console.log("Salam ," + username + "." + "Adiniz cox uzundur.");
}

// task 6

let d = 1;
let e = 2;
let f = 3;
if (d + e > e + f && d + e > d + f) {
  console.log(`${d} + ${e} = ${d + e} is biggest`);
} else if (d + e < e + f && e + f > f + d) {
  console.log(`${f} + ${e} = ${e + f} is biggest`);
} else {
  console.log(`${f} + ${d} = ${d + f} is biggest`);
}

// task 7

let j = 4;
let k = 7;
let l = 9;
if (j > k && j > l) {
  if (k > l) {
    console.log(`${j * 100 + k * 10 + l}`);
    console.log(`${l * 100 + j * 10 + k}`);
  } else {
    console.log(`${j * 100 + l * 10 + k}`);
    console.log(`${k * 100 + l * 10 + j}`);
  }
} else if (k > j && k > l) {
  if (j > l) {
    console.log(`${k * 100 + j * 10 + l}`);
    console.log(`${l * 100 + j * 10 + k}`);
  } else {
    console.log(`${k * 100 + l * 10 + j}`);
    console.log(`${j * 100 + l * 10 + k}`);
  }
} else if (l > j && l > k) {
  if (k > j) {
    console.log(`${l * 100 + k * 10 + j}`);
    console.log(`${j * 100 + k * 10 + l}`);
  } else {
    console.log(`${l * 100 + j * 10 + k}`);
    console.log(`${k * 100 + j * 10 + l}`);
  }
}
