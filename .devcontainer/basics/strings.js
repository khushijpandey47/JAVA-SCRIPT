const name="khushi"
const greeting="hello"

console.log(greeting+ " " + name+ " welcome to the world of programming")
// Output: hello khushi welcome to the world of programming

const message=`${greeting} ${name} welcome to the world of programming`
console.log(message)

const gameName=new String("chess")
console.log(gameName) // Output: [String: 'chess']

console.log(gameName.length)
console.log(gameName.toUpperCase()) // Output: CHESS
console.log(gameName.toLowerCase()) // Output: chess
console.log(gameName.includes("ch")) // Output: true
console.log(gameName.startsWith("ch")) // Output: true
console.log(gameName.endsWith("ss")) // Output: true
console.log(gameName.indexOf("e")) // Output: 2
console.log(gameName[0])
const substring=gameName.substring(1,4)
console.log(substring) // Output: hes

const str1="   hello    "
console.log(str1.trim()) // Output: hello
console.log(str1.trimStart()) // Output: hello    
console.log(str1.trimEnd()) // Output:    hello
console.log(str1)

const url="https://www.example.com"
const newUrl=url.replace("https","http")
console.log(newUrl) // Output: http://www.example.com

const str2="hello world"
console.log(str2.split(" ")) // Output: [ 'hello', 'world' ]
console.log(str2.split("")) // Output: [ 'h', 'e', 'l', 'l', 'o', ' ', 'w', 'o', 'r', 'l', 'd' ]
