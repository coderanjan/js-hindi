const myNums = [1,2,3]

// const myTotal = myNums.reduce(function(acc,curval){
//     console.log(`acc: ${acc} and currval : ${curval}`);
    
//     return acc + curval
// },3)

const myTotal = myNums.reduce((acc,curr)=>acc+curr,0)

console.log((myTotal));

const shoppingcart=[
    {
        itemName:"js course",
        price:2999    
    },
    {
        itemName:"mobile dev course",
        price:5999
    },{
        itemName:"data scientists course",
        price:12999
    }
]

const priceToPay=shoppingcart.reduce((acc,item)=>acc +item.price,0)

console.log(priceToPay);

