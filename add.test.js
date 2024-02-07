const {default: TestRunner} = require("jest-runner")
const add = require('./add')

test('add two numbers', () => {
    expect(add(4,5)).toBe(9)
})