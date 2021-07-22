const multiplesXandYtoLimitRecursive = (limit) => {
    return function(x) {
        return function(y) {
            let sum = 0;
            for (let i=x; i < limit; i+=x) {
                sum += i;
            }

            for (let i=y; i < limit; i+=y) {
                sum += i;
            }
            return sum;
        }
    }
}

export default multiplesXandYtoLimitRecursive;