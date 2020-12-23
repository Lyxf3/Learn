"use strict"
let a = 0;
console.log(a);

// let obj = {
//     number: 5,
//     sayNumber: function () {
//         say = () => {
//             console.log(this)
//         }
//         say();
//     }
// }
//
// obj.sayNumber();

// let names = ['Ivan', 'Ann', 'Dmitry', 'Voldemart']
//
// let shortNames = names.filter((name) => {
//     return name.length < 5
// });
//
// console.log(shortNames)
//
// let answers = ['IvAn', 'aNNa', 'HeLLo']
//
// answers = answers.map((item) => item.toLowerCase());
//
// console.log(answers);
//
//
// // console.log(`Пользователь ${name[0]}, ${age} лет`)
//
// function fetchData(data, count = 0) {
//     console.log(`Данные: ${data} в количестве ${count}`)
// }
//
// fetchData('something')
//
// function max(a, b, ...numbers) {
//     console.log(numbers)
// }
//
// max(1,2,2,2,3,3,3,44,5,5,7)
//
//
// const arr1 = [1, 2, 5],
//       arr2 = [43, 2, 6];

// const res = Math.max(...arr1, ...arr2)
// console.log(res)

// const user = {
//     name: 'default',
//     pass: 'qwerty',
//     rights: 'user'
// },    admin = {
//     name: 'admin',
//     pass: 'root'
// }


// const res = Object.assign({}, user, admin)

// const res = {...user, ...admin, avatar}
// console.log(res)
//
// const x = 25, y = 10;
//
// const coords = {x, y,
//     calcSq() {
//         console.log(this.x * this.y);
//     }
// }
//
// console.log(coords.calcSq())
//


const user = {
    name: {
        first: "Sam",
        second: "Smith"
    },
    pass: 'qwerty',
    rights: 'user'
}

const {name, pass, rights} = user;

console.log(name)