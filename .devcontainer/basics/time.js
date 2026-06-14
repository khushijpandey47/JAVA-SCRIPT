//Date
const myDate = new Date();
console.log(myDate); // 2024-06-17T12:34:56.789Z
console.log(myDate.toString()); // Mon Jun 14 2024 12:34:56 GMT+0000
console.log(myDate.toDateString()); // Mon Jun 14 2026 
console.log(myDate.toTimeString()); // 12:34:56 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()); // 2024-06-14T12:34:56.789Z
console.log(myDate.toLocaleString()); // 6/14/2024, 12:34:56 PM (depending on locale)
console.log(typeof myDate); // object

const mycreatedDate = new Date(2026,5,17); 
console.log(mycreatedDate);
console.log(mycreatedDate.toString()); // Tue Jun 17 2026
console.log(mycreatedDate.toDateString()); // Tue Jun 17 2026
console.log(mycreatedDate.toTimeString()); // 00:00:00 GMT+0000 (Coordinated Universal Time)

let myBirthday = new Date(1990, 0, 1); // January 1, 1990
console.log(myBirthday);

const myTimestamp = Date.now(); // Current timestamp in milliseconds
console.log(myTimestamp);
console.log(new Date(myTimestamp)); 
console.log(Date.now());

let newDate = new Date();
console.log(newDate.getFullYear());
console.log(newDate.getMonth()); // 0-11 (January is 0)
console.log(newDate.getDate()); //14

newDate.toLocaleString('default',
    {weekday:'long',}
); // 6/14/2024 
console.log(newDate.toLocaleString('default',
    {weekday:'long',}
)); // Monday, June 14, 2024