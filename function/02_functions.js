// node function/02_functions.js
function addprice(val1,val2,...num1){ // ... -> rest function(accumulate in one array )
    return num1;
}
// console.log((addprice(200,300,500,600,700,800)));


// object
function handleobject(anyobject){
    console.log(anyobject.username,anyobject.email);
}
const user={
    username:"shyam@123",
    email:"shyam@gmail.com",
    fullname:"shyam kumar",
}
// handleobject(user);


const myarray=[100,200,300,400];
function handlarray(arr){
    return arr[3];
}
// console.log(handlarray(myarray));
console.log(handlarray([100,200,300,400]));
