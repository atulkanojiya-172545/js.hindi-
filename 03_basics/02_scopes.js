// elements declared in this has a global scope 
let a  =786
if(true){
let a  = 10
const b = 20
var c  = 30
//console.log("INNER :", a);
}
//console.log(a);
//console.log(b);
//console.log(c);
function one(){
    const username  = "hitesh"
    function two(){
        const website = "Youtube "
        console.log(username);
    }
   // console.log(website);
    
   // two()
}
//one()
if(true){
    const username = "hitesh"
    if(username=== "hitesh"){
        const website = " youtube "
        console.log(username+ website );
    }

}
console.log(addone(8))
function addone(num){
    return num+1
}


