function pair(arr, target) {
  let resArr = [];
  for (let i = 0; i <= arr.length - 1; i++) {
    for (j = 1; j <= arr.length - 1; j++) {
      if (arr[i] + arr[j] == target) {
        resArr.push([arr[i], arr[j]]);
      }
    }
  }
  return resArr;
}

let arr = [2, 7, 4, -1, 3, 1];
let target = 6;
console.log(pair(arr, target));
