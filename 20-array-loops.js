
const arr = [1, 2, 3, 4, 5 ]

for (const nums of arr){
    // console.log(nums);
}
    
const greetings = "HEllO WORLD"

for (const greet of greetings){
    // console.log(`Each char is ${greet}`)
}

// Maps ---> Unique Values and In order.

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set("UK","United Kingdom")
// console.log(map)

//  for (const key of map){
//     console.log(key);
//  }
//  for (const key of map){
//     console.log(key);
//  }
//  for (const [key,value] of map){
//     console.log(key,":-",value);
//  }

// 🔁 for...of → values
// Iterates over values of an iterable (arrays, strings, maps, sets, etc.)
// Clean and commonly used for arrays

const myObject = {
    'JS':'JavaScript',
    'Cpp':"C++",
    'Py':"Python",
    'rb':"Ruby"
}
// for (const [key,vale] of myObject){
//     console.log(key,":-",value);
// }//  O/P: not Iterable


for (const key in myObject) {
    // console.log(key);   
}
for (const key in myObject) {
    // console.log(myObject[key]);   
}

// 🔁 for...in → keys (indexes/properties)
// Iterates over keys (property names) of an object
// Works on objects and arrays (but not recommended for arrays)

const programming = ['JS','rb','py','java','cpp']

for (const key in programming){
    // console.log(key)
}
for (const key in programming){
    // console.log(programming[key])
}

const coding = ["JS", "Ruby", "Java", "Python", "Cpp"]

// coding.forEach( function (item){
//     console.log(item);
// })

// coding.forEach((item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// coding.forEach( (item,index,arr)=>{
    // console.log(item,index,arr);
// })

// const myCoding=[
//     {
//         languageName : "JavaScript",
//         languageFileName : "JS"
//     },
    
//     {
//         languageName : "Java",
//         languageFileName : "Java"
//     },

//     {
//         languageName : "Pyth",
//         languageFileName : "Js"
//     }
// ]

// myCoding.forEach((item)=>{
//     console.log(item.languageName);
// })

// const mycoding = ["js", "ruby", "java", "python", "cpp"]

// const value = coding.forEach((item)=>{
//     // console.log(item);
//     return item
// })

// console.log(value)// forEach loop does not return anything


// Some Methods

const myNums=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=[]
// myNums.forEach((nums)=>{
//     if (nums>5){
//         newNums.push(nums)
//         return newNums
//     }
// })

const newNums = myNums.filter((nums)=> nums>4);
// console.log(newNums)


const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumbers = Numbers.map((nums) => (nums+12))
// console.log(newNumbers)


//Chaining
// const newNumbers = Numbers
//                         .map((num)=> num*10)
//                         .map((num)=> num+1)
//                         .filter((num)=> num>50)
// console.log(newNumbers)

const myFav =[1,2,3]
// const myTotal = myFav.reduce(function(acc,curr_val){
//     console.log(`acc : ${acc} and curr_val : ${curr_val}`);
//     return acc + curr_val
// },0)

// console.log(myTotal);

const myTotal = myFav.reduce((acc,curr_val) => acc+curr_val,1)
console.log(myTotal)