//todo
/* 1- Create a node project folder with a student project name. DONE
2- Verify that the package.json file exists. DONE
3- Use module.exports to export an array of students.DONE
4- Assign the parsed content to a variable student DONE
5- The result should be displayed in the terminal.
*/
const students = require('./students');

students.forEach((student) => {
  if (student.firstName === "John") {
    student.age = 23;
  }
});

for (var i=0; i<students.length; i++) {
 if(students[i].hasOwnProperty("age")) {
console.log(`${students[i].firstName} has an age property: true`);
 } else {
console.log(`${students[i].firstName} has an age property: false`);
 } 
}
    
process.exit(); // use to stop the loop and Node is terminated.


