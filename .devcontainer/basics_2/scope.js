 //const a= 10
 //let b= 20
 //var c= 40
let b=200
 if(true){
    const a= 10
 let b= 20
 // c= 40
 console.log("inner:",a);
 }

// console.log (a);
 //console.log (b);
 console.log(b);

 function one(){
   const username="khushi"

   function two (){
      const website ="youtube"
   console.log (username) ;
   }
  // console.log(website);  the scope website is only within function two
   two()
 }
 //one()

 if(true){
   const username ="khushi"
   if(username=="khushi"){
      const website ="youtube "
      console.log(username + website);
   }
  // console.log(website);
 }

//s console.log(username);

function addone(num){
   return num+1
}
addone(8)
console.log(addone(8))  //syntax 1

const addTwo= function (num){
   return num+2
}
 console.log(addTwo(5))  //syntax 2
