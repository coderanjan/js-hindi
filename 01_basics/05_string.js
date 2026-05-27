const name ="hitesh"
const repoCount =50

// console.log(name + repoCount + "value")

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('anjan_one_two')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.charAt(1))
// console.log(gameName.indexOf('n'))

const newString =gameName.substring(0,4)
// console.log(newString)

const anotherSting =gameName.slice(4,0)
// console.log(anotherSting)

const newStringOne = " hitesh "
console.log(newStringOne)
console.log(newStringOne.trim())

let url ="https://hitesh.com/hitesh%20choudhary"
console.log(url .replace('%20','_'))

console.log(url.includes('sundar'))

console.log(gameName.split('_'));
