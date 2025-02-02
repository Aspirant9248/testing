/*
var a=19;
(a>15)?console.log("ready to fly"):console.log("you are child")      

console.log("5"-3);
console.log(2<12<5);   
console.log("20"+10+10);// 201010
console.log(20+"10"+10);// 201010
console.log(20+10+"10");// 3010            

for(j=1;j<=10;j++){
    console.log("table of"+`${j}`+":");
   for(i=1;i<=10;i++){
    console.log(`${j}`+"*"+`${i}`+"="+ j*i)
}
}     
let alpha=prompt('enter your name')
while(alpha%4==0){
    console.log("you entered valid number:")
}    
var year=2020;
if(year%4===0 && year%100!==0|| (year%400===0)){
    console.log("leap")
}else
console.log("not leap")    


for(var i=1;i<=5;i++){
    var pattern="";
    for(var j=1;j<=i;j++){
        pattern=pattern+" *";
    
    }
    console.log(pattern);
}      


var l=function alpha(name){
    console.log( "Hii "+ `${name} `+" welcome java script coure");
}
l("alpha-beta")     

 var result=(function sum(a,b){
   return a+b
})(10,5)
console.log(result) 

const prabhat=(str)=>{
    let rev="";
    for(let char=str.length-1;char>=0;char--){
        rev=rev+str[char]
    }
    if(str===rev){
        console.log("palindrome");
    }
    else
       console.log("not a palindrome");
}
prabhat("level")         


const z=["prabhat","adithya","rajjiv","suraj"]
for(let item  of z){
    console.log(item);
}
for(let alph in z){
    console.log(alph)
}

z.forEach((curElem,Index,arr)=>{
    console.log(`${curElem} ${Index}`)
})          

const z=["prabhat","adithya","rajjiv","suraj"]
  z.forEach((el,ind,arr)=>{
    console.log(`${el} ${ind}`);
});
const z=["prabhat","adithya","rajjiv","suraj"]
     const d=z.forEach((el,ind,arr)=>{
    console.log(`${el} ${ind}`);
});// ye wala work nahi karega kyuki forEach function globali wahar nahi jaata hai    


const z=["prabhat","adithya","rajjiv","suraj"]
   const q=z.map((el,ind,arr)=>{
    return (`${el} ${ind}`);
});
console.log(q);// map kaa acess globali hota haii        

const array=[1,2,3,4,5,6]
console.log("a="+array.slice(0,4))// ye array me change nahii karta haii
console.log(array)
console.log("b="+array.splice(0,3))// ye new array return karta haii 
console.log(array)     

const z=[1,2,3,4,5,6,7,8]
const l=z.map((el,ind,pura)=>{
console.log(`${el} ${ind}`)
})                                        
const z=[1,2,3,4,5,6,7,8]
const l=z.forEach((el,ind,pura)=>{
console.log(`${el} ${ind} ${pura}`)
})         

const z=["prabhat","adithya","rajjiv","suraj"]
     const d=z.map((el,ind,arr)=>{
    return (`${el} ${ind}`);
});
console.log(d) // yee value return karta haii  

const z=["prabhat","adithya","rajjiv","suraj"]
     const d=z.forEach((el,ind,arr)=>{
    return (`${el} ${ind}`);
});
console.log(d) // value return nahi karta haii     

const z=[1,2,4,9,3,4,5,6,7,8]
const k=z.find((l)=>{
    return l>4;
})
console.log(k)// ye fist wale ko parta hai condition check kar return kr deta haii
                     
                                                             

const z=[1,2,4,9,3,4,5,6,7,8]
const k=z.filter((l)=>{
    return l>4;
})
console.log(k)// ye saree value ko return karta hai in form of array  

const z=[1,2,4,9,3,4,5,6,7,8]
const k=z.filter((l)=>{
    return l!==4;
})
console.log(k)                

const z=[
    {name:"parle" ,price:200},
    {name:"product1" ,price:300},
    {name:"product2" ,price:600},
    {name:"product3" ,price:800},
    {name:"product4" ,price:200},
    {name:"product5" ,price:100},
]

const k=z.filter((product,price)=>{
   return price<=400// object problem solving
})
console.log(k)                 

const z=[1,2,3,4,5,6];
const k=z.map((num)=>{
if(num%2===0)
   return num*num;
}).filter((num)=>
    num!==undefined
);
console.log(k);    

let z="hitesh chaudhri"
console.log(z.indexOf('chaudhri'))
let p=Array.from(z)
console.log(p)

p.forEach((el,ind)=>{
console.log(`${el} ${ind}`)
})                               

let z=[1,2,3,4,3,3,5,67,8]
console.log(z.indexOf(3))
console.log(z.lastIndexOf(3))              

let z="prabhat you are a good boy"

let k=z.includes("good")
console.log(k);
let n=z.startsWith("prabhat")
console.log(n)
let a=z.endsWith("boy")
console.log(a)
                                      
   let k="hello alok is the best guy whome i meet alok you are the best"
   let z=k.replace("alok","prabaht")
   console.log(z) 

   let k="hello alok is the best guy whome i meet alok you are the best"
   let z=k.replaceAll("alok","prabaht")
   console.log(z)          
   let k="hello alok is the best guy whome i meet alok you are the best"
   let z=k.charAt(1)
   console.log(z)     
                            
   let k="hello alok is the best guy whome i meet alok you are the best"
   let z=k.charCodeAt(1)
   console.log(z)          
   
   let k="prabhat"
   let r=k.at(-1)
   console.log(r)       

   console.log(String.fromCharCode(122));
   console.log(String.fromCharCode(97));// use to convert digit in char
   console.log("a".charCodeAt(0));
   console.log("D".charCodeAt(0))// use to conver string into digit  

   let pra="prabhat ranjan"
   console.log(pra.includes("d"));

   let varb="aeiou";
   for(let char of varb){
    console.log(char)
   }
   let int ="aeiou";
   for(let al in int ){
    console.log(al)
   }                   


   console.log(Math.round(4.5))
   console.log(Math.abs(-119))
console.log(Math.trunc(4.9))
console.log(Math.floor(4.9))
console.log(Math.trunc(-12.9))
console.log(Math.floor(-12.9))
                                  
console.log(2 **4)
console.log(Math.log(2))        

console.log(Math.round(Math.random()*100));    
*/

var otp="1234056789"
var msg=""
var OTP=()=>{
for(var i=0;i<4;i++){
 msg+=otp[Math.floor(Math.random()*10)]
}
return msg;
}  

var  al = ()=>{
    let r = OTP();
    console.log(r);

} 
click.addEventListener('click',al);  
 


