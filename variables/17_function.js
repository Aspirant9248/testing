// in this case we cant get any error
// addtwo(4)
// function addtwo(num){
//      return num+1
//  }


//in this case we get some error when we declare function in a variable
// addtwo(4)
// const c=function addtwo(num){
//     return num+1
// }

// arrow fumction
// const chai=()=>{
//     Name:"prabhat"
//     console.log(this)
// }
// chai()
 
// basic arrow function
// const add=(num1,num2)=>{
//        return num1+num2
// }
// console.log(add(2,3))

// implicant return
//const add=(num1,num2)=>(num1+num2)
/*wheter we can use or may not totally depend on our mindset */
//console.log(add(3,4))

// object type returning 
// const add=()=>({username:"prabhat"})
// console.log(add())

// imediately invoked function expression
/* global scope ke pollution se bachne ke liye IIFE ka use karte haii */
// (function chai(){
//     console.log(`DB connected`)
// })()

// (()=> console.log(`DB is connected`))();/* in these case it safe to use semicolon at the end */
// ((name)=> console.log(`DB is connected ${name}`))('prabhat_ranjan')/* this will show
// how to pass argument in iife */