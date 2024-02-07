const findMinMax = require('./minMax-H')
test('should return min and max values by adding all the elements by leaving maximum and minimum values respectively in an array', () => {
    expect(findMinMax([2,3,5,5,1])).toBe("Minimum sum: 11\nMaximum sum: 15")
})

test('should return 0 for min and max when all the elements in an array are 0', () => {
    expect(findMinMax([0,0,0,0])).toBe("Minimum sum: 0\nMaximum sum: 0")
})

test('should return same value for min and max if all the elements in an array are same', () => {
    expect(findMinMax([2,2,2,2])).toBe("Minimum sum: 6\nMaximum sum: 6")
})

test('should return 0 if array is empty', () => {
    expect(findMinMax([])).toBe("Minimum sum: 0\nMaximum sum: 0")
})

test('should return 0 for min and max if array has a single value', () => {
    expect(findMinMax([2])).toBe("Minimum sum: 0\nMaximum sum: 0")
})