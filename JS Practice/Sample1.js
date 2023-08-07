function findDup(a) {
    let newArr = [];
    let dups = [];
    for (let i=0; i<a.length; i++) {
        if (newArr.indexOf(a[i]) < 0) {
            newArr.push(a[i]);
        } else {
            dups.push(a[i]);
        }
    }    
    return dups;
}
// const arr = [1,2,1,3,2,4];
// let dups = findDup(arr);
// console.log(dups);

function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
// console.log(max(2,3));

function maxOfThree(a,b,c) {
    let max1 = max(a,b);
    let max2 = max(b,c);
    return max(max1,max2);
}
// console.log(maxOfThree(10, 15, 11));

function isVowel(s) {
    if (s==null) return false;
    return s.length==1 ? true : false;
}
// console.log(isVowel(null));

function sum(a) {
    if (a==null) return 0;
    let sum = 0;
    for(let i=0; i<a.length; i++) {
        sum += a[i];
    }
    return sum;
}

function multiply(a) {
    if (a==null) return 0;
    let r = 1;
    for(let i=0; i<a.length; i++) {
        r *= a[i];
    }
    return r;
}

// let arr = [1,2,3,4];
// console.log(multiply(arr));

function reverse(s) {
    let r = "";
    for (let i=s.length-1; i>=0; i--) {
        r += s.charAt(i);
    }
    return r;
}
// console.log(reverse("1234"));

function findLongestWord(a) {
    let len = 0;
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (element.length > len) {
            len = element.length;
        }        
    }
    return len;
}

function filterLongWords(a, len) {
    let r = [];
    for (let index = 0; index < a.length; index++) {
        const element = a[index];
        if (element.length>len) {
            r.push(element);
        }        
    }
    return r;
}
// let arr = ["1","2266666","333","11111"];
// console.log(filterLongWords(arr, 1));

function indexOf(array, elem) {
    if (array==null) return -1;
    for (let i=0; i<array.length; i++) {
        if (array[i]==elem) return i;
    }
    return -1;
}
let arr = ["10","2266666","333","11111",1];
console.log(indexOf(arr, 1));