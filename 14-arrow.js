//this refers to obj
//username is a property of obj


const user = {
    username : "RITURAJ",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`)
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "RITURAJ"
//     console.log(this.username); // this only works inside Object not fucntion
// }

// chai() // Undefined

// username is a local variable, not a property of this.
// When you call chai() normally, this depends on the mode:
// 1. In non-strict mode
// this → global object (window in browser, global in Node)
// Since username is not attached to global, this.username is undefined
// 2. In strict mode ("use strict")
// this → undefined
// So this.username would actually throw an error if accessed directly


// function chai(hsc){
//     console.log(hsc.username);
// }

// chai({ username: "RITURAJ" });

// Arrow function
// ()=>{}

const addTwo = (nums1,nums2) => {
    return nums1+nums2
}

// can be re-written ask

const addThree = (num1,num2,num3) => (num1+num2+num3)

console.log(addThree(3,1,2))

// to return object

const object1 = (nums) => ({username:"harsh"})
console.log(object1())