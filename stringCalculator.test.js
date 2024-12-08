const { add } = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself if only one number is provided', () => {
    expect(add("5")).toBe(5);
});

test('should return the sum of two comma-separated numbers', () => {
    expect(add("1,2")).toBe(3);
});

test('should return the sum of multiple comma-separated numbers', () => {
    expect(add("1,2,3")).toBe(6);
});

test('should handle newlines as delimiters', () => {
    expect(add("1\n2,3")).toBe(6);
});

test('should support custom delimiters', () => {
    expect(add("//;\n1;2")).toBe(3);
});




