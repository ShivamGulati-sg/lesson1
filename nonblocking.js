/**
 * Created by shiva on 2016-09-09.
 */
var fs = require('fs');

// local food list asynchronously
var food = fs.readFile('food.txt','utf-8',function(err, food){
   if(err){
       console.log('Error Found');
   } else{
       console.log(food);
       console.log('\nDRINKS');
   }
});
console.log('FOOD');


var drinks = fs.readFile('drinks.txt', 'utf-8', function(err, drinks){
   if(err) {
       console.log('err');
   }
       else{
           console.log(drinks);
   }

});