const counter1 = {};
const counter2 = new Object();
const counter3 = Object.create({}, {p: {value:4, writable: true, enumerable:true, configurable: true}}); // можно указать прототип
const obj = {p: 1,};
const counter4 = Object.assign({}, obj);

const copyCounter1 = counter1; //копия ссылки
const copyCounter2 = Object.assign({}, counter1); //поверхностное копирование
const copyCounter3 = {...counter3}; //поверхностное копирование
const copyCounter4 = JSON.parse(JSON.stringify(counter3)); //есть проблемы с undefined, function, symbol
const copyCounter5 = structuredClone(counter4); //глубокое копирование

function makeCounter1() {};
const makeCounter2 = function() {}; // Можно дать имя функции, можно присвоить стрелочную функцию.
const makeCounter3 = new Function(); //передаётся строка
(function() {})(); // Сразу вызывается.

/*Структурированное клонирование (метод structuredClone()) помогает создавать глубокие копии значений JS.
Может работать с циклическими структурами данных, поддерживает множество встроенных типов данных, является
более быстрым и надёжным. Однако отбрасывает цепочку прототипов объекта, поэтому если это экземпляр класса,
то получим простой объект. Если объект содержит функции, то будут отброшены. Некоторые значения не
структурированы для клонирования(Error, DOM-узлы) -> будет выброшено исключение. */

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };
const deepEqual = (obj1, obj2) => {
    if (obj1.length !== obj2.length) return false;
    if (typeof obj1 !== 'object' || typeof obj2 !== 'object' || obj1 == null || obj2 == null) return false;
    if (obj1 instanceof Array && obj2 instanceof Array) {
        if (obj1.length !== obj2.length) return false;
    };
    for (let key in obj1) {
        if (!obj2.hasOwnProperty(key)) return false;
        if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
            if (!deepEqual(obj1[key], obj2[key])) return false;
        } else if (obj1[key] !== obj2[key]) return false;
    };
    return true;
};

function reverseStr(str) {
    return str.split('').reverse().join('');
};