// let open = false;
// let usersNumber = '';
// let computerNumer = "";

// let playTheGame = function() {
// if  (open = confirm("Do y want to play?")) {
//     let usersNumber = prompt("Enter number between 0 and 10!");
//     isNaN.usersNumber
//         alert("It is not a number!")
//         if (users.Numbers > 11); {
//             alert("Sorry it is not good number!")
//         }
// } 
// }


  

// if  (usersNumber >=  10); {
//     prompt("Try to guess another number!")
// };

// let open = false;
// let usersNumber = '';
// let computerNumer = "";

// let playTheGame = function() {
// if  (open = confirm("Do y want to play?")) {
//     let usersNumber = prompt("Enter number between 0 and 10!");
//     if (isNaN(usersNumber) === true) {
//         alert("It is not a number!")
//     } else if (usersNumber > 11) {
//         alert("Sorry it is not good number!")
//     } else {
//         console.log(usersNumber)
//     }

// } 
// }

// let usersNumber = '';
// let computerNumber = "";

// let playTheGame = function() {
// if  (confirm("Do y want to play?") === true) {
//     let usersNumber = prompt("Enter number between 0 and 10!");
//     if (isNaN(usersNumber) === true) {
//         alert("It is not a number!")
//     } else if (usersNumber > 11) {
//         alert("Sorry it is not good number!")
//     } else {
//         console.log(usersNumber)
//     }

// } 
// }



// function test(userNumber,computerNumber);{
//     for (i = 1; i < 3; i++) {
// if (userNumer = computerNumber) {
//     alert('WINNER');

// } else if ( userNumer > computerNumber) {
//     prompt("Try another number!")
// }
//     }
    

// }

// let usersNumber = '';
// let computerNumer = "";

// let playTheGame = function() {
// if  (confirm("Do y want to play?") === true) {
//     let usersNumber = prompt("Enter number between 0 and 10!");
//     if (isNaN(usersNumber) === true) {alert("It is not a number!")} 
//     else if (usersNumber > 11) {alert("Sorry it is not good number!")}
//     else {computerNumber = Math.round(Math.random() * 10); console.log(computerNumber)}
//  }
// else {alert("“No problem, Goodbye”")} 
// }

function playTheGame() {
    if  (confirm("Do y want to play?") === true) {
        let usersNumber = prompt("Enter number between 0 and 10!");
        if (isNaN(usersNumber) === true) {
            alert("It is not a number!")
            } 
        else if (usersNumber > 10) {
            alert("Sorry it is not good number!")
            }
        else {
            computerNumber = Math.round(Math.random() * 10);
            console.log(computerNumber);
            let res = test(usersNumber,computerNumber);
            }
     }
    else {alert("“No problem, Goodbye”")}
    }

function test(usersNumber,computerNumber){
    
    for (i = 1; i <= 3; i++) {
        if (usersNumber === computerNumber) { 
            alert("Winner!");
            return 1;
        }
        else if((usersNumber - computerNumber) > 0) {
            alert("Your number is bigger then the computer’s, guess again");
            computerNumber = prompt("Enter number between 0 and 10!");
        }
        else {
            alert("Your number is smaller then the computer’s, guess again");
            computerNumber = prompt("Enter number between 0 and 10!");
        }
    }
        alert("Out of chances");
        return 0;
}