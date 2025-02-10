// 3)Write a  program to find frequency of each digit in a given integer.

function FreqCount(arr) {
    let resObj = {};
    arr.forEach((elem) => {
        if (resObj.hasOwnProperty(elem) == false) {
            resObj[elem] = 1;
        } else {
            resObj[elem]++;
        }
    });
    return resObj
}

console.log(FreqCount([1, 2, 3, 4, 5, 2, 1, 4, 5, 3]));
