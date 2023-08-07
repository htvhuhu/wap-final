let frontDoor = {
    id: 1, name: "Front Door Sensor", type: 34, manufacturer: "Climax",
    events: [{ time: "100", name: "Door Closed" }, { time: "101", name: "Door Opened" }]
};
let motionSensor = {
    id: 2, name: "Motion Sensor", type: 43, manufacturer: "NYCE",
    events: [{ time: "100", name: "Motion Detected" }]
};
let porticoLight = {
    id: 3, name: "Portico Light", type: 54, manufacturer: "Osram",
    events: [{ time: "100", name: "Light off" }]
};
let mainEntrance = {
    id: 4, name: "Main Entrance", type: 34, manufacturer: "Climax",
    events: [{ time: "100", name: "Door Closed" }]
};
let list = [frontDoor, motionSensor, porticoLight, mainEntrance] ;

function groupSensorsByManufacturer(){
    return list.reduce(function (acc, value) {
        //If the given manufacturer exists, increment the count
        if (acc[value.manufacturer])
            acc[value.manufacturer]++;
        else
            acc[value.manufacturer] = 1;
        return acc;
    }, {});
}
console.log(groupSensorsByManufacturer(list));

function getLatestEventofSensor(list,id){
 // First find the sensor for the id.  
    let sensor = list.find((value)=> value.id==id);
   //Find the max time
    return sensor.events.reduce(function(acc,value){
        return acc.time>value.time?acc:value;
    },{});
}
console.log(getLatestEventofSensor(list,1));
function findMostPopularManufacturer(list){
    let manufacturers = groupSensorsByManufacturer(list);
    let count=0;
    let popularManufacturer="";
    for(let prop in manufacturers){
        if(manufacturers[prop]>count)
            {
                count = manufacturers[prop];
                popularManufacturer=prop;
            }
    }
    return popularManufacturer;
}


console.log("expect Climax:",findMostPopularManufacturer(list));