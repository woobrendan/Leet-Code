const isPalindrome = (x) => {
  const numArr = String(x).split('');
  const numLength = numArr.length
  const half = Math.floor(numLength / 2);

  for (let i = 0; i < half; i++) {
    if (numArr[i] !== numArr[numLength - 1 - i]) {
      return false
    }
  }
  return true;
}

const num = 123456787754321
console.log(isPalindrome(num))