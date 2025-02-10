function countOcc(arr) {
    let resObj = {}
    arr.forEach(elem => {
        if (resObj.hasOwnProperty(elem) == false) {
            resObj[elem] = 1
        }
        else {
            resObj[elem]++
        }
    });
}

let arr = [4, 2, 4, 3, 2, 4, 3, 3]
console.log(countOcc(arr));
