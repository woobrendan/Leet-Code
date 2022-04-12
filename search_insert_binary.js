const searchInsert = (nums, target) => {
  if (!nums.includes(target)) {
    nums.push(target);
    nums.sort()
  }
  let low = 0;
  let high = nums.length - 1;
  let guess = Math.ceil((high + low) / 2)
  while (nums[guess] !== target) {
    if (nums[guess] < target) {
      low = guess;
      guess = Math.ceil((high + low) / 2)
    } else if (nums[guess] > target) {
      high = guess;
      guess = Math.ceil((high + low) / 2)
    }
  }
  return guess;
}
  

const numbers = [1, 3, 5, 6, 8, 9];
const tar = 6;
console.log(searchInsert(numbers, tar));