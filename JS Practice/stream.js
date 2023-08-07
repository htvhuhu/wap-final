// let arr = [2, 3, 5, 7]

// arr.map(function(element, index, array) {
//     console.log(element + this);
//     console.log(index);
//     console.log(array);
//     console.log(this);
//     return element;
// }, 80);

// const numbers = [175, 50, 25];
// numbers.reduce(myFunc);
// function myFunc(total, num) {
// 	console.log(total)
//     return total - num;
// }

// function a() {
//     var x;
// }
// function b() {
//     var x = 20;
//     console.log("b=" + x);
//     a();
// }
// var x = 30;
// b();
// console.log(x);

// function funcA() {
//     return function() {
//         console.log("Call back");
//     }
// }
// let returnFunc = funcA();
// returnFunc();


// let myObj = {a:2, b:5, multiply: function() {return this.a * this.b}};
// console.log(myObj.multiply());

function mostFrequent(array) {
    let uniqueArr = [];
    for (let e of array) {
        if (!uniqueArr.includes(e)) {
            uniqueArr.push(e);
        }
    }
    let max = 0;
    let maxE;
    for (let e of uniqueArr) {
        let cnt = array.filter(a => a==e).length;
        console.log(e, cnt);
        if (cnt>max) {
            max = cnt;
            maxE = e;
        }
    }
    return maxE;
}
// var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// console.log(mostFrequent(arr1));

function findMax(array) {
    return array.reduce(function(accu, ele) {
        return ele>accu ? ele :accu;
    });
}

function findMin(array) {
    return array.reduce(function(accu, ele) {
        return ele<accu ? ele :accu;
    });
}
console.log(findMin([8,3,5,9,1,2]));