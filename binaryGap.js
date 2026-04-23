// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N) {
    let binary = [];

    while (N >= 1) {
        let i = N % 2;
        binary.unshift(i);
        N = Math.floor(N / 2);
    }

    let count = 0;
    let number_of_reset = 0;
    let gap = [];

    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === 1) {
            gap.unshift(count);
            count = 0;
            number_of_reset += 1;
        } else {
            count++;
        }
    }

    if (number_of_reset < 2) {
        return 0;
    }

    return Math.max(...gap);
}