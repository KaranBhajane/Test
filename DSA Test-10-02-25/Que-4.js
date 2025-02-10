function findCommonTerms(arr1, arr2) {
  let resArr = [];
  for (let i = 0; i <= arr1; i++) {
    for (let j = 0; j <= arr2; j++) {
      if (arr1[i] == arr2[j]) {
        resArr.push(arr[i]);
      }
    }
  }
  return resArr;
}
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [3, 4, 5, 6, 7];
let n = 6;
console.log(findCommonTerms(arr1, arr2));
