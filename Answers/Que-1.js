// perform buble sort algorithm for
// [6,4,7,3,6,2,5,1]  using while

function SortingAlgo(arr) {
  for (let i = 0; i <= arr.length - 1; i++) {
    for (let j = i + 1; j <= arr.length - 1; j++) {
      if (arr[i] > arr[j]) {
        let temp;
        temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

let arr = [6, 4, 7, 3, 6, 2, 5, 1];
console.log(SortingAlgo(arr));
