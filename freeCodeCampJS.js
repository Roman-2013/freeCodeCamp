//41
const myArray = [50, 60, 70];
let myData=myArray[0];
//42
// Setup
const myArray = [18, 64, 99];

// Only change code below this line
myArray[0]=45;
//43
const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
];

const myData = myArray[2][1];
//44
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
myArray.push(["dog",3]);
//45
// Setup
const myArray = [["John", 23], ["cat", 2]];

// Only change code below this line

let removedFromMyArray=myArray.pop();
//46
// Setup
const myArray = [["John", 23], ["dog", 3]];

// Only change code below this line
let removedFromMyArray=myArray.shift();
//47
// Setup
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line
myArray.unshift(["Paul", 35]);
//48
const myList = [["chocolate",3],["juse",2],["lemon",1],["meat",4],["breat",4],["chicen",4],["tomato",5]];
//49
function reusableFunction(){
  console.log("Hi World")
};
reusableFunction();
//50


//51
function timesFive(num1){
  return num1*5
}
//52
// Declare the myGlobal variable below this line


function fun1() {
  // Assign 5 to oopsGlobal here
oopsGlobal=5
}
let myGlobal=10;
// Only change code above this line

function fun2() {
  let output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}
//53
function myLocalScope() {
  // Only change code below this line
 let myVar=1;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);
//54
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  // Only change code below this line
let outerWear="sweater";
  // Only change code above this line
  return outerWear;
}

myOutfit();
//55
// Setup
let sum = 0;

function addThree() {
  sum = sum + 3;
}

// Only change code below this line
function addFive(){
  sum=sum+5;
}

// Only change code above this line

addThree();
addFive();
//56
// Setup
//let processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}

// Only change code below this line
let processed=processArg(7);


