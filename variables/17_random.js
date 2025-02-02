// let a="prabhat"
// let b=a;
// b="sachin"
// console.log(a)
// console.log(b);

// let boil={
//     name:"prabhat",
//     salary:45000

// }
// boil.name="sachin"
// console.log(boil.name);
// /* the major difference between stack and the heap memory is that in case of stack
//  memory it change only in a copy but in case of heap it change at the main part
//  or at the refernce point.
// */

// const name="prabhat"
// const salary=400000
// //console.log(name+salary+" i am not happy with it")
// // the sign `` called as inter polletion
// console.log(`my name is ${name} my salary is ${salary} and not happy with i

// const newName="  prabat   "
// console.log(newName);
// console.log(newName.trim());// it just vanish the extra spaces
// const p="ritesh"
// console.log(p.substring(0,4));//it tells gives first 4 string not index from 0 to 4

// console.log(p.slice(-8,-2));// clear the slice concept by your self

// const p="prabhat@gmail.com"
// console.log(p);
// console.log(p.replace('@','43'));// it is used to replace any thing by any thing
// console.log(p.includes('prabhat'));// it is used to check present or not

// const p= new Number(100)
// //console.log(p)
// console.log(p.tostring().length);

// // maths properties

// console.log(Math.abs(-4))// ye negative value ko positive banata haii
// console.log(Math.round(3.5))//
// console.log(Math.ceil(4.2))// iss case me hamesha max integer pee jata haii
// console.log(Math.floor(4.9))// iss case me hamesha min value ko strick karta haii
// console.log(Math.min(4,5,0,6,7,8,91,2))// ye hamesh min value deti haii
// console.log(Math.max(4,2,3,5,6))// iss case me hamesha output max aata haiii
// console.log(Math.sqrt(4))// 16=4 root deti haii
// console.log(Math.random())// always give value between 0 and 1

// console.log(Math.floor((Math.random()*10)+1))// to get number between 1 to 10

// const min=1;
// const max=6;
// console.log(Math.floor(Math.random()*(max-min+1)+min))/* iss case me value hamesha min 
//  and max ke bicch me hi aati hai max-min range deta hai and 1 add karte hai zero wala 
//  condition ko over come karne ke liyee and last me min value joor dete hai taaki kaam 
//  se kaam hamara value min range se kaam naa aa jaye*/


// learning about date
// all date are counted from i jan 1970

//let Mydate=new Date()
//console.log(Mydate)
//console.log(Mydate.toString())
//console.log(Mydate.toLocaleString())// to print like that   8/3/2024, 11:26:54 pm
//console.log(Mydate.toDateString())// to print like that   Fri Mar 08 2024
//console.log(typeof(Mydate))// vvi question type of string is object

//let Mydate=new Date("1969,01,14")// way to creatre any date
//let Mydate= new Date("2023-1-13")// middle one is for months
// let Mydate=new Date(2023,1,13,4,5,30)// another way of creating date and time both
// console.log(Mydate.toLocaleString())
// console.log(Mydate.toDateString())

// time stamp

// let Mydate=new Date()
// console.log(Mydate.toLocaleString())
// console.log(Mydate.getTime())/* it give basically time in milli second which basically use 
// to compare to date or time and when suppose we create any pool or any company like hotel bookoing
//  this is used*/


// comparision in second

// let TimeStamp= Date.now()
// console.log(TimeStamp)
// // now in second
// console.log(Math.floor((Date.now())/1000))// here time in second

// array revision
/* array is a object which bassicaly change the main array not it copy 
like as heap memory */
// const MyArray=[2,3,4,5,6,78,0]
// console.log(MyArray)
//MyArray.push(69)// it basically and a element new element
//MyArray.pop()// it basically remove the last element
//MyArray.unshift(9)// it basically add the new element at the first position
//MyArray.shift()// it simply use to just remove the first elemnt

//console.log(MyArray.includes(100))// it teels even the number is present or not
//console.log(MyArray.indexOf(100))// it tells basically the index of num inside array

// const NewArray=MyArray.join()// it basically convert array into string
// console.log(MyArray)
// console.log(NewArray)
// console.log(typeof(MyArray))
// console.log(typeof(NewArray))

// concept of slice and splice

// const MyArray=[1,2,3,4,5,6]
// console.log("A=",MyArray)

// console.log("B=",MyArray.slice(1,3))/* it basically print element from where to start
//  and exclude the last given index like here it print index of 1 and 2 only*/
//  console.log("A=",MyArray)/* slice do not make any change in the original array
//  most asked question in interview */

//  console.log("c=",MyArray.splice(1,3))/* ye basically starting index se end wale index ke
//  sabhi element ko print karwata haii and there is a big difference in slice and spice is
//  that spice actually change the original array */
//  console.log("A=",MyArray)


// const Array1=[1,2,3,4,5]
// const Array2=[6,7,8,9,10]
// Array1.push(Array2)
// console.log(Array1)
// console.log(Array1[5][1])


//  const Array3=Array1.concat(Array2)// use to concate two array
// console.log(Array3);

// const Array3=[...Array1 , ...Array2]/*this is called as spred method easy to concat
//  different array its easy to concat one or more array*/
// console.log(Array3)

// const Array1=[1,2,3,4,[5,7,6],8,9,[10,11,12,13,14,[15,16,17]]]
// console.log(Array1.flat(2))/*in this case flat is used to just break the nesting of array
// here flat( is me wo number dalna hai jis level ka nesting torna hai yahaa par 2 is liye
//     dalee hai kyuki yaha par nesting ke andar nesting haiii) */
//     console.log(Array.isArray("prabhat"))
//     console.log(Array.from("prabhat"))// use to convert into string
//     console.log(Array.from({name:"prabhat"}))/* in the case of false statement it always 
//     return a null array here name is a key */

//     const num1=200
//     const num2=300
//     const num3=600
//     console.log(Array.of(num1,num2,num3))/* it basically used to convert multiple 
//     things into array which is very useful also result: [ 200, 300, 600 ] */

/* study on object */
// 1>singleton object
//Object.create

//2> object literal

//const Mykey= Symbol("key1")
// const Jsuser={
//     name:"prabhat",
//     "full_name":"ranjan",
//     [Mysymbol]:"key1",
//     Account:1752000100275990, 
//     Adhar_no:390798531500,
    //Email:"yprabhatkumar0@gmail.com"
//}
// console.log(Jsuser.name)// another method of printing any object
// console.log(Jsuser.full_name)// also used some where
// console.log(Jsuser["full_name"])// this method is superior
// console.log(Jsuser[Mysymbol])/* its not working there but this is the syntax user to clarify
// symbol for extra you can use MDN */
/* this is the basic of symbol we can use to understand */
// const pra= Symbol("key1")
// const prabhat={
//     Name:"prabhat",
//     Roll:"23518",
//     [pra]:"key1"
// }
// console.log(prabhat.Name)
// console.log(prabhat.Roll)
// prabhat.Roll=23521
// // Object.freeze(prabhat)/* this syntax is used for the freezing of any object that mean no
// // any further change in the object */
// prabhat.Roll=23547;
// console.log(prabhat[pra])
// console.log(typeof pra)/* this indicate the typeof pra which is a symbol sooo these 
// are the basic thing to learn about the symbol a vvi concept to learn*/ 
// console.log(prabhat)

// prabhat.greeting=function(){
//     console.log("hello world")
// }
// prabhat.greetingtwo=function(){
//     console.log(`my name is ,${this.Name}`)
// }
// console.log(prabhat.greeting())
// console.log(prabhat.greetingtwo())

// const p1={
//     Name:{
//         username:{
//         firstName:"prabhat",
//         lastName:"ranjan"
//         }
//     }
// }
// console.log(p1.Name.username.firstName);/* this is the nesting of object that mean object ke
// andar object */

// const p1={1:"prabhat",2:23518}
// const p2={3:"shalu",4:23547};
// //const p3={p1,p2}
// //const p3= Object.assign({},p1,p2)// this is useful model
// const p3={...p1,...p2}/* this method is very useful to concat two or more object
//  and a latest one which is also known as spread method */
// console.log(p3)

// console.log(Object.keys(p1))// it use to excess all the keyword
// console.log(Object.values(p1))// it is use to excess all the values
// console.log(Object.entries(p1))//[ [ '1', 'prabhat' ], [ '2', 23518 ] ] this type of result
// console.log(p1.hasOwnProperty('1'))// it is use to know even the keyword is present or not

// // const course={
// //      Name:"java in hindi",
// //      price:999,
// //      Teacher:"hitesh"
// // }
// //const {Teacher}=course
// //console.log(course.Teacher)

// // studying of function
// // function Name(){
// // console.log("p")
// // console.log("r")
// // console.log("a")
// // console.log("b")
// // console.log("h")
// // console.log("a")
// // console.log("t")
// // }
// // Name()
// // // addition of two number
// // function Addtwonumber(n1,n2){
// //        let r=n1+n2
// //     return r
// // }

// //  const r=Addtwonumber(3,4)
// //  console.log("result=",r)

//  // rest operator(...)
//  /* this operator is basically used to add many item in this format we donot need to declare 
//  number of argument */
// // function Addtocart(...price){
// //     return price
// // }
// // console.log(Addtocart(34,45,56))

// // passing of object to the function
//  const user={
//     Name:"prabhat",
//     Roll:23518
//  }
//  function random(anyobject){
//     console.log(`user name is ${anyobject.Name} and her Roll number is ${anyobject.Roll}`)
//  }
//  random(user);


// scope idea

// why we not use var


/*var is not use at any bcz it act like A global element its value in the block or 
outside the block can be easily acess which is not good . */
// var c=40;
// if(true){
//     let a=10;
//     const b=20;
//     var c=30;
//     console.log(a)
// }
//console.log(a)
// console.log(c)
// let a="prab"
// let b="hat"
// console.log(a+b)

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

// type of execution context in java script
/* there are two type of execution in javasript
1>global execution contex
2>function execution contex
3>Eval execution contex */

// if and else code

/* bad way to write a code of if and else condition */
// let a=50
// let b=50
// if(a==b)
//     console.log("you are in love"),console.log("BKL");

// conditional switch
// to copy any thing use shift+alt+downword
// const month=3
// switch(month){
//     case 1:
//         console.log("january")
//         break;
//     case 2:
//         console.log("februarty")
//         break;
//     case 3:
//         console.log("march")
//         break;
//     case 4:
//         console.log("january")
//         break;

//         default:
//             console.log("Invalid input")
// }

// falsy value
/* 0,-0,false,{empty},NaN,Bigint 0n,null,undefined */

// true
/*1,true,[empty] ,"0","false" ,{ },function(){} */

// nullish coallishing operator (??):null operator
/* it always return the first value except null and undefined*/
// let val1
// //val1=5??10
// //vali= null ?? 10
// vali= undefined ?? 10
// console.log(vali)

// ternary operator
// ternary operator
// ternary operator
//(condition)?true:false
// let a=20
// a>=10 ? console.log("a is greater than 10") : console.log("a is less than 10")

// table printing 
// for loop
// for(let i=1;i<=10;i++){
//     console.log(`Table for ${i}`)
//     for(let j=1;j<=10;j++){
        
//         console.log(`${i}*${j}=${i*j}`)
//     }
// }

// while loop

// let a=1;
// while(a<=10){
//     console.log(`value of A:${a}`)
//     a++
// }

// do while loop

// let a=1;
// do{
//     console.log(`value of A:${a}`);
//     a++
// }while(a<=10)

/* do while loop pahle work karta hai firr condition check karta hai on the exit point 
 so this is th ebasic fault of do while loop*/

// let a=11;
// do{
//     console.log(`value of A:${a}`);
//     a++
// }while(a<=10)


/* for of loop which generally used in array, string and many other  */
// let pra=[1,3,4,5,6]
// for(const i of pra){
//      console.log(`${i}`)
// }

// map 
/* map has unique value it never repeat her value and return value in a order
-- it never repeat the value-- 
--for of loop is  not for object--*/
// const map=new Map()
// map.set('in',"india")
// map.set('un',"united nation")
// map.set('fr',"france")
// map.set('in',"india")
// console.log(map);

// const map=new Map()
// map.set('in',"india")
// map.set('un',"united nation")
// map.set('fr',"france")
// map.set('in',"india")

// for(const [Key,value] of map){
//     console.log(Key ,':-',value)
// }

// for in loop
/*--- object are handle in for in loop--- */
// let Myobject={
//     js:"javascript",
//     c:"c language",
//     php:"prohabitate"
// }
// for(const Key in Myobject){
//     console.log(` ${Myobject[Key]}`);
// }
 
// let Myarray=[2,3,4,5]
// for(const Key in Myarray){
//     //console.log(Key)
//     console.log(Myarray[Key])/* to print element inside the array that mean this is used to
//     print the value indside the array and also for in is also use for object and aray */
// }

// let array=[3,4,5,6,7]
// array.forEach(function( val){
//   console.log(array);
// })

/*another way to declare to use  a forEach  */
// const coding=['java','c language','python','script']

// function pra(item){
//     console.log(item);
// }
// coding.forEach(pra)
 
/* array ke andar object ho taab acces through forEach loop */
/*const Myarray=[
    {
        LanguageName:"javascript",
        LanguageFile:"js"
    },
    {
        LanguageName:"java",
        LanguageFile:"java"
    },
    {
        LanguageName:"python",
        LanguageFile:"py"
    },

   
]
Myarray.forEach((item)=>{
    console.log(item.LanguageName);
})  */
/*  forEach loop donot return it value

const array=[1,2,3,4,5]
 const pranjal=array.forEach((item)=>{
    console.log(item)
})
console.log(pranjal)

its return undefined value

*/

/* in case of filter it return the value

const array=[1,2,3,4,5,6,7,8,9,10]
 const prabhat = array.filter((item)=>item>5)
 console.log(prabhat)

 //jaab scope use karenge to return likhna padega

 const array=[1,2,3,4,5,6,7,8,9,10]
 const prabhat = array.filter((item)=>{ return item>5
 })
 console.log(prabhat)

 */
 
 /*forEach ka use karke 
 
 const Myarray=[]
const Newarray=[1,2,3,4,5,6,7,8,9,10]
Newarray.forEach((item)=>{
    if(item>2){
        Myarray.push(item);
    }
})
console.log(Myarray)
*/


/* map also return values 

const array=[1,2,3,4,5,6,7,8,9,10]
const john=array.map((item)=>item+10)
console.log(john)
*/
/* we can use more than one operation at the same time like more than one map or filter 

const array=[1,2,3,4,5,6,7,8,9,10]
const Array=array
                 .map((item)=>item*10)
                 .map((item)=>item+5)
                 .filter((item)=>item>=45)

console.log(Array)

*/

/* reduce function 
const Myarray=[1,2,3,4,5]
const Newarray=Myarray.reduce(function(accu,curval){
    console.log(`accu:${accu} and curval:${curval}`)
    return accu+curval
},0)
console.log(Newarray)

// by default ye accu ko first element le ke chalta  hai

const Myarray=[1,2,3,4,5]
const Newarray=Myarray.reduce(function(accu,curval){
    console.log(`accu:${accu} and curval:${curval}`)
    return accu+curval
})
console.log(Newarray)



*/


/* add chart kaise kaam karta haii shoping apps kaa 
const Myarray=[
    {
        itemName:'phone',
        price:100
    },
    {
        itemName:'Bench',
        price:100
    },
    {
        itemName:'chair',
        price:100
    },
    {
        itemName:'pizza',
        price:100
    }
]
const addcart=Myarray.reduce((accu,item)=>accu + item.price,0)

console.log(addcart)

*/

let p=33;
console.log(typeof p);



