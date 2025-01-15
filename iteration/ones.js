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

const nums=[1,2,3,4,5,6,7,8,9,10];
// const mynewnums=nums.filter((num)=>{
//     return num>2;
// });
// console.log(mynewnums);

const arr=[];
nums.forEach((num)=>{
    if(num>2){
        arr.push(num);
    }
})
console.log(arr);

