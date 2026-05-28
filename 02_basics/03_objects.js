// singleton
// Object.create

const mySym = Symbol("key1")
// object literals
const Jsuser = {
    name:"anjan",
    "full name":"anjan pajiyar",
    [mySym]:"key1",
    age:18,
    location:"jaipur",
    email:"anjan@google.com",
    isLoggedIn: false,
    LastLoginDays:["Monday","Saturday"]
}

// console.log(Jsuser.email);
// console.log(Jsuser["email"]);
// console.log(Jsuser["full name"]);
// console.log(Jsuser.mySym);
// console.log(typeof Jsuser.mySym);
// console.log(Jsuser[mySym]);
// console.log(typeof Jsuser[mySym]);

Jsuser.email="paji@google.com"
// Object.freeze(Jsuser)
Jsuser.email="anji@google.com"
// console.log(Jsuser);

 Jsuser.greeting = function(){
    console.log("Hello JS user")
 }

 Jsuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`)
 }

 console.log(Jsuser.greeting());
 console.log(Jsuser.greetingTwo());

