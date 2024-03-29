'use strict';

// Задание 1: 
 
// 1. Написать функцию, которая принимает, имя, фамилия и возраст. Функция должна 
// вывести в консоль строку: 
// "Привет, `имя` `фамилия`. Вы уже большой, вам `возраст`."

// function consolePrint(firstName, lastName, age) {
//     console.log(`Привет, ${firstName} ${lastName}. Вы уже большой, вам ${age}`);
// }

// consolePrint('John', 'Li', '23');

// -------------------------------------------------------------------------------------

// 2. Создайте функцию, которая принимает число, а возвращает квадрат переданного
// ей числа.

// function squareNumber(number) {
//     return number * number;
// }
// console.log(squareNumber(4));

// const square = function name(number, power) {
//     return number ** power;
// }
// console.log(square(2, 3));

// --------------------------------------------------------------------------------------

// 3. Создайте функцию, которая принимает число. 
// Функция должна вывести в консоль '+++', если число положительное, либо '---',
// если число было отрицательное. В случае, если было передано не число, либо ноль,
// функция ничего не должна выводить.

// function isPositiveOrNegative(number) {
//     if (!Number.isFinite(number) || number === 0) {
//         return;
//     } else {
//         console.log(number > 0 ? '+++' : '---');
//     }         
// }

// isPositiveOrNegative('dsfd');


// ===========================================================================================

// Задание 2: 
// 1. Создайте функцию, которая параметрами принимает 3 числа и выводит в 
// консоль сумму этих чисел.
// Создайте три переменные, со случайными значениями и продемонстрируйте работу 
// данной функции.

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max)
//     return Math.floor(Math.random() * (max - min) + min);
// }

// function sum(a, b, c) {
//     console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
// }

// const a = getRandomInt(1, 10)
// const b = getRandomInt(1, 10)
// const c = getRandomInt(1, 10)

// sum(a, b, c);

// ------------------------------------------------------------------------------------------------

// 3. Дан код:
 
// ```
// func(2);
// func(3);
// func();
 
// function func(num = 5) {
//   console.log(num * num);
// }
// ```
 
// Расскажите, каким будет результат каждого из вызовов функции.

// ========================================================================================================

// Задание 3: 
 
// 1. Создайте функцию, которая принимает число, а возвращает квадратный корень 
// переданного числа. 
// С помощью созданной функции найдите сумму корней чисел 3 и 4 и выведите данную 
// сумму в консоль. 

// function printSqrt(number) {
//     return Math.sqrt(number);    
// }

// console.log(printSqrt(3) + printSqrt(4));


// ---------------------------------------------------------------------------------------------------------

// 2. Создайте функцию, которая находит минимальное число из 2х переданных 
// аргументов функции и вернет найденное значение.

// function getMin(a, b) {
//     console.log(a > b ? b : a); // Math.min(a, b)    
// }

// getMin(5, 2);
// getMin(11, 22);
// getMin(5, 5);

// ========================================================================================================

// Задание 4:
 
// 1. Создайте функцию, которая принимает параметром число от 1 до 7, а возвращает 
// день недели на русском языке.

// function weekDay(number) {
//     switch (number) {
//         case 1:
//             return 'Понедельник'
//         case 2:
//             return 'Вторник'
//         case 3:
//             return 'Среда'
//         default:
//             return 'Введены не верные данные'
//     }
// }

// console.log(weekDay(3));

// ------------------------------------------------------------------------------------------

// 2. Создайте функцию, которой мы передаем имя и она возвращает приветствие в 
// зависимости от времени суток (утро, день, вечер, ночь), например: 
// "Добрый день, Иван." или "Доброй ночи, Иван.".

// https://jsdoc.app/

// /**
//  * Приветствует в зависимости от времени суток
//  * @param {string} name - имя
//  */
// function hello(name) {
//     const hour = new Date().getHours(); 
//     if (hour < 6) {
//         console.log(`Доброй ночи, ${name}`);
//     } else if (hour < 12) {
//         console.log(`Доброе утро, ${name}`);
//     } else if (hour < 17) {
//         console.log(`Добрый день, ${name}`);
//     } else {
//         console.log(`Добрый вечер, ${name}`);
//     }  
// }

// hello('John')

// ===============================================================================================

// Реализовать функцию round5, которой передается целое число, функция должна 
// возвращать ближайшее целое число к тому что было передано, без остатка делящееся 
// на 5.
 
// ```js
// function round5(val) {
    // const ostatok = (val % 5);
    // if (ostatok >= 3) {
    //     return val + (5 - ostatok);
    // }
    // if (ostatok < 3) {
    //     return val - ostatok;
    // }

//     return Math.round(val / 5) * 5;
// }
 
// console.log(round5(0)); // 0
// console.log(round5(2)); // 0
// console.log(round5(3)); // 5
// console.log(round5(11)); // 10
// console.log(round5(14)); // 15
// console.log(round5(50)); // 50
// console.log(round5(-2)); // 0
// console.log(round5(-3)); // -5

// ====================================================================================================

// Напишите программу, которая выводит на экран числа от 1 до 100. При этом вместо
// чисел, кратных трем, программа должна выводить слово «Fizz», а вместо чисел,
// кратных пяти — слово «Buzz». Если число кратно и 3, и 5, то программа должна
// выводить слово «FizzBuzz»

// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         const rules = {
//             3: "Fizz",
//             5: "Buzz"
//         };
        
//         let output = "";
        
//         for (const divisor in rules) {
//             if (i % divisor === 0) {
//             output += rules[divisor];
//             }
//         }
        
//         console.log(output || i);
//     }
// }

// fizzBuzz();