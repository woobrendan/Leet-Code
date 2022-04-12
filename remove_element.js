const removeElement = (nums, val) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      result.push(nums[i])
    }
  }
  const delta = nums.length - result.length;
  const dashes = Array(delta).fill("-");
  const final = result.concat(dashes);
  return final;
}

// const numbers = [3, 2, 2, 3]
const numbers = [0,1,2,2,3,0,4,2]
const value = 2;

console.log(removeElement(numbers, value))