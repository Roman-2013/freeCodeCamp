//Сравните области действия переменной и пусть ключевые слова
function checkScope() {
  let i = 'function scope';
  if (true) {
   let i = 'block scope';
    console.log('Block scope i is: ', i);
  }
  console.log('Function scope i is: ', i);
  return i;
}

//Используйте стрелочные функции для написания кратких анонимных функций
const magic = ()=> {
  return new Date();
};

//Напишите стрелочные функции с параметрами
const myConcat = (arr1, arr2) => {
  return arr1.concat(arr2);
};

console.log(myConcat([1, 2], [3, 4, 5]));