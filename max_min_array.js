const number=[1,2,3,4,5,1];
console.log(Math.min(...number));  // minimum
console.log(Math.max(...number));  // maximum

//  OR

const final=number.reduce((a,b)=>{return a>b ? a : b })   // Maximum
console.log(final);

const final=number.reduce((a,b)=>{return a<b ? a : b })   // Minimum
console.log(final);
