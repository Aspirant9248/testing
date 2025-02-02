const array=[1,2,3,4,5]
console.log(array)

array.push(6)//to add any element in array
console.log(array)
const array1=[6,7,8,9]

array1.pop()//to reduce one element from array from last
console.log(array1)

array1.unshift(9)// to add element from first element
console.log(array1)
array1.unshift(10)
console.log(array1)

const array2=[0,9,8]//to remove first  element
array2.shift()
console.log(array2)

console.log(typeof(array2))//tells about type

console.log(array2.includes(9))//teels that the  element present or not

 const array3=[5,7,6,4]
console.log(array3.indexOf(4))// it teels about the position

const array4=array3.slice(0,2)// give you slice of array where upper index element is missing
console.log("A",array3)
console.log(array4)

const array6=[3,5,6,7,9]
console.log("B",array6)
const array5=array6.splice(0,2)
console.log(array5)

const array7=[3,5,6,7,9]
const newarray7=array7.join()//to remove string to normal
console.log(typeof(array7))
console.log(newarray7)
console.log(newarray7[4])// it return element 
console.log(newarray7[3])// in this it return comma(,) it mean it treat cooma as element


/*------------------------------------------------------------------------------------- */
// second attemp to just learn javascript

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