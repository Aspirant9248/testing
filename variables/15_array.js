const array=["prabhat","rajnish"]
const array1=["prabhat","rajnish"]
array.push(array1)//use to catinate mean to add
console.log(array)// to visit the hole array
console.log(array[2][1])//to visit a particular element of array
// we can also use array.concat(array1)

const array3=[1,2,3,[4,5,6,[7,8,9]]]
const array4=array3.flat(infinity)
console.log(array4)



const num1=100
const num2=200
const num3=300
console.log(Array.of(num1,num2,num3))// a should be in capital letter



 /*------------------------------------------------------------------------------------ */
 // second attemp to learn javascript

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

//  const Array1=[1,2,3,4,[5,7,6],8,9,[10,11,12,13,14,[15,16,17]]]
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
