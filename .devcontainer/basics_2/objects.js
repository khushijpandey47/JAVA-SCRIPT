// object singleton
// object.create() method creates a new object

//object literal
const person = {
    name: 'John',
    "full name": "John Doe",
    age: 30,
    email: "john1234@gmail.com",
    location: "New York",
    isEmployed: true,
    hobbies: ['reading', 'traveling', 'cooking'],
}
console.log(person.name); // John  takes  value as a string
console.log(person['age']); // 30
console.log(person.hobbies[1]); // traveling

console.log(person["full name"]); // John Doe

//updating object properties

person.age = 31; // update age
//Object.freeze(person);
person.age = 32; // this will not update age because object is frozen
console.log(person); // 31

person.email="john.doe@gmail.com"
//Object.freeze(person);
person.email="johnsmith@gmail.com" // this will not update email because object is frozen
console.log(person); // john.doe@gmail.com

person.greeting = function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
}
console.log(person.greeting()); // Hello, my name is John and I am 31 years old.



//more on objects

const student={}
student.name="John"
student.age=20
student.grade="A"
console.log(student); // { name: 'John', age: 20, grade: 'A' }


const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'red',
    isElectric: false,
}
console.log(car); // { make: 'Toyota', model: 'Camry', year: 2020, color: 'red', isElectric: false }

//nested objects
const regularUser = {
    email: "john.doe@gmail.com",
    fullName: {
        userName: {
            firstName: "John",
            lastName: "Doe"
        }
    }

    }
    console.log(regularUser.fullName.userName.firstName); // John
    console.log(regularUser.fullName);// { userName: { firstName: 'John', lastName: 'Doe' } }

    const obj1={n:"John", a: 30};
    const obj2={e:"niya",c: 25}; 
    const obj4 ={d:"shan", k: 28};

    console.log({obj1,obj2}); // { obj1: { name: 'John', age: 30 }, obj2: { name: 'niya', age: 25 } }
 
   const obj3 = Object.assign({}, obj1, obj2,obj4);// this will merge obj1, obj2 and obj4 into a new object obj3. If there are 
   console.log(obj3); 
   //const obj3 = {...obj1,...obj2,...obj4}; // this will merge obj1, obj2 and obj4 into a new object obj3. 
   
// /console.log(obj3); 

const user=[
    {
        name: "John",
        age: 30,
        email: "john.doe@gmail.com",
        location: "New York",
    },
    {
        name: "Jane",
        age: 25,
        email: "jane@gmail.com",
        location: "Los Angeles",
    }
]
console.log(user[0].name); // John
console.log(Object.keys(student)); // [ 'name', 'age', 'grade' ]
console.log(Object.values(student)); // [ 'John', 20, 'A' ]

console.log(student.hasOwnProperty('name')); // true
console.log(student.hasOwnProperty('height')); // false

const course ={
    title: "JavaScript Basics",   
    price: 499,
    instructor: "John Doe",
}
     course.instructor = "Jane Smith"; // update instructor
        console.log(course); // { title: 'JavaScript Basics', price: 499, instructor: 'Jane Smith' }
     const {instructor}= course; // destructuring assignment   
     console.log(instructor); // Jane Smith

     const navbar=()  => {

     }
     navbar( company="Tech Solutions")
