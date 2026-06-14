const  score = 4000;
console.log(score);

const balance= new Number (1000);
console.log(balance);

console.log(balance.toString().length);  // 4
console.log(balance.toFixed(2));   // 1000.00

const num1 = 103.4567;
console.log(num1.toPrecision(3));  // 103
console.log(num1.toPrecision(5));  // 103.46
console.log(num1.toPrecision(2));  // 1.0e+2

const hundred = 10000000;
console.log(hundred);
console.log(hundred.toLocaleString());  // 10,000,000);


//***************math******************** *//

console.log(Math); 
console.log(Math.abs(-5));  // 5
console.log(Math.max(1, 2, 3));  // 3
console.log(Math.min(1, 2, 3));  // 1
console.log(Math.pow(2, 3));
console.log(Math.sqrt(16));  // 4
console.log(Math.round(4.7));  // 5
console.log(Math.floor(4.7)); //4
console.log(Math.ceil(4.7)); // 5

console.log(Math.random());  // random number between 0 and 1
console.log((Math.random()*10)+1);  // random number between 1 and 10

console.log(Math.floor(Math.random() * 10) + 1);
const max=10;
const min=1;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);  // random number between 1 and 10