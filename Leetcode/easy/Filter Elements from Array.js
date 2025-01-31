var filter = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      result.push(arr[i]);
    }
  }
  return result;
};
//Case 1
function greaterThan10(n) {
  return n > 10;
}
const arr = [0, 10, 20, 30];

console.log('Case 1 =', filter(arr, greaterThan10));

//Case 2
function firstIndex(n, i) {
  return i === 0;
}
const arr1 = [1, 2, 3];
console.log('Case 2 = ', filter(arr1, firstIndex));

//Case 3
function plusOne(n) {
  return n + 1;
}
const arr2 = [-2, -1, 0, 1, 2];
console.log('Case 3 = ',filter(arr2, plusOne));
