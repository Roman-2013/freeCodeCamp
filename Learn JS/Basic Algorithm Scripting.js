//1
function convertCtoF(celsius) {
  let fahrenheit=celsius*9/5+32;
 return fahrenheit
}
convertCtoF(30);

//2
function reverseString(str) {
  return str.split('').reverse().join('');
}
reverseString("hello");

//3
function factorialize(num) {
  if(num==0){
    return 1
  }
  let rezult=1;
  for(let a=0;a<num;a++){
  rezult*=(num-a)
  console.log(rezult);
  }
  return rezult;
}
factorialize(5);

//4
function findLongestWordLength(str) {
  let word=str.split(' ');
  let max=0
  for(let b=0;b<word.length;b++){
    if(word[b].length>max){
      max=word[b].length
    }
  }
  return max
}
findLongestWordLength("The quick brown fox jumped over the lazy dog");

//5
function largestOfFour(arr) {
  let rezult=[];
  for(let a=0;a<arr.length;a++){
   let number=arr[a].sort(function(a,b){
     return b-a;
   }) 
   console.log(rezult)
  rezult.push(number[0])
    
  }
  return rezult;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

//6
function confirmEnding(str, target) {
  return str.slice(str.length-target.length)===target;
}

confirmEnding("Bastian", "n");

//7
function repeatStringNumTimes(str, num) {
  if (num<=0){
    return ''
  }
  let rezult=str
  //console.log(rezult)
  for(let a=1;a<num;a++){
    rezult+=str   
  }
  console.log(rezult)
  return rezult
}
repeatStringNumTimes("abc", 3);
