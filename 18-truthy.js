
// const email="Harsh"
// if (email){   // Assumes that email is Given i.e, True
//     console.log("Got the Email")
// }
// else{
//     console.log("Access Denied")
// }

// const email=""
// if (email){
//     console.log("Got the Email")
// }
// else{
//     console.log("Access Denied")
// }
const userEmail=[]
if (userEmail){
    console.log("Got the Email")
}
else{
    console.log("Access Denied")
}


// Falsy values 
// false, 0, -0, BigInt 0n, "", null, undefined, Nan


// Truthy values
// "0", "false", " (space) ", [], {}, fucntion(){}  ---> Inside Inverted commas Imp

if (userEmail.length===0){
    console.log("array is empty")
}


//WHat if objects??

const emptyObj={}

if (Object.keys(emptyObj).length===0){
    console.log("object is empty");
}


// Nullish Coalescing Operatore (??): ---> TO handle Error
// null, undefined

let val1;
// val1= 5 ?? 10;
// val1= null ?? 10;
// val1 = undefined ?? 15

val1 = null ?? 10 ?? 20
console.log(val1)


// Terniary Operatore
//if-else short form
// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80 ") : console.log("more than 80")