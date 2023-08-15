// // log a statement using console.log
// console.log("Hello from main.js");

// //variable
// let age = 25;
// console.log(age);

// const salary =0;
// salary =  80000;
// console.log(salary);

// let sum = 0;
// sum = 5;
// console.log(sum);

//Data Types

//string
// const name = "vishwas";
// const language = "Javascript";
// const channel = `Codevolution`;

//number
// const total = 0;
// const PI = 3.14;

//boolean
// const isPrimaryNumber = true;
// const isNewUser = false;

//undefined: value is not declared
// let result;
// console.log(result);

// const res = undefined;
// console.log(res);

// Complex data type: collection of data types
// const person = {
//   firstname: "Bruce",
//   lastname: "Wayne",
//   age: 30,
// };

// console.log(person.firstname);

// const oddNumbers = [1, 3, 5, 7, 9];
// console.log(oddNumbers[2]);

// let a = 10;
// a = "Vishwas";
// a = true;

// console.log(a);

//Operators
//asignment operator, which assign value to the operator
// let x = 10;
// let y = 5;
// console.log(x % y);
// console.log(++x);
// console.log(--y);

//comparison operator, it return boolean value true or false, it is used in loops
// console.log(x == y);
// console.log(x !== y);
// console.log(x >= y);
// console.log(y <= x);

//logical operators, perform logical operations, return true or false
//check number 8 lies in x and y
// const isValidNumber = x > 20 || 8 > y; // return true if both operand value is true;
// console.log(isValidNumber);

// const isValid = false;
// console.log(!isValid);

//String operators, to join more strings
// console.log("Bruce " + "Wayne");

//Ternanry opeartor return a value , based on the condition
// const isEven = 10 % 2 === 0 ? "Number is Even" : "Number is odd";
// console.log(isEven);

// Type conversion
// console.log(7 + "3");
// console.log(true + "3");
// console.log("4" - "2");
// console.log("Bruce" - "Wayne");
// console.log("5" - true);
// console.log("5" - false);
// console.log("5" - null);
// console.log(5 + undefined);

//Converting Data types
// console.log(Number("5"));
// console.log(Number(false));
// console.log(Number(""));
// console.log(parseInt("5"));
// console.log(parseInt("3.14"));
// console.log(String(true));
// console.log(String(null));
// console.log(String(undefined));
// console.log((500).toString());
// console.log(Boolean(10));

//Equality
// var var1 = "test";
// var var2 = "test";

// console.log(var1 == var2);
// console.log(var1 === var2);

// var var3 = 10;
// var var4 = "10";

// console.log(var3 == var4);
// console.log(var3 === var4);

// var var5 = false;
// var var6 = "";

// console.log(var5 == var6);
// console.log(var5 === var6);

// var var7 = null;
// var var8 = undefined;

// console.log(var7 == var8);
// console.log(var7 === var8);

//Conditional statements
// const num = 0;
// if (num > 0) {
//   console.log("Number is positive");
// } else if (num < 0) {
//   console.log("number is not positive");
// } else {
//   console.log("Number is zero");
// }

//switch statement

// const color = "red";

// switch (color) {
//   case "red":
//     console.log("color is red");
//     break;
//   case "green":
//     console.log("color is green");
//     break;
//   case "blue":
//     console.log("color is blue");
//     break;
//   default:
//     console.log("default color");
//     break;
// }

//Looping code
//syntax
// for (initializer; CSSConditionRule; final - expression) {
//   //code for run
// }

// for (let i = 1; i <= 5; i++) {
//   console.log("Iteration number" + i);
// }

//While loop

//syntax
//initializer
// while (condition) {
//   //code for run
//   final - expression;
// }

// let i = 1;
// while (i <= 5) {
//   console.log("Iteration number" + i);
//   i++;
// }

//do..while loop
/*
initializer
do{
    code for run
    final-expression
}while(condition)

*/

// let i = 1;
// do {
//   console.log("iteration number" + i);
//   i++;
// } while (i <= 5);

//For-of loop
// for (const item of array) {
//   //code for run
// }

// const numArray = [1, 2, 3, 4, 5];

// for (const num of numArray) {
//   console.log("iteration array" + num);
// }

//Functions
/*
syntax:
function name(parameter1, parameter2, parameter3){
    code for run
}
wirte once, use it many times
*/

function greet(username) {
  console.log("Good morning " + username);
}

greet("sarfaraz");
greet("Kamran");
greet("Hussain");

// function add(a, b) {
//   return a + b;
// }

// const add = (a, b) => {
//   return a + b;
// };

// const add = (a, b) => a + b;

// const sum = add(3, 4);
// console.log(sum);

//scope
// if (true) {
//   let myName = "sarfaraz";
//   console.log(myName);
// }

// function testFn() {
//   const myName = "Batman";
//   console.log(myName);
// }

const myNum = 100;
const myName = "Superman";
if (true) {
  let myName = "sarfaraz";
  console.log(myName);

  console.log(myNum);
}

function testFn() {
  const myName = "Batman";
  console.log(myName);
  console.log(myNum);
}
