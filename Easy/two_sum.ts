const twoSum = (nums: number[], target: number): number[] => {
  for (let i = 0; i < nums.length; i++) {
    for (let y = i + 1; y < nums.length; y++) {
      if (nums[y] + nums[i] === target) {
        return [i, y];
      }
    }
  }
};
