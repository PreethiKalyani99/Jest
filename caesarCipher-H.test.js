const caesar = require('./caesarCipher-H')

test('should return the caesar cipher for count less than 26', () => {
    expect(caesar("wwwabcxy", 18)).toBe("ooostupq")
})

test('should return the caesar cipher for count greater than 26', () => {
    expect(caesar("wwwabcxy", 45)).toBe("ppptuvqr")
})

test('should return the input as output if the input contains special characters', () => {
    expect(caesar("www.@13432(abc)*&.xy", 23)).toBe("ttt.@13432(xyz)*&.uv")
})

test('should return the input as output when count is 0', () => {
    expect(caesar("www.abc.xy", 0)).toBe("www.abc.xy")
})

test('should return the input as output when count is 26', () => {
    expect(caesar("www.abc.xy", 26)).toBe("www.abc.xy")
})

test('should return the string "count is negative" if count is less than 0', () => {
    expect(caesar("www.abc.xy", -12)).toBe('count is negative')
})