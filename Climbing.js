/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 2) {
        return n
    }
    let dp = []
    dp[1] = 1
    dp[2] = 2
    let i = 3
    while (i <= n) {
        dp[i] = dp[i - 1] + dp[i - 2]
        if (i == n) {
            return dp[i]
        } else {
            i++
        }
    }
};

//New Knowledge: Dynamic Programming means using previously computed results to build up solutions to larger problems.