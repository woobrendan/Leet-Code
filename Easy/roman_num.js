const romanToInt = (str) => {
  let result = 0;
  let highest = 0;
  const romanObj = {'I': 1,'V': 5,'X': 10,'L': 50,'C': 100,'D': 500,'M': 1000}
  for (let i = str.length - 1; i >= 0; i--) {
    let num = romanObj[str.charAt(i)];
    if (num < highest) result -= num;
    else {
      result += num;
      highest = num
    }
  }
  return result;
}
console.log(romanToInt("LIV"))