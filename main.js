/* Scenario: You are building a calculator for an online math game. The calculator must include functionality to perform the following:
● Absolute Value Calculation: Given any number, return its absolute value.
● Power Calculation: Calculate and return the value of a base raised to a specific power.
● Square Root Finder: Calculate the square root of a number.
● Maximum and Minimum Finder: From a given set of numbers, determine the largest and smallest values.
● Random Number Generator: Generate a random integer within a specified range.
● Custom Rounding: Round a number to a specified number of decimal places.

Step-by-Step Tasks:
1. Write a function for each operation listed above using the Math module.
2. Test each function with sample inputs to ensure it works as intended.
3. Combine the individual functions into a single "calculator" program where the user can select an operation and input the required values.
4. Test the calculator by performing the following:
● Find the absolute value of -45.67.
● Raise 5 to the power of 3.
● Calculate the square root of 144.
● Determine the largest and smallest values from [3, 78, -12, 0.5, 27].
● Generate a random number between 1 and 50.
● Round 23.67891 to 2 decimal places.
*/

const input = require('readline-sync');

// Absolute Value Calculation
function absoluteValue(number) {
    return Math.abs(number);
}

console.log(absoluteValue(-45.67));

// Power Calculation
function powerCalculation(base, power) {
    return Math.pow(base, power);
}

console.log(powerCalculation(5, 3));

// Square Root Finder
function squareRootCalculation(number) {
    return Math.sqrt(number);
}

console.log(squareRootCalculation(144));

// Maximum & Minimum Finder
function maxMinCalculation(array) {
    return Math.max(...array) + " & " + Math.min(...array); // ... = spread operator; fills in arguments from an array (geeksforgeeks)
}

console.log(maxMinCalculation([3, 78, -12, 0.5, 27]));

// Random Number Generator
function randomNumberGenerator(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log(randomNumberGenerator(1, 50));

// Custom Rounding
function customRounding(number, roundPosition) {
    return Math.round(number * 10**roundPosition) / 10**roundPosition; // 10**roundPosition = 10^roundPosition (i.e. 10^1 = 10; 10^2 = 100; etc.)
}

console.log(customRounding(23.67891, 2));

function calculatorProgram() {
    console.log("Welcome to the Calculator App!\n");

    let userChoice = input.question("Please choose from the following options:\n1. Find the Absolute Value of a number (enter '1')\n2. Find the Power of a number (enter '2')\n3. Find the Square Root of a number (enter '3')\n4. Find the Maximum and Minimum values of a set of numbers (enter '4')\n5. Generate a Random number within a specified range (enter '5')\n6. Round a number to a specified number of decimals (enter '6')\n");

        if (userChoice === '1') {
            let number = input.question("Please enter the number you'd like to find the Absolute Value of: ");

            console.log(`The Absolute Value of ${number} is ${absoluteValue(number)}.`);

        } else if (userChoice === '2') {
            let base = input.questionInt("Please enter a Base number: ");
            let power = input.questionInt("Please enter a Power number: ");

            console.log(`${base} to the power of ${power} is ${powerCalculation(base, power)}.`);

        } else if (userChoice === '3') {
            let number = input.question("Please enter a number to calculate the Square Root of: ");

            console.log(`The Square Root of ${number} is ${squareRootCalculation(number)}.`);

        } else if (userChoice === '4') {
            let numberArray = [];
            while (true) {
                let userInput = input.questionInt("Please enter a number to add to a list of numbers: ");
                numberArray.push(userInput);

                let continueInput = input.question("Would you like to add another number to the list? ");
                if (continueInput.toLowerCase() !== 'yes') {
                    break;
                }   
            }

            console.log(`The maximum and minimum values of the array [${numberArray}] are ${maxMinCalculation(numberArray)}.`);

        } else if (userChoice === '5') {
            let min = input.questionInt("Please enter the Minimum number (beginning range) for generating a random number: ");
            let max = input.questionInt("Please enter the Maximum number (ending range) for generating a random number: ");

            console.log(`The randomly generated number between ${min} and ${max} is ${randomNumberGenerator(min, max)}.`);

        } else if (userChoice === '6') {
            let number = input.questionFloat("Please enter a decimal number: ");
            let roundPosition = input.questionInt("How many decimal places would you like to round to? ");
            
            console.log(`${number} rounded to ${roundPosition} decimal places is ${customRounding(number, roundPosition)}`);
        }
}

calculatorProgram();