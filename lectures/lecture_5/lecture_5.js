'use strict';


const product = {
    name: 'Стол',
    price: 2000,
    count: 2,
    userRegister: false,
    registration: function () {
        this.userRegister = true
    },
    countProduct: function () {
        if (this.count > 0) {
            console.log(`Вы можете купить данный товар` );
            
        } else {
            console.log('Данный товар закончился');
        }
        
    },
    buyProduct: function () {
        if (this.userRegister) {
            console.log('Товар в корзине');
        } else {
            console.log('Вам необходимо зарегистрироваться');
        }
    }
}

product.buyProduct();
product.registration();
console.log(product.userRegister);
product.buyProduct();
console.log(Object.keys(product));
console.log(Object.values(product));
console.log(Object.entries(product));


// MAP()

const studentsPracticeTime = [
        {
            firstName: "Ivanov",
            practiceTime: 56
        },
        {
            firstName: "Petrov",
            practiceTime: 120
        },
        {
            firstName: "Sidorov",
            practiceTime: 148
        },
        {
            firstName: "Belkin",
            practiceTime: 20
        },
        {
            firstName: "Avdeev",
            practiceTime: 160
        }
    ];

// Мы хотим вывести в таблицу студентов и информацию для каждого, прошел
// ли он практику уже. Практика будет считаться пройденной, если студент
// отработал 120 часов или больше.

const dataForTable = studentsPracticeTime.map((student) => {
    if (student.practiceTime < 120) {
        // Мы возвращаем новый объект, более удобный для вывода.
        return {
            Student: student.firstName,
            Practice: "Not passed"
        };
    } else {
        return {
            Student: student.firstName,
            Practice: "Passed"
        };
    }
    });

// В консоль можно выводить разнымиспособами, если использовать метод table, и передать туда массив или
// объект, этот метод выводит данные в виде таблицы
console.table(dataForTable); 


// FILTER()

// Мы хотим отфильтровать массив студентов, оставив в новом массиве только
// тех, кто уже прошел практику. Практика будет считаться пройденной, если
// студент отработал 120 часов или больше.

const studentsPassedPractice = studentsPracticeTime.filter((student) => {
    if (student.practiceTime < 120) return false
        return true
});

// Получили новый массив, в котором
// только те студенты, кто уже прошел практику.
console.log(studentsPassedPractice); 

// REDUCE()

// Посчитаем сколько всего часов практики отработали студенты.

// Объявим переменную для хранения суммы всех часов.
let totalTime = 0; 

for (let index = 0; index < studentsPracticeTime.length; index++) {
    totalTime = totalTime + studentsPracticeTime[index].practiceTime;
}

console.log(totalTime);

// Посчитаем сколько всего часов практики отработали студенты с использованием reduce.
const totalTimeUsingReduce = studentsPracticeTime.reduce((acc, student) => { 
    // Первое значение - это функция обратного вызова, которая будет получать
    // значение аккумулятора (acc) при каждой итерации; и текущий элемент массива
    // (student).
    return acc + student.practiceTime;
}, 0); // Второй аргумент - это первоначальное значение аккумулятора - 0.

console.log(totalTimeUsingReduce); // 504

// SOME()

// Проверим, есть ли хоть один студент, который прошел практику.
const isSomebodyPassedPractice = studentsPracticeTime.some((student) => {
    // Добавим вывод студента, чтобы посмотреть сколько элементов массива будет проитерированно.
    console.log(student.firstName);    
    return student.practiceTime >= 120;
});
// "Ivanov"
// "Petrov" - итерации остановились на втором элементе массива, т.к. он
// удовлетворяет нашему условию и метод some дальше итерации не выполняет.

console.log(isSomebodyPassedPractice); // true - среди студентов есть те, кто прошел практику.

// FIND

// Мы хотим найти студента Belkin и посмотреть сколько времени он отработал на практике.
const studentBelkin = studentsPracticeTime.find((student) => {
    return student.firstName === "Belkin";
});

console.log(studentBelkin.practiceTime); // 20

// ДЕСТРУКТУРИЗАЦИЯ

// Сбор данных из объекта.
const student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};

// мы объявляем отдельно переменную, под каждый нужный нам параметр.
const firstName = student.firstName; 
const lastName = student.lastName;
const age = student.age;

// Сбор данных из массива.
const students = ["Ivanov", "Petrov", "Belkin"];
const student1 = students[0];
const student2 = students[1];
const student3 = students[2];

// С ДЕСТРУКТУРИЗАЦИЕЙ

// Сбор данных из объекта.
const studentDest = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};

// Деструктуризация - мы объявляем все переменные в фигурных скобках, название должно совпадать с
// нужным нам параметром. Можно менять названия переменных и устанавливать значения по умолчанию.
const { firstNameDest: studentName, lastNameDest, ageDest = 20 } = student; 

// Сбор данных из массива.
const studentsDest = ["Ivanov", "Petrov", "Belkin"];

// Деструктуризация - Тут мы указываем имена переменных в квадратных скобках, и в них по порядку
// будут записаны элементы массива.
const [student1Dest, student2Dest, student3Dest] = students; 