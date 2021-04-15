//Exercise 1
// Create an array called colors where the value is a list of your favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// let colours = [ 'Blue', 'Red', 'Orange'];
// console.logcolours(i)
// // colours.forEach(element =>console.log(element));



// Exercise 1


// let colors = ["blue", "yellow", "red"];
// let nms = ["st", "nd", "rd"];

// for (let i in colors) {
//    console.log("My "+ (Number(i)+1) + nms[i] + " choice is " + colors[i]);
// }


 // Exercise 2
 // 1. Write code to remove “Greg” from the people array.
 // 2. Write code to replace “James” to “Jason”.
 // 3. Write code to add your name to the end of the people array.
 // 4. Using a loop, iterate through the people array and console.log each person.
 // 5. Using a loop, iterate through the people array and after you console.log “Jason” exit the loop.
 // 6. Write code to make a copy of the people array using slice. The copy should NOT include “Mary” or your name.
 // 7. Write code that console.logs Mary’s index. take a look at indexOf on google.
 // 8. Write code that gives the indexOf “Foo” (this should return -1). Why does it return -1
 // 9. Create a variable called last which value is the last element of the array.

// let people = ["Greg", "Mary", "Devon", "James"]
// people.shift(); // 1


// for (let men in people) {
//     if (people[men] == "James") {
//         // console.log(men);
//         people.splice(men,1,"Jason")
//     }; // 2
// }
// people.push("Michael"); // 3
// for (let i in people) {
//     console.log(people[i]) // 4

// };
// for (let men in people) {  console.log(people[men]);
// if (people[men] == "Jason") {
//     break;
// };
    
// }; // 5

// let newPeople = people.slice(1,3);
// console.log(newPeople); // 6


// let index = people.indexOf("Mary");
// console.log(index); // 7

// let index1 = people.indexOf("Foo");
// console.log(index1); // 8

// var last = people.indexOf("Michael");
// console.log(last); // 9


// Exercise 3

// Prompt the user for a number, while the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
// Hint : Check the data type you receive from the prompt (ie. typeof method)
 var i = prompt("Choose a number!")
 while (i < 10) {
     i = prompt ("Choose another number");
     i++
 }