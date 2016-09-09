/**
 * Created by shiva on 2016-09-09.
 */
// link to node's filesystem module to read text file
var fs = require('fs');

// open and read food list
var food = fs.readFileSync('food.txt', 'utf-8');

// print a food heading and the list of the food
console.log('FOOD');
console.log(food);

var drinks = fs.readFileSync('drinks.txt' , 'utf-8');
console.log('\nDRINKS');
console.log(drinks);