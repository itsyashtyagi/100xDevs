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


function calculeTotalSpentByCategory(transactions){
    const categoryTotalMap = {};
    transactions.forEach((transaction) => {
        const {category, price} = transaction;
        if(category in categoryTotalMap){
            categoryTotalMap[category] += price;
        } else{
            categoryTotalMap[category] = price;
        }
    });
    const result = [];
    for(const category in categoryTotalMap){
        console.log(category);
        result.push({category : category, totalSpent : categoryTotalMap[category]});
    }
    return result;
}

const transactions = [
    {
        id: 1,
        timestamp: 1656076800000,
        price: 10,
        category: 'Food',
        itemName: 'Pizza',
    },
    {
        id: 2,
        timestamp: 1656259600000,
        price: 20,
        category: 'Food',
        itemName: 'Burger',
    },
    {
        id: 3,
        timestamp: 1656019200000,
        price: 15,
        category: 'Clothing',
        itemName: 'T-Shirt',
    },
    {
        id: 4,
        timestamp: 1656364800000,
        price: 30,
        category: 'Electronics',
        itemName: 'Headphones',
    },
    {
        id: 5,
        timestamp: 1656105600000,
        price: 25,
        category: 'Clothing',
        itemName: 'Jeans',
    },
];

console.log(calculeTotalSpentByCategory(transactions));

// export default calculeTotalSpentByCategory;