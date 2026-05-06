// Singleton

// Object literals

const mySym = Symbol("key1")

const JsUser={
    name: "Harsh",
    "full_name" : "Harsh Singh",
    // mySym : "mykey1", //not a correct way to access
    [mySym]:"mykey1",
    age: 21,
    location: "Pune",
    email: "harsh@google.com",
    isLoggedIn:false,
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser.full_name)
// console.log(typeof JsUser.mySym) //gives string
// console.log(JsUser[mySym]) 

JsUser.email="hitesh@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email="hitesh@microsoft.com"
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello JS user");
}
JsUser.greetingsTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

JsUser.greetings();
JsUser.greetingsTwo();