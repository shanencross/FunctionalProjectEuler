// this is wrong
const multiplesXandYtoLimit = (limit) => {
    return function(x) {
        return function(y) {
            const fullArray = Array(limit - 1).fill().map((_, i) => i + 1);
            const sum = fullArray.reduce((currentValue, element) => {
                if (element % x === 0 || element % y === 0) {
                    return currentValue + element;
                }
                return currentValue;
            }, 0);
            return sum;
        }
    }
}

export default multiplesXandYtoLimit;

