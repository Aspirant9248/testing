// const jsuser={
//     "name":"prabhaht",
//     age:18,
//     loacation:"delhi",
//     email:"prabhat1234@gmail.com",
//     incompany:"false"
// }
// console.log(jsuser.name)// this is the general method 
// console.log(jsuser["name"])//this is the valid method or resion for visit


// const jsuser1={
//     "name":"prabhaht",
//     age:18,
//     loacation:"delhi",
//     email:"prabhat1234@gmail.com",
//     incompany:"false",
  
// }
// Object.freeze(jsuser1)// this is use to freeze the data
// jsuser1.name="divyanshu"
// console.log(jsuser1.name)

// jsuser1.g=function(){
// console.log("bra");
// }
// console.log(jsuser1.g);

//  const c= function(){
//     console.log("prabhat");
// }
// console.log(c());

/*--------------------------------------------------------------------------------------- */
// second try to learn javascript

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

//const p1={1:"prabhat",2:23518}
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

// const course={
//      Name:"java in hindi",
//      price:999,
//      Teacher:"hitesh"
// }
//const {Teacher}=course
//console.log(course.Teacher)

// studying of function
// function Name(){
// console.log("p")
// console.log("r")
// console.log("a")
// console.log("b")
// console.log("h")
// console.log("a")
// console.log("t")
// }
// Name()

//  addition of two number
// function Addtwonumber(n1,n2){
//        let r=n1+n2
//     return r
// }

//  const r=Addtwonumber(3,4)
//  console.log("result=",r)

 // rest operator(...)
 /* this operator is basically used to add many item in this format we donot need to declare 
 number of argument */
// function Addtocart(...price){
//     return price
// }
// console.log(Addtocart(34,45,56))

// passing of object to the function
//  const user={
//     Name:"prabhat",
//     Roll:23518
//  }
//  function random(anyobject){
//     console.log(`user name is ${anyobject.Name} and her Roll number is ${anyobject.Roll}`)
//  }
//  random(user);

