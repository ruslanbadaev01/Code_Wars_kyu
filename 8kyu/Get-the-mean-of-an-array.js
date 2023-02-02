function getAverage(marks) {
  let res = 0;
  for (i = 0; i < marks.length; i++) {
    res = res + marks[i];
  }
  let res1 = Math.floor(res / marks.length);
  return res1;
}
