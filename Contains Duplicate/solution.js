function containsDuplicate(nums) {
  const hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    if (hashMap[nums[i]]) {
      return true;
    }
    hashMap[nums[i]] = nums[i];
  }

  return false;
}

console.log(containsDuplicate([1, 2, 3, 1]));
