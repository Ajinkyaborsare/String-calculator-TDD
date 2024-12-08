function add(numbers) {
    if (!numbers) return 0;
    return parseInt(numbers).split(/,|\n/).reduce((sum, n) => sum + parseInt(n), 0); 
}

module.exports = { add };