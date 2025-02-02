/*  const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
})  */


//console.log("-----------method 2----------------")

// method 2 to write promise

/* new Promise(function(){
setTimeout(function(){
    console.log("Async 2 reolved");
},1000)
}).then(function(){
    console.log("Async 2 resolved");
}) */

/*
console.log("-----------method 3----------------")

const promiseThree=new Promise(function(resolve,reject){
       setTimeout(function(){
    resolve({username:"chai",email:"yprabhatkumar0@gmail.com"})
       },1000)
})
promiseThree.then(function(user){
    console.log(user);
}) 

console.log("-----------method 4----------------")

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
       let error=false;
       if(!error){
         resolve({username:"prabhat",pasword:"prabhat@1234"})

       }
       else{
        reject('ERROR:something went wrong')
       }
    },1000)
})
promiseFour.then((user)=>{
    console.log(user)
   return user.username
   return user.pasword
}).then((username)=>{
    console.log(username);
}).then((pasword)=>{
    console.log(pasword);
}).catch(function(error){
    console.log(error);
}).finally(()=>console.log('you work has been done sucessfully'))  


console.log("------method five-------");
const prabhat=new Promise(function(resolve,rejeect){
   setTimeout(function(){
     
    let error=false;
    if(!error){
        resolve({username:"prabhat ranajn",id:"aspirant@9248"});
    }
    else{
        console.log("ERROR!404 forbiden");
    }

   },1000)
});
async function  alpha(){
    try{
         const beta=await prabhat;
         console.log(beta);
    }
    catch (error){
               console.log(error);
    }
}
alpha();          


const user={
    username:"prabht",
    roll:34,
    vill:"manoharpur",
    getalpha:function(){
        console.log("Hi prabhat ");
        console.log(`username:${this.username}`);
        console.log(this);
    }
}

console.log(user.vill);
console.log(user.getalpha());         



function user(username,roll,vill){
    this.username=username,
    this.roll=roll,
    this.vill=vill;
    return this;
}
const userone=user("prabhat",23518,"manoharpur");
const usertwo= user("himanshu",23530,"patna");// it basically overwrite the first one
console.log(userone);//in this case user two replace the info of useronde
console.log(usertwo);            
                                            

function user(username,roll,vill){
    this.username=username,
    this.roll=roll,
    this.vill=vill;
    return this;
}
const userone= new user("prabhat",23518,"manoharpur");
const usertwo= new user("himanshu",23530,"patna");
console.log(userone);//after using this new keyword it not allow to overwrite
console.log(usertwo);
                             

function multi(num){
    return num*5;
}
multi.power=2;
const z=multi(5);
console.log(z);
console.log(multi.power);
console.log(multi.prototype);         


function user(name,score){
    this.name=name;
    this.score=score;
}
user.prototype.increment=function(){
   this.score++;
    console.log(score);
}
const z=new user("chai",20);
console.log(z);
                            
                             
const name="prabhat   "
console.log(name.length);
console.log(name.trim().length);

let hero=["hitman","kohli","rider"];
let power={
    hitman:"thor",
    kohli:"bat",
    rider:"bike",
  
getpower:function(){
    console.log(this.rider);
}
  
}
Object.prototype.prabhat=function(){// this is the method to add any function inside an object
    console.log("prabaht is at every where.");
}
power.prabhat();
power.getpower();                     
                                  

const user={
    username:"prabhat",
    email:"yprabahtkumar0@gmail.com"
}
const alpha={
    z:"zela he alli"
}
const beta={
    q:"queejnfeiufn",
    __proto__:alpha
}
alpha.__proto__=user// another method

// modern syntax

Object.setPrototypeOf(alpha,beta);         
   

function setusername(username){
    this.username=username
    console.log("called")
}
function createuser(username,email,password){
    setusername(username)// iss me function ka bass reference pass ho raha hai iss liye chai me user ka name nahi aa raha hai
    this.email=email
    this.password=password
}
const chai=new createuser("chai","chai@gmail.com","123")
console.log(chai)      

function setusername(username){
    this.username=username
    console.log("called")
}
function createuser(username,email,password){
    setusername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createuser("chai","chai@gmail.com","123")
console.log(chai)             

// class par charcha

class user{
    constructor(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai=new user("chai","chai@1234.com","123")

console.log(chai.encryptPassword());
console.log(chai.changeUsername());

    */
                                        

// behind the scence

function user(username,email,password){
        this.username=username;
        this.email=email;
        this.password=password
    }
    user.prototype.encryptpassword=function(){
        return `${this.password}abc`
    }
    user.prototype.changename=function(){
        return `${this.username.toUpperCase()}`
    }    


const tea=new user("tea","teaalpah@123.com","123");
console.log(tea.encryptpassword());
console.log(tea.changename());           