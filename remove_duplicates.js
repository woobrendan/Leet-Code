const removeDuplicates = (nums) => {
  let result = [nums[0]];
  let highest = nums[0];
  for (const num of nums) {
    if (num > highest) result.push(num);
    highest = num;
  }
  const delta = nums.length - result.length;
  const dashes = Array(delta).fill("-");
  const final = result.concat(dashes);
  return final;
}

// const input = [0,0,1,1,1,2,2,3,3,4];
const input = [1, 1, 2]
//output is 2
console.log(removeDuplicates(input))