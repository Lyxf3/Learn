"use strict";

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//
//     console.log(sum());
// }
// showThis(4,5);

// const obj = {
//     a: 20,
//     b:15,
//     sum: function () {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };
// obj.sum();

// function user(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function () {
//         console.log(`Hello ${this.name}`);
//     };
// }
// let ivan = new user('Ivan', 28);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }
//
// const user = {
//     name:'John'
// }
//
// sayName.call(user, 'Petrov');
// sayName.apply(user, ['Petrov']);
//
// function count(num) {
//     return this*num;
// }
//
// const double = count.bind(2);
// console.log(double(3));
// console.log(double(13));

// 1) Обычная функция this = window , но если use strict - undefined
// 2) Контекст у методов обьекта - сам обьект
// 3) this в констур
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function (){
    this.style.backgroundColor = 'red';
});

const obj = {
    num:5,
    sayNumber: function () {
        const say = () =>  {
            console.log(this.num);
        };
        say();
    }

};

obj.sayNumber();

const double = a => a * 2;

console.log(double(4));