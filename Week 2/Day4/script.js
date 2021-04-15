// function fntName(parameters){
//     statements
//   }

//   function sayHi() {
//       console.log("Heloooo");
//       console.log("How are you?");
//   }
// function userInfo1() {
//     fname = prompt("What is your name?");
//     fage = prompt("What is your age?");
// }

// userInfo1();

// function userInfo1(name, age) {
//     console.log("My name is " + name + " my age is " + age)
// }
// let julien = "Julien";
// userInfo1(julien, 26);

// let fname = prompt("What is your name ?");
// let fage = prompt("What is your age?");

// function userInfo2(fname, age) {
//     console.log("My name is " + fname + " my age is " + age);
// }
// userInfo2();
// //Without parameter 
// function calculus () {
//     console.log(1+2)
// }

// calculus()

// //With parameter
// function calculus (a,b) {
//     console.log(a+b)
// }

// calculus(2,3)
let values = [0.25, 0.10, 0.05, 0.01]; 
function changeEnough(change, itemCost) {
  var sum = 0;
  for(let i = 0; 1 < change.length; i++){
      sum += change[i] * values[i];
  }
  if (sum > itemCost){
      console.log(true);
} else {
    console.log(false);
}
}

changeEnough([2, 0, 20,], 5.00);