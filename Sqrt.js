/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if (x < 1) {
        return 0
    }
    let i = 1
    while (true) {
        if (i * i > x) {
            return i - 1
        } else {
            console.log("value before increase: " + i)
            i++
            console.log("value after increase: " +i)
        }
    }
};

mySqrt(8)