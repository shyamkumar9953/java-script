// const tinderuser=new Object(); // thise is a creat an object in singketon
const tinderuser={};
tinderuser.email="shyam@gmail.com";
tinderuser.name="shyam";
tinderuser.isloggedin=false;
// console.log(tinderuser);


// nesting of objects
const regularuser = {
    email: "shyam@gmail.com", // Fixed the typo in the email address
    fullname: {
        username:{
        firstname: "shyam", // Renamed property to 'firstname'
        lastname: "kumar",  // Renamed property to 'lastname'
        }
    }
};
// console.log(regularuser.fullname.username);

// meeging of objects
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

//const obj3={obj1,obj2};

// console.log(obj3);
const obj3=Object.assign({},obj1,obj2);
// console.log(obj3);


// array of objects
const user=[
    {
        id:"1",
        email:"shyam@gmail.com",
    },
    {
        id:"2",
        email:"shyam@gmail.com",
    },
    {
        id:"3",
        email:"shyam@gmail.com",
    }
]
// console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));

console.log(tinderuser.hasOwnProperty('isloggedin')); // check wheather is present in object 

// api in json formate
// its like a object  
{
    "name":"shyam",
    "email":"shyam@gmail.com"'
    "id":"1234",
}
// its like also array of objects
[
    {},
    {},
    {},
]

