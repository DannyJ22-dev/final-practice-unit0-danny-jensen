// my restaurant menu app
// first, I'm going to get the users address using input readline.sync to search nearby restaurants.
const input = require(`readline-sync`); // first skill required for this app.
let address = input.question(`What is your address? `);
console.log(address);
// determine how far user wants to search for restaurants. I'll use template literals to display the distance.
let miles = input.questionInt(`How far would you like to search for restaurants? (in miles) `);
console.log(`Showing restaurants within ${miles} miles`);

// Theoretically, I would have some way of storing the restaurants current distance away from the user, 
// and then use a while loop to display all those within the mileage entered by the user. 
// for now, I will have a predefined restaurant array that includes the restaurant name 
// along with the distance in miles in their own nested arrays.

let restaurants = [
     ["McDonalds", 3],
     ["Chick-fil-A", 5], 
     ["Chipotle", 11], 
     ["Cafe Rio", 14], 
     ["Panda Express", 18]
    ];
// for loop going through the restaurants and displaying them if they are within the user's inputed mileage.
for (let i = 0; i < restaurants.length; i ++){
    // if statement to check if the restaurant is within the mileage.
    if (restaurants[i][1] <= miles){
        console.log(`${restaurants[i][0]} is ${restaurants[i][1]} miles away`);
    }
}
// this would be where the user would select a restaurant from the array, and then the app
//would display a menu. 
