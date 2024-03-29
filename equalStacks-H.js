function calculateTotal(arr) {
    let total = arr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    return total;
}

function equalStacks(h1, h2, h3) {
    if(!Array.isArray(h1) || !Array.isArray(h2) || !Array.isArray(h3)){
        return undefined
    }
    let sum1 = calculateTotal(h1);
    let sum2 = calculateTotal(h2);
    let sum3 = calculateTotal(h3);

    if (sum1 === sum2 && sum2 === sum3) {
        return sum1;
    }

    while (!(sum1 === sum2 && sum2 === sum3)) {
        let minimum = Math.min(sum1, sum2, sum3);
        while (sum1 > minimum) {
            sum1 -= h1.shift();
        }
        while (sum2 > minimum) {
            sum2 -= h2.shift();
        }
        while (sum3 > minimum) {
            sum3 -= h3.shift()
        }
    }
    return sum1;
}

module.exports = {
    calculateTotal,
    equalStacks
}
