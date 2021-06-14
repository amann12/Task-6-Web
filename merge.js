function merging(arr1, arr2) {
  var arr = arr1.concat(arr2);
  var newArr = [];
  for (var i of arr) {
    if (newArr.indexOf(i) === -1) {
      newArr.push(i);
    }
  }
  console.log(newArr);
}

const array1 = [1, 2, 3];
const array2 = [2, 3, 5];

merging(array1, array2);
