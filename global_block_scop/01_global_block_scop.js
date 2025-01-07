

if(true){
    let a=10;
    const b=20;
    var c=30;
}
// console.log(c); // c is gives value out of their scop so  it is very bad thats by i have less use of var

// for loop in java script

const arr=[100,200,300,400];
for(let i=0;i<arr.length;i++){
    const ele=arr[i];
    // console.log(ele);

}



// nested function
function one(){
    const username="shyam";
    function two(){
        const email="shyam@123";
        console.log(username); 
    }
    // console.log(email);
    two();
}
//one();





// 

addone(5); // we can access before declaration 
function addone(num){
    return num+1;
}
//addone(5);
// console.log(addone);

 // addtwo(5);  we can not acces before the declaration 
 const addtwo=function(num){
    return num+2;
 }
 addtwo(5)
 
