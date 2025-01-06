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
console.log(regularuser.fullname.username);

// meeging of objects
const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};

//const obj3={obj1,obj2};

// console.log(obj3);
const obj3=Object.assign({},obj1,obj2);
console.log(obj3);

