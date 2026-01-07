/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    let carry = 0; 
    let sumBin = [];
    
    // Convert string to array
    let firstBin = [];
    let secondBin = [];
    for (let i = 0; i < a.length; i++) firstBin.push(a[i]);
    for (let i = 0; i < b.length; i++) secondBin.push(b[i]);

    //Main logic
    while (firstBin.length && secondBin.length) {
        let bit1 = firstBin.pop();
        let bit2 = secondBin.pop();

        // Case 1: 1 + 1
        if (bit1 === "1" && bit2 === "1") {
            sumBin.unshift(carry === 1 ? "1" : "0");
            carry = 1; 
        } 
        // Case 2: 0 + 0
        else if (bit1 === "0" && bit2 === "0") {
            sumBin.unshift(carry === 1 ? "1" : "0");
            carry = 0; // Reset carry
        } 
        // Case 3: 1 + 0 OR 0 + 1
        else { 
            if (carry === 1) {
                sumBin.unshift("0"); 
                carry = 1;           
            } else {
                sumBin.unshift("1"); 
                carry = 0;           
            }
        }
    }

    //Resolve the left bits
    let leftOver = firstBin.length > 0 ? firstBin : secondBin;
    
    while (leftOver.length > 0) {
        let bit = leftOver.pop();
        if (carry === 1) {
            if (bit === "1") {
                sumBin.unshift("0"); 
                carry = 1;
            } else {
                sumBin.unshift("1"); 
                carry = 0;
            }
        } else {
            sumBin.unshift(bit);
        }
    }
    

    if (carry === 1) {
        sumBin.unshift("1");
    }
    

    return sumBin.join('');
};


function test(a, b, expected) {
    const result = addBinary(a, b);
    console.log(`Input: a="${a}", b="${b}"`);
    console.log(`Expected: ${expected}`);
    console.log(`Actual:   ${result}`);
    console.log(result === expected ? "✅ PASS" : "❌ FAIL");
    console.log("-------------------");
}

test("11", "1", "100");
test("1010", "1011", "10101");
test("1111", "1", "10000");
test("0", "0", "0");