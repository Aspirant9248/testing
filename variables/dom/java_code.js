// // console.log("hello world")
// //alert("some thing dangerous")

// //event function
// let click=document.querySelector("div");
// click.onmouseover=()=>{
//     console.log("your java button working")
// }

// let modeBtn=document.querySelector("#mode");
// modeBtn.addEventListener("click",()=>{
//     console.log("you are trying to change mode");
// });

// // element visting through java script

// // to change color
// document.body.style.background="red"
// //to visit through id d
// document.getElementById("heading")
// // to visit through class
// document.getElementsByClassName("heading")

//let h1=document.querySelector("h1");
//let h1=h1.innerText("hellow world")


// to chaange the teext
// console.dir("h1")
// h1.innerText="prabhat the great man"


// to excess a div

// let divs=document.querySelectorAll(".body");
// console.log(divs[0])
// divs[0].innerTrext="priyanshu"


// to create button
// let newBtn=document.createElement("button");
// newBtn.innerText="click me!";

// newBtn.style.color="white";
// newBtn.style.backgroundcolor="red";
// document.querySelector("body").prepend(newBtn);


// button to change the mode of a display
// let modeBtn=document.querySelector("#mode");// her emode is a id buton
// let currMode="light";

// modeBtn.addEventListener("click",()=>{
//    if(currMode==="light"){
//     currMode="dark"
//     document.querySelector("body").style.background="black"
//    }
//    else{
//     currMode="light"
//     document.querySelector("body").style.background="white"
//    }
//    console.log(currMode);

// })

let modeBtn=document.querySelector("#cmode");// her emode is a id buton
let currMode="light";

modeBtn.addEventListener("click",()=>{
   if(currMode==="light"){
    currMode="dark"
    document.querySelector("body").style.background="red"
   }
   else{
    currMode="light"
    document.querySelector("body").style.background="green"
   }
   //console.log(currMode);

})

