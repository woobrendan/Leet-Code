const romanObj = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000
}

const romanToNum = (str) => {
  let result = 0;
  const strArr = str.split('').reverse()
  const numArr = strArr.map(letter => {
    for (const key in romanObj) {
      if (letter === key) {
        return romanObj[key]
      }
    }
  })
  for (let i = 0; i < numArr.length; i++) {
    if(numArr[i] < numArr[i - 1]) {
      result -= numArr[i] 
    } else {
      result += numArr[i]
    }
  } 
  return result
}


const val = "MDCXVI"
console.log(romanToNum(val))