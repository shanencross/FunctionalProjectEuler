const multiplesXandY = (x, y, upperLimit) => {
    const fullArray = Array(upperLimit - 1).fill().map((_, i) => i+1);

    // const filteredArray = fullArray.filter(element => element % x === 0 || element % y === 0)
    const sum = fullArray.reduce( (currentValue, element) => {
        console.log(currentValue);
        if (element % x === 0 || element % y === 0) {
            return currentValue + element;
        }
        return currentValue;
    }, 0);

    return sum;
}

export default multiplesXandY;

