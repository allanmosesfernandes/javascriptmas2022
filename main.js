/* === DAY 05 === */
import products from './dataset.js'
/*
   It's the day after Halloween 🎃 and all the candy is on sale!
   
   To buy up all the candy, use map() and filter() to put all the
   candy into a `shoppingCart` array. 
   
   The new array should contain only the item and the price, like
   this: 
   
   Expected output: 
   [
       {item: "🍭", price: 2.99},
       {item: "🍫", price: 1.99}, 
       {item: "🍬", price: 0.89}
    ]
*/

// function getSaleItems(data){

// let filteredCandy = data.filter(candy => candy.type === 'sweet')
// let shoppingCart = filteredCandy.map(({item, price}) => (({item,price})))
// return shoppingCart      
// };


// console.log(getSaleItems(products))

//=== DAY 06 ===//
// Review Challenge 4: Taco Tray
// - Help our chef fill a tray with tacos! 

function getRandomNumberOfTacos() {
    /*
    Make this function return an array that contains 
    between one and ten taco emojis 🌮
    Use the following JavaScript concepts:
        - Math.random()
        - Math.floor()
        - new Array()
        - Array.fill()
    */
    let randomNumber = Math.floor(Math.random() * 11);
    let tacoArray = new Array(randomNumber).fill('🌮');
    console.log(tacoArray);
    return [new Array] // replace this empty tray array

}

getRandomNumberOfTacos()

// function putTacosOnTray() {
//     return getRandomNumberOfTacos().map(function (taco) {
//         return `<div class="taco">${taco}</div>`
//     }).join('')
// }

// document.getElementById('tray').innerHTML = putTacosOnTray()

