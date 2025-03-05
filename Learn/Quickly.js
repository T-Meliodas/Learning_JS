let name = "Thanh";
let age = 20;
console.log(`Tôi tên là ${name}, năm nay tôi ${age} tuổi`);
// toán tử 3 ngôi

let a = 3;
let b = 4;
console.log((a + b) % 2 === 0 ? "tổng a, b là số chẵn" : "tổng a, b là số lẻ");
// arrow function
const add = (a, b) => a + b;
console.log(add(3, 4)); // Output: 7

const greet = (name) => `Xin chào, ${name}!`;
console.log(greet("Meliodas"));
// hàm không tham số
const sayHello = () => "Hello, world!";
console.log(sayHello()); // Output: Hello, world!

const isEven = (num) => (num % 2 === 0 ? "Chẵn" : "Lẻ");
console.log(isEven(10)); // Output: Chẵn
console.log(isEven(7)); // Output: Lẻ

//hàm có nhiều dòng lệnh
const multiply = (a, b) => {
  let product = a * b;
  let sum = a + b;
  return sum + product;
};
console.log(multiply(3, 5)); // Output: 23
