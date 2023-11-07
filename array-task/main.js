// task 1
const number = [1, 2, 3, 4, 5, 6, 7, 8];
let tek = number.filter((number) => number % 2 !== 0);
console.log(tek);

// part 2
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let natural = array.filter((array) => array > 0 && array <= 10);
console.log(natural);

// task 2

const users = [
  {
    first_name: "Mike",
    last_name: "Sheridan",
  },
  {
    first_name: "Tim",
    last_name: "Lee",
  },
  {
    first_name: "John",
    last_name: "Carte",
  },
];

let newUsers = users.map((item, i) => {
  return `${item.first_name} ${item.last_name}`;
});

console.log(newUsers);

// task 3

const persons = [
  { name: "Akif", age: 25 },
  { name: "Aysu", age: 32 },
  { name: "Ali", age: 35 },
];

// let firstPerson = persons.find((item, i) => {
//     return item.age > 30
// })
// console.log(firstPerson);

let firstPerson = persons.find((item, i) => {
  return item.age > 30;
});
console.log(firstPerson);
