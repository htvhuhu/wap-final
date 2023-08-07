// function foo() {
//     x = 5;
//     console.log(x)
// }

// foo();

// var x = 10;
// main();
// function main() {
//     console.log("x1: " + x); // undefined
//     var x = 20;
//     if (x > 0) {
//         var x = 30;
//         console.log("x2: " + x); // 30
//     }
//     var x = 40;
//     var f = function (x) { console.log("x3: " + x); }
//     f(50); // 50
// }


// for (var i = 0; i < 10; i++) {
//     console.log("i inside for loop: " + i);
// }
// console.log(i); // 10 
// if (i > 5) {
//     var j = 3;
// }
// console.log("j OUTside block: " + j); //3

// function a() {
//     for (var x = 1; x < 10; x++) {
//         console.log(x);
//     }
//     console.log("x: " + x); //10
//     //10 
// }

// function a() {
//     for (let x = 1; x < 10; x++) {
//         console.log(x);
//     }
//     console.log("x: " + x); //undefined
//     //10 
// }
// a();

// console.log(a);
// let a = 10;

// foo();
// var foo = function() { //error

// };
// let foo = function() { //error

// };

// console.log("a: " + a); //undefined 
// b(); // function is called! 
// var a = 5;
// function b() {
//     console.log("function is called!");
// }

// console.log("a: " + a); //Cannot access 'a' before initialization
// b(); // function is called! 
// let a = 5;
// function b() {
//     console.log("function is called!");
// }

// function a() {
//     var x;
//     console.log('a=', x); // undefined
// }
// function b() {
//     var x = 20;
//     a();
//     console.log('b=', x); //20
// }
// var x = 30;
// b();
// console.log(x); //30

// function a() {
//     console.log('a=', x); // 20
// }
// function b() {
//     console.log('b1=', x); //undefined
//     var x = 10; // re-declare here -> b1 becomes undefined
//     a(); // 
//     console.log('b=', x); //10
// }
// var x = 20;
// b();

// function b() {
//     function a() {
//         console.log(x); //10
//     }
//     let x = 10;
//     a();
// }
// var x = 20;
// b();

// function b() {
//     function a() {
//         console.log(x); //Cannot access 'x' before initialization
//     }
//     a();
//     let x = 10;
// }
// var x = 20;
// b();

// function b() {
//     function a() {
//         console.log(x); //undefined
//     }
//     a();
//     var x = 10;
// }
// let x = 20;
// b();

// function b() {
//     function a() {
//         console.log(x); //Cannot access 'x' before initialization
//     }
//     a();
//     let x = 10;
// }
// let x = 20;
// b();

// function b() {
//     x = 30;
//     function a() {
//         console.log(x); //Cannot access 'x' before initialization
//     }
//     a();
//     let x = 10;
// }
// let x = 20;
// b();

// function b() {
//     x = 30;
//     function a() {
//         console.log(x); //30
//     }
//     a();
//     var x = 10;
// }
// let x = 20;
// b();

function b() {
    x = 30;
    function a() {
        console.log(x); //Cannot access 'x' before initialization
    }
    a();
    let x = 10;
}
var x = 20;
b();


// function b() {
//     console.log('x1', x);
//     x = 3;
//     console.log('x2', x);
//     let x = 4;
// }
// var x = 20;
// b();
// console.log('x3', x);

// let x = {a:1};
// function a(p) {
//     p.a = 4;
//     console.log(p); //
// }
// a(x);
// console.log(x);

// function b() {
//     function a() {
//         console.log('a', x); //20
//     }
//     a();
//     console.log('b', x); //20
// }
// var x = 20;
// b();

// function f() {
//     var a = 1, b = 20, c;
//     console.log('f1=', a + " " + b + " " + c); // 1 20 undefined
//     function g() {
//         var b = 300, c = 4000;
//         console.log('f3=', a + " " + b + " " + c); // 1 300 4000
//         a = a + b + c;  // 4301
//         console.log('f4=', a + " " + b + " " + c); // 4301 300 4000
//     }
//     console.log('f2=', a + " " + b + " " + c); // 1 20 undefined
//     g();
//     console.log('f5=', a + " " + b + " " + c); // 4301 20 undefined
// }
// f();

// var x = 10;
// function main() {
//     console.log("x1 is:" + x); // undefined
//     x = 20;
//     console.log("x2 is:" + x); //20
//     if (x > 0) {
//         var x = 30;
//         console.log("x3 is:" + x); //30
//     }
//     console.log("x4 is:" + x); //30
//     var x = 40;
//     var f = function (x) {
//         console.log("x5 is:" + x); //50
//     };

//     f(50);
//     console.log("x6 is:" + x); //40
// }
// main();
// console.log("x7 is:" + x); //10


// function func() {
//     {
//         let x = 1;
//     }
    
//     console.log('x1=', x); // x is not defined
// }
// func();
// console.log('x2=', x); //x is not defined