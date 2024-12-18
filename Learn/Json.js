let jsonString =
  '{"name": "John Doe", "age": 30, "city": "New York", "isStudent": false}';
let jsonObject = JSON.parse(jsonString); // JSON -> JS

console.log(jsonObject.name); // Output: John Doe
console.log(jsonObject.age); // Output: 30
console.log(jsonObject.city); // Output: New York
console.log(jsonObject.isStudent); // Output: false

let person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  isStudent: false,
};

let jsonTest = JSON.stringify(person); // JS -> JSON
console.log(jsonTest);
// Output: {"name":"John Doe","age":30,"city":"New York","isStudent":false}
