// node iteration/ones.js

// for(let i=0;i<10;i++){
//     console.log(i);  
// }

// for(let i=0;i<10;i++){
//     for(let j=0;j<10;j++){
//         if(j==5){
//             break;
//         }
//         console.log(j);
        
//     }
//  }
    
// const coding=["c++","js","py","swift","ru"];
//  coding.forEach((item)=>{
//     console.log(item);
    
//  })

//const nums=[1,2,3,4,5,6,7,8,9,10];
// const mynewnums=nums.filter((num)=>{
//     return num>2;
// });
// console.log(mynewnums);

// const arr=[];
// nums.forEach((num)=>{
//     if(num>2){
//         arr.push(num);
//     }
// })
// console.log(arr);

// const arr=[1,2,3,4,5,6,7,8,9];
// const newnums=arr.map((num)=>{return num+10});
// console.log(newnums);


// chaining 
// const arr=[1,2,3,4,5,6,7,8,9];
// const newarr=arr.map((num)=>{return num*10}).map((num)=>{return num+1});

// console.log(newarr);


// reduce function
// const arr=[1,2,3,4,5,6,7,8,9];

//let initial=3;
// const sum=arr.reduce(function(acc,currval){
//     return acc+currval
// },initial);

// const sum=arr.reduce((acc,currval)=>{
//     return acc+currval
// },initial);
// console.log(sum);


// array of objects
const arr=[
    {
        name:"dev course ",
        price:999,
    },
    {
        name:"mobile course ",
        price:599,
    },
    {
        name:"dsa course ",
        price:1299,
    },{
        name:"data scince course ",
        price:199,
    }
]
const maoneytopay=arr.reduce((acc,item)=>{
    return acc+item.price
},0);

console.log(maoneytopay);
