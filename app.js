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
    isEmpty() {
        if (!this.stack.length) {return false}
        else return true;
    }
    peek() {
        if (!this.stack.length) {return null}
        else return this.stack.at(-1);
    }
};//Добавление элемента в стек, изъятие из стека, получение верхнего элемента без егоудаления, проверка на пустоту.

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
    peek() {
        if(!this.queue.length) {return null}
        else return this.queue[0];
    }
    isEmpty() {
        if (!this.queue.length) {return false}
        else return true;
    }
};//Вставка элемент в конец очереди, удаление элемента из начала очереди, получение первого элемента очереди без его удаления, проверка на пустоту очереди.

function likeBind(cntxt, ...args) {
    const th = this;
    return function() {
        th.call(cntxt, args);
    }; //Можно реализовать через apply th.apply(cntxt, []);
}