var longestMonotonicSubarray = function (nums) {
  if (nums.length === 0) return 0;

  let inc = 1,
    dec = 1,
    maxLen = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      inc += 1;
      dec = 1; // сбрасываем убывающий
    } else if (nums[i] < nums[i - 1]) {
      dec += 1;
      inc = 1; // сбрасываем возрастающий
    } else {
      inc = dec = 1; // если элементы равны, начинаем заново
    }
    maxLen = Math.max(maxLen, inc, dec);
  }

  return maxLen;
};
