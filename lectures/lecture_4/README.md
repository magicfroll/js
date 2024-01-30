# Урок 7. Лекция. Циклы и массивы

## Цикл while

```js
while (condition) {
    // Тело цикла 
}
```
```js
const number = Number(prompt('Введите значение N'));
let i = 1;
while (i <= number) {
    console.log(i++);
}
```

## Цикл do..while

```js
let pass;
do {
    pass = Number(prompt('Введите пароль'));
} while (pass !== 123);
```

## Цикл for

```js
for (инициализация; проверка; инкремент;) {
    инстукция; 
}
```

```js
const number = Number(prompt('Введите значение N'));
for (let i = 0; i <= number; i++) {
    console.log(i);    
}
```

## Массивы

```js
const students = [];
// Добавить значения.
students.push('Иванов');
students.push('Петров');
students.push('Сидоров');
console.log(students); // ['Иванов', 'Петров', 'Сидоров']

// Обращение к элементу
students[1]; 

// Длина массива
students.length

// Извлечь последний элемент и удалить 
const lastStudent = students.pop();

// Извлечь нулевой элемент и сдивунть остальные влево
const firstStudent = students.shift();

// Копирование массива
const students2 = students.slice();
const students2 = students.slice(0, 2);

// Вычислить индекс определенного элемента (поиск элемента)
const indexOfIvanov = students.indexOf('Иванов');
```