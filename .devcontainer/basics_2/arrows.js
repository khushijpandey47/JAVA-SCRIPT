const user={
    username:"khushi",
    price: 499,

welcomeMessage: function(){
    console.log(`${this.username}, welcome to website`);
}
}
user.welcomeMessage()
//user.username="sam"
//user.welcomeMessage()
console.log(this);  //empty{}

//function one(){
    console.log(this.usernames);
//}
//one()

const one=()  => {
    let usename="khushi"
    console.log(this);
}
one()

const addtwo=(num1,num2) => {
    return num1+num2
}
console.log(addtwo(3,4))