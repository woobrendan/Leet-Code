const deleteDuplicates = (head) => {
  const result = [];
  head.forEach(num => {
    if (!result.includes(num)) {
      result.push(num)
    }
  });
  return result;
}

const head = [1, 1, 2, 3, 3];
console.log(deleteDuplicates(head))