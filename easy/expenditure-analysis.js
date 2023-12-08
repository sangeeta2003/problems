/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/


function calculateTotalSpentByCategory(transactions) {

  const totalCategory = {}
  transactions.forEach(transaction => {
    const{category,price} = transaction
  
  // if there is no category present then 
  if(!totalCategory[category]){
    totalCategory[category] = price
  }
  else{
    totalCategory[category] =+ price
  }
});
  const result = Object.keys(totalCategory).map(category =>({
    [category] :totalCategory[category]
  }))
  return result;
}

module.exports = calculateTotalSpentByCategory;

// let's take an example
const price = [
{itemname:'item1',category:'sugar',price:'2000',timestamp:'12-2-23'},
{itemname:'item2',category:'salt',price:'3000',timestamp:'21-2-23'},
{itemname:'item3',category:'oil',price:'4000',timestamp:'02-2-23'}
]
const totalPrice = calculateTotalSpentByCategory(price)
console.log("total price is:",totalPrice);
