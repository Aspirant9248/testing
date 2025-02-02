  /* const a=10// iska value same const rahta hai mean if a=16 likhenge give error
b="prbhat"// iska value change ho jata haii

var c="prabaht@1234.com"// iska value change ho jata haii aur ye ekk global function haiidanger to use

d="hitesh"//java script me aise bhii declare kar sakte haii but danger to use
d="alpha"
console.table([a,b,c,d])   

{
    let b="prabhat"
    console.log(b)
}        

const b=null;
console.log(typeof(b)) 
let a=true
console.log(typeof(a))     

const a="33"
console.log(typeof(a))
const b=Number(a)
console.log(typeof(b)); 

let a="33qbc"
console.log(typeof(a))
let b=Number(a)
console.log(typeof(b));
console.log(b);


let z=null;
console.log(typeof z)
let p=Number(z)
console.log(typeof p)
console.log(p);



let z=true
console.log(typeof z)
let p=Number(z)
console.log(typeof p)
console.log(p)    

let p="prabhat ranjabn"
console.log(typeof p)
let q=Number(p)
console.log(typeof q)
console.log(q);        

let p=""
console.log(typeof p)
let q=Boolean(p)
console.log(typeof q)
console.log(q)       

let m="    "
console.log(typeof m)
let n=Boolean(m)
console.log(typeof n)
console.log(n)         

let p=33
console.log(typeof p)
let q=String(p)
console.log(typeof q)
console.log(q)
let z=1;
console.log(p+z)
console.log(q+z)     

let z="prabhat"
let l="ranjan"
console.log(z+l)
let q=z+l
console.log(q)     

console.log("1"+2)
console.log(1+"2")
console.log("1"+2+2)// yadi string fast me hai too sabhi ko string ke tarah behave karna 
console.log(1+"2"+"2")// aur yadi last me hai too  koi nai sehh lenege
console.log(1+2+"2"+"2")
console.log(1+"2"+2)      

console.log("1"+2+2+2+2)
console.log(1+2+"2"+2+2)
console.log(1+2+2+2+"2")    

let p=false
let n=true
console.log(+p)
console.log(+n)
                     

let p=100
p++
console.log(p)
let m=99
++m
console.log(m)      

let z=null
let p=Number(z)
console.log(p)
console.log(null>0)
console.log(null>=0)
console.log(null==0)// this statement is false only bcz == and >< both are work differently
 



console.log(undefined>0)
console.log(undefined>=0)
console.log(undefined==0)
    

console.log("2"==2)
console.log("2"===2)
let z="2"
let p=Number(z)
console.log(p===2)

let z=Symbol("prabhat")
let q="prabhat"
console.log(z==q)     

// declaration of array ,object,function

let array=["prabhat","ranjan","chloro"]

let object={
    name:"prabhat",
    email:"prabhat@1234.com"
}

let Function=function(){
    console.log("hello prabhat")
}       

// memeory concept

// stack memory

let Id="prabhat@1234"
let newId= Id
newId="aspirant@9248"
console.log(Id)
console.log(newId)

// heap memory

// let userOne={
//     name:"prabhat",
//     email:"prabhat@1234"
// }
// let userTwo=userOne
// userTwo.email="siddharth@1234"
// console.log(userOne.email)
// console.log(userTwo.email)

        


let name="prabhat";
let repocount=50;
console.log(name+repocount);
console.log(`my name is ${name.toUpperCase()} and repoclount is ${repocount}`);// string interpolation

const gamename= new String("prabhat")
console.log(gamename[0]);
console.log(gamename.toUpperCase());// ye use kiya jata haii case badalne me
console.log(gamename.toLowerCase())
console.log(gamename.at('4'))
console.log(gamename.charAt('4'))// ye baatata hai kis index pe kya hai it doesnot allow to pass negative  value
console.log(gamename.includes("t"))// ye batata hai present hai ya nahii
console.log(gamename.length)
console.log(gamename.substring(0,4))// iss me last wala element ko count nahi karte haii
console.log(gamename.slice(-5,3))

    

const alpha="    prabhat  z"
console.log(alpha)
const z=alpha
console.log(z.trim())// dono taraf se space haatane ke liye
console.log(alpha.trimEnd())// last se space hattane ke liye
console.log(alpha.trimStart())// start se space hattane ke liye

const url="https://prabhatemail@%20/gmai.com"
console.log(url.replace("%20","-"));



const number=100;
console.log(number)
const num1=new Number(400)
console.log(num1)
console.log(number.toString().length)// ye number se string me badalta haii
console.log(number.toFixed(2))// ye batlata haii kitna digit chahye decimal kee baad

  
  const z=123.456
  console.log(z.toPrecision(3))// 3 batata hai integer ka kitna value
  const A=100000000
  console.log(A.toLocaleString("en-In"))// indian style me counting
  

console.log(Math)
const p=-3;
console.log(Math.abs(p))// ye negative ko positive baanata haii
console.log(Math.floor(4.9))// ye hamesh minpoint return karta haii
console.log(Math.ceil(4.1))// ye hamesha max  poin ko pakrata hai
console.log(Math.round(4.32))// ye roundoff karta haii
console.log(Math.min(2,3,4,1,4,5,6))// ye min element return karta haii
console.log(Math.max(2,3,4,5,6,7,8))// ye max value return karta haii


console.log(Math.random())// random values in decimal b/w 0 and 1
console.log(Math.random()*10)// random  decimal value b/w 0 and 10
console.log((Math.random()*10)+1)// random  decimal value b/w 1 and 11    

console.log(Math.floor((Math.random()*10)+1))// integer value

let min=10
let max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))


let date=new Date()
console.log(date)
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toJSON())
console.log(date.toLocaleTimeString())
console.log(date.toISOString());
    
   let createDate=new Date(2023,1,9)
   console.log(createDate)
   console.log(createDate.toString())

   let CreateDate=new Date(2023,1,9,3,43,3)
   console.log(CreateDate.toLocaleString());
   
   let mydate=new Date()
   console.log(mydate.getTime())// gat time in milli second
   console.log(Math.floor(mydate.getTime()/1000))//time in second
   console.log(mydate.getMonth()+1)// +1 only bcz kii yaha 0 se satart hota hai 0=jan
   console.log(mydate.getFullYear())// for year
       

   mydate.toLocalString('default', {
    weekdays:"long"
   })      

   let myArray=[1,2,3,4,5,6,7,8]
   console.log(myArray[2])// access any element of an array
   let z=new Array(1,2,3,4,5)// isse array me convert ho jaata haii
   console.log(z[1])
   //console.log(myArray) 
   myArray.push(10)// use to add any num at last of array
   console.log(myArray)
   myArray.pop()// use to deduce number
   console.log(myArray)
   myArray.unshift(10)// use to add element at first position
   console.log(myArray)
   myArray.shift()// use to deduce first element
   console.log(myArray)
   console.log(myArray.includes(9))// it will give an boolean value like true or false
   console.log(myArray.indexOf(4)) // ye index baatata haii aur yadi number hii present naa ho to negative value deta hai

    

   let myArray=[1,2,3,4,5,6,7,8]
   let z=myArray.join()// ye array ko convert karta hai string mee
   console.log(myArray)
   console.log(z)
   console.log(typeof z)

  
   let myArray=[1,2,3,4,5,6,7,8]
   let myn1=myArray.slice(1,4)// ismme last wala index nahi aata haii and main array change nahi hota haii
   console.log("A:",myArray)
   console.log("B:",myn1)
   let myn2=myArray.splice(0,4)
   console.log("c:",myn2)// issme last wala element bhii include rahta haii and ye main array change kar deta haii
   console.log("A:",myArray)// ye main array change ho gaya splice use karne see

 
// let myArray=[1,2,3,4]
// let myArray1=["hitesh","prabhat","alpha"]
//myArray.push(myArray1)// issme array ke andar array
//console.log(myArray)

//let z=myArray.concat(myArray1)// issme me bhii concat hota haii
//console.log(z)

//console.log(...myArray,...myArray1)// spread operator

const newArray=[1,2,3,4,[5,6,7,8],9,[10,11,12,13,[14,15,16]]]
const NewArray = newArray.flat(Infinity)// infinity likhne see sabhii array atomatic merg hoo jata haii
//const NewArray = newArray.flat(1)// ye baata hai kitne order ke array ko marg karn haii
console.log(NewArray)

 console.log(Array.isArray("prabhat"))// check karta haii array haii yaa nahii
 console.log(Array.isArray([1,2,3,4]))
 console.log(Array.from("hitesh"))// ye sting se array banat haii
 console.log(Array.from({name:"hitesh"}))// give an empty array importrant for interview
    
    let a=100
    let b=200
    let c=300
    console.log(Array.of(a,b,c))     


    const mykey= Symbol("mykey1");
    const user={
        name:"prabhat",
        [mykey]:"mykey1",
        isloggedin:"yes",
        location:"manoharpur",
        ishonest:"yes",
        "fullname":"prabhat_raja"
    }
    //console.log(user.name)// first method to acces
    //console.log(user["location"])// second and best way to access
    // benifit of second method
    
   // console.log(user["fullname"])// this is the  only way of acces
  
  Object.freeze(user.email)// freeze karne value baad me change nahi hoota haii
  user.name="siddarth"
  console.log(user)

  user.alpha=function(){
    console.log("hello hitesh sir")
  }
  user.beta=function(){
    console.log(`hello misster ${this.name} your adress is ${this.location}`)
  }
  console.log(user.alpha())
  console.log(user.beta())

const user1=new Object();// singultan object
const user2={};// non singulton object

console.log(user1)
console.log(user2)             

const tinderuser=new Object();
 tinderuser.id="aspirant9248"
 tinderuser.password="prabhat@1234"
 tinderuser.isLogedin=false
 console.log(tinderuser)

 // nesting of object

 const user1={
  id:"siddharth@1234",
  fullname:{
    username:{
      firstname:"prabhat",
      lastname:"ranjan"
    }
  }

  }
  console.log(user1)
  console.log(user1.fullname)
  console.log(user1.fullname.username.firstname)// we can access through nested object

     
// merging of more than one object
  const obj1 = {1:"a",2:"b"}
  const obj2 = {3:"c",4:"d"}
  const obj3 = {5:"e",6:"f"}
  const obj4=Object.assign({},obj1,obj2)// here {} is optional but it beeter write
  console.log(obj4)
  const obj5={...obj1,...obj2,...obj3}// using spread operator merg too object
  console.log(obj5)
  const obj6=(obj1,obj2)// worst way issme nesting ho jaatai haii
  console.log(obj6)
 

 const user=[
   {
     id:"prabht",
     islogdin:false,
   },
   {
     id:"aspirant",
     islogdin:false,
   },
   {
     id:"siddnhath",
     islogdin:true,
   }

]
console.log(user)
console.log(user[1])
console.log(user.length)// tell kii array ke andar kitne object haii
console.log(Object.keys(user))// isme object ke keys aa jayenge
console.log(Object.keys(user[1])) // isme first object ke saare values
console.log(Object.values(user[1])) // isme values aata haii     
console.log(user[1].hasOwnProperty('id'))// yee pahel baata dega kii ye apkee object ke andar haii yaa nahii

  

// destructing of object
 const user={
  id:"prabhat",
  password:"prabhagt@1234",
  isslogedin:false,
  courseinstructor:"hitesh"

 }
 console.log(user.courseinstructor) // first and simple method
 const { courseinstructor}=user// second method structure: const{value chahye}=user
 console.log( courseinstructor)
 const { courseinstructor:a}=user// yaha pee baara name ke jagah choota use kar sakyte haii
 console.log(a)



 json:[
  {},
  {},
  {}
 ]
   

 function name(){
  console.log('p')
  console.log('r')
  console.log('a')
  console.log('b')
  console.log('h')
  console.log('a')
  console.log('t')
 }
name();// baas name likhe to iiska maatlab hua haam reference dee rahe haii bass but () use kiye isska maaytlab axicution

function user(num1,num2){
      return num1+num2
}
const sum=user(1,2)
console.log("sum:",sum);


function number1(num1){// in this methods we only get one value at time
  return num1
}
console.log(number1(5,3,4))

function number(...num1){// benifit of rest operator we can get array of elements no limit
  return num1
}
console.log(number(5,3,5,7,9))

function number(val1,val2,...num1){// for interviews purpose isme first two values val1 and val2 ke pas chala gaya
  return num1
}

console.log(number(5,3,5,7,9))


// function me object koo paas kar dena
const obj={
  name:"prabhat",
  id:"aspirant9248"
}
function user(anyobject){
   console.log(`hello ${anyobject.name} your id is ${anyobject.id} is recovered`)
    
}

user(obj);

// direct object pass kar dena argument me hiiii
function user(anyobject){
  console.log(`hello ${anyobject.name} your id is ${anyobject.id} is recovered`)
    return 
}
user({
  name:"prabhat",
  id:"aspirant9248"
})
// array pass karna function meee
const myArray=[100,200,300,400]
function secondelement(any){
  return any[1];
}
console.log(secondelement(myArray));

// array pass karna function ke andar hii

function secondelement(any){
  return any[1];
}
console.log(secondelement([100,200,300,400]))



if(true){
  let a=10;
  const b=20;
  var c=30;
}
// yaha pee yaadi haam a and b ke value ko get karna chahenge to error de dega bcz let and const dono block scope haii
// wahi vaar ekk global scope haii jiske karan mistake ke chance bahut baar jate haii
//console.log(a)
//console.log(b)
console.log(c)


function sum(num1,num2){
      return num1+num2;
}
console.log(sum(1,2))

const mul=function multi(num1,num2){
               return num1*num2;
}
console.log(mul(4,5))

// jaruri baat haam function declartion se pahle  bhii uss function ko call kar sakte haki

 
const user={
  username:"prabhat",
  isslogedin:false,
  welcom:function(username){
    console.log(`${this.username} you sucessfully looged in`)
    console.log(this)// ye saare user kaa data return karta haii
  }

}
console.log(user.welcom());
user.username="siddharth"
console.log(user.welcom());
console.log(this) // ye ekk object return karta haii vacant wala



// arrow function 
const alpha=(num1,num2)=>{
  return num1+num2
}
console.log("sum:",alpha(3,2))

// arrow function me implicent type no need of return keyword 

const beta=(num1,num2)=>(num1*num2)
console.log("mul:",beta(3,4))

// jaab bhi object paas karenge to ({  }) rehna hii chahyee
const gama=()=>({usernmae:"prabhat ranjan"})
console.log(gama())

// immediately invoked function expression(IIFE)

function ran(){
  console.log(`DB CONNECTED`)
}
ran()       

(function ran(){
  // named IIFE
  console.log(`DB CONNECTED`);
})();// semicolon is necessary in iif bcz teel where to stop the function

((name)=>{
  // unnamed IIFE
  console.log(`hello ${name} your database is connected`)
})("prabhat");

 
// method first and best to use the if and else function

let a=30;
if(a>50){
  console.log("a is greater than 50")
  console.log("thankyou")
}
else{
  console.log("congrates")
  console.log("thankyou")
}

// second method and worst method
if(a>50) console.log("your mark is greater than 50"),console.log("thankyou")
else console.log("you need to work hard"),console.log("thankyou")

 
let day=52;
switch(day){
  case 1:
    console.log("january")
    break;
  case 2:
    console.log("february")
    break;
  case 3:
    console.log("march")
    break;
  case 4:
    console.log("april")
    break;
  case 5:
    console.log("may")
    break;
  case 6:
    console.log("june")
    break;
  case 7:
    console.log("july")
    break;
  case 8:
    console.log("august")
    break;
  case 9:
    console.log("september")
    break;
  case 10:
    console.log("october")
    break;
  case 11:
    console.log("november")
    break;
  case 12:
    console.log("december")
    break;
    default:
      console.log("thanx for visit");
      break;
}


// falsy value
false,0,-0,BigInt 0n,"",null,undefined,NaN

// truthy value
"0",'false'," ",[],{},function(){}


const object={}
console.log(Object.keys(object).length);
const object1={
  id:"aspkmfrefm",
  name:"mfvmovm",
  location:"ggmrmm",
}
console.log(Object.keys(object1))// iska output ekk array aata haii isme .length laga ke pata kar sakte haii
output:[ 'id', 'name', 'location' ]



// nullish coalescing operator (??): null undefined
// it basically us to handle error ki kya return karta haii
// ye hamesha first number hi return karta haii 
// except in case of null and undefined  it doesnot return null and undefined it return still first number

let var1;
var1=5??10
var1 = null ?? 10
var1 = undefined ?? 30
var1 = null??20??30
console.log(var1)

// ternery operator

let cond=20;
(cond>20)?console.log("greater than 20"):console.log("not greater than")



for(let i=1;i<=9;i++){
  console.log(i);
}

i=1;
while(i<=12){
  console.log(i);
  i++;
}

let i=2;
do{
  console.log("prabhat ranjan")
  i++
} while(i<=5)


// code for table printting 
for(let i=1;i<=20;i++){
  console.log(`table of ${i}:`)
  for(let j=1;j<=10;j++){
    console.log(`${i}*${j}=${i*j}`);
  }
}

// method to apply for loop on array

const myArray=['prabhat','abhishek','adity','santosh']
for(let i=0;i<myArray.length;i++){
   console.log(myArray[i]);
}

// break and continue statement

// 1>break statement me condition match hoote hii loop se bahar nikaal jata haii 
for(let i=1;i<=20;i++){
if(i==5){
  console.log("detected 5");
  break;
 
}
  console.log(i);
}
// 2>continue me bass uss condition ko choor ke code firr se run karne lagta haii
for(let i=1;i<=20;i++){

if(i==5){
  console.log("detected 5");
 continue;
 
}
  console.log(i);
}

// for of loop

const myArray=[1,2,3,4,5,6,7]
for(const i of myArray){
  console.log(i);
}

const string="prabhat ranjan"

for(const i of string){
  if(i==" "){
    continue;
  }
  console.log(`element of string ${i}`);
}

// map :map is a onject
// map known for  unique values isme value repeat nahi hooti haii

const map=new Map()
map.set('in','india')
map.set('un','unitednation')
map.set('pak',"pakistan")
map.set('in','india')
//console.log(map);

for(const i of map){
  console.log(i);
}
for(const [kay,value] of map){
  console.log(key,":-",value);
}

// for in used for obj and it always return key values

const myObj={
  js:"javascript",
  cpp:"c++",
  rb:"rubby",
  c:"c programme"
}
for(const key in myObj){
   console.log(`${key} is shortcut for ${myObj[key]}`);
}

// for in on array  ye key  value return karta haii

// const myArray=['lcdl','nnfke','wfnfiw','niwweni']
// for(const i in myArray){
//   console.log(i);
// }
// output:

const myArray=['lcdl','nnfke','wfnfiw','niwweni']
for(const key in myArray){
  console.log(`${key} and element is ${myArray[key]}`)
}


const array=['alpha','beta','gamma','delta','javascript']
for(const i of array ){
  console.log(i);
}
for(const i in array){
  console.log(`${array[i]}`);
}
array.forEach(function(item){
  console.log(item)
})
array.forEach((item)=>{
  console.log(item)
})
function print(item){
  console.log(item)
}
array.forEach(print)

array.forEach((value,index,array)=>{
       console.log(value,index,array)
})



// jaab array ke andar object aaye to ussko acces karne kaa tarikaa
const user=[
  {
    name:"prabhat",
    password:"prabhatr@1234"
  },
  {
    name:"siddharth",
    password:"siid@1234"
  },
  {
    name:"gautum",
    password:"gatuaa@1234"
  }
]
user.forEach((item)=>{
  console.log(item.name)
})


// for each koii bhi value return nahii karta haii
 const array=['hirknf','bfbf','rubby','java']
const alpha=array.forEach((item)=>{
  return item;
});
console.log(alpha)


const newarray=[];
const array=[1,2,3,4,5,6,7,8,9]
const z=array.filter((item)=> item>4)
console.log(z);

array.forEach((item)=>{
  if(item>4) newarray.push(item);
})
console.log(newarray)


const num=[1,2,3,4,5,6,7,8,9,10]
const beta=num.map((item)=>item+4)
console.log(beta)


// chaining of map and filter
const array=[1,2,3,4,5,6,7,8,9]
const Array=array
                 .map((item)=>item*10)
                 .map((item) =>item+4)
                 .filter((item)=>item>30)

    console.log(Array);


// reduce kaa use 
1>method
const array=[1,2,3,4,5]
let acc=0;
const total=array.reduce((acc,curr)=> acc+curr)
console.log(total)

2 method
const total=array.reduce((acc,curr)=>{
  return acc+curr
},0);
console.log(total)

const array=[1,2,3,4,5]
const total=array.reduce((acc,curr)=>{
  console.log(`acc:${acc} and the curr:${curr}`)
  return acc+curr
},0);
console.log(total)


// add to cart ka price add karna sekkhe 
const array=[
  {name:"apple",
    price:300
  },
  {
    name:"grapes",
    price:600
  },
  {
    name:"mango",
    price:400
  }
]
const total=array.reduce((acc,item)=>acc+item.price,0)
console.log(total)


*/








