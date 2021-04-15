// if (expression) {
//     Statement(s) to be executed if the expression is true
//  }
// +prompt makes your value being a number and not string!
// let age = +prompt("How old are you?");
// console.log(typeof(age))

// if (age > 100) {
//     console.log('You are older than Prince Phillio')
// } else if (age > 5);
// console.log("You are baby go to mummy")
// else {
//     console.log("You still have a lot to go on my friend !")
// }

// Using if without else

// let isTeacher = confirm('Are you are teacher');

// console.log("I am at Dev Inst");

// if (isTeacher) {
//     console.log("And you are a Teacher");
    
// }
// let age = +prompt("How old are you?")

// if (age < 18) {
//     console.log('Sorry you are too young to drive')
// }
// else if (age == 18) {
//     console.log("Congratulation on your first year of driving. Enjoy the ride!")
// } else   {
//     console.log("You are the king");
// // }

// let fruit = prompt("What are you looking for Mr/Ms ?").toLowerCase();

// switch (fruit) {
//   case 'oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'mangoes':
//       console.log("mangoes are delicios");
//   case 'papayas':
//     console.log('mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log('Sorry, we are out of ' + fruit + '.');
// }

// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }
let login = {
    username: "Michael",
    password: "*****",
};
let login2 = {
    username: "Mishel",
    password: "*******",
    favorite_colours: ['blue', 'red', 'green']
};
let database = [login, login];
let newsfeed = [
    {
        username: "Michael",
        timeline: "5 years",
    },
    {
        username: "Mishel",
        timeline: "4 years",
    },
    {
        username: "bobo12",
        timeline: "3 years",
    }
]
console.log(login.username);
console.log(login.password);
console.log(login.database);