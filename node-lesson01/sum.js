

/* ‘Simple mathematics’ program in node.js */
console.log(`Assignment1: Sum of two numbers in Node.js`);

/* To go with this solution, I read many forums and websites, they have similar answers and I tried to mix with what I thought would work, but I have to be honest, I couldn't make it without the help of forums, because I wasn't sure if the task*/


//Store them in variables
//Add the variables
//Print the result exam: $node sum.js 20 10
const myArgv = process.argv.slice(2);
let sum = 0;

myArgv.forEach((val) => {
  sum+= Number(val); 

});