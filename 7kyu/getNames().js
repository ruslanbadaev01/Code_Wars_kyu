function getNames(data) {
  console.log(
    data.map(function (item) {
      return item.name;
    })
  );
}

var data = [
  { name: "Joe", age: 20 },
  { name: "Bill", age: 30 },
  { name: "Kate", age: 23 },
];

getNames(data);
