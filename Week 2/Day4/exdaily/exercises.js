// Exercise 1

// function checkDriverAge() {
//     var age = prompt("What is your age?")
//     return age; 
//     }

// let age = checkDriverAge();

// if (age < 18){
//     console.log("Sorry you are too young to drive this car")
// } else if (age > 18) {
//     console.log("Powering On.Enjoy the ride!")
// }
// else {
//     console.log("Congratulations on your first year of driving");
// }
// Exercise 2


    // function changeEnough(Change,SumToPay) {
    //     if ((0.25 * Change[0] + 0.1 * Change[1] + 0.05 * Change[2] + Change[3] * 0.01) >= SumToPay) {
    //         return true;}
    //     else {
    //         return false;}
    //     }
    
 
// Exercise 3
// function FindMultiples(n) {
//     let result = 0;
//     for (i = 1; i < 500; i++) {
//         if (i % n == 0) {
//             result = result + i;
//             console.log(i);
//           }
//     }
//     return result;
// }

// let n = 25;
// console.log(FindMultiples(n));

// Exercise 4

// function NewItemInTheBasket(Basket) {
//     let newitem = prompt ("Type an item");
//     if (newitem in Basket) {
//         return true}
//     else {
//         return false}
// } 
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// console.log(NewItemInTheBasket(amazonBasket));

// function NewItemInTheBasket(Basket) {
//     let newitem = prompt ("Type an item");
//     if (newitem in Basket) {
//         return true}
//     else {
//         return false}
// }
//
//
//
// let amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }
// console.log(NewItemInTheBasket(amazonBasket));

// function NewItemInTheBasket(Basket) {
//     let newitem = prompt ("Type an item");
//     if (newitem in Basket) {
//         return true}
//     else {
//         return false}
// }
// //
// //
// //

// let alibabaBasket = {
//     glasses: 3,
//     books: 4,
//     floss: 75
// }

// let result = NewItemInTheBasket(alibabaBasket);

// console.log(result);

// Exercise 6 
var shopingList  = ["orange", "banana", "apple"]
let stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

let prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

if (shopingList.banana <= stock.banana) {
    shop
}


function myBill() {
 
    var res = 0;
   
    let stock = {"banana": 6, "apple": 0, "pear": 12, "orange": 32, "blueberry":1};  
    let prices = {"banana": 4, "apple": 2, "pear": 1, "orange": 1.5, "blueberry":10};
    let shoppingList = {"banana": 1, "orange": 1, "apple": 1};
   
       if (shoppingList.banana <= stock.banana) {
           res = res + shoppingList.banana * prices.banana;
       } 
   
   //  for (n in shoppingList) {                      // перебираем список наших покупок
   
   //     for (m in stock) {                          // перебираем список товаров
   
   //         if (n = m) {                            // если нашли нашу покупку в списке 
   
   //             if (stock[m] > shoppingList[n]) {   // если остаток больше нуля 
   
   //                 for (k in prices) {             // перебираем список цен на товары
   
   //                     if(n = k) {                 // если нашли цену на нашу покупку
   
   //                         res = res + (shoppingList[n] * prices [k]);  
   //                     }
   //                 }
   //             }
   //         }
   //     }
   
   //  }
    return res;
   }
   console.log(myBill());

   function myBill() {
 
    var res = 0;
   
    let stock = {"banana": 6, "apple": 0, "pear": 12, "orange": 32, "blueberry":1};  
    let prices = {"banana": 4, "apple": 2, "pear": 1, "orange": 1.5, "blueberry":10};
    let shoppingList = {"banana": 1, "orange": 1, "apple": 1};
   
    for (n in shoppingList) {                      // перебираем список наших покупок
       
       for (m in stock) {                          // перебираем список товаров
           if (n == m) {                            // если нашли нашу покупку в списке
               
               if (stock[m] > shoppingList[n]) {   // если остаток в достаточном количестве
   
                   for (k in prices) {             // перебираем список цен на товары
   
                       if(n == k) {                 // если нашли цену на нашу покупку
   
                           res = res + (shoppingList[n] * prices [k]);
   
                           // BONUS - вычитаем из stock то, что забираем по shopin gList
                           stock[m] = stock[m] - shoppingList[n];
   
                           break;  // нашли нужное значение, прерываем перебор списка prices
                       }
                       
                   }
               }
           break;      // нашли нужное значение, прерываем перебор списка stock
           }
       }
   
    }
     
   return res;
   }
   console.log(myBill());
