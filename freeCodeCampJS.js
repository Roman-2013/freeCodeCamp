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


// Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line
if(strokes==1){
  return names[0];

}else if(strokes<=par-2){
  return names[1];
}else if(strokes==par-1){
  return names[2];
}else if(strokes==par){
  return names[3];
}else if(strokes==par+1){
  return names[4];
}else if(strokes==par+2){
  return names[5];
}else if(strokes>=par+3){
  return names[6];
}

  return "Change Me";
  // Only change code above this line
}

golfScore(5, 4);

// Выбор из множества вариантов с операторами Switch
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  answer="alpha";
  break;

  case 2:
  answer="beta";
  break;

  case 3:
  answer="gamma";
  break;

  case 4:
  answer="delta";
  break
}


  // Only change code above this line
  return answer;
}

caseInSwitch(1);

// Добавление параметра по умолчанию в операторы Switch
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 'a':
  answer="apple";
  break
  
  case 'b':
  answer="bird";
  break;

  case 'c':
  answer="cat";
  break;

  default:
  answer="stuff";
  break;
}


  // Only change code above this line
  return answer;
}

switchOfStuff(1);

//Несколько идентичных опций в операторах switch
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
switch(val){
  case 1:
  case 2:
  case 3:
  answer="Low";
  break;

  case 4:
  case 5:
  case 6:
  answer="Mid";
  break;

  case 7:
  case 8:
  case 9:
  answer="High";
  break;
}


  // Only change code above this line
  return answer;
}

sequentialSizes(1);

// Замена цепочек If Else на Switch

function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  
  switch(val){
    case "bob":
    answer = "Marley";
    break;
    case 42:
     answer = "The Answer";
     break;
     case 1:
     answer = "There is no #1";
     break;
     case 99:
     answer = "Missed me by this much!";
     break;
     case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);