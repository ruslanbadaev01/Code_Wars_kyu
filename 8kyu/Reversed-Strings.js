function solution(str) {
  return str.split("").reverse().join("");
}

function find_glasn(string) {
  glasn = ["a", "y", "e", "ы", "o", "э", "ё", "я", "и", "ю"];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j < glasn.length; j++) {
      if (string[i] == glasn[j]) {
        count++;
      }
    }
  }
  console.log(count);
}
