var maxProduct = function(nums) {
  let res = Math.max(...nums);
  let curMax = 1, curMin = 1;

  for (let n of nums) {
      let temp = curMax * n;
      curMax = Math.max(temp, curMin * n, n);
      curMin = Math.min(temp, curMin * n, n);

      res = Math.max(res, curMax);
  }

  return res;    
};
