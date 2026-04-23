// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    if (A.length <= 1 || K === 0) {
        return A;
    }

    // Implement your solution here
    // if (A.length === K) {
    //     return A
    // }
    // for (let i = 0; i < K; i++) {
    //     let finalElement = A[A.length - 1]
    //     A = A.slice(0, A.length - 1)
    //     A.unshift(finalElement)
    // }
    // return A

    let actualRotation = K % A.length
    for (let i = 0; i <actualRotation; i++) {
        let finalElement = A.pop()
        A.unshift(finalElement)
    }
    return A
}
