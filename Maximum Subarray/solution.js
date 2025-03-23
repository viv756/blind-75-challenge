var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currSum = 0;

  for (let num of nums) {
    currSum = Math.max(currSum, 0);
    currSum += num;
    maxSum = Math.max(currSum, maxSum);
  }
  return maxSum;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));

// used kadanes algorithm, Time=O(n) space=O(1)
