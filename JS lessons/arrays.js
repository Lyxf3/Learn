'use strict';

//filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemar'];

const shortNames = names.filter((name) => {
    return name.length < 5;
});

console.log(shortNames);


//map

let answers = ['IvAn', 'AnnA', 'Hello'];

answers = answers.map((item) => item.toLowerCase());

console.log(answers);


//every/some

const some = [4, 5, 1];

console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof(item) === 'number'));

//reduce

const arr = [4, 5 ,1 ,3 ,2 , 6];

const res = arr.reduce((sum, current) => sum + current);

console.log(res);

const arr = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => `${sum}, ${current}`, "312");

console.log(res);

const obj = {
    ivan : 'person',
    ann: 'person',
    dog: 'animal',
    cat: 'animal'
};

const newArr = Object.entries(obj)
    .filter(item => item[1] === 'person')
    .map(item => item[0]);

console.log(newArr);

