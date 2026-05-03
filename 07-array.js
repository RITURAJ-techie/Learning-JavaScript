
const myArr=[6,1,2,3,4,5]
// const myHeroes = ["shaktiman","nagraj"]

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[0]);

myArr.push(7)
myArr.push(8)

// console.log(myArr);

// myArr.pop()

// myArr.unshift(9)
// console.log(myArr);

// myArr.shift() //hover it
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

const newArr = myArr.join() // bind and convert to string
// console.log(newArr);
// console.log(typeof newArr);


// Slice, Splice

console.log("A",myArr)

const myn1=myArr.slice(1,3);
console.log(myn1)

console.log()
console.log("B",myArr)

const myn2=myArr.splice(1,3) //remove the element from 1 to 3
console.log("C",myArr)
console.log(myn2)

