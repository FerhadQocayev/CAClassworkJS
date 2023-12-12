// 1) Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

function findNumberOfDivisors(n) {
  let countArr = [];
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      countArr.push(i);
    }
  }
  console.log(`${n} ədədinin bölənlərinin sayı : ${countArr.length}`);
}

findNumberOfDivisors(25);

// 2) 1-100 arası tək ədədləri console'a yazan proqram tərtib edin.

let tekArr = [];
for (let i = 1; i < 101; i++) {
  if (i % 2 == 1) {
    tekArr.push(i);
  }
}
console.log(`1-100 arası tək ədədlər: ${tekArr}`);

// 3) sampleNews  mətnində olan boşluqların sayını təyin edən proqram yazın.

let sampleNews = `As software developers, the natural tendency is to start developing applications based on your own hands-on experience and knowledge right away. However, overtime issues in the application arise, adaptations to changes, and new features happen.`;
let sampleNewsArr = sampleNews.split("");
let count = 0;

for (let i = 0; i < sampleNewsArr.length; i++) {
  if (sampleNewsArr[i] == " ") {
    count += 1;
  }
}

console.log(`Boşluqların sayı : ${count}`);

// 4) Array-in bütün elementlərini kvadrata yüksəldib yeni array qaytaran proqram yazın.

const numbers = [3, 7, 2, 19, 13, 12];
let newNumberArr = [];

function kvadrat() {
  for (let i = 0; i < numbers.length; i++) {
    newNumberArr.push(numbers[i] * numbers[i]);
  }
  console.log(
    `Bütün elementləri kvadrata yüksəlmiş Array : [ ${newNumberArr} ]`
  );
}

kvadrat();

// 5) Array elementlərinin cəmini tapın.

let sumOfArrayElement = 0;

function sum(array) {
  array.forEach((element) => {
    sumOfArrayElement += element;
  });
  console.log(`Array elementlərinin cəmini: ${sumOfArrayElement}`);
}

sum([3, 7, 2, 19]);

const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
  {
    id: 6,
    title: "Fitness Tracker",
    description:
      "Track your steps, heart rate, and more with this fitness tracker.",
    price: 49.99,
  },
  {
    id: 7,
    title: "Digital Camera",
    description: "High-resolution digital camera with various lenses.",
    price: 799.99,
  },
  {
    id: 8,
    title: "Wireless Keyboard and Mouse",
    description: "Ergonomic keyboard and mouse combo for your workstation.",
    price: 39.99,
  },
  {
    id: 9,
    title: "Microwave Oven",
    description: "Compact microwave oven for quick and easy cooking.",
    price: 69.99,
  },
  {
    id: 10,
    title: "Bluetooth Speaker",
    description: "Portable Bluetooth speaker with rich, clear sound.",
    price: 49.99,
  },
  {
    id: 11,
    title: "Coffee Table",
    description: "Modern coffee table with storage and a glass top.",
    price: 149.99,
  },
];

// 6) products arrayını price'a görə artan və azalan sıra ilə düzün

let desc = [...products].sort((a, b) => b.price - a.price);
console.log(desc);

let asc = [...products].sort((a, b) => a.price - b.price);
console.log(asc);

// 7) products arrayını title'a görə a'dan z'yə və z'dən a'ya düzün

// 8) price'ı 500'dən çox olan productları tapın (array şəklində)

let newArr = [];

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 500) {
    newArr.push(products[i]);
  }
}
console.log("Price'ı 500'dən çox olan productlar : ", newArr);

// 9) id'si 9 olan elementi arraydan silin

let filt = products.filter((element) => element.id !== 9);
console.log("Yeni Array: ", filt);

// 10) price cəmini, və ortalamasını tapın

let sumOfPrice = 0;

for (let i = 0; i < products.length; i++) {
  sumOfPrice += products[i].price;
}

console.log(`Price cəmi : ${sumOfPrice}`);

let averageValue = 0;

for (let i = 0; i < products.length; i++) {
  averageValue = sumOfPrice / products.length;
}

console.log(`Price ortalaması : ${averageValue}`);

// BONUS
// 11) verilmiş iki stringin eyni hərflərdən təşkil olunub olunmadığını müəyyən edən funksiya yazın.

function isStringsArrangedSameLetters(a, b) {
  let firstWord = a.split("").sort();
  let secondWord = b.split("").sort();

  if (firstWord.toString() === secondWord.toString()) {
    console.log("YES eynidir");
  } else {
    console.log("no eyni deyil");
  }
}

isStringsArrangedSameLetters("ehsen", "hesen");

// // important question

let firstValue = "aaaa";
let SecondValue = "salamlar";
let thirdValue = "hekaye";

function findCountOfCharAsObject(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    // let newStr = str[i];
    // obj[newStr] = (obj[newStr] || 0) + 1;
    // obj[str[i]] ? (obj[str[i]] = obj[str[i]] + 1) : (obj[str[i]] = 1);
    // console.log(Number(true));
    
  }
  console.log(obj);
}

findCountOfCharAsObject(SecondValue);