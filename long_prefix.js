const longestCommonPrefix = (str) => {
  let check = str[0].charAt(0);
  let prefix = true;
  let count = 0;
  let result = "";
  while(prefix) {
    for (let i = 0; i < str.length; i++) {
      if (str[i].charAt(count) !== check) {
        prefix = false;
        return result;
      }
    }
    result += check;
    count++;
    check = str[0].charAt(count);
  }
  return result;
}

const words = ["dog","racecar","car"];
// const words = ["flower","flow","flight"];
// const words = ["boseball", "bases", "based", "baser"]
console.log(longestCommonPrefix(words))