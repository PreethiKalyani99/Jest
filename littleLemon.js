function getPrices(includeTax, dishData){
    const taxRate = 0.2
    let str = ''
    str += includeTax ? "Prices with 20% tae:" : "Prices without tax:"
    const result = dishData.reduce((acc,cur) => {
        if(includeTax){
            const taxAmount = cur.price * taxRate
            const finalPrice = cur.price + taxAmount 
            acc += `\nDish: ${cur.name} Price (incl.tax): $ ${finalPrice.toFixed(2)}`
        }
        else{
            acc += `\nDish: ${cur.name} Price: $ ${cur.price}`
        }
        return acc
    },'')
    str += result
    return str
}
module.exports = getPrices