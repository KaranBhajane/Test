function findMissingTerm(arr, n) {
    let resArr = []
    for (let i = 0; i <= n; i++) {
        if (!arr[i].includes(i)) {
            resArr.push(i)
        }
    }
    return resArr
}
let arr = [1, 2, 4, 5, 6]
let n = 6
console.log(findMissingTerm(arr, n));
