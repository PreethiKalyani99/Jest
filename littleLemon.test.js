const getPrices = require('./littleLemon')
const dishData = [
    { name: "Italian pasta", price: 9.55 },
    { name: "Rice with veggies", price: 8.65 },
    { name: "Chicken with potatoes", price: 15.55 },
    { name: "Vegetarian Pizza", price: 6.45 }
]
test('should return the price including 20% tax rate if the input is true', () => {
    expect(getPrices(true,dishData)).toBe(
`Prices with 20% tax:
Dish: Italian pasta Price (incl.tax): $ 11.46
Dish: Rice with veggies Price (incl.tax): $ 10.38
Dish: Chicken with potatoes Price (incl.tax): $ 18.66
Dish: Vegetarian Pizza Price (incl.tax): $ 7.74`)
})

test('should return the price without including tax rate if the input is false', () => {
    expect(getPrices(false,dishData)).toBe(
`Prices without tax:
Dish: Italian pasta Price: $ 9.55
Dish: Rice with veggies Price: $ 8.65
Dish: Chicken with potatoes Price: $ 15.55
Dish: Vegetarian Pizza Price: $ 6.45`)
})