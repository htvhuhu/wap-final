//1. Destructure object into varibles car,make.
// let ship = {cruise:"Titan",ocean:"Atlantic"};
// const {cruise, ocean} = ship;
// console.log("expect Titan",cruise)
// console.log("expect Atlantic",ocean);

// //2. What is the output
// let carObject = {car:"Toyota",make:2020};
// let{make,car} = carObject;
// console.log(make)//_______
// console.log(car);//____________

// //3. Create another obejct
// //let swimming = {ring:"optional",goggles:"required"};
// let swimming = ["ring","goggles"]
// let swimmingObj = {};
// [swimmingObj.ring, swimmingObj.goggles] = swimming;
// console.log(swimmingObj);
// console.log("expect ring ",swimmingObj.ring);
// console.log("expect goggles ",swimmingObj.goggles)

// //4. 
// let javelin = { distance: 133 };
// let { distance: myDistance } = javelin;
// console.log("expect 133 ", myDistance)

// //5
// let football = ["ball", "shoes"];
// let myShoes;
// [,myShoes] = football;
// console.log("expect shoes ", myShoes)

// //6.Destructure array into varibles with default values.
// let twoElements = [1,2];
// let [onekey] = twoElements;
// console.log("expect 1 ", onekey)

// //7.
// let singleElementArray = [1];
// let [base, code] = singleElementArray;
// console.log("expect 1 ", base)
// console.log("expect undefined", code);

// //8. Destructure array into varibles with default values.
// let numberArray = [, , 1, 2];
// let [one = true, two = 'second', third] = numberArray;
// console.log("expect true ", one)
// console.log("expect second", two);
// console.log("expect 1", third);

// //9. Destructure array into varibles, second, fifth
// let multipleItems = [45, "Maharishi", { consciousnes: { inner: true } }, 777, "Bye"];
// let [, second,,,fifth] = multipleItems;
// console.log("expect Maharishi ", second)
// console.log("expect Bye", fifth);

// //10. Destructure object into varibles, innerValue, message
// let obj = { a: 1, b: "hi", c: true, d: { inner: "object", test:111 } }
// let { d: { inner: innerValue, test }, b: message } = obj;
// console.log("expect {inner:'object'} ", innerValue)
// console.log("expect hi", message);
// console.log("expect 111", test);

// //11.Destructure object into varibles
// let nestedObj = { nested: { inner: { i: "object" }, another: "Hello!" } }
// let { nested: { inner: { i }, another: a } } = nestedObj;
// console.log("expect 'object' ", i)
// console.log("expect Hello!", a);

//  //Answers
//  //1
//  let{ocean,cruise} = ship;
//  //3
//  let swimmingObj={};
// [swimmingObj.ring,swimmingObj.goggles] = swimming;
// //4
// let myDistance;
// ({distance:myDistance} = javelin);
// //5
// [myShoes] = football;
// //6
// let[onekey] = twoElements;
// //7
// let[base,code] = singleElementArray;
// //8
// let[one=true,two="second",third = "four"] = numberArray;
// //9
// let[,second,,,fifth] = multipleItems;
// //10
// let {d:innerValue,b:message} = obj
// //11
// let {nested:{inner:i, another:a}} = nestedObj ;