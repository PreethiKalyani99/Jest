const {calculateTotal, equalStacks} = require('./equalStacks-H')

describe('calculateTotal', () => {
    test('should return the sum of the elements in array', () => {
      expect(calculateTotal([1, 2, 3])).toBe(6)
    })
  
    test('should return 0 when the array is empty', () => {
      expect(calculateTotal([])).toBe(0)
    })
})

describe('equalStacks', () => {
    test('should return the minimum equal stacks', () => {
      expect(equalStacks([1, 1, 1, 1], [1,1,1,5], [1, 3, 1])).toBe(4)
    })

    test('should return 0 when the arrays are empty', () => {
        expect(equalStacks([], [], [])).toBe(0)
    })

    test('should return undefined when the input is not an array', () => {
        expect(equalStacks(0, 1, 'akjsld')).toBe(undefined)
    })
})
