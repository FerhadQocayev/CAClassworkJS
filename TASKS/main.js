// TASK 1

const employees = [
  { name: "Jamil", salary: 1500, department: "IT" },
  { name: "Jale", salary: 5000, department: "HR" },
  { name: "Bayram", salary: 24000, department: "IT" },
  { name: "Sahil", salary: 26000, department: "HR" },
  { name: "Maryam", salary: 18000, department: "IT" },
  { name: "Elnara", salary: 20000, department: "HR" },
  { name: "Davud", salary: 14000, department: "IT" },
];

// ortalama maaşı 20000-dən çox olan departamentləri çapa verən program tərtib edin.

employees.forEach((element) => {
  if (element.salary > 20000) {
    console.log(element);
  }
});

// ortalama maaşı 10000-dən çox olan və departamenti "IT" olanları çapa verən program tərtib edin.

employees.forEach((element) => {
  if (
    element.salary > 10000 &&
    element.department.toLocaleUpperCase() == "IT"
  ) {
    console.log(element);
  }
});

// sadecə department "HR" olanları yeni array'a yığıb, həmin arrayı console edin
let newArr = [];
employees.forEach((element) => {
  if (element.department.toLocaleUpperCase() == "HR") {
    newArr.push(element);
  }
});
console.log(newArr);

// TASK 2

const person = {
  firstName: "John",
  lastName: "Doe",
  city: "Ganja",
  website: "code.edu.az",
  languageInfo: {
    eng: "Advance",
    aze: "Fluenty",
    rus: "Intermediate",
  },
};

//  person adlı object-dən firstName-i, languageInfo-dan eng və rus property-ni destructing edin, əlavə olaraq
// personda yerdə qalan bütün property-ləri otherInfo adı altında rest operatoru ilə bir dəyişənə çıxarın.

const {
  firstName,
  languageInfo: { eng, rus },
  ...otherInfo
} = person;
console.log(otherInfo);
console.log(firstName);
console.log(eng);
console.log(rus);

// TASK 3

const persons = {
  firstName: "Michael",
  lastName: "Pam",
  age: 26,
  city: "Poland",
};

// 1. person object-nin sadəcə key-lərini console-a çıxardın.

console.log(Object.keys(persons));

// 2. person object-nin sadəcə value-lərini console-a çıxardın.

console.log(Object.values(persons));

// 3. Aşağıdakı kimi console-a çıxardın.
//     [firstName: 'Michael']
//     [lastName: 'Pam']
//     [age:26]
//     [city: 'Poland']

console.log(Object.entries(persons));

// 4. object-in age propertysini silin.
console.log(persons);
delete persons.age;
console.log(persons);

// 5. Ən uzun string value-nu console-a çıxardın.

// TASK 4

const text = "Java is awesome. Java is fun.";

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Javascript is fun.

console.log(text.replaceAll("Java", "Javascript"));

// TASK 5

// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
  string.split("").reverse().join("") === string
    ? console.log("This is palindrome.")
    : console.log("This isn't palindrome");
}
isPalindrome("poop");

// TASK 6

function longestWord(text) {
  for (let i = 0; i < text.length; i++) {
    currentWord = text.split(" ")[i];
    if (currentWord) {
    }
    text.split(" ")[i].length;
  }
}

console.log(longestWord("Hello word hi programmers"));

// Ən uzun sözü tapın.  ======>> programmers
