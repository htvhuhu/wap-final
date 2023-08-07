console.log(flatten({color:'red',category:'flower',location:'fairfield'}));
// ['color|red','category|flower','location|fairfield']

function flatten(obj) {
    let arr = [];
    for (key in obj) {
        arr.push(key + '|' + obj[key]);
    }
    return arr;
}