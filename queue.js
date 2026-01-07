var MyStack = function() {
    this.q1 = []; // Queue chính
    this.q2 = []; // Queue phụ (có thể cần hoặc không tùy cách giải)
};

/** * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    // --- THỬ THÁCH CHO ÔNG ---
    // Stack là LIFO (Vào sau ra trước).
    // Queue là FIFO (Vào trước ra trước).
    // Khi push x vào, làm sao để x luôn nằm ở ĐẦU mảng q1?
    // Để lát nữa gọi pop() (là shift của queue) thì lấy được x ra ngay?
    
    // Gợi ý: 
    // 1. Lấy size cũ của q1.
    // 2. Push x vào q1.
    // 3. Loop qua đống phần tử cũ, lấy từng cái ra (shift) rồi đẩy ngược lại vào đít (push).
    
    for (let i = 0; i < this.q1.length;  i++) {
        this.q2.push(this.q1[i])
    }
    while (this.q1.length !== 0) {
        this.q1.shift()
    }
    this.q1.push(x)
    for (let i = 0; i < this.q2.length; i++) {
        this.q1.push(this.q2[i])
    }
    while (this.q2.length !== 0) {
        this.q2.shift()
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q1.shift(); // Queue lấy đầu ra
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q1[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.q1.length === 0;
};

// --- TEST ---
// --- HELPER FUNCTION (Để in kết quả cho đẹp) ---
function assert(testName, actual, expected) {
    if (actual === expected) {
        console.log(`✅ [PASS] ${testName}`);
    } else {
        console.error(`❌ [FAIL] ${testName}`);
        console.error(`   -> Expected: ${expected}`);
        console.error(`   -> Actual:   ${actual}`);
    }
}

// ==========================================
// TEST CASE 1: Hoạt động cơ bản (Basic LIFO)
// ==========================================
console.log("\n--- TEST CASE 1: Basic Push & Pop ---");
var s1 = new MyStack();
s1.push(10);
s1.push(20);
s1.push(30);

// Stack đang là: [30, 20, 10] (30 ở đỉnh)
assert("Top should be 30", s1.top(), 30);
assert("Pop 30", s1.pop(), 30);
assert("Top should be 20", s1.top(), 20);
assert("Pop 20", s1.pop(), 20);
assert("Pop 10", s1.pop(), 10);
assert("Stack should be empty", s1.empty(), true);


// ==========================================
// TEST CASE 2: Xử lý 1 phần tử (Single Element)
// ==========================================
console.log("\n--- TEST CASE 2: Single Element Edge Case ---");
var s2 = new MyStack();
s2.push(99);
assert("Empty should be false", s2.empty(), false);
assert("Top should be 99", s2.top(), 99);
assert("Pop should be 99", s2.pop(), 99);
assert("Empty should be true", s2.empty(), true);


// ==========================================
// TEST CASE 3: Logic tích lũy (Accumulation Logic) - QUAN TRỌNG
// ==========================================
// Test này kiểm tra xem ông có dọn dẹp biến tạm sạch sẽ không
console.log("\n--- TEST CASE 3: Continuous Pushing (Stress Test) ---");
var s3 = new MyStack();
s3.push(1); 
s3.push(2); 
s3.push(3); 
// Kỳ vọng stack: [3, 2, 1]

assert("Pop 3", s3.pop(), 3);
assert("Pop 2", s3.pop(), 2); 
assert("Pop 1", s3.pop(), 1); 

// Nếu logic ông sai (ví dụ quên clear mảng phụ), 
// size của stack sẽ bị phình to hơn 3 hoặc thứ tự bị lộn xộn.
if (s3.empty() === false) {
    console.error("❌ [FAIL] Stack should be empty but it still has elements! (Memory Leak?)");
}


// ==========================================
// TEST CASE 4: Thao tác hỗn hợp (Mixed Operations)
// ==========================================
console.log("\n--- TEST CASE 4: Mixed Push/Pop/Top ---");
var s4 = new MyStack();
s4.push(1); // Stack: [1]
s4.push(2); // Stack: [2, 1]
assert("Pop should be 2", s4.pop(), 2); // Stack: [1]

s4.push(3); // Stack: [3, 1]
assert("Top should be 3", s4.top(), 3);

s4.push(4); // Stack: [4, 3, 1]
assert("Pop should be 4", s4.pop(), 4); // Stack: [3, 1]
assert("Pop should be 3", s4.pop(), 3); // Stack: [1]
assert("Pop should be 1", s4.pop(), 1); // Stack: []
assert("Final check empty", s4.empty(), true);