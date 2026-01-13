/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map()
    for (let i = 0; i < nums.length; i++) {
        let neededNumber = target - nums[i] 
        if (map.has(neededNumber)) {
            return [map.get(neededNumber), i]
        }
        
        map.set(nums[i], i)
    }
};