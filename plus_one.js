const plusOne = (digits) => {
  const str = digits.join('');
  console.log('str', str)

  console.log(BigInt(str))
  const nums = BigInt(digits.join('')) + BigInt(1);
  return String(nums).split('')
}

const dig = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
console.log(plusOne(dig))