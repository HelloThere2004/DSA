/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    let size = nums.length; 
    if (size === 0) return 0;
    if (size === 1) return nums[0];

    let dp = new Array(size);
    dp[0] = nums[0]; 
    dp[1] = Math.max(nums[0], nums[1]); //Find the mazimum value of the first two houses

    for (let i = 2; i < size; i++) {
        dp[i] = Math.max(nums[i] + dp[i-2], dp[i-1]); //Find the maximum value between robbing the current house + the value two houses back or not robbing the current house
    }

    return dp[size - 1];
};