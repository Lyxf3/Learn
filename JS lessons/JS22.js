// let a = 5,
//     b = a;
//
// b = b + 5;
//
// console.log(b);
// console.log(a);
//
// const obj = {
//     a:5,
//     b:1
// };
//
// const copys = obj; //ссылка
//
// copys.a = 10;
//
// console.log(copys);
// console.log(obj);
//
// function copy(mainObj) {
//     let objCopy = {};
//
//     for(let key in mainObj){
//         objCopy[key] = mainObj[key];
//     }
//
//     return objCopy;
// }
//
// const numbers = {
//     a:2,
//     b:5,
//     c: {
//         x:7,
//         y:4
//     }
// };
//
// const newNumbers = copy(numbers);
//
// newNumbers.a = 10;
// newNumbers.c.x = 10;
//
// console.log(newNumbers);
// console.log(numbers);
//
// const add = {
//     d: 17,
//     e: 20
// };
//
// const clone = Object.assign({}, add);
//
// clone.d = 20;
//
// console.log(add);
// console.log(clone);
//
// const oldArray = [`a`, `b` , `c`];
//
// const  newArray = oldArray.slice();
//
// newArray[1] = "dsdafsfdgfsdgdfs";
//
// console.log(oldArray);
// console.log(newArray)
//
// const  video = ["youtube" , "vimeo", "rutube"],
//     blogs = ["wordpress", "blogger", "livejournal"],
//     internet = [...video, ...blogs, "vk" , "facebook"];
//
// console.log(internet);
//
// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
//
// }

const num = [2, 7, 123];

console.log(...num);

// const  array = ["a", "b"];
//
// const newAarray = array;
// newAarray[2] = 312312421312;
// console.log(array);
// console.log(newAarray);
// const q = {
//     one: 2,
//     two: 2
// }
//
// const newObj = {...q};
// newObj.gdfgsd = 324234;
// delete q.one;
// console.log(q);
// console.log(newObj);
