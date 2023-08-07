function log() {
    console.log("No Arguments");
}
function log(x) {
    console.log("1 Argument: " + x);
}
// all will call this function
function log(x, y) {
    console.log("2 Arguments: " + x + ", " + y);
}
log();
log(5);
log(6, 7);


// function findMax() {
//     let max = -Infinity;
//     for (let i = 0; i < arguments.length; i++) {
//         if (arguments[i] > max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// const max1 = findMax(1, 123, 500, 115, 66, 88);
// const max2 = findMax(3, 6, 8)
// console.log(max1, max2);

// function sum(a, b) {
//     console.log(a, b)
//     let sum = 0;
//     for (let i=0; i<arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }
// console.log(sum(1));
// console.log(sum(1,2,3));

// function sum(x, y, ...more) {
//     //"more" is array of all extra passed params
//     let total = x + y;
//     if (more.length > 0) {
//         for (let i = 0; i < more.length; i++) {
//             total += more[i];
//         }
//     }
//     console.log("Total: " + total);
//     return total;
// }
// console.log(sum(5, 5, 5));
// console.log(sum(6, 6, 6, 6, 6));

//////////// Spread operator////////////
// let a = [1,2,3];
// let b = a;
// let c = [...a];
// a.pop();
// console.log(a,b,c);

// let o1 = {x:1};
// let o2 = o1;
// let o3 = {...o1};
// o1.x = 2;
// console.log(o1,o2,o3);

// let a = [1,2];
// let b = [{x:1}];
// let d = [...a, ...b];
// console.log(d);

// let a = {y:3};
// let b = {x:1};
// let c = {...a, ...b};
// console.log(c);

// let a = [1,2];
// let b = [{x:1}];
// let c = 3;
// let d = [...a, ...b, c];
// b.x = 4;
// console.log(d);

// const obj1 = { foo: 'bar', x: 42 };
// const obj2 = { foo: 'baz', y: 13 };
// const b = [{a:3}];
// const clonedObj = { ...obj1 };
// // Object { foo: "bar", x: 42 }
// const mergedObj = { ...obj1, b, ...obj2 };
// console.log(mergedObj);
// // Object { foo: "baz", x: 42, y: 13 }


///////////Destructuring assignment/////////////////
// const address = [221, 'Baker Street', 'London'];
// const [houseNo, , city] = address;
// console.log(houseNo, city)// 221 'London’

// const details = { firstName: 'Code', lastName: 'Burst', age: 22 };
// const { firstName, age } = details;
// console.log(firstName, age);// Code 22

// // change object key
// const { firstName:myName, age:myAge } = details;
// console.log(myName, myAge);// Code 22

//create another object
// let arr = [,,1,2];
// const [one=true, two="second", third] = arr;
// console.log('expected true', one);
// console.log('expected second', two);
// console.log('expected 1', third);

// destructure
// let arr = [45, "Maharishi", {a:{inner:true}}, 777, "Bye"];
// const [, second, {a:{inner:third}},, fifth] = arr;
// console.log('expected Maharishi', second);
// console.log('expected Bye', fifth);
// console.log('expected true', third);