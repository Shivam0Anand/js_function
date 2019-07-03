// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
  return String(n);
}

// Function Expression
let convertToString1 = function(n) {
  return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
  return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

//  Function Declaration
function add(n) {
  return n + 1;
}
// Function Expression
var add = function(n) {
  return n + 1;
};
// Arrow
var add = n => n + 1;
add(5);
/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
// Function Declaration
function sub(n) {
  return n - 1;
}
// Function Expression
var sub = function(n) {
  return n - 1;
};
// Arrow
var sub = n => n - 1;

sub(6);

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
// Function declaration
function add2(x, y) {
  return x + y;
}
// Function Expression
var add2 = function(x, y) {
  return x + y;
};
// Arrow
var add2 = (x, y) => x + y;

add2(3, 4);
/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
// Function declaration
function sub2(y, x) {
  return x - y;
}
// Function Expression
var sub2 = function(x, y) {
  return x - y;
};
// Arrow
var sub2 = (x, y) => x - y;

sub2(3, 4);
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
// Function declaration
function mul2(x, y) {
  return x * y;
}
// Function Expression
var mul2 = function(x, y) {
  return x * y;
};
// Arrow
var mul2 = (x, y) => x * y;
mul2(2, 2);

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

// Function declaration
function div2(x, y) {
  return x / y;
}
// Function Expression
var div2 = function(x, y) {
  return x / y;
};
// Arrow
var div2 = (x, y) => x / y;
div2(10, 5);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

// Function declaration
function square(x) {
  return x + x;
}
// Function Expression
var square = function(x) {
  return x * x;
};
// Arrow
var square = x => x * x;
square(2);
/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function operation(add, x, y) {
  var output = Number(x + y);
  return console.log(`${x} + ${y} = ${output}`);
}
// Function Expression
let addOne = function(subtract, x, y) {
  var output = Number(x - y);
  return console.log(`${x} - ${y} = ${output}`);
};
// Arrow function without curly braces.
let addOne = (multiply, x, y) => console.log("x * y = " + x * y);

// Arrow function with curly braces.
let addOne = (divide, x, y) => {
  var output = Number(x / y);
  return console.log(`${x} / ${y} = ${output}`);
};

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function greater(a, b) {
  return a > b;
}
var greater = function(a, b) {
  return a > b;
};
var greater = (a, b) => a > b;
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
function smaller(a, b) {
  return a < b;
}
var smaller = function(a, b) {
  return a < b;
};
var smaller = (a, b) => a < b;

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */

function greater(a, b) {
  return a == b;
}
var greater = function(a, b) {
  return a == b;
};
var greater = (a, b) => a == b;

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

function greater(a, b) {
  return a > b;
}
var greater = function(a, b) {
  return a > b;
};
var greater = (a, b) => a > b;

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
// Function Decleration
function greater(x, y) {
  return Math.max(x, y);
}
// Function Expression
let greater = function(x, y) {
  return Math.min(x, y);
};
// Arrow function without curly braces
let greater = (x, y) => Math.max(x, y);
// Arrow function
let greater = (x, y) => {
  return Math.min(x, y);
};
greater(9, 6); // 9

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
// Function decleration
function even(n) {
  return n % 2 ? false : true;
}
// Function Expression
let even = function(n) {
  return n % 2 ? false : true;
};
// Arrow function without curly braces.
let even = n => (n % 2 ? false : true);
// Arrow function
let even = n => {
  return n % 2 ? false : true;
};
even(8); // true

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
// Function decleration
function odd(n) {
  return n % 2 ? true : false;
}
// Function Expression
let odd = function(n) {
  return n % 2 ? true : false;
};
// Arrow function without curly braces.
let odd = n => (n % 2 ? true : false);
// Arrow function
let odd = n => {
  return n % 2 ? true : false;
};
odd(8); // false

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
// Function decleration
function grade(score) {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 50 && score < 60) {
    return "F";
  }
}

// Function Expression
let grade = function(score) {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 50 && score < 60) {
    return "F";
  }
};
// Arrow Function
let grade = score => {
  if (score >= 90 && score < 100) {
    return "A";
  } else if (score >= 80 && score < 90) {
    return "B";
  } else if (score >= 70 && score < 80) {
    return "C";
  } else if (score >= 60 && score < 70) {
    return "D";
  } else if (score >= 50 && score < 60) {
    return "F";
  }
};
grade(65); // D

/**

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

// Function decleration
function addString(word1, word2) {
  return `${word1} ${word2}`;
}
// Function Expression
let addString = function(word1, word2) {
  return `${word1} ${word2}`;
};
// Arrow function without curly braces.
let addString = (word1, word2) => `${word1} ${word2}`;
// Arrow function
let addString = (word1, word2) => {
  return `${word1} ${word2}`;
};
addString("Hello", "World!");
