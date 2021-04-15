// 1. Create a structured html file linked to a js file

// 2. Write a JS function that takes a parameter: myAge

// 3. Console.log the age of my mum and my dad (my mum is twice my age, and my dad is 1.2 the age of my mum)

// 4. Call the function

// function parentsAge(myAge) {
//     let mummyAge = myAge*2;
//     let dadAge = mummyAge * 1.2;
//     console.log("My mum is " + mummyAge + " My dad is " + dadAge);
// }
// parentsAge(26);
// // 4. Call the function


// function age(myAge){
//     myAge = prompt("What is my age?");
//     console.log("My mom is " + myAge *2 + "my dad's age is" + momAge *1.2);
// }
// age();


// function getParentAge(MyAge) {
//     let mummyAge = myAge*2;
//     let dadAge = mummyAge*1.2;
//     return "My mum is " + mummyAge + " My dad is " + dadAge.toFixed();
    
// }
// let finalAge = getParentAge(26);
// console.log(finalAge);

// var fname = "SHY";
// var fname = "SHY";

// const logIn = (username, password) => "my username is " + username + " and my password" + password;
// console.log(user("mikemike", "********"));
function sayHi() {
    console.log("Hello I am Daniel");
}

let person = {
    // key: value
    fname: "Daniel",
    hair_Color: "Blond",
    size_Of_nose: "Jewish",
    address: "Somewhere",
    sayHi: sayHi(), 
}
console.log(person.hair_Color);
console.log(person.sayHi)