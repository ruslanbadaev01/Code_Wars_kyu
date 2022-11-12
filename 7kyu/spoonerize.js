function spoonerize(words) {
  let arr = words.split("");
  arr2 = arr.splice(0, arr.indexOf(" "));
  let arr_res = arr.join("").replace(/\s/g, "").split("");
  let one = arr2[0];
  let two = arr_res[0];
  let res1 = arr2.splice(0, 1, two);
  let res2 = arr_res.splice(0, 1, one);
  console.log(arr2.join(""), arr_res.join(""));
}
spoonerize("hello world");
