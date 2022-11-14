const posOrNeg = (personName, num, isNegative) => {
    return `${personName} says ${isNegative ? num * -1 : num}`;
}

module.exports = posOrNeg;
