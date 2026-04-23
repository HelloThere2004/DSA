/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // Helper function: Check nếu ký tự là chữ hoặc số
    // (Dùng Regex cho gọn: /^[a-z0-9]+$/i check không phân biệt hoa thường)
    const isAlphaNumeric = (char) => /^[a-z0-9]+$/i.test(char);

    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        let charLeft = s[left];
        let charRight = s[right];
        if (!isAlphaNumeric(charLeft)) {
            left++;
            continue;
        }

        if (!isAlphaNumeric(charRight)) {
            right--;
            continue;
        }
        
        if (charLeft.toLocaleLowerCase() !== charRight.toLocaleLowerCase()) {
            return false;
        }

        
        left++;
        right--;
    }

    return true; 
};


function runTest(testName, input, expected) {
    console.log(`\n========================================`);
    console.log(`🧪 START TEST: ${testName}`);
    console.log(`📥 Input:    "${input}"`);
    console.log(`🎯 Expected: ${expected}`);
    
    try {
        const result = isPalindrome(input);
        console.log(`📤 Output:   ${result}`);
        
        if (result === expected) {
            console.log(`✅ PASS`);
        } else {
            console.log(`❌ FAIL`);
        }
    } catch (e) {
        console.log(`🔥 CRASH: ${e.message}`);
    }
}

// Case 1: Chuẩn sách giáo khoa
runTest(
    "Standard Palindrome", 
    "A man, a plan, a canal: Panama", 
    true
);

// Case 2: Không phải Palindrome
runTest(
    "Not a Palindrome", 
    "race a car", 
    false
);

// Case 3: Chuỗi rỗng (Edge Case - coi là true)
runTest(
    "Empty String", 
    " ", 
    true
);

// Case 4: Chỉ toàn ký tự đặc biệt
runTest(
    "Only Symbols", 
    ".,", 
    true
);

// Case 5: Số và chữ lẫn lộn
runTest(
    "Numbers & Letters", 
    "0P", 
    false
);