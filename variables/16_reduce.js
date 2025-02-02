// use to  make calculator in case of single variable
// addition

// let a=[2,3,4,56,7]
//  let d=a.reduce((m,n)=>{
//     return m+n;
    
// });
// console.log(d)

//multiplication

// let a=[2,3,4,56,7]
//  let d=a.reduce((m,n)=>{
//     return m*n;
    
// });
// console.log(d)

// for max
// let a=[2,3,4,56,7]
//  let d=a.reduce((m,n)=>{
//     return m>n?m:n;
    
// });
// console.log(d)


//taking input and form an array
// let n=prompt("enter number:")
// let array=[];
// for(let i=1;i<=n;i++){
//     array[i-1]=i;
// }
// console.log(array)
// let p=array.reduce((m,n)=>{
//     return m+n;
// });
// console.log(p)

//factorial 
/* 
let n=prompt("enter number:")
let array=[];
for(let i=1;i<=n;i++){
    array[i-1]=i;
}
console.log(array)
let p=array.reduce((m,n)=>{
    return m*n;
});
console.log(p)

*/


// it is use to just taking input from keyword

/*let z=prompt("enter number:");
  array=[];
for(let i=1;i<=n;i++){
    array[i-1]=i
}
console.log(array)
*/

/*----------------------------------------------------------------------------------- */
/* ------------second attemp to learn  javascript ------- */

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