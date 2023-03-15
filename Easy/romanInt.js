const romanToInt = (str) => {
  const arr = str.split("");
  const newArr = arr.map((letter) => {
    switch (letter) {
      case "I":
        return 1;
      case "V":
        return 5;
      case "X":
        return 10;
      case "L":
        return 50;
      case "C":
        return 100;
      case "D":
        return 500;
      case "M":
        return 1000;
      default:
        return 0;
    }
  });
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] < newArr[i + 1]) {
      newArr[i] = newArr[i + 1] - newArr[i];
      newArr.splice(i + 1, 1);
    }
  }

  return newArr.reduce((a, b) => a + b, 0);
};

/// 1000, 100, 1000, 10, 100, 1, 5
