'use strict';

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

// const arr = [1,2,3,4,5];
// arr.forEach((num, index) => {
//     console.log(`Индекс ${index}, значение ${num}`);    
// });