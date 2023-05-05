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

//Установите параметры по умолчанию для ваших функций
const increment = (number, value=1) => number + value;

// Используйте параметр Rest с параметрами функции
const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
}

//Используйте оператор Spread для оценки массивов на месте
const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1]; 

console.log(arr2);

//Используйте присваивание деструктурирования для извлечения значений из объектов
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};
const{today,tomorrow}=HIGH_TEMPERATURES;

//Используйте назначение деструктурирования для назначения переменных из объектов
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

const{today: highToday, tomorrow: highTomorrow}=HIGH_TEMPERATURES


//Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for(let i =0 ; i<arr.length ; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
  };
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);

console.log(failuresList);

//Напишите краткие литеральные объявления объекта, используя сокращенную запись свойства объекта

const createPerson = (name, age, gender) => 
  // Only change code below this line
 ({ name,age,gender});
  // Only change code above this line

