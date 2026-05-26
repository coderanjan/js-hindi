// primitive 

// 7 types : String, Number , Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id =Symbol('123')
const anotherid =Symbol('123')

console.log(id === anotherid)

const bigNumber =  3243546575653n
// Reference (Non Primitive)

// Array , Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]
let myIObj = {
    name:"anjan",
    age:22,
}

const muFunction=function(){
    console.log("hello world")
}

console.log(typeof outsideTemp)