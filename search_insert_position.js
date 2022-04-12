const searchInsert = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i; 
  }
  nums.push(target);
  nums.sort()
  return nums.indexOf(target)
}
  

const numbers = [1, 3, 5, 6];
const tar = 7;
console.log(searchInsert(numbers, tar));