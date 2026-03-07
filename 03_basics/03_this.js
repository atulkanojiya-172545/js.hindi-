const user = {
  username: "Atul",
  price: 999,
  welcomemessage: function () {
    console.log(`${this.username} , welcome to myWebsite`);
    console.log(this);
  },
};
/*
user.welcomemessage()
user.username = "Shobhit"

user.welcomemessage()

console.log(this);
*/
// arrow function
const chai = () =>{
    let username = "atul"
    console.log(this); // op{}
}/*
chai()
const addtwo = (num1, num2) =>{
    return num1+num2
}
console.log(addtwo(3,5))*/
const addtwo = (num1, num2) =>  (  num1+num2)

console.log(addtwo(3,5))

