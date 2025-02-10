function secLargeNum(arr) {
    let resArr = []
    let p1 = 0;
    let p2 = 1;
    while (p1 < p2) {
        if (arr[p1] > arr[p2] || arr[p2] > arr[p1]) {
            resArr.push(arr[p1])
        }
        p1++
        p2++
    }
    return resArr;

}

console.log(secLargeNum([10, 5, 20, 25]));
