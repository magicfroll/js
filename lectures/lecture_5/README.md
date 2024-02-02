# Объекты в JavaScript

## Перебор значений
```js
for (const key in object) {
    console.log(key + ': ' + object[key]);
}
```

## Преобразование объекта в массив

```js
const object = {
    1: 'Ivanov',
    2: 'Petrov'
};

console.log(Object.keys(object));
console.log(Object.values(object));
console.log(Object.entries(object));
;
```

## Объекты и функции высшего порядка

