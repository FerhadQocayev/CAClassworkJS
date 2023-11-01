// task 1

let num = 345;
let last_num = num % 10;
let middle_num = ((num % 100) - last_num) / 10;
let first_num = (num - (last_num + middle_num * 10)) / 100;
let sum = last_num + first_num + middle_num;
let average = sum / 3;
let multiply = last_num * first_num * middle_num;
console.log(`Ededler ${first_num} , ${middle_num} ,${last_num}`);
console.log(`sum: ${sum}`);
console.log(`average: ${average}`);
console.log(`multiply: ${multiply}`);

// task 2

let number = 35;
for (let i = 1; i <= number; i++)
  if (number % i == 0) console.log(`Ededin bolenleri ${i}`);

//  task 3

let numb = 4;
let say = 0;
for (let i = 1; i <= numb; i++)
  if (numb % i == 0) {
    say += 1;
  }
console.log(`say; ${say}.`);

// task 4

for (let x = 0; x <= 10; x++) {
  console.log(`${x}x${x}=${x * x}`);
}

// task 5

console.log(`i i^2 i^3`);
for (let x = 0; x <= 10; x++) {
  console.log(`${x} ${x ** 2} ${x ** 3}`);
}
