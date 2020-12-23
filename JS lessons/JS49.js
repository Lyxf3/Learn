const log = function (a, b, ...rest) {
    console.log(a, b, rest);
}

log('asdasd', 'dasdasdas', 21321, 343,);

function calcOrDouble(number, basis = 2) {
    console.log(number * basis);
}

calcOrDouble(3)