//two type of memory


//1>stack
//primitive data type user this type of meomery
//in this type only copied are change
let a="prabaht"
let b=a
console.log(a)
console.log(b)

b="hitesh"
console.log(a)
console.log(b)//value change in copy only


//2>heap
//non primitive data type use these type of memory
//in this type original memory location are changed
let c ={
    name:"prabhat",
    mail:"prabhat@gmail.com"
}
let d=c;
d.mail="yarunendra@gmail.com"
console.log(c.mail)
console.log(d.mail)
d.mail="ysureshkumar@gmail.com"//it change the original copy
console.log(c.mail)
console.log(d.mail)

// second atemp to lern java script
let m="prabhat"
let n=a;
b="sachin"
console.log(m)
console.log(n);

let boil={
    name:"prabhat",
    salary:45000

}
boil.name="sachin"
console.log(boil.name);
/* the major difference between stack and the heap memory is that in case of stack
 memory it change only in a copy but in case of heap it change at the main part
 or at the refernce point.
*/