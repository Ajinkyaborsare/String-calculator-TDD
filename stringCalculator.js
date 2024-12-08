function add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/; 
    if (numbers.startsWith("//")) {
        const parts = numbers.split("\n", 2); 
        delimiter = new RegExp(parts[0].slice(2)); 
        numbers = parts[1]; 
    }


    return numbers
    .split(delimiter)
    .reduce((sum, n) => sum + parseInt(n), 0); 
}

module.exports = { add };