'use strict';


// Задание 1: 
 
// 1. Создайте массив с элементами 1, 2, 3. 
// Выведите на экран каждый из этих элементов.

// const arr = [1, 2, 3]
// for (let i = 0; i < arr.length; i++) {
//     const element = arr[i];
//     console.log(element);    
// }

// 2. Создайте массив с произвольными элементами. 
// Выведите на экран количество элементов в этом массиве.

// const arr = [1, 2, 3, 7];
// console.log(arr.length);

// 3. Создайте массив с элементами 'a', 'b', 'c'. Запишите вместо первого элемента 
// число 1, вместо второго - 2, вместо третьего - 3.

// const arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// console.log(arr);

// -----------------------------------------------------------

// Задание 2:
 
// 1. Создайте массив с элементами 1, 2 и 3. С помощью оператора ++ увеличьте 
// каждый элемент массива на единицу.

// const arr = [1, 2, 3]
// for (let index = 0; index < arr.length; index++) {
//     arr[index]++;     
// }
// console.log(arr);

// 2. Узнайте длину следующего массива и объясните почему такое значение:
// ```
// const arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// console.log(arr.length);
// ```
// 3. Пусть дан такой массив: `[1, 2, 3]`. Добавьте ему в конец элементы 4 и 5.

// const arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);
// console.log(arr);

// 4. Создайте произвольный массив из 5 элементов, удалите из него два элемента. 
// Проверьте, какое станет значение свойства length после этого.

// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 2, 'Hello');
// console.log(arr, arr.length); // [1, 2, 'Hello', 5] 4

// --------------------------------------------------------------------------------

// Задание 3:
 
// 1. С помощью цикла for выведите в консоль числа от 11 до 33.

// for (let i = 11; i < 34; i++) {
//     console.log(i);    
// }

// 2. С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 
// до 100 включительно.

// for (let i = 1; i < 101; i++) {
//     if (i % 2 === 0) {
//         console.log(i);  
//     }      
// }

// 3. С помощью цикла for выведите в консоль числа от 100 до 0.

// for (let i = 100; i > 0; i--) {
//     console.log(i);    
// }

// 4. Создать переменную с заданным числом. Умножайте число на 3 столько раз, 
// пока результат умножения не станет больше 1000. Какое число получится? 
// Посчитайте количество итераций, необходимых для этого.

// let a = 56;
// let count = 0;
// while (a < 1000) {
//     a *= 3;
//     count++;
// }
// console.log(a, count);

// ---------------------------------------------------------------------------------

// Задание 4:
 
// 1. Создать массив `[2, 5, 9, 15, 1, 4]`.
// Выведите в консоль те элементы массива, которые больше 3-х, но меньше 10.

// const arr = [2, 5, 9, 15, 1, 4];

// 1-й вариант
// for (let i = 0; i < arr.length; i++) {    
//     if (arr[i] > 3 && arr[i] < 10) {
//         console.log(arr[i]);
//     }    
// }
// 2-й вариант
// const fil = arr.filter((num) => num > 3 && num < 10).join(', ')
// console.log(fil); 

// 2. Найдите сумму четных чисел от 2 до 100.

// let sum = 0;
// for (let i = 2; i <= 100; i++) {
//     if (i % 2) {
//         sum += i;
//     }
// }
// console.log(sum);

// 3. Создать массив `[2, 5, 9, 3, 1, 4]`.
// Найдите сумму элементов этого массива.

// const array = [2, 5, 9, 3, 1, 4];

// 1 вариант
// let sum = 0;
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     sum += element;    
// }
// console.log(sum);
// 2 вариант
// console.log(array.reduce((acc, el) => acc + el, 0));

// Найти самое большое число, используя функцию reduce
// console.log(array.reduce((acc, el) => acc > el ? acc : el, 0));

// 4. С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

// let str = '-'
// for (let i = 0; i < 10; i++) {    
//     str += String(i) + '-'
// }
// console.log(str);

// 5. Создать массив `[2, 5, 9, 0, 3, 1, 4]`.
// Запустите цикл, который будет по очереди выводить элементы этого массива в 
// консоль до тех пор, пока не встретится элемент со значением 0. После этого 
// цикл должен завершить свою работу.

// const array = [2, 5, 9, 0, 3, 1, 4]
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element !== 0) {
//         console.log(element);
//     } else {
//         break;  
//     }      
// }

// Задание 5:
 
// 1. Создать массив из 10 случайных чисел от 0 до 100 включительно.
// Наобходимо вывести в консоль все числа, которые делятся и на 2, и на 3.

// const array = Array.from({length: 10}, () => Math.floor(Math.random() * 100));
// console.log(array);
// 1-й вариант
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element % 6 == 0) {
//         console.log(element);
//     }    
// }

// 2-й вариант 
// console.log(array.filter((num) => num % 6 === 0));

// 2. Дан массив: `[1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3]`. Подсчитайте количество 
// цифр 3 в этом массиве.

// const array =  [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let count = 0;
// const number = 3;
// // 1 вариант
// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element === number) {
//         count++;
//     }  
// }
// console.log(count);
// 2 вариант
// console.log(array.filter((num) => num === number).length);

// 4. Дан массив: `[1, 2, 3, 4, 5]`.
// С помощью метода splice преобразуйте массив в следующий: [1, 4, 5]

// const array = [1, 2, 3, 4, 5];
// const newArray = (array.splice(1, 2));
// console.log(array);

// -----------------------------------------------------------------------------------

// В функцию передается строка в которой находятся круглые скобки, необходимо 
// реализовать функцию так, чтобы она возвращала правду, если скобки парные (
// открывающие и закрывающие), а также порядок открывающих и закрывающих скобок 
// верно соблюден.
 

// function validParentheses(str) {
//     const result = [str[0]];    
//     for (let i = 1; i < str.length; i++) {
//         if (str[i] === '(') {
//             result.push(str[i]);
//         }
//         else {
//             const last = result.pop();
//             if (last !== '(') {
//                 return false;
//             }
//         }            
//     }
//     return result.length === 0;
// }
 
// console.log(validParentheses('()')); // true
// console.log(validParentheses('((')); // false
// console.log(validParentheses('))')); // false

// -------------------------------------------------------------------------------

// В функцию передается число, необходимо из функции вернуть максимальное число, 
// содержащее те же цифры, что и в переданном числе. Если было передано 
// некорректное число, вернуть NaN.
 

// function getMax(num) {
//     if (typeof num !== 'number') {
//         return 'NaN'
//     }
    // 1 вариант 
    // let lstNum = Array.from(String(num), Number);
    // for (let i = 0; i < lstNum.length; i++) {        
    //     for (let j = 0; j < lstNum.length; j++) {
    //         const a = lstNum[j].toString();
    //         if (a === 'NaN') {
    //             lstNum.splice(j, 1);
    //         } else {
    //             if (lstNum[j] < lstNum[j + 1]) {
    //                 let temp = lstNum[j];
    //                 lstNum[j] = lstNum[j + 1];
    //                 lstNum[j + 1] = temp;
    //             }
    //         }                        
    //     }
    // }
    // let strMaxNum = '';
    // for (let i = 0; i < lstNum.length; i++) {
    //     strMaxNum += String(lstNum[i]);
        
    // }
    // return Number(strMaxNum);
   
    // 2 вариант
//     return +[...num.toString()]
//         .map((str) => +str)
//         .filter((num) => !Number
//         .isNaN(num)).sort((a, b) => b - a)
//         .join('');
// }
 
// console.log(getMax(6118)); // 8611
// console.log(getMax(17)); // 71
// console.log(getMax(17.56)); // 751
// console.log(getMax('Привет')); // NaN

// Задание 1:
 
// 1. Создайте объект с ключами от 1 до 7, в качестве значений содержащий имена
// дней недели. Выведите на экран “Вторник”.

// const week = {
//     1: 'Понедельник',
//     2: 'Вторник',
//     3: 'Среда',
//     4: 'Четверг',
//     5: 'Пятница',
//     6: 'Суббота',
//     7: 'Воскресенье',
// }

// 2. Создайте объект user с ключами 'name', 'surname', 'age'. Выведите в консоль
// фамилию, имя и возраст одной строкой.

// const user = {
//     name: 'Jihn',
//     surname: 'Smith',
//     age: 25
// }

// 3. Добавьте в объект user свойство отчество, которое пользователь должен
// ввести с клавиатуры.
// 4. Удалите свойство surname.

// const middleName = prompt('Введите ваше отчетство')
// user.middleName = middleName; 
// delete user.surname
// console.log(user);
// console.log(Object.entries(user));








// Задание 2:
 
// 1. Создайте два массива: первый с названиями дней недели, а второй - с их
// порядковыми номерами:
// `['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']`
// `[1, 2, 3, 4, 5, 6, 7]`

// const weekDayName = ["пн", "вт", "ср", "чт", "пт", "сб", "вск"]
// const weekDayNumber = [1, 2, 3, 4, 5, 6, 7]

// 2. С помощью цикла создайте объект, ключами которого будут названия дней,
// а значениями - их номера.

// const week = {}
// for (let i = 0; i < 7; i++) { 
//     week[weekDayName[i]] = weekDayNumber[i]; 
// }
// console.log(week);

// 3. Создайте объект: `{x: 1, y: 2, z: 3}`. Переберите этот объект циклом и
// возведите каждый элемент этого объекта в квадрат.

// const coord = {
//     x: 1,
//     y: 2,
//     z: 3,
// }

// for (const key in coord) {
//     coord[key] *= coord[key] 
// }
// console.log(coord);


// Задание 3:

// const obj = {
//     key1: {
//       key1: 1,
//       key2: 2,
//       key3: 3,
//     },
//     key2: {
//       key1: 4,
//       key2: 5,
//       key3: 6,
//     },
//     key3: {
//       key1: 7,
//       key2: 8,
//       key3: 9,
//     },
//   }
//   ```
   
//   Найдите сумму всех чисел, приведенного объекта.

// const obj = {
//         number: 10,
//         key1: {
//           obj: {
//             property: 1000,
//           },  
//           key1: 1,
//           key2: 2,
//           key3: 3,
//         },
//         key2: {
//           key1: 4,
//           key2: 5,
//           key3: 6,
//         },
//         key3: {
//           key1: 7,
//           key2: 8,
//           key3: 9,
//         },
//       }

// function getSum(obj) {
//     let sum = 0;
//     for (const key in obj) {
//         console.log[obj[key]]
//         if (typeof obj[key] === 'number') {
//             sum += obj[key]
//         }
//         else {
//             sum += getSum(obj[key])
//         }
//     }
//     return sum;
// }

// console.log(getSum(obj));


// Задание 4: 
 
// 1. Создайте объект riddle.
// 2. Добавьте свойства question со значениями(текст загадки) и 
// answer (ответ на загадку).
// 3. Создайте метод askQuestion который спрашивает у пользователя вопрос 
// question и сравнивает ответ с answer.
// В случае верного ответа, необходимо поздравить пользователя.
// В случае, если пользователь ответил неверно, необходимо подсказать, 
// подсказок может быть несколько.
// Если пользователь ответил неверно после всех подсказок, то в консоль 
// выводится текст: “вы проиграли”.

// const riddle = {
//     question: 'Зимой и летом одним цветом?',
//     answer: 'Елка',
//     hints: ['это зеленое', 'это на новый год'],
//     askQuestion() {
//         let userAnswer = prompt(this.question);       
//         if (this.answer === userAnswer.toLowerCase()) {                
//             return alert('Вы ответили верно!');
//         } else {
//             for (let i = 0; i < this.hints.length; i++) {
//                 let userAnswer = prompt(this.hints[i])
//                 if (userAnswer === this.answer.toLowerCase()) {
//                     return alert('Вы ответили верно!');
//                 }                     
//             }
//         }
//         return alert('Вы проиграли');  
//     }
// }

// riddle.askQuestion();


// Пример FOR EACH

const arr = [1,2,3,4,5];
arr.forEach((num, index) => {
    console.log(`Индекс ${index}, значение ${num}`);    
});

