const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const addNumbers = (numbers) => {
  let sum = 0;

  numbers.forEach((number) => (sum += Number(number)));

  return sum;
};

rl.question("Input numbers: ", (answer) => {
  const formatedNumbers = answer.trim().split(",");

  const sum = addNumbers(formatedNumbers);
  console.log(sum);

  rl.close();
});
