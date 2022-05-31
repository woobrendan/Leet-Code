const l1 = [9,9,9,9,9,9,9];
const l2 = [9,9,9,9];

const addTwoNums = (list1, list2) => {
  const first = Number(list1.reverse().join(''));
  const second = Number(list2.reverse().join(''))
  const combine = String(first + second).split('').reverse()
  const numified = combine.map(num => (
    Number(num)
  ))
  return numified;
}

console.log(addTwoNums(l1, l2))