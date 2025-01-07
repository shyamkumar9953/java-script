
const user={ // this is object
    username:"shyam",
    price:99,
    welcome:function(){
        console.log(this.username);
        console.log(this);
        
    }
}
// user.welcome();
// user.username="ram kumar"; // cnage the user name now print the current user name 
// user.welcome();
// console.log(this); // gives {} empty object 


// function addtwo(num1,num2){
//     const name="shyam";
//     console.log(this.name);
// }
// addtwo(2,3);


// const addtwo=function (num1,num2){
//     const name="shyam";
//     console.log(this.name); // this key word not working
// }
// addtwo(3,4);


// THIS IS ARROW FUCTION

// const addtwo = (num1,num2) =>{
//      return num1+num2;
// }

// const addtwo = (num1,num2) => num1+num2; // thise is also type

//const addtwo = (num1,num2) => (num1+num2); // thise also a type 

const addtwo = (num1,num2) => ({username:"shyam kumar"}); // return an object

console.log(addtwo(3,4));
