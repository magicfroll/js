'use strict';

// const number = Number(prompt('Введите значение N'));
// let i = 1;
// while (i <= number) {
//     console.log(i++);
// }

// let pass = Number(prompt('Введите пароль'));
// while (pass !== 123) {
//     pass = Number(prompt('Введите пароль'));
// }

// let pass;
// do {
//     pass = Number(prompt('Введите пароль'));
// } while (pass !== 123);

// const number = Number(prompt('Введите значение N'));
// for (let i = 0; i <= number; i++) {
//     console.log(i);    
// }

const students = [];
students.push('Иванов');
students.push('Петров');
students.push('Сидоров');
console.log(students);

console.log(students[1]);

console.log(students.length);

students.push(prompt('Введите фамилию'))

const lastStudent = students.pop();

const firstStudent = students.shift();

const students2 = students.slice();

const indexOfIvanov = students.indexOf('Иванов');
