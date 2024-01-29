"use strict";

/*
Необходимо попросить пользователя ввести число.
Если пользователь ввел отличное от числа значение, необходимо вывести в консоль
строку: "Значение задано неверно", иначе необходимо будет вызвать функцию 
(нужно будет ее создать), которая будет принимать введенное пользователем 
число. Функция должна вычесть из переданного ей числа 13% и вывести в консоль 
сообщение "Размер заработной платы за вычетом налогов равен N."
*/

function getSalaryOnHand(numer) {
    console.log(`Размер заработной платы за вычетом налогов равен ${numer * 0.87}`);
}

const number = +prompt('В ведите число');

Number.isNaN(number) ? console.log('Значение задано неверно') : getSalaryOnHand(number);

