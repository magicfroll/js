console.log('Текст из script.js!')

// 1. Создайте переменную num и присвойте ей значение 123. Выведите
// значение этой переменной в консоль
// 2. Создайте переменную а и присвойте ей значение 5, переопределите
// переменную а на значение 7, выведите переменную а в консоль
// 3. Создайте переменную b. Запишите в нее сумму чисел 1, 2 и 3. С
// помощью функции console.log выведите в консоль содержимое
// переменной b.
// 4. Создайте 2 вида комментариев в вашем коде, добавьте в них
// произвольный текст

// const num = 123;
// console.log(num);

// let a = 5;
// console.log(a);
// a = 7;
// console.log(a);

// const b = 1 + 2 + 3;
// console.log(b);


/*
1. Создайте две переменные, одна будет хранить ваш возраст (девушкам всегда 18), а другая переменная будет хранить текущий год (все созданные переменные должны быть логично названы).
- Создайте переменную суммы и присвойте сумму чисел из двух переменных.
- Создайте переменную разности и присвойте разность текущего года и вашего возраста.
- Создайте переменную произведения и присвойте произведение чисел двух переменных.
- Создайте переменную частного и присвойте деление чисел текущего года к вашему возрасту.
2. Выведите в консоль все созданные переменные.
3. Сложите все созданные переменные и выведите результат в консоль.
*/

// const age = 40;
// const year = new Date().getFullYear();
// const sum = age + year;
// const difference  = year - age;
// const multiply = age * year;
// const division = 2024 / 40;

// console.log(`Возраст: ${age}, год: ${year}, сумма: ${sum}, разница: ${difference}, произведение: ${multiply}, частное: ${division}`);

// console.log(age + year + sum + difference + multiply + division);

// Задание 4: 
// Не запуская код, определите, что отобразится в консоли: 
// `let a = 5 + 5 * 3 + 3;`
// Не запуская код, определите, что отобразится в консоли:
// `let b = 8 / 2 + 2;`
// Не запуская код, определите, что отобразится в консоли:
// `let c = (2 + 3) * (2 + 3);`
// Не запуская код, определите, что отобразится в консоли:
// `let d = (2 + 3) * 2 + 3;`
// Не запуская код, определите, что отобразится в консоли:
// `let e = (2 * 8) / 4;`
// Не запуская код, определите, что отобразится в консоли:
// `let f = 2 * (8 / 4);`


// Задание 5: 
// 1. Запишите в переменную `a` число `0.1`, а в переменную `b` - число `0.2`. Найдите сумму значений этих переменных и выведите ее на экран.
// 2. Создайте переменную `c`, запишите в нее какое-нибудь положительное или отрицательное число. Выведите на экран это число с обратным знаком.

// const a = 0.1;
// const b = 0.2;
// const sum = a + b;
// console.log(Math.round(sum * 10) / 10);
// console.log(sum.toFixed(1)); // В данном случае результат строка

// const num = '123.43543534'
// console.log(num);
// console.log(Number(num)); // если в числе будет букава - NaN
// console.log(+num); // если в числе будет букава - NaN
// console.log(parseInt(num)); // целое число
// console.log(Number.parseInt(num)); // более оптимальная реализация 
// console.log(Number.parseFloat(num));

// Задание 6: 
// 1. Создайте строку с вашем именем и строку с вашей фамилией. Выведите эти данные в консоль.
// 2. Создайте переменную с текстом 'java' и переменную с текстом 'script'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'javascript'.
// 3. Создайте переменную с текстом 'hello' и переменную с текстом 'world'. С помощью этих переменных и операции конкатенации строк выведите в консоль строку 'hello world', желательно использовать бэктики (обратные кавычки).

// const name = 'Евгений';
// const surname = 'Литяев';
// console.log(`Имя: ${name}, фамилия: ${surname}`);

// const java = 'java';
// const script = 'script';
// console.log(java + script);

// const hello = 'hello';
// const world = 'world';
// console.log(`${hello} ${world}`);

// const num = Number.parseInt(prompt('Введите число: '));
const num = +prompt('Введите число: ');
console.log(num + 5);
