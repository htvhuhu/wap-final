// function init() { //function declaration
//     const name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     displayName();
// }
// init();

// function makeFunc() {
//     const name = "Mozilla"; //local to makeFunc
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// const myFunc = makeFunc(); // return displayName
// myFunc(); // call displayName
// console.log(myFunc.name);

// const x = 1;
// function f() {
//     let y = 2;
//     const sum = function () {
//         const z = 3;
//         console.log(x + y + z); // x=1 y=10 z=3
//     }
//     y = 10;
//     return sum;
// } //end of f
// const g = f(); // return sum function
// g(); // call sum


// var funcs = [];
// for (var i = 0; i < 5; i++) {
//     funcs[i] = function () {
//         return i;
//     };
// }
// console.log(funcs[0]());
// console.log(funcs[1]());
// console.log(funcs[2]());
// console.log(funcs[3]());
// console.log(funcs[4]());

/* return a function with no parameters 
that has an ‘embedded parameter’ */
var helper = function (n) {
    return function () { return n; }
}
var funcs = [];
for (var i = 0; i < 5; i++) {
    funcs[i] = helper(i);
};
console.log(funcs[0]());
console.log(funcs[1]());
console.log(funcs[2]());
console.log(funcs[3]());
console.log(funcs[4]());