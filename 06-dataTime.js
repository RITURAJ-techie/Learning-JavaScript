//Dates

let myDate = new Date()

// console.log(myDate);
// console.log(myDate.toString()); (//Wed Apr 29 2026 20:28:37 GMT+0530 (India Standard Time))
// console.log(myDate.toDateString()); (//Wed Apr 29 2026)
// console.log(myDate.toLocaleDateString()); (//29/4/2026)
// console.log(myDate.toLocaleString()); (//29/4/2026, 8:28:37 pm)
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());

// let myCreateDate=new Date(2023, 0, 23, 8, 30)
let myCreateDate=new Date("01-14-2024");
// console.log(myCreateDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());


let newDate=new Date()
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay()+1);

console.log(
newDate.toLocaleString("default",{
    weekday : "long",
    era: "long",
})
);
