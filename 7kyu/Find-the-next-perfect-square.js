function findNextSquare(sq) {
  let sqrt = Math.sqrt(sq);
  if (Number.isInteger(sqrt) == true) {
    let res = (sqrt + 1) * (sqrt + 1);
    return res;
  } else {
    return -1;
  }
}
