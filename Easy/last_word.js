const lengthOfLastWord = (s) => {
  let clean = s.trim().split(' ')
  return clean[clean.length - 1].length
}

const words = "luffy is still joyboy"
console.log(lengthOfLastWord(words))