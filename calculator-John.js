const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const isNumber = (value) => !isNaN(value) && value.trim() !== "";

const operations = {
  addition: (a, b) => a + b,
  subtraction: (a, b) => a - b,
  multiplication: (a, b) => a * b,
  division: (a, b) => b === 0 ? "Cannot divide by zero" : a / b,
  modulus: (a, b) => a % b,
  power: (a, b) => a ** b,
  average: (a, b) => (a + b) / 2
};

const askNumbers = (name, operation) => {
  rl.question(`Enter first number ${name}: `, (num1) => {
    rl.question(`Enter second number ${name}: `, (num2) => {
      if (!isNumber(num1) || !isNumber(num2)) {
        console.log("Type mismatch error: Please enter valid numbers");
        return startCalculator(name);
      }

      const a = Number(num1);
      const b = Number(num2);

      const result = operations[operation](a, b);
      console.log(`Result: ${result}`);
      restart(name);
    });
  });
};

const restart = (name) => {
  rl.question("Press + to continue or any key to exit: ", (choice) => {
    if (choice === "+") {
      startCalculator(name);
    } else {
      console.log("Thanks for using the calculator");
      rl.close();
    }
  });
};

const startCalculator = (name) => {
  rl.question(
    "Okay, Choose operation (addition, subtraction, multiplication, division, modulus, power, average): ",
    (operation) => {
      if (!operations[operation]) {
        console.log("Invalid operation");
        return startCalculator(name);
      }
      askNumbers(name, operation);
    }
  );
};

rl.question("Welcome to John's Calculator. Enter your name: ", (name) => {
  startCalculator(name);
});
