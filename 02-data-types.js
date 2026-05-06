"use strict"; // treat all JS code as newer vesion

//alert(3+3) // we are using nodeJS , not browser

// let name="Harsh"
// let age= 21
// let isloggedIn=true

// number => 2 to power 53
// bigint = for high value
// strings => ""
// boolean => true/false
// null => Standalone value
// undefined => 
// symbol => unique


//object (non-primitive)

// console.log(typeof age);//number
// console.log(typeof null);//object
// console.log(typeof undefined);//undefined


// let score = "33abc" 
// let score = null; 
// let score = undefined

// console.log(typeof score);

// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); //NaN  //0  //undefined


// "33" => 33
// "33abc" => NaN
// true => 1; false => 0

// console.log("1"+2);
// console.log("1"+"2");
// console.log(1+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");


// let x=100;
// console.log(x++);  //First, it returns the current value of x. Then, it increments x
// console.log(++x);  //First, it increments x. Then, it returns the new value


// const id= Symbol("123")
// const anotherID=Symbol("123") //different IDs(unique)

// console.log(id === anotherID);


// Stack(Primitive) , Heap (Non-Primitive like Objects)

// Primitive types (string, number, boolean, etc.) → copied by value
// Objects (arrays, functions, objects) → copied by reference


let myYoutubename="hiteshchiudharydotcom"

let anothername=myYoutubename
anothername="chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne={
    email : "user@gmail.com",
    upi : "user@ybl"
}

let userTwo=userOne

userTwo.email="rr@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)


//Key TakeAways

// Here’s what happens:

// copied by value:-
// "hiteshchiudharydotcom" is a primitive (string).
// When you assign it to anothername, JavaScript copies the value.
// So now you have two independent variables.

//copied by reference:-
// Objects are stored in heap memory.
// Variables store a reference (address) to that object.
// So userTwo = userOne means:
// 👉 both variables point to the same object
