let tataTiago = {
    name: "Tata Tiago", manufacturer: "Tata", fuelType: "petrol", bodyType: "hatchback",
    seatingCapacity: 5, price: 5000
}
let nexon = {
    name: "Tata Nexon", manufacturer: "Tata", fuelType: "diesel", bodyType: "SUV",
    seatingCapacity: 5, price: 7000
};
let mahindra = {
    name: "Mahindra XUV700", manufacturer: "Mahindra", fuelType: "petrol",
    bodyType: "SUV", seatingCapacity: 5, price: 7500
};
let mg = {
    name: "MG ZS EV", manufacturer: "Mahindra", fuelType: "Electric", bodyType: "SUV",
    seatingCapacity: 5, price: 25000
};
let volvo = {
    name: "Volvo XC90", manufacturer: "Volvo", fuelType: "petrol", bodyType: "hybrid",
    seatingCapacity: 7, price: 35000
};
let list = [tataTiago, nexon, mahindra, mg, volvo];

function getPetrolCarsWithinPrice(list, givenPrice) {
    return list.filter(function (value) {
        return value.price < givenPrice
    });
    //With Arrow
    return list.filter((value) => value.price < givenPrice);
}

// console.log(getPetrolCarsWithinPrice(list, 15000));

function groupByManufacturer(list) {
    //Initial value of accumulator should be object - {}
    return list.reduce(function (acc, value) {
        //If the given manufacturer exists, increment the count
        if (acc[value.manufacturer])
            acc[value.manufacturer]++;
        else
            acc[value.manufacturer] = 1;
        return acc;
    }, {});
}
console.log(groupByManufacturer(list));

function sortThemByGivenFilter(list,filter){
    return list.sort(function (a,b) {
        if (filter=='bodyType'){
            return a.bodyType.length>b.bodyType.length?1:-1;
        }
        if(filter=='price'){
            return a.price>b.price?1:-1;
        }
    });
}

// console.log(sortThemByGivenFilter(list,"price")); 

function addServiceCostToAllCars(){
    return list.map(function (value) {
        //Add new property first and then return that object;
        value.serviceCost = 100;
        return value;
    });
}

// console.log(addServiceCostToAllCars(list,100));