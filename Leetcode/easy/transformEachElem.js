//Without using map

var map = function (arr, fn) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }
  return result;
};
console.log(
  map(
    [1, 2, 3],
    (fun = function plusone(n, i) {
      return n + i;
    })
  )
);
