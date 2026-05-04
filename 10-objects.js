// const tinderUser = new Object()

const tinderUser ={}

tinderUser.id="123abc"
tinderUser.name="samay"
tinderUser.isloggedIN=false

// console.log(tinderUser)
// consolegit .log(Object.keys(tinderUser)) //gives Array
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))
// console.log(tinderUser.hasOwnProperty('isloggedIN'))//true

const regularUser={
    email : "someone@gmail.com",
    fullname : {
        username : { 
            firstname : "Harsh",
            lastname : "Singh"
        }
    }
}

// console.log(regularUser.fullname.username)

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = { obj1 , obj2 }
// const obj3 = Object.assign(target,source);
// const obj3 = Object.assign({}, obj1, obj2)  //obj1 and obj2 are source
const obj3 = {...obj1, ...obj2}
// console.log(obj3);


