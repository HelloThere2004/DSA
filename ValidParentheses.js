/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []; 
    

    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char)
            console.log(stack[stack.length - 1])
        } else {
            console.log("Current stack length: " + stack.length)
            console.log("Current char:" + char)
            console.log("Current peek: " + stack[stack.length - 1])
            console.log("Map value: " + map[char])
            if (stack.length === 0) {
                return false
            }

            
            if (stack[stack.length - 1] === map[char]) {
                stack.pop()
                console.log("Current stack length: " + stack.length)
            } else {
                return false
            }
        }
    }


    return stack.length === 0;
};

// --- TEST SUITE ---

// Case 1: Cơ bản nhất (Happy Path)
// Mục tiêu: Check xem stack có hoạt động với cặp đơn giản không.
console.log("Test 1:", isValid("()") === true ? "PASS" : "FAIL (Expected: true)");

// // Case 2: Sai loại ngoặc (Mismatch)
// // Mục tiêu: Check xem map mapping có đúng không.
console.log("Test 2:", isValid("(]") === false ? "PASS" : "FAIL (Expected: false)");

// // // Case 3: Nhiều cặp nối tiếp (Sequential)
// // // Mục tiêu: Check vòng lặp có xử lý trôi chảy nhiều cụm rời rạc không.
console.log("Test 3:", isValid("()[]{}") === true ? "PASS" : "FAIL (Expected: true)");

// // // Case 4: Lồng nhau phức tạp (Nested) - *Quan trọng*
// // // Mục tiêu: Check cơ chế LIFO của Stack (Vào sau ra trước).
console.log("Test 4:", isValid("{[]}") === true ? "PASS" : "FAIL (Expected: true)");

// // // Case 5: Sai thứ tự lồng nhau (Interleaved) - *Bẫy kinh điển*
// // // Mục tiêu: Check xem logic so sánh đỉnh Stack có chặt chẽ không.
console.log("Test 5:", isValid("([)]") === false ? "PASS" : "FAIL (Expected: false)");

// // // Case 6: Chỉ có mở hoặc chỉ có đóng (Edge Cases)
// // // Mục tiêu: Check logic empty stack và logic return cuối cùng.
console.log("Test 6a:", isValid("[") === false ? "PASS" : "FAIL (Expected: false)");
console.log("Test 6b:", isValid("]") === false ? "PASS" : "FAIL (Expected: false)");