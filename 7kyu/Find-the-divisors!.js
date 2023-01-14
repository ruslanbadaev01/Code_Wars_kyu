function divisors(integer) {
  let irr = integer;
  const arr = [];
  for (var i = 2; i < integer; i++) {
    if (integer % i == 0) {
      arr.push(i);
    }
  }
  if (arr.length == 0) {
    return `${irr} is prime`;
  }
  return arr;
}
