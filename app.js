/*Алгоритмы сортировок:
1. Сортировка пузырьком (Bubble Sort)
2. Шейкерная сортировка (Shaker sort)
3. Сортировка расческой (Comb sort)
4. Сортировка вставками (Insertion sort)
5. Сортировка Шелла (Shellsort)
6. Сортировка деревом (Tree sort)
7. Гномья сортировка (Gnome sort)
8. Сортировка выбором (Selection sort)
9. Пирамидальная сортировка (Heapsort)
10. Быстрая сортировка (Quicksort)
11. Сортировка слиянием (Merge sort)
12. Сортировка подсчётом (Counting sort)
13. Блочная сортировка (Bucket sort)
14. Поразрядная сортировка (Radix sort)
15. Битонная сортировка (bitonic sort)
16. Timsort (совмещает сортировку вставками и сортировку слиянием)*/

const person1 = {
    name: "Andrew"
};
const person1_2 = new Object({
    name: "Andrew"
});

class Person {
    constructor(name) {
        this._name = name;
    }
    message() {
        alert("HI");
    }
}
const person1_3 = new Person("Andrew");

function Person1_2(name) {
    this.name = name;
}
const person1_4 = new Person1_2("Andrew"); //Можно ещё через Object.create() и Object.assign()

class Person2 extends Person {//Методы объекта, созданного через класс Person будут доступны в объектах, созданных через класс Person2
    constructor(name, age) {
        super(name);
        this.age = age;
    }
}
const person2 = new Person2("Andrew", 24);//person2.message()
const person2_2 = Object.create(person1);
const person2_3 = {
    __proto__: person1_2
};
const person2_4 = {
    name: "Olya"
};
Object.setPrototypeOf(person2_4, person1_3);

Object.prototype.loginfo = function() {
    console.log(`Name: ${this.name}`);
}; //Метод будет доступен всем объектам, так же если нужно, чтобы был доступен всем объектам, созданным от одного класса, то просто добавить метод в класс

class PersonThree extends Person {
    constructor(name, age) {
        super(name);
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
}//Можно получать и изменять имя с помощью .name

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
total = 13;
//result = [4, 9]

const firstSum = (arr, total) => {
    const arr1 = arr.sort((a, b) => a - b).filter((i) => i <= total);
    for (let i = arr1.length - 1; i > arr1.length / 2; i--) {
        for (let j = 0; j < arr1.length / 2; j++) {
            if (arr1[i] + arr1[j] === total) return [arr1[j], arr1[i]]
        };
    };
};//O(log n)

/* Можно сделать:
const arr1 = arr.sort((a, b) => a - b).filter((i) => i <= total);
    for (let i = 0; i < arr1.length; i++) {
        const el = arr1[i];
        const diff = total - el;
        if (arr1.includes(diff)) { return [el, diff] };
        else continue;
    }; 
    Но сложность по BigO останется такой же.
*/

firstSum(arr,total)