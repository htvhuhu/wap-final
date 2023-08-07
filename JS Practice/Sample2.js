function getTypes(arr) {
    return arr.map(a => typeof a);
}
// let arr = [50,"apple",{a:1}];
// console.log(getTypes(arr));

function printTriangle(n) {
    let i = 1;
    while (i<=n) {
        let s = "";
        for (let j=1; j<=i; j++) {
            s += j + " ";
        }
        console.log(s);
        i++;
    }
}
// printTriangle(10);

function findElement(array, str) {
    for (let ele of array) {
        if (ele==str) {
            return true;
        }
    }
    return false;
}

// let arr = [1,2,1,3,2,4];
// console.log(findElement(arr, 5));
// console.log(findElement(arr, 1));

function removeDuplicates(array) {
    let r = [];
    for (let ele of array) {
        if (!r.includes(ele)) {
            r.push(ele);
        }
    }
    return r;
}
// let arr = [1,2,1,3,2,4];
// console.log(removeDuplicates(arr));

function is_array(input) {
    console.log(toString.call(input));
    if (toString.call(input)=="[object Array]") {
        return true;
    }
    return false;
}
// let arr = [1,2,1,3,2,4];
// console.log(is_array(arr));
// console.log(is_array(1));
// console.log(is_array("1"));

function array_Clone(a) {
    // let r = [];
    // for (let index = 0; index < a.length; index++) {
    //     const element = a[index];
    //     r.push(element);    
    // }
    // return r;
    return a.slice(0);
}

// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));

function first(arr, n) {
    if (n==undefined) n = 1;
    else if (n<0) n=0;
    return arr.slice(0, n);
}
// console.log(first([7, 9, 0, -2])); //7
// console.log(first([],3)); //[]
// console.log(first([7, 9, 0, -2],3)); //[7, 9, 0]
// console.log(first([7, 9, 0, -2],6)); //[7, 9, 0, -2]
// console.log(first([7, 9, 0, -2],-3)); //[]
function last(arr, n) {
    if (n==undefined) n=1;
    // return arr.slice(-n);
    return arr.slice(Math.max(arr.length - n, 0)); 
}
// console.log(last([7, 9, 0, -2])); //-2
// console.log(last([7, 9, 0, -2],3)); //[9, 0, -2]
// console.log(last([7, 9, 0, -2],6)); //[7, 9, 0, -2]
// console.log(last([],3)); //[]

var joinArray = function(array) {
    // let str = array.reduce((result, elem) => result + "," + elem, "");
    // return str.substring(1);
    console.log(array.toString());
    console.log(array.join());
    console.log(array.join("+"));
}
// let myColor = ["Red", "Green", "White", "Black"];
// joinArray(myColor)

var sortArray = function(array) {
    // let newArr = array.sort((a, b) => a-b);
    // console.log(newArr);

}
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 10 ];
// sortArray(arr1);

// Insert dashes (-) between even numbers
// 025468 -> 0-254-6-8
var addDash = function(num) {
    let str = num.toString();
    let arr = [str[0]];
    for (let i=1; i<str.length; i++) {
        if (str[i-1]%2==0 && str[i]%2==0) {
            arr.push("-" + str[i]);
        } else {
            arr.push(str[i]);
        }
    }
    return arr.join("");
}
// console.log(addDash("025468"));

// Find Index of first odd number
function indexOfOddNum(array) {
    for (let i=0; i<array.length; i++) {
        if (array[i]%2 != 0) return i;
    }
    return -1;
}
// console.log(indexOfOddNum([2,4,8,7,8])); //3

function indexOfOddNum2(array) {
    return array.findIndex(e => (e%2 != 0));
}
// console.log(indexOfOddNum2([2,4,5,7,8])); //2

function changeArray(myArray){
    let element = myArray.pop();
    console.log(element);
    if(element%4==0)
        myArray.unshift(element);
    return myArray;
}
// console.log(changeArray([10,20,3,4]))
// console.log(changeArray([4,5,6]))

function createSet(myArray) {
    let newArray = [];
    for (let ele of myArray) {        
        if (!newArray.includes(ele))
            newArray.push(ele);
    }
    return newArray;
}
// console.log(createSet(["cider","banana","apple","cider"]));

//'The Quick Brown Fox' => 'tHE qUICK bROWN fOX'.
function swapCase(str) {
    let result = ""
    for (let i=0; i<str.length; i++) {
        let c = str.charAt(i);
        if (isUpperCase(c)) {
            result += c.toLowerCase();
        } else {
            result += c.toUpperCase();
        }
    }
    return result;
}

function isUpperCase(c) {
    let r = c.toUpperCase();
    if (r===c) return true;
    else return false;
}
// console.log(swapCase("The Quick Brown Fox"));

let arr = [10,20,3,4];
console.log(arr.splice(0,2, 1,2,9), arr);