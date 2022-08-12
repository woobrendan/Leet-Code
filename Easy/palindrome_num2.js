const isPalindrome = (num) => {
  const split = String(num).split('');
  const half = Math.floor(split.length / 2)
  let y = split.length - 1;
  for (let i = 0; i < half; i ++) {
      if (split[i] !== split [y]) return false
      y--;
  }
  return true
}

const num = 54321612345
console.log(isPalindrome(num))