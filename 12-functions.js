
// function addTwoNumbers(x,y){
//     console.log(x+y);
// }

// let result = addTwoNumbers(5,6);
// console.log("result:",result) // O/P : undefined

// function addTwoNumbers(x,y){
//     // let result = x+y;
//     return x+y;
// }

// const result = addTwoNumbers(3,5)
// console.log("result:", result) // O/P : 8

// function loginUserMessage(username){
//     if (!username){
//         console.log("Please Enter a valid UserName")
//         return 
//     }
//     return `${username} You Just Logged IN`
// }
// console.log(loginUserMessage())

// function calculateCarPrice(val1,val2,...num1){
//     return num1
// }

// console.log(calculateCarPrice(200,400,600,1000)) //returns an array

// const user = {
//     username: "RITURAJ",
//     price : 10000
// }

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username : "Harsh",
//     price : 20000 
// })

const myNewArray=[200,400,600,800]

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));