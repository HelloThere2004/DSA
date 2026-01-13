/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // 1. Create Hash Map
    let map = new Map();
    
    for (let i = 0; i < strs.length; i++) {
        let originalWord = strs[i];
        //Create a sorted key with process split -> sort -> join
        let sortedKey = strs[i].split('') 
        sortedKey.sort()
        sortedKey = sortedKey.join('')

        //If the key doesn't exist, create a new array, and then set this array with the sorted key
        if (!map.has(sortedKey)) {
            map.set(sortedKey, [])
        } 
        //If the key exists, get the create array by the key, push the original word to that array 
        map.get(sortedKey).push(originalWord)

        
    }

    // 3. Return all Array from the map 
    return Array.from(map.values());
};

// --- 🧪 TEST SUITE (DO NOT MODIFY) ---

function runTest(testName, input, expectedDesc) {
    console.log(`\n========================================`);
    console.log(`🧪 START TEST: ${testName}`);
    console.log(`📥 Input:    ${JSON.stringify(input)}`);
    console.log(`🎯 Expected: ${expectedDesc}`);
    
    try {
        const result = groupAnagrams(input);
        console.log(`📤 Your Output:`, JSON.stringify(result));
        
        // Check return type
        if (!Array.isArray(result)) {
            console.log(`❌ FAIL: Return value is not an Array!`);
        } else if (result.length === 0 && input.length > 0) {
             console.log(`⚠️  WARNING: Output is an empty array []. Check your 'push' logic!`);
        } else {
             console.log(`ℹ️  INFO: Manually compare Output with Expected above.`);
        }
    } catch (e) {
        console.log(`🔥 CRASH (Runtime Error): ${e.message}`);
        console.log(e.stack);
    }
}

// Case 1: Standard LeetCode Example
runTest(
    "Standard Case", 
    ["eat", "tea", "tan", "ate", "nat", "bat"], 
    '[["bat"], ["nat","tan"], ["ate","eat","tea"]] (Order does not matter)'
);

// Case 2: Empty String (Edge Case)
runTest(
    "Empty String", 
    [""], 
    '[[""]]'
);

// Case 3: Single Character
runTest(
    "Single Char", 
    ["a"], 
    '[["a"]]'
);

// Case 4: No Anagrams found
runTest(
    "No Anagrams", 
    ["rat", "car"], 
    '[["rat"], ["car"]]'
);

// Case 5: Duplicates (Logic check)
runTest(
    "Duplicates", 
    ["tea", "tea"], 
    '[["tea", "tea"]]'
);