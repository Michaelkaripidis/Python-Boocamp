


// function OurFunc(Str0) {
    
//     let Str = Str0.split(",");
    
//     for (i = 0; i < Str.length; i++) {
//         console.log(Str[i].trim());
//     } 
// } 

// //let ourString = prompt("Prompt for several words separated by commas");
// let ourString = "Hello, World, in, a, frame";
// OurFunc(ourString);



// function OurFunc(Str0) {
    
//     let Str = Str0.split(",");
    
//     let mword = 0;

//     for (i = 0; i < Str.length; i++) {
//         let mword0 = Str[i].trim().length;
//         if (mword < mword0) {
//             mword = mword0;
//         }
//     } 
//     console.log(mword);
// } 

// //let ourString = prompt("Prompt for several words separated by commas");
// let ourString = "Hello, World, in, a, frame";
// OurFunc(ourString);

// function OurFunc(Str0) {
    
//     let Str = Str0.split(",");
    
//     let mword = 0;

//     for (i = 0; i < Str.length; i++) {
//         let mword0 = Str[i].trim().length;
//         if (mword < mword0) {
//             mword = mword0;
//         }
//     } 
//     mword = mword + 4;

//     console.log('*'.repeat(mword));
//     for (i = 0; i < Str.length; i++) {
//         console.log("* " + Str[i].trim() + " *");
//     } 
//     console.log('*'.repeat(mword));
// } 

// //let ourString = prompt("Prompt for several words separated by commas");
// let ourString = "Hello, World, in, a, frame";
// OurFunc(ourString);

function OurFunc(Str0) {
    
    let Str = Str0.split(","); 
    
    let mword = 0;

    for (i = 0; i < Str.length; i++) {
        let mword0 = Str[i].trim().length;
        if (mword < mword0) {
            mword = mword0;
        }
    }

    console.log('*'.repeat(mword + 4));
    for (i = 0; i < Str.length; i++) {
        console.log("* " + Str[i].trim() + ' '.repeat(mword - Str[i].trim().length) + " *");
    } 
    console.log('*'.repeat(mword + 4));
} 

//let ourString = prompt("Prompt for several words separated by commas");
let ourString = "Hello, World, in, a, frame";
OurFunc(ourString);
