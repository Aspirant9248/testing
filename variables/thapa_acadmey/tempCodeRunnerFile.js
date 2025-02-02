function user(name,password,address){
    this. name=name,
    this. password=password,
    this. address=address
    this.alpha=function(){
        console.log(`welcome:${user.name}`);
    }
     return this
 }
const userOne=user("prabhat_ranjan","prabhat@1234","manoharpur")
console.log(userOne)
console.log(userOne.constructor);
