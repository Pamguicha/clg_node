//Task1
/* ‘Simple mathematics’ program in node.js */
console.log(`Assignment1: Sum of two numbers in Node.js`);

//Task2
//Fetch the arguments
//Store them in variables
//Add the variables
//Print the result exam: $node sum.js 20 10

//Solution
/* To go with this solution, I tried several attempts, using functions, but nothing works, I ended reading many forums and websites and I found they have similar answers. I tried to mix it with what I thought would work, but I have to be honest, I couldn't make it without the help of forums */
const myArgv = process.argv.slice(2);
let sum = 0;

myArgv.forEach((val) => {
  sum+= Number(val); 

});

console.log(sum);