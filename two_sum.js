const twoSum = (nums, target) => {

    for (let i = 0; i < nums.length; i++) {
      for (let y = i + 1; y < nums.length; y++) {
        if (nums[i] + nums[y] === target) {
          return [i, y];
        }
      }
    }
}

const numbers = [14, 9, 24, 6, 11, 2, 1]
const tar = 17;

console.log(twoSum(numbers, tar))