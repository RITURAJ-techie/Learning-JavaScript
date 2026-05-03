const accountID = 12243
let accountEmail = "harsh@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;


// accountID=2 //Not allowed
accountEmail="RR@google.com"
accountPassword="342456"
accountCity="bengaluru"

console.log(accountID)

/*
Prefer not to use var beacause of issue in 
Block scope and Functional scope
*/

console.table([accountEmail,accountPassword,accountCity,accountState])