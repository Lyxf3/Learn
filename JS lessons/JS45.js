"use strict";

function user(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };
}

user.prototype.exit = function () {
    console.log(`User ${this.name} exit`)
}

const ivan = new user('Ivan', 28),
    Alex = new user('Alex', 20);

ivan.exit();

ivan.hello();
Alex.hello();
console.log(ivan, Alex);