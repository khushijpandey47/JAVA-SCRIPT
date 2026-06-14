const arr= ["apple", "banana", "orange"];
const arr1=["potato", "tomato", "onion"];

arr.push(arr1);
console.log(arr); // adds arr1 to the end of arr
const arr2=arr.concat(arr1);
console.log(arr2); // creates a new array by concatenating arr and arr1

const arr3=[...arr, ...arr1];
console.log(arr3); // creates a new array by spreading arr and arr1

const anotherArr=[2, 3, [4, 5,6],8,9,[0,1]];
const Arr3=anotherArr.flat(Infinity);
console.log(Arr3); // flattens the nested arrays in anotherArr into a single array

console.log(Array.isArray(arr)); 
// returns true because arr is an array

console.log(Array.from("hello")); // creates an array from the string "hello"

let score = 10;
let score1=20;
let score2=30;
console.log(Array.of(score, score1, score2)); // creates a new array with the given arguments as elements