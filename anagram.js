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

        //If the key has not existed yet, create a new array, and then set this array with the sorted key
        if (!map.has(sortedKey)) {
            map.set(sortedKey, [])
        } 
        //If the key existed, get the created array by the key, push the original word to that array 
        map.get(sortedKey).push(originalWord)

        
    }

    // 3. Return all Array from the map 
    return Array.from(map.values());
};

// --- 🧪 TEST SUITE (KHÔNG SỬA PHẦN NÀY) ---

function runTest(testName, input, expectedDesc) {
    console.log(`\n========================================`);
    console.log(`🧪 START TEST: ${testName}`);
    console.log(`📥 Input:    ${JSON.stringify(input)}`);
    console.log(`🎯 Expected: ${expectedDesc}`);
    
    try {
        const result = groupAnagrams(input);
        console.log(`📤 Your Output:`, result);
        
        // Check kiểu dữ liệu trả về
        if (!Array.isArray(result)) {
            console.log(`❌ FAIL: Kết quả trả về không phải là Array!`);
        } else if (result.length === 0 && input.length > 0) {
             console.log(`⚠️  WARNING: Output là mảng rỗng [] (Có thể lỗi ở dòng return hoặc logic thêm vào map)`);
        } else {
             console.log(`ℹ️  Hãy tự so sánh Output với Expected ở trên.`);
        }
    } catch (e) {
        console.log(`🔥 CRASH (Lỗi Code): ${e.message}`);
        console.log(e.stack);
    }
}

// Case 1: Đề bài LeetCode
runTest(
    "Standard Case", 
    ["eat", "tea", "tan", "ate", "nat", "bat"], 
    '[["bat"], ["nat","tan"], ["ate","eat","tea"]] (Thứ tự không quan trọng)'
);

// Case 2: Chuỗi rỗng (Edge case)
runTest(
    "Empty String", 
    [""], 
    '[[""]]'
);

// Case 3: Một ký tự
runTest(
    "Single Char", 
    ["a"], 
    '[["a"]]'
);

// Case 4: Không có cặp nào giống nhau
runTest(
    "No Anagrams", 
    ["rat", "car"], 
    '[["rat"], ["car"]]'
);

// Case 5: Có từ bị trùng lặp (Logic test)
runTest(
    "Duplicates", 
    ["tea", "tea"], 
    '[["tea", "tea"]]'
);