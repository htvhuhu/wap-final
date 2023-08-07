// const studentAnswers = [[1, 1, 2,4], [2, 1, 2,2], [3, 1, 3,4]];
// const correctAnswers = [3, 1, 2,4];
// scoreExams(studentAnswers, correctAnswers); //--> [3,2,3];

function scoreExams(studentAnswers, correctAnswers) {
    let score = [];
    for (let sa of studentAnswers) {
        let temp = [];
        for (let ans of sa) {
            if (correctAnswers.includes(ans) && !temp.includes(ans)) {
                temp.push(ans);
            }
        }
        score.push(temp.length);
    }
    console.log(score);
    return score;
}

// <=2 -> 100, 3~5 -> 80, 6~10 -> 60, >10 -> 0
function scoreForecasts(forecast, observed) {
    let sum = 0;
    for (let i=0; i<forecast.length; i++) {
        let fc = forecast[i];
        let actual = observed[i];
        let diff = Math.abs(fc-actual);
        let per = 0;
        if (diff <=2) {
            per = 100;
        } else if (diff <=5) {
            per = 80;
        } else if (diff <=10) {
            per = 60;
        }
        sum += per;
    }
    if (sum==0) return 0;
    return sum/forecast1.length;
}
// const forecast1 = [80, 90, 85];
// const observed1 = [82, 95, 70];
// console.log(scoreForecasts(forecast1, observed1)); //60

// const forecast2 = [80, 80, 80];
// const observed2 = [82, 85, 74];
// console.log(scoreForecasts(forecast2, observed2)); //80

function firstRowColSum(array) {
    let r = [];
    let rowSum = array[0].reduce(function(accu, ele) {
        return accu + ele;
    });
    let colSum = 0;
    for (let row of array) {
        colSum += row[0];
    }
    r.push(rowSum);
    r.push(colSum);
    return r;
}

// let testArr1 = [[1,2,3], [5,2,3], [9,2,3]] ;
// console.log(firstRowColSum(testArr1)); // [6, 15]

// let testArr2 = [[1, 2], [3, 4], [5, 6]];
// console.log(firstRowColSum (testArr2)); // [3, 9]

let array2 = [{a:1},"string",34];
// let copyArray = array2;
// copyArray[2]=50
// console.log(copyArray);
// console.log(array2);

let slicedArray = array2.splice(1,1);
console.log("Sliced Array ",array2,slicedArray);