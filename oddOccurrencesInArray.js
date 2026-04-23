function oddOccurrencesInArray(A) {
    let map = new Map()
    for (let i = 0; i < A.length; i++) {
        if (map.has(A[i])) {
            let currentCount = map.get(A[i]) + 1
            map.set(A[i], currentCount)
        } else {
            map.set(A[i], 1)
        }
    }
    //Legacy solution
    // for (let i = 0; i < A.length; i++) {
    //     if (map.get(A[i]) % 2 === 1) {
    //         return A[i]
    //     }
    // }

    //Alternative solution for saving RAM - Loop in the map
    for (let [key, value] of map) {
        if (value % 2 === 1) {
            return key
        }
    }
    return
}

let a = oddOccurrencesInArray([1, 1, 4, 5,6, 4, 5])
console.log(a)