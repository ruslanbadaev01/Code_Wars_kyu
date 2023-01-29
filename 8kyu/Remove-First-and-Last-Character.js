function removeChar(str) {
  let arr = str.split("");
  let firstArr = arr.shift();
  arr.pop();
  let res = arr.join("");
  return res;
}
