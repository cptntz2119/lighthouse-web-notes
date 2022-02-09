// - Write a node program that takes in an unlimited number of command line arguments, goes through each and prints out the sum of them. If any argument is not a whole number, skip it. Do support negative numbers though. If any argument is not a number, output an error message. We need at least 2 arguments.

// taking the arguments from the command-line
// clean up the args?
const myArgs = process.argv.slice(2);
// Edge case: We need at least 2 arguments.
if (myArgs.length < 2) {
  console.log("Please enter at least 2 arguments");
  process.exit();
}

// single responsibility principle:
// a function should accomplish a single goal

const sum = function (numbers) {
  let total = 0;

  // loop though the arguments
  for (let num of numbers) {
    const convertedNum = Number(num);

    // add the current value to an accumulator
    // convert num to Number (typecasting)

    // Edge case: If any argument is not a number, output an error message
    if (isNaN(convertedNum)) {
      console.log("Please input only numbers");
      // stop the execution of our code
      process.exit();
    }

    // Edge case: If any argument is not a whole number, skip it
    if (Number.isInteger(convertedNum)) {
      total += convertedNum; // total = total + num
    }
  }

  // print out the sum
  return total;
};

const result = sum(myArgs);
console.log("result:", result);

// refactor
// readability
// modular?
// best practices
