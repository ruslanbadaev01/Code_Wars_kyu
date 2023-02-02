function pigIt(str) {
  const splitWord = str.split(" ");
  const map1 = splitWord.map((i) => i.split(""));
  for (i = 0; i < map1.length; i++) {
    let firstLet = map1[i].shift();
    map1[i].push(firstLet + "ay");
  }
  const map2 = map1.map((i) => i.join(""));
  const result = map2.join(" ");
  return result;
}
