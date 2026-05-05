// var c =300 //Global scope, this value could be accessible 

// if (true){ //Block scope : Value should not go out of the scope
//     let a=10
//     const b=20
//     var c=30
// }

// console.log(a); Undefined, because used (a) inside conditional statement not outside
// console.log(b);
// console.log(c); //return 30 , Returning inside value which is wrong


// let a=200

// if (true){
//     let a=10;
//     let b=20
//     console.log("Inner",a)
// }
// console.log("Outer",a)

//Nested scope

function one(){  // Bada Bhai ---> icecream
    const username="Harsh"

    function two(){  // Chotta bhai ---> can ask for icecream from bada bhai.
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); ---> Error= Could not be accessed out of bound

    two()
}
one()

console.log()

if (true){
    const username = "RITU"
    if (username === "RITU"){
        const website="Youtube"
        console.log(username + website);

    }
    // console.log(website);---> accessing outside the scope
}

// console.log(username);--->accessing outside the scope

console.log("--------------------------------")

function addOne(num){
    return num+1
}
addOne(5);

const addTwo = function(nums){
    return nums+2;
}
addTwo(5);