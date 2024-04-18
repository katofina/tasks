let promiseTwo = new Promise((resolve, reject) => {
    resolve("a");
});

promiseTwo
.then((res) => {
    return res + "b";
})
.then((res) => {
    return res + "с";
})
.finally((res) => {
    return res + "!!!!!!!";
})
.catch((res) => {
    return res + "d";
})
.then((res) => {
    console.log(res);
}); // abc

function doSmth() {
    return Promise.resolve("123");
}

doSmth()
.then(function (a) {
    console.log("1", a);
    return a;
})
.then(function (b) {
    console.log("2", b);
    return Promise.reject("321");
})
.catch(function (err) {
    console.log("3", err);
})
.then(function (c) {
    console.log("4", c);
return c;
});// 1 123 2 123 3 321 4 undefined

function threeSecPrint (arr) {
    let delay = 0;//если первый индекс выводится без задержки, если нужно с задержкой сразу присваиваем 3000
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => console.log(i), delay); 
        delay += 3000; //каждый индекс будет выводиться с задержкой в 3с
    };
};

let trying = 0;
function fetchUrl(url) {
    fetch(url)
    .then((response) => response.json())
    .catch((err) => {
        if (trying < 5) {
            ++trying;
            fetchUrl(url);
        } else alert(err); //После 5 попыток выведет ошибку
    });
};