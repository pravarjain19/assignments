/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

const { log } = require("console");

class Categories {
  constructor(category , totalSpent){
    this.totalSpent = totalSpent
    this.category = category
  }
   getTotalSpent(){
      return this.totalSpent;
  }
}

function calculateTotalSpentByCategory(transactions) {

  let arr = [...transactions];
  let cat = arr.map((e , i)=>{
    return e['category']
    
  })

  let unique  = Array.from(new Set(cat));
  let res = [];
  let total = 0;
  for(let i = 0 ; i<unique.length ; i++){
    let ab = {  category : "" ,totalSpent : 0}
    arr.forEach((e ,j)=>{
      if(unique[i] == e['category']){
        total += e['price'];
      }
      ab.category = unique[i]
      ab.totalSpent=total
    })
    res[i] = ab;
    total=0
  }

    console.log(res);
  
  return res;
}
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 60,
    category: 'Food',
    itemName: 'Pizza',
  }
];
calculateTotalSpentByCategory(transactions);


module.exports = calculateTotalSpentByCategory;
