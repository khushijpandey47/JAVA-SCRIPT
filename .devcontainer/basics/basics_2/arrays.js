// Array//
const fruits = ['apple', 'banana', 'orange'];//declaration of an array 
console.log(fruits[0]);//accessing the first element of the array

// methods of array

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.length);
numbers.push(6); // adds 6 to the end of the array
console.log(numbers);
numbers.pop();
console.log(numbers);// removes the last element of the array
numbers.unshift(8)// adds 8 to the beginning of the array  
console.log(numbers);

numbers.shift()// removes the first element of the array
console.log(numbers);

console.log(numbers.indexOf(3)); // returns the index of the first occurrence of 3
console.log(numbers.includes(9)); // returns false because 9 is not in the array
console.log(numbers.join(', ')); // joins the elements of the array into a string separated by ', '
console.log(numbers.indexOf(9)); // returns -1 because 9 is not in the array

const newArray = numbers.join()
console.log(newArray); // joins the elements of the array into a string separated by ','
console.log(typeof newArray); // returns 'string' because newArray is a string
console .log(numbers); // original array remains unchanged

//slice and splice
console.log("A",numbers);
const slicedArray = numbers.slice(1, 4); // creates a new array with elements from index 1 to 3
console.log("B",slicedArray);

const splicedArray = numbers.splice(1, 2); // removes 2 elements starting from index 1
console.log("C",splicedArray);