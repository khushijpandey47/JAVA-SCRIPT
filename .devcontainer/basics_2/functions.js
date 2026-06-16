// function 
function sayname(){
    console.log("H");
    console.log("E");
    console.log("L");
    console.log("L");
    console.log("O");
}

sayname();

function add(number1 ,number2){
    console.log(number1 + number2);
}
add(5, 10);
add();  //undefined + undefined = NaN
add(5,"10"); //number + string = string
add(3,null); //number + null = number


function multiply(number1 ,number2){
   // console.log("khushi");
   // return number1 * number2;
   return number1 * number2;

     
    //all the line below the return statement will not be executed
}
const result = multiply(5, 10);
console.log("result:", result);

function loginUserMessage(username){
    //
    if(username==undefined)
    {
        console.log("Please enter the username");
        return
    }
    return `welcome back ${username}`;
}
 console.log(loginUserMessage("Khushi"));

 console.log(loginUserMessage()); //undefined

 function calculateCartprice(... num1) {//...num1 spread operator
    return num1;

 }
 console.log(calculateCartprice(23,32,24));