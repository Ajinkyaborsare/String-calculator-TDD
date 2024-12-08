const { add } = require('./stringCalculator');

test('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
});

test('should return the number itself if only one number is provided', () => {
    expect(add("5")).toBe(5);
});


