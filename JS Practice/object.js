function destructureArray(array) {
    let idx = 0;
    let obj = {};
    for (let ele of array) {
        let name = typeof(ele) + idx;
        obj[name] = ele;
        idx++;
    }
    console.log(obj);
    return obj;
}
// let arr = [50,"apple",{a:1}];
// destructureArray(arr); //{number0:50,string1:”apple”,object2:{a:1}}

// [a1,b12,cstring,dx1,dy2]
function convertObjectToArray(obj) {
    let r = [];
    for (let prop in obj) {
        let s = "";
        let value = obj[prop];
        console.log(typeof(value));
        if (Array.isArray(value)) {
            s = prop + value.reduce(function(accu, ele) {
                return accu + ele;
            }, "")
        } else if (typeof(value) == "object") {
            s = Object.keys(value).reduce(function(accu, key) {
                return accu + key + value[key];
            }, "")
        } else {
            s = prop + value;            
        }
        r.push(s)     
    }
    return r;

}
// let r = convertObjectToArray({a:1,b:[1,2],c:"string",d:{x:1,y:2}});
// console.log(r)

function getPetrolCarsWithinPrice(arrayObj, price) {
    return arrayObj.filter(obj => obj.price<=price);
}

let tataTiago = {name:"Tata Tiago",manufacturer:"Tata",fuelType:"petrol",bodyType:"hatchback",
                seatingCapacity:5,price:5000};
let nexon = {name:"Tata Nexon",manufacturer:"Tata",fuelType:"diesel",bodyType:"SUV",
                seatingCapacity:5,price:7000};
let mahindra = {name:"Mahindra XUV700",manufacturer:"Mahindra",fuelType:"petrol",
                bodyType:"SUV", seatingCapacity:5,price:7500};
let mg = {name:"MG ZS EV",manufacturer:"Mahindra",fuelType:"Electric",bodyType:"SUV",
                seatingCapacity:5,price:25000};
let volvo ={name:"Volvo XC90",manufacturer:"Volvo",fuelType:"petrol",bodyType:"hybrid",
                seatingCapacity:7,price:35000};
let list = [tataTiago,nexon,mahindra,mg,volvo];
// console.log(getPetrolCarsWithinPrice(list,15000));

// { Tata: 2, Mahindra: 2, Volvo: 1 }
function groupByManufacturer(arrayObj) {
    // let manu = [];
    // let resultObj = {};
    // for (let obj of arrayObj) {
    //     if (!manu.includes(obj.manufacturer)) {
    //         let temp = arrayObj.filter(ele => ele.manufacturer === obj.manufacturer);
    //         manu.push(obj.manufacturer);
    //         resultObj[obj.manufacturer] = temp.length;
    //     }
    // }
    // return resultObj;

    return arrayObj.reduce(function(acc, value) {
        if (acc[value.manufacturer]) {
            acc[value.manufacturer]++;
        } else {
            acc[value.manufacturer] = 1;
        }
        return acc
    }, {});
}
console.log(groupByManufacturer(list));

function sortByGivenFilter(arrayObj, filterType) {
    if (filterType == "price") {
        return arrayObj.sort((o1, o2) => o1.price-o2.price);
    } else if (filterType == "bodyType") {
        return arrayObj.sort((o1, o2) => o1.bodyType.length-o2.bodyType.length);
    }
    return null;
}
// console.log(sortByGivenFilter(list, "price"));
// console.log(sortByGivenFilter(list, "bodyType"));

function addServiceCostToAllCars(arrayObj, cost) {
    for (let obj of arrayObj) {
        obj.serviceCost = cost;
    }
}
// addServiceCostToAllCars(list, 100)
// console.log(list);


let frontDoor = {id:1,name:"Front Door Sensor",type:34,manufacturer:"Climax",
events:[{time:"100",name:"Door Closed"}, {time:"101",name:"Door Opened"}]};
let motionSensor = {id:2,name:"Motion Sensor",type:43,manufacturer:"NYCE",
events:[{time:"100",name:"Motion Detected"}]};
let porticoLight ={id:3,name:"Portico Light",type:54,manufacturer:"Osram",
events:[{time:"100",name:"Light off"}]};
let mainEntrance = {id:4,name:"Main Entrance",type:34,manufacturer:"Climax",
events:[{time:"100",name:"Door Closed"}]};

let sensors = [frontDoor, motionSensor, porticoLight, mainEntrance] ;

function groupSensorsByManufacturer(arrayObj) {
    let manufacturers = [];
    let r = {};
    for (let obj of arrayObj) {
        let manu = obj.manufacturer;
        if (!manufacturers.includes(manu)) {
            let temp = arrayObj.filter(o => o.manufacturer == manu);
            manufacturers.push(manu);
            r[manu] = temp.length;
        }
    }
    return r;
}
// console.log(groupSensorsByManufacturer(sensors));

function getLatestEventofSensor(arrayObj, id) {
    let sensor = arrayObj.filter(obj => obj.id == id);
    let temp = sensor[0].events.sort((a, b) => a.time-b.time);
    return temp[temp.length-1];
}
// console.log(getLatestEventofSensor(sensors, 1));

function findMostPopularManufacturer(arrayObj) {
    let manufacturers = [];
    let max = 0;
    let popularManu = null;
    for (let obj of arrayObj) {
        let manu = obj.manufacturer;
        if (!manufacturers.includes(manu)) {
            let temp = arrayObj.filter(o => o.manufacturer == manu);
            manufacturers.push(manu);
            if (temp != null && temp.length>max) {
                max = temp.length;
                popularManu = manu;
            }
        }
    }
    return popularManu;
}
// console.log(findMostPopularManufacturer(sensors));