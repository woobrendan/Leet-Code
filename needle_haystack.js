const strStr = (haystack, needle) => {
  const needleLength = needle.length;
  for (let i = 0; i < haystack.length; i++) {
    let duo = haystack.slice(i, i + needleLength)
    if (duo === needle) return i;
  }
  return -1;
}

// const word = "hello"
const word = "baseball"
const need = "ll";
// const need = "bba"
console.log(strStr(word, need));