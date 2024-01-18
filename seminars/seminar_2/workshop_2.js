'use strict';
 
// Задание 1.
 
// const personName = prompt('Напишите Ваше имя:');
// const personAge = Number(prompt('Напишите Ваш возраст:'));
// alert(`Добро пожаловать, ${personName}. Ваше количество оборотов вокруг солнца - ${personAge}`);
 
// Задание 2:
 
// 1. Найти остаток от деления переменных `a` на `b`, где a = 13, b = 5.
// const a = 13;
// const b = 5;
// console.log(13 % 5);
 
// 2. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// let a;
// alert(a);
// undefined
 
// ```
// 3. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('abc' * 3);
// NaN
 
// ```
// 4. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert(1 / 0);
// alert(-1 / 0);
// Infinity
 
// ```
// 5. Что выведет на экран (Сначала проговорите, потом проверьте)
// ```
// alert('2' * '3');
// 6
// ```
 
// Задание 3:
// 1. Сознательно допустите ошибку в вашем коде. Убедитесь, что ошибка появляется
// в консоли. Определите, в какой строке кода случилась ошибка.
// const a = 123;
// const a = 321;
 
// 2. Необходимо вывести в консоль результат суммы переменных a = '2', b = '3'.
// console.log('2' + '3');
 
// 3. Пользователь с клавиатуры вводит 2 числа, необходимо в консоль вывести весь
// текст ниже, одной строкой с переносами строк:
// Сумма чисел равна “результат”.
// Разность чисел равна “результат”.
// Произведение чисел равно “результат”.
// Частное чисел равно “результат”.
// Остаток от деления чисел равен “результат”.
 
// const a = Number(prompt('Введите число a:'));
// const b = Number(prompt('Введите число b:'));
// console.log(`
// Сумма чисел равна ${a + b}.
// Разность чисел равна ${a - b}.
// Произведение чисел равно ${a * b}.
// Частное чисел равно ${a / b}.
// Остаток от деления чисел равен ${a % b}.
// `);
 
// 1. Не запуская код, определите, что выводится в консоль:
 
// ```
// console.log(String(true)); = true
// console.log('a' + true);  = atrue
// console.log(Number(true)); = 1
// console.log(true + 1); = 2
// console.log(true + true); = 2
// console.log(true - true); = 0
// console.log(String(true) + Number(true)); = true1
// ```
 
// Задание 5:
// 1. Пользователь с клавиатуры вводит число. Необходимо создать условный
// оператор, который выведет одну из следующих строк в консоль:
// “Число больше 5”, “Число меньше 5”, либо “Число равно 5”.
// const num = +prompt("Введите число");
// if (Number.isNaN(num)) {
//     console.log("Вы ввели не число.");
// } else if (num > 5) {
//     console.log("Число больше 5");
// } else if (num < 5) {
//     console.log("Число меньше 5");
// } else {
//     console.log("Число равно 5");
// }
 
// Number.isNaN(num) ? console.log("Вы ввели не число.") : num > 5 ? console.log("Число больше 5") : num < 5 ? console.log("Число меньше 5") : console.log("Число равно 5");
 
// 2. Создайте две переменные test1 и test2. Проверьте, равны ли их значения и выведите соответствующее сообщение.
// const test1 = 1;
// const test2 = 2;
// console.log(test1 === test2);
 
// 3. Пользовать с клавиатуры вводит 2 числа, необходимо определить, какие из двух чисел минимальное и вывести в консоль строку “Минимальное число `число`”.
// const a = Number(prompt('Введите число a:'));
// const b = Number(prompt('Введите число b:'));
// if (a < b) {
//     console.log(`Минимальное число ${a}`);
// } else {
//     console.log(`Минимальное число ${b}`);
// }
 
// a < b ? console.log(`Минимальное число ${a}`) : console.log(`Минимальное число ${b}`);
 
// console.log(`Минимальное число ${a < b ? a : b}`);
 
// 4. Попросить пользователя ввести число, которое будет больше нуля и меньше 15. Если пользователь ввел значение, о котором его попросили, необходимо вывести
// сообщение “Спасибо за число `число`.”, в противном случае, вывести сообщение:
// “А вы, я смотрю, хулиганите! `число` - неверное значение.”
 
// const input = prompt('Введите число:');
// const num = Number(input);
// if (Number.isNaN(num)) {
//     console.log(`${input} не число.`);
// } else if (num < 15 && num > 0) {
//     console.log(`Спасибо за число ${num}.`);
// } else {
//     console.log(`А вы, я смотрю, хулиганите! ${num} - неверное значение.`);
// }
 
// const stringNum = '1.2';
// console.log(+stringNum);
// console.log(Number(stringNum));
// console.log(Number.parseInt(stringNum));
// console.log(Number.parseFloat(stringNum));
 
// const num = 12350432345657;
// console.log(num % 10);
// console.log(Math.floor(num % 100 / 10));
// console.log(Math.floor(num % 1000 / 100));
 
// var a = 123;
// console.log(a);
// const aa = 321;
// console.log(aa);
// const alert = 123;
// console.log(alert);
// if (true) {
//     const a = 13;
//     console.log(a);
// }
// console.log(a);
// const b = 2;
// function func(a = 1) {
//     return a + b;
// }
// const funcNum = func(3);
// console.log(funcNum);
 
// string, number, boolean, undefined, null, bigInt, symbol
// object
 
// const num = 123;
// const bigNum = BigInt(123);
// console.log(bigNum);
// const sym = Symbol('123');