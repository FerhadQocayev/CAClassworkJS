// // 1. arrayın içindəki müsbət ədədləri tapın

// let arr = [2, 4, -3, 43, 41, -3];

// function positives(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       console.log(arr[i]);
//     }
//   }
// }
// positives(arr);

// // 2. üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın

// function isRectangle(a, b, c) {
//   if (
//     a * a == b * b + c * c ||
//     b * b == a * a + c * c ||
//     c * c == b * b + a * a
//   ) {
//     console.log("yes");
//   } else {
//     console.log("no");
//   }
// }

// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// // 3. arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın

// const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

// function indicesOfUppercaseElements(arr) {
//   const is = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i].toUpperCase()) {
//       is.push(i);
//     }
//   }
//   return is;
// }

// const uppercaseis = indicesOfUppercaseElements(webTechs);
// console.log("Böyük hərfli olan elementlərin indeksləri:", uppercaseis);

// // 4. arrayın içindəki bütün hərfləri böyük olan elementləri başqa bir array şəklində return edin

// const webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];

// function uppercaseElements(arr) {
//   const uppercaseArr = arr.filter(
//     (element) => element === element.toUpperCase()
//   );
//   return uppercaseArr;
// }

// const newArray = uppercaseElements(webTechs2);
// console.log("Böyük hərfləri olan elementlər:", newArray);

// 5. Reverse the Case
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(str) {
//   if (str === str.toLocaleUpperCase()) {
//     return str.toLocaleLowerCase();
//   } else {
//     return str.toLocaleUpperCase();
//   }
// }

// console.log(reverseCase("MANY THANKS")); //"many thanks"
// console.log(reverseCase("many thanks")); //"MANY THANKS"

// // task 6

const users = [
  {
    name: "Anar",
    surname: "Hesenli",
    age: "22",
    uni: "ADA",
    gender: "male",
    salary: "3001",
  },
  {
    name: "Nicat",
    surname: "Sadiqov",
    age: "25",
    uni: "GDU",
    gender: "male",
    salary: "200",
  },
  {
    name: "Nezrin",
    surname: "Reshidova",
    age: "23",
    uni: "UNEC",
    gender: "female",
    salary: "300",
  },
  {
    name: "Hikmet",
    surname: "Hesenov",
    age: "22",
    uni: "UNEC",
    gender: "male",
    salary: "320",
  },
  {
    name: "Murad",
    surname: "Salmanli",
    age: "23",
    uni: "GDU",
    gender: "male",
    salary: "420",
  },
  {
    name: "Aynure",
    surname: "Hesenzade",
    age: "23",
    uni: "BMU",
    gender: "female",
    salary: "3210",
  },
];

// // 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.

// const usersinfo = users.filter(
//   (user) => user.uni === "UNEC" && user.surname.charAt(0).toLowerCase() === "r"
// );

// console.log(usersinfo);

// // 2.2.Show users whose age is eqaul to 22 and name start 'a'.

// const usersage = users.filter(
//   (user) => user.age === "22" && user.name.charAt(0).toLowerCase() === "a"
// );

// console.log(usersage);

// // 2.3.Sort users by age (ascending).

// users.sort((a, b) => a.age - b.age);
// console.log(users);

// 2.4.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').

// const uusers = users.map((user) => {
//   if (user.gender === "male") {
//     return { ...user, name: `Mr ${user.name}` };
//   } else {
//     return { ...user, name: `Ms ${user.name}` };
//   }
// });

// console.log(uusers);

let employees = [
  {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "Node",
      "Node",
      "Node",
      "Node",
      "Node",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
];

//   Find the employee who has many skills in the employees object.

let mostSkills = employees.reduce((item, curr) => {
  return item.skills.length > curr.skills.length ? item : curr;
});

console.log("The employee with the most skills:", mostSkills);

// isLoggedIn true olanları array şəklində return edin

let loggedInEmployees = employees.filter(
  (employee) => employee.isLoggedIn === true
);

console.log("isLoggedIn true olanlar:", loggedInEmployees);

// age'ə görə sort edin

employees.sort((a, b) => a.age - b.age);

console.log("Yaşa görə sıralanmışlar :", employees);

// Random 1 den 10 a qeder reqem generate edin ve sonra arrayda hemin reqemin olub olmamasini yoxlayin

let number = [2, 3, 4, 5, 6, 78, 7, 56, 576, 65, 596, 56, 506, 34, 668, 86, 87];
function yoxlama(num) {
  return number.includes(num);
}

let randomreqem = Math.floor(Math.random() * 11);
console.log(number);
console.log("Random reqem:", randomreqem);

if (yoxlama(randomreqem)) {
  console.log("Bu rəqəm array-də var.");
} else {
  console.log("Bu rəqəm array-də yoxdur.");
}
