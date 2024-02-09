function calculatePrice(isTaxIncluded,taxRate, dishesInfo){
    const taxAmount = isTaxIncluded ? taxRate : 0
    return dishesInfo.map(dish => {
        const dishPrice = dish.price + dish.price * taxAmount
        return {
            name: dish.name,
            price: dishPrice
        }
    })
}

function getPrices(isTaxIncluded, dishesInfo){
    const taxRate = 0.2
    const calculatedDishPrices = calculatePrice(isTaxIncluded, taxRate, dishesInfo)
    const header =  isTaxIncluded ? "Prices with 20% tax:" : "Prices without tax:"
    const includedTaxText = isTaxIncluded ? '(incl.tax)' : ''
    return calculatedDishPrices.reduce((acc, cur) => {
        acc += `\nDish: ${cur.name} Price ${includedTaxText}: $ ${cur.price}`
        return acc
    },header)
}


const dishesInfo = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 }
]
console.log(getPrices(true, dishesInfo))
console.log('\n')
console.log(getPrices(false,dishesInfo))