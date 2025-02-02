// promises

/*const promise=new Promise(function(resolve,reject){
    // DB call
    setTimeout(function(){
        console.log("ASYNC task is completed")
        resolve()
    },1000)
   
})
promise.then(function(){
    console.log("promise consumed")
})

// method two

new Promise(function(resolve,rejecct){
    console.log("Async task is complete")
    resolve();
}).then(function(){
    console.log("task 2 complete");
})   

// passing argument through resolve or some data through resolve

const promise=new Promise(function(resolve,reject){

                 resolve({user:"prabhat",password:"prabhat@1234"})

})
promise.then(function(prabhat){
    console.log(prabhat)
})   

// fourth  method to handel with error chaining and call heel

const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"prabhat ranjan",Address:"manoharpur",password:"prabhat@1234"})
        }
        else{
            console.log("error:something went wrong")
        }
    },1000)      
})
promise.then((user)=>{
       console.log(user)
       return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(){
    console.log("something went wrong")
}).finally(()=>{
    console.log("either promise resolved or rejected")
})          


//  without using then and catch function we can also handle these using async and await


const promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"prabhat ranjan",Address:"manoharpur",password:"prabhat@1234"})
        }
        else{
            console.log("error:something went wrong")
        }
    },1000)      
})
async function promise_1(){
    const alpha=await promise
    console.log(alpha);
}
promise_1();

async function promise_2(){
    try{
        const alpha=await promise
        console.log(alpha)
    }
    catch(error){
          console.log(error)
    }
}
promise_2();                      

// fetching new datas using java_script

async function getAllid(){
    try{
        const alpha=await fetch('https://jsonplaceholder.typicode.com/users')
       const data= await alpha.json()
       console.log(data);
    } catch(error){
        console.log("E:",error)
    } 

}

getAllid();     

console.log("new method")
fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
         return response.json();
}).then((data)=>{
        console.log(data)
}).catch(()=>console.log("error found"))         

const user={
    name:"prabhat ranjan",
    address:"manoharpur_chowk",
    password:"prabhat@1234",
    isLoogedIn:true,
    getFulldetails: function(){
        console.log("you got the full detail:")
        console.log(user.name);
        console.log(this.name);
        console.log(this);// this present context ki baat karta haii
    }
     
}
console.log(user.isLoogedIn);
console.log(user.getFulldetails());          

function user(name,password,address){
   this. name=name,
   this. password=password,
   this. address=address
    return this
}
// issme values overwrite ho jaati haiii hamesha naya  wala return karta haii

// const userOne=user("prabhat","prabhat@1234","manoharpur")
// const userTwo=user("prajapati","siddharth@1234","delhi")
// console.log(userOne)
// console.log(userTwo)

// overwrite se baachne ke liye haam loog new() keyword ka use karte haii

const userOne=new user("prabhat","prabhat@1234","manoharpur")
const userTwo=new user("prajapati","siddharth@1234","delhi")
console.log(userOne)
console.log(userTwo)        

function user(name,password,address){
    this. name=name,
    this. password=password,
    this. address=address
    this.alpha=function(){
        console.log(`welcome:${user.name}`);
    }
     return this
 }
const userOne=user("prabhat_ranjan","prabhat@1234","manoharpur")
console.log(userOne)
console.log(userOne.constructor);               

function multiply5(num){
    return  num*5;

}
console.log(multiply5(5))
console.log(multiply5.power)
console.log(multiply5.prototype)   

function createuser(name,score){
    this.name=name,
    this.score=score
}
createuser.prototype.increment=function(){
   this. score++;
}
createuser.prototype.printMe=function(){
    console.log(`price is ${this.score}`)
}
const chai= new createuser("chai",25);
const tea=new createuser("tea",250);

chai.printMe();      

let name="prabhat     "
//console.log(name.trim().length)
//console.log(name.trueLength)
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.nmae}`);
    console.log(`true length is ${this.trim().length}`)
}
name.trueLength();

let myHeros=["thor","spiderman"]
let heroPower={
         thor:"hammer",
         spiderman:"sling",
         getSpiderPower:function(){
            console.log(`spidy power is ${this.spiderman}`)
         }
}
Object.prototype.hitesh=function(){
    console.log(`hitesh is present in all object`)
}
heroPower.hitesh();
myHeroes.hitesh();       

function setusername(username){
    this.username=username
}
function createuser(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createuser("prabhat","yprabhatkumar0@gmail.com","prabhat@1234")
console.log(chai);      

// class

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return `${this.password}AbC`
    }
    touppercase(){
        return `${this.username.toUpperCase()}`
    }
}
const chai=new user("chai","chai@1234gmail.com","prabhatr@1234")
console.log(chai.encryptPassword());
console.log(chai.touppercase());


// inheritance 

class user{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`userName is ${this.username}`);
    }
}
class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse(){
        console.log(`A new course is lanuched by ${this.username}`)
    }
}
const chai= new Teacher("prabhat","yprabhatr@gmail.com","123")
chai.addCourse()


// class react{
//     constructor(){
//         this.library="react"
//         this.server="https://localhost:300"
//         // requirement
//         document
//         .querySelector('button')
//         .addEventListener('click',this.handleClick.bind(this))
//     }
//     handleClick(){
//         console.log("button clicked");
//         console.log(this);
//     }
// }

// const pi=3.14
// console.log(Math.ceil(pi))

// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

const descripter=Object.getOwnPropertyDescriptor(Math,"PI")
console.log(descripter);


const chai={
    name:"ginger chai",
    price:250,
    isAvlable:true
}
console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,'name',{
    writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(chai,'name'))


*/
function outer(){
      let username="hitesh"
      function inner(){
          let secret="my123"
          console.log("inner",username);
      }
      function innerTwo(){
        console.log("innerTwo",username);
        console.log(secret)
      }
inner()
innerTwo()

}
outer();
console.log(username);

