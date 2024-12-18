let arr1 = [
  {
    id: 123,
    name: "thanh1",
    age: 19,
  },
  { id: 124, name: "thanh2", age: 17 },
  { id: 125, name: "thanh3", age: 18 },
  { id: 126, name: "thanh4", age: 19 },
];
for (let key in arr1) {
  // console.log(key);
  console.log(arr1[key]);
}
for (let index of arr1) {
  console.log(arr1[index]); //not use with object
}
let arr2 = "thanh";
for (let index of arr2) {
  console.log(index);
}
let arr3 = ["thanh", 123, 19];
for (let index2 of arr3) {
  console.log(index2);
}
for (let value of Object.values(arr1)) {
  // can change keys in values(try to know)
  console.log(value);
}
