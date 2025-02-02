//two type of data type
//1>primitive data type:basically call by value
//string,number,boolean,null,undefined,symbol,big int 


//2>non primitive data type

//array,object,function,
//  '':iske aandar values barabar nahi hoti '123'!='123'
//all non primitive data type is object
let a='12'
let b='12'
console.log(a==b)
let c=Symbol('123')
let d=Symbol('123')
console.log(c==d);//symbole ke case me dono aalag hote hai
console.log("2"=="02")//both are not equal