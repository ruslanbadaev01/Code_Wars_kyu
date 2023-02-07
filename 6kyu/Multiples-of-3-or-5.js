function solution(num) {
  var arr = [0];
  if (num > 0) {
    for (i = 0; i < num; i++) {
      if ((i != 0 && i % 5 == 0) || (i != 0 && i % 3 == 0)) {
        arr.push(i);
      }
    }
  } else {
    return 0;
  }
  return arr.reduce(function (a, b) {
    return a + b;
  });
}
