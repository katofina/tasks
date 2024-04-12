/*Массивы в JS являются "неправильными", потому что может хранить в себе данные разных
типов(фиксится через TS) и является динамическим(позволяет изменять длину массива).
Совмещает в себе такие структуры данных как стек, очередь, двустороннюю очередь и 
упорядоченный список.*/

function logger() {
    console.log(`I output only external context: ${this.item}`);
};
const obj = {
    item: "some value",
};
logger.bind(obj)();// Можно изначально привязать к переменной, чтобы в переменную вернулась новая функция, а затем вызвать через переменную
logger.call(obj);
logger.apply(obj);

const arr1 = [1, 5, 6];
const arr1Sum = arr1.reduce((acc, item) => acc += item, 0);

const arr2 = ['Hello, ', 'World', '!'];
const arr2Join = arr2.join('');

const arr1Max = Math.max(...arr1);
const arr1Min = Math.min(...arr1);

class Stack {
    constructor() {
        this.stack = [];
    }
    push(item) {
        this.stack.push(item);
    }
    pop() {
        return this.stack.pop();
    }
    get length() {
        return this.stack.length;
    }
};

class Queue {
    constructor() {
        this.queue = [];
    }
    inqueue(item) {
        this.queue.push(item);
    }
    delqueue() {
        return this.queue.shift();
    }
    get length() {
        return this.queue.length;
    }
};

function likeBind(cntxt, ...args) {
    const th = this;
    return function() {
        th.call(cntxt, args);
    }; //Можно реализовать через apply th.apply(cntxt, []);
}